/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://themcaguide.com",
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
};
