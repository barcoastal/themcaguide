import Link from "next/link";
import { getAllArticles } from "@/lib/content";

export default function LatestArticles() {
  const articles = getAllArticles("article").slice(0, 6);
  if (articles.length === 0) return null;

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Latest Articles</h2>
          <Link href="/articles" className="text-blue-700 hover:underline font-medium">View all →</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((a) => (
            <Link key={a.slug} href={`/articles/${a.slug}`} className="block bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">{a.frontmatter.title}</h3>
              <p className="text-sm text-gray-500 line-clamp-2">{a.frontmatter.description}</p>
              <p className="text-xs text-gray-400 mt-3">{a.readingTime}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
