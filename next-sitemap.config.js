/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://themcaguide.com",
  outDir: "out",
  generateRobotsTxt: true,
  trailingSlash: false,
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/articles/test-article", "/icon.png", "/icon"],
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "Anthropic-AI", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
    ],
    additionalSitemaps: [],
  },
  transform: async (config, path) => {
    // Homepage: highest priority
    if (path === "/") {
      return { loc: path, changefreq: "daily", priority: 1.0, lastmod: new Date().toISOString() };
    }
    // Pillar guides
    if (path.startsWith("/guides/")) {
      return { loc: path, changefreq: "weekly", priority: 0.9, lastmod: new Date().toISOString() };
    }
    // Category hubs (blog / step / mca-laws-by-state hub / tools index / templates index)
    if (
      path === "/blog" ||
      path === "/articles" ||
      path === "/guides" ||
      path === "/tools" ||
      path === "/templates" ||
      path === "/mca-laws-by-state" ||
      path === "/glossary" ||
      path.match(/^\/blog\/[^/]+$/) ||
      path.match(/^\/step\/[^/]+$/)
    ) {
      return { loc: path, changefreq: "weekly", priority: 0.85, lastmod: new Date().toISOString() };
    }
    // Tools (individual calculators)
    if (path.startsWith("/tools/")) {
      return { loc: path, changefreq: "monthly", priority: 0.8, lastmod: new Date().toISOString() };
    }
    // Articles
    if (path.startsWith("/articles/")) {
      // State law pages lower priority than core articles
      if (path.startsWith("/articles/mca-laws-")) {
        return { loc: path, changefreq: "monthly", priority: 0.6, lastmod: new Date().toISOString() };
      }
      return { loc: path, changefreq: "weekly", priority: 0.8, lastmod: new Date().toISOString() };
    }
    // Template pages
    if (path.startsWith("/templates/")) {
      return { loc: path, changefreq: "monthly", priority: 0.7, lastmod: new Date().toISOString() };
    }
    // Legal/static
    if (
      path === "/about" ||
      path === "/contact" ||
      path === "/privacy" ||
      path === "/how-we-make-money" ||
      path === "/editorial-policy"
    ) {
      return { loc: path, changefreq: "yearly", priority: 0.5, lastmod: new Date().toISOString() };
    }
    return { loc: path, changefreq: "weekly", priority: 0.7, lastmod: new Date().toISOString() };
  },
};
