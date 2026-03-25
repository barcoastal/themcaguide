import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { Article, ArticleFrontmatter } from "./types";

const contentDir = path.join(process.cwd(), "content");

function getContentDir(type: "guide" | "article"): string {
  return path.join(contentDir, type === "guide" ? "guides" : "articles");
}

export function getArticleBySlug(
  slug: string,
  type: "guide" | "article"
): Article | null {
  const dir = getContentDir(type);
  const filePath = path.join(dir, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    slug,
    frontmatter: data as ArticleFrontmatter,
    content,
    readingTime: readingTime(content).text,
    type,
  };
}

export function getAllArticles(type: "guide" | "article"): Article[] {
  const dir = getContentDir(type);

  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));

  return files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      return getArticleBySlug(slug, type);
    })
    .filter((a): a is Article => a !== null)
    .sort(
      (a, b) =>
        new Date(b.frontmatter.publishedAt).getTime() -
        new Date(a.frontmatter.publishedAt).getTime()
    );
}

export function getArticlesByPillar(pillarSlug: string): Article[] {
  return getAllArticles("article").filter(
    (a) => a.frontmatter.pillar === pillarSlug
  );
}

export function getArticlesByCategory(category: string): Article[] {
  return getAllArticles("article").filter(
    (a) => a.frontmatter.category === category
  );
}
