import Link from "next/link";
import { Article } from "@/lib/types";

export default function RelatedArticles({ articles }: { articles: Article[] }) {
  if (articles.length === 0) return null;

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/${article.type === "guide" ? "guides" : "articles"}/${article.slug}`}
            className="block bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold text-gray-900 mb-2">{article.frontmatter.title}</h3>
            <p className="text-sm text-gray-500 line-clamp-2">{article.frontmatter.description}</p>
            <p className="text-xs text-gray-400 mt-3">{article.readingTime}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
