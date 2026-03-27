interface Env {
  GITHUB_TOKEN: string;
  ACCESS_TOKEN: string;
  REPO_OWNER: string;
  REPO_NAME: string;
  BRANCH: string;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .substring(0, 80);
}

function htmlToSimpleMarkdown(html: string): string {
  return html
    .replace(/<h1[^>]*>(.*?)<\/h1>/gi, "\n<h2 id=\"$1\">$1</h2>\n")
    .replace(/<h2[^>]*>(.*?)<\/h2>/gi, "\n<h2 id=\"$1\">$1</h2>\n")
    .replace(/<h3[^>]*>(.*?)<\/h3>/gi, "\n<h3 id=\"$1\">$1</h3>\n")
    .replace(/<h4[^>]*>(.*?)<\/h4>/gi, "\n#### $1\n")
    .replace(/<p[^>]*>(.*?)<\/p>/gi, "\n$1\n")
    .replace(/<strong>(.*?)<\/strong>/gi, "**$1**")
    .replace(/<b>(.*?)<\/b>/gi, "**$1**")
    .replace(/<em>(.*?)<\/em>/gi, "*$1*")
    .replace(/<i>(.*?)<\/i>/gi, "*$1*")
    .replace(/<a\s+href="([^"]*)"[^>]*>(.*?)<\/a>/gi, "[$2]($1)")
    .replace(/<ul[^>]*>(.*?)<\/ul>/gis, "$1")
    .replace(/<ol[^>]*>(.*?)<\/ol>/gis, "$1")
    .replace(/<li[^>]*>(.*?)<\/li>/gi, "- $1")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<blockquote[^>]*>(.*?)<\/blockquote>/gis, "\n> $1\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/ — /g, ". ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function detectCategory(title: string, content: string): string {
  const text = (title + " " + content).toLowerCase();
  if (text.includes("debt relief") || text.includes("settlement") || text.includes("default") || text.includes("get out") || text.includes("stuck")) return "getting-out";
  if (text.includes("alternative") || text.includes("before") || text.includes("cash flow") || text.includes("grant") || text.includes("sba loan")) return "before-mca";
  if (text.includes("choose") || text.includes("best mca") || text.includes("red flag") || text.includes("contract") || text.includes("negotiate terms")) return "choosing-lender";
  if (text.includes("law") || text.includes("regulation") || text.includes("legal") || text.includes("attorney")) return "legal";
  return "mca-basics";
}

function detectPillar(category: string): string {
  const map: Record<string, string> = {
    "getting-out": "mca-debt-settlement",
    "before-mca": "mca-alternatives",
    "choosing-lender": "what-is-mca",
    "legal": "what-is-mca",
    "mca-basics": "what-is-mca",
  };
  return map[category] || "what-is-mca";
}

function buildMdx(slug: string, title: string, description: string, content: string, tags: string[]): string {
  const category = detectCategory(title, content);
  const pillar = detectPillar(category);
  const today = new Date().toISOString().split("T")[0];

  const frontmatter = [
    "---",
    `title: "${title.replace(/"/g, '\\"')}"`,
    `description: "${description.replace(/"/g, '\\"')}"`,
    `publishedAt: "${today}"`,
    `author: "Bar Alezrah"`,
    `pillar: "${pillar}"`,
    `category: "${category}"`,
    `heroImage: "/images/articles/cashflow.png"`,
    tags.length > 0 ? `tags: [${tags.map(t => `"${t}"`).join(", ")}]` : `tags: ["mca"]`,
    "---",
  ].join("\n");

  return frontmatter + "\n\n" + content;
}

async function commitToGithub(env: Env, path: string, content: string, message: string): Promise<Response> {
  const encodedContent = btoa(unescape(encodeURIComponent(content)));
  const apiBase = `https://api.github.com/repos/${env.REPO_OWNER}/${env.REPO_NAME}/contents/${path}`;
  const headers = {
    Authorization: `token ${env.GITHUB_TOKEN}`,
    "User-Agent": "MCAGuide-Webhook",
    "Content-Type": "application/json",
  };

  // Check if file exists
  const checkRes = await fetch(`${apiBase}?ref=${env.BRANCH}`, { headers });
  const body: Record<string, unknown> = {
    message,
    content: encodedContent,
    branch: env.BRANCH,
  };

  if (checkRes.ok) {
    const existing = await checkRes.json() as { sha: string };
    body.sha = existing.sha;
  }

  return fetch(apiBase, {
    method: "PUT",
    headers,
    body: JSON.stringify(body),
  });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    // CORS
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Access-Token",
        },
      });
    }

    if (request.method !== "POST") {
      return new Response(JSON.stringify({ error: "POST only" }), { status: 405 });
    }

    // Auth check
    const token = request.headers.get("Authorization")?.replace("Bearer ", "")
      || request.headers.get("X-Access-Token")
      || new URL(request.url).searchParams.get("token");

    if (!token || token !== env.ACCESS_TOKEN) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    }

    try {
      const payload = await request.json() as Record<string, unknown>;

      // Log the raw payload for debugging
      console.log("Incoming webhook payload:", JSON.stringify(payload, null, 2));

      // Extract fields flexibly (different platforms use different field names)
      const title = (payload.title || payload.name || payload.headline || "") as string;
      const rawContent = (payload.content || payload.body || payload.html || payload.markdown || payload.text || "") as string;
      const description = (payload.description || payload.excerpt || payload.summary || payload.meta_description || "") as string;
      const slug = (payload.slug || payload.url_slug || slugify(title)) as string;
      const tags = (payload.tags || payload.keywords || []) as string[];
      const status = (payload.status || "published") as string;

      if (!title) {
        return new Response(JSON.stringify({ error: "title is required", received_fields: Object.keys(payload) }), { status: 400 });
      }

      if (!rawContent) {
        return new Response(JSON.stringify({ error: "content/body/html is required", received_fields: Object.keys(payload) }), { status: 400 });
      }

      // Skip if not published
      if (status !== "published" && status !== "publish" && status !== "active") {
        return new Response(JSON.stringify({ message: "Skipped. Status is not published.", status }), { status: 200 });
      }

      // Convert HTML to markdown if needed
      const isHtml = rawContent.includes("<") && rawContent.includes(">");
      const content = isHtml ? htmlToSimpleMarkdown(rawContent) : rawContent;

      // Auto-generate description if empty
      const finalDescription = description || content.substring(0, 155).replace(/\n/g, " ").trim() + "...";

      // Build MDX
      const mdxContent = buildMdx(slug, title, finalDescription, content, Array.isArray(tags) ? tags : []);

      // Commit to GitHub
      const path = `content/articles/${slug}.mdx`;
      const commitMessage = `content: add article "${title}" (via Outrank webhook)`;
      const ghRes = await commitToGithub(env, path, mdxContent, commitMessage);

      if (!ghRes.ok) {
        const err = await ghRes.text();
        return new Response(JSON.stringify({ error: "GitHub commit failed", details: err }), { status: 500 });
      }

      return new Response(JSON.stringify({
        success: true,
        message: "Article published. Site will rebuild automatically.",
        slug,
        path,
        url: `https://themcaguide.com/articles/${slug}`,
      }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });

    } catch (err) {
      return new Response(JSON.stringify({ error: "Invalid JSON payload", details: String(err) }), { status: 400 });
    }
  },
};
