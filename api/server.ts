import express from "express";
import { createArticle, listArticles, deleteArticle, ArticleData } from "./create-article";

const app = express();
const PORT = process.env.PORT || 3001;
const API_KEY = process.env.API_KEY || "mca-guide-api-key-change-me";

app.use(express.json());

// Auth middleware
app.use((req, res, next) => {
  const key = req.headers["x-api-key"] || req.query.apiKey;
  if (key !== API_KEY) {
    return res.status(401).json({ error: "Invalid API key" });
  }
  next();
});

// Create or update article
app.post("/api/articles", async (req, res) => {
  const data = req.body as ArticleData;

  if (!data.slug || !data.title || !data.content) {
    return res.status(400).json({ error: "slug, title, and content are required" });
  }

  const result = await createArticle(data);
  if (result.success) {
    res.json({ success: true, url: result.url, message: "Article created. Cloudflare will rebuild automatically." });
  } else {
    res.status(500).json(result);
  }
});

// List all articles
app.get("/api/articles", async (req, res) => {
  const articles = await listArticles();
  res.json({ articles });
});

// Delete article
app.delete("/api/articles/:slug", async (req, res) => {
  const type = (req.query.type as "article" | "guide") || "article";
  const result = await deleteArticle(req.params.slug, type);
  if (result.success) {
    res.json({ success: true, message: "Article deleted. Cloudflare will rebuild automatically." });
  } else {
    res.status(500).json(result);
  }
});

app.listen(PORT, () => {
  console.log(`MCA Guide API running on port ${PORT}`);
  console.log(`Create: POST /api/articles`);
  console.log(`List:   GET /api/articles`);
  console.log(`Delete: DELETE /api/articles/:slug`);
});
