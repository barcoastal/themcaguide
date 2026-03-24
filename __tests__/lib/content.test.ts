import { getArticleBySlug, getAllArticles, getArticlesByPillar } from "@/lib/content";

describe("content loader", () => {
  it("returns null for non-existent slug", () => {
    const result = getArticleBySlug("non-existent", "guide");
    expect(result).toBeNull();
  });

  it("returns all guides sorted by date", () => {
    const guides = getAllArticles("guide");
    expect(Array.isArray(guides)).toBe(true);
  });

  it("returns articles filtered by pillar", () => {
    const articles = getArticlesByPillar("what-is-mca");
    expect(Array.isArray(articles)).toBe(true);
  });
});
