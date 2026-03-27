const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const REPO_OWNER = "barcoastal";
const REPO_NAME = "themcaguide";
const BRANCH = "main";

interface ArticleData {
  slug: string;
  title: string;
  description: string;
  author?: string;
  pillar?: string;
  category?: "before-mca" | "choosing-lender" | "getting-out" | "mca-basics" | "legal";
  heroImage?: string;
  tags?: string[];
  content: string;
  type?: "article" | "guide";
}

function buildMdx(data: ArticleData): string {
  const frontmatter = [
    "---",
    `title: "${data.title}"`,
    `description: "${data.description}"`,
    `publishedAt: "${new Date().toISOString().split("T")[0]}"`,
    `author: "${data.author || "Bar Alezrah"}"`,
  ];

  if (data.pillar) frontmatter.push(`pillar: "${data.pillar}"`);
  if (data.category) frontmatter.push(`category: "${data.category}"`);
  if (data.heroImage) frontmatter.push(`heroImage: "${data.heroImage}"`);
  if (data.tags && data.tags.length > 0) {
    frontmatter.push(`tags: [${data.tags.map(t => `"${t}"`).join(", ")}]`);
  }

  frontmatter.push("---");

  return frontmatter.join("\n") + "\n\n" + data.content;
}

async function createArticle(data: ArticleData): Promise<{ success: boolean; url?: string; error?: string }> {
  if (!GITHUB_TOKEN) {
    return { success: false, error: "GITHUB_TOKEN not set" };
  }

  const folder = data.type === "guide" ? "guides" : "articles";
  const path = `content/${folder}/${data.slug}.mdx`;
  const mdxContent = buildMdx(data);
  const encodedContent = Buffer.from(mdxContent).toString("base64");

  // Check if file already exists
  const checkRes = await fetch(
    `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${path}?ref=${BRANCH}`,
    { headers: { Authorization: `token ${GITHUB_TOKEN}`, "User-Agent": "MCAGuide-API" } }
  );

  const body: Record<string, unknown> = {
    message: `content: add article "${data.title}"`,
    content: encodedContent,
    branch: BRANCH,
  };

  if (checkRes.ok) {
    const existing = await checkRes.json() as { sha: string };
    body.sha = existing.sha;
    body.message = `content: update article "${data.title}"`;
  }

  const res = await fetch(
    `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${path}`,
    {
      method: "PUT",
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        "User-Agent": "MCAGuide-API",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  );

  if (!res.ok) {
    const err = await res.text();
    return { success: false, error: `GitHub API error: ${res.status} ${err}` };
  }

  const result = await res.json() as { content: { html_url: string } };
  return { success: true, url: result.content.html_url };
}

async function listArticles(): Promise<{ name: string; path: string }[]> {
  if (!GITHUB_TOKEN) return [];

  const articles: { name: string; path: string }[] = [];

  for (const folder of ["content/articles", "content/guides"]) {
    const res = await fetch(
      `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${folder}?ref=${BRANCH}`,
      { headers: { Authorization: `token ${GITHUB_TOKEN}`, "User-Agent": "MCAGuide-API" } }
    );
    if (res.ok) {
      const files = await res.json() as { name: string; path: string }[];
      articles.push(...files.filter(f => f.name.endsWith(".mdx")));
    }
  }

  return articles;
}

async function deleteArticle(slug: string, type: "article" | "guide" = "article"): Promise<{ success: boolean; error?: string }> {
  if (!GITHUB_TOKEN) return { success: false, error: "GITHUB_TOKEN not set" };

  const folder = type === "guide" ? "guides" : "articles";
  const path = `content/${folder}/${slug}.mdx`;

  const checkRes = await fetch(
    `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${path}?ref=${BRANCH}`,
    { headers: { Authorization: `token ${GITHUB_TOKEN}`, "User-Agent": "MCAGuide-API" } }
  );

  if (!checkRes.ok) return { success: false, error: "Article not found" };

  const existing = await checkRes.json() as { sha: string };

  const res = await fetch(
    `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${path}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        "User-Agent": "MCAGuide-API",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: `content: delete article "${slug}"`,
        sha: existing.sha,
        branch: BRANCH,
      }),
    }
  );

  if (!res.ok) {
    const err = await res.text();
    return { success: false, error: `GitHub API error: ${res.status} ${err}` };
  }

  return { success: true };
}

export { createArticle, listArticles, deleteArticle, buildMdx };
export type { ArticleData };
