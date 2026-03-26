import { Metadata } from "next";
import Link from "next/link";
import { getAllArticles } from "@/lib/content";
import { ShieldCheck, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Before You Take an MCA. Better Options",
  description: "Explore cheaper, safer financing options before taking a merchant cash advance. Guides on cash flow, grants, SBA loans, and more.",
};

export default function BeforeMcaPage() {
  const articles = getAllArticles("article").filter(a => a.frontmatter.category === "before-mca");

  return (
    <div>
      <section className="bg-gradient-to-br from-green-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <ShieldCheck className="w-4 h-4" /> Before You Take an MCA
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            You Have Better Options
          </h1>
          <p className="mt-6 text-xl text-gray-500 max-w-2xl">
            Before signing an MCA, try these alternatives. They cost less, they're safer, and they won't put your business at risk.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article) => (
            <Link key={article.slug} href={`/articles/${article.slug}`} className="group block bg-white border-2 border-green-100 rounded-2xl overflow-hidden hover:shadow-lg hover:border-green-300 transition-all">
              {article.frontmatter.heroImage && (
                <div className="bg-gray-50">
                  <img src={article.frontmatter.heroImage} alt={article.frontmatter.title} className="w-full h-48 object-cover" />
                </div>
              )}
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 group-hover:text-green-700 transition-colors">{article.frontmatter.title}</h2>
                <p className="text-sm text-gray-500 mt-2 line-clamp-2">{article.frontmatter.description}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-xs text-gray-400">{article.readingTime}</span>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-green-600">Read <ArrowRight className="w-4 h-4" /></span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
