import { Metadata } from "next";
import Link from "next/link";
import { getAllArticles } from "@/lib/content";
import { ArrowRight } from "lucide-react";
import EditorialHero from "@/components/layout/EditorialHero";

export const metadata: Metadata = {
  title: "Getting Out of MCA Debt. Your Options Explained",
  description: "Stuck in MCA debt? Here's every option: negotiation, settlement, legal help, and how to protect your business.",
  alternates: {
    canonical: "https://themcaguide.com/blog/getting-out",
  },
};

export default function GettingOutPage() {
  const articles = getAllArticles("article").filter(a => a.frontmatter.category === "getting-out");

  return (
    <div>
      <EditorialHero
        kicker="Getting Out of MCA Debt"
        title="You Have Options. Let's Find Yours."
        dek="Take a deep breath. MCA debt is stressful, but it's fixable. Here are your options, from negotiation to settlement to legal help."
        align="center"
      />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article) => (
            <Link key={article.slug} href={`/articles/${article.slug}`} className="group block bg-white border-2 border-red-100 rounded-2xl overflow-hidden hover:shadow-lg hover:border-red-300 transition-all">
              {article.frontmatter.heroImage && (
                <div className="bg-gray-50">
                  <img src={article.frontmatter.heroImage} alt={article.frontmatter.title} className="w-full h-48 object-cover" />
                </div>
              )}
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 group-hover:text-red-700 transition-colors">{article.frontmatter.title}</h2>
                <p className="text-sm text-gray-500 mt-2 line-clamp-2">{article.frontmatter.description}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-xs text-gray-400">{article.readingTime}</span>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-red-600">Read <ArrowRight className="w-4 h-4" /></span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
