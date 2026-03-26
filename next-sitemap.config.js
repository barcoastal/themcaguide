/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://themcaguide.com",
  generateRobotsTxt: true,
  trailingSlash: false,
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
    ],
  },
};
