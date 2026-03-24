import { Metadata } from "next";
import Link from "next/link";
import { getAllArticles } from "@/lib/content";

export const metadata: Metadata = {
  title: "Articles",
  description: "Articles on MCA loans, debt settlement, financing alternatives, and small business finance.",
};

export default function ArticlesPage() {
  const articles = getAllArticles("article");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">Articles</h1>
      <p className="text-lg text-gray-500 mb-8">
        Expert insights on merchant cash advances and small business financing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/articles/${article.slug}`}
            className="block bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow"
          >
            <h2 className="font-semibold text-gray-900 mb-2">{article.frontmatter.title}</h2>
            <p className="text-sm text-gray-500 line-clamp-2">{article.frontmatter.description}</p>
            <p className="text-xs text-gray-400 mt-3">{article.readingTime}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
