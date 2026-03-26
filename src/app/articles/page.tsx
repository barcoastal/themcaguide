import { Metadata } from "next";
import Link from "next/link";
import { getAllArticles } from "@/lib/content";
import { ShieldCheck, Search, DoorOpen, BookOpen, Scale, LifeBuoy } from "lucide-react";

export const metadata: Metadata = {
  title: "Articles",
  description: "Simple, clear guides about MCA loans organized by what you need right now. whether you're exploring options, choosing a lender, or getting out of debt.",
};

const categories = [
  {
    id: "before-mca",
    title: "Before You Take an MCA",
    subtitle: "Fix your cash flow first. you might not need one",
    icon: ShieldCheck,
    iconColor: "text-green-600",
    iconBg: "bg-green-100",
    borderColor: "border-green-200",
  },
  {
    id: "choosing-lender",
    title: "If You Choose an MCA",
    subtitle: "How to pick the best deal and protect yourself",
    icon: Search,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-100",
    borderColor: "border-blue-200",
  },
  {
    id: "getting-out",
    title: "Getting Out of MCA Debt",
    subtitle: "Settlement, negotiation, and legal options",
    icon: DoorOpen,
    iconColor: "text-red-600",
    iconBg: "bg-red-100",
    borderColor: "border-red-200",
  },
  {
    id: "mca-basics",
    title: "MCA Basics",
    subtitle: "Understanding how merchant cash advances work",
    icon: BookOpen,
    iconColor: "text-purple-600",
    iconBg: "bg-purple-100",
    borderColor: "border-purple-200",
  },
  {
    id: "legal",
    title: "Legal & Regulations",
    subtitle: "Know your rights and the legal landscape",
    icon: Scale,
    iconColor: "text-amber-600",
    iconBg: "bg-amber-100",
    borderColor: "border-amber-200",
  },
];

export default function ArticlesPage() {
  const allArticles = getAllArticles("article");

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Learn About MCAs</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          Clear, simple articles organized by what you need right now. Pick your situation below.
        </p>
      </div>

      {/* Blog Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <Link href="/blog/before-mca" className="group block bg-green-50 border-2 border-green-200 rounded-2xl p-6 hover:shadow-lg hover:border-green-400 transition-all">
          <ShieldCheck className="w-8 h-8 text-green-600 mb-3" />
          <h2 className="text-xl font-bold text-gray-900 group-hover:text-green-700">Before You Take an MCA</h2>
          <p className="text-sm text-gray-500 mt-1">Better options for your business</p>
        </Link>
        <Link href="/blog/choosing-mca" className="group block bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 hover:shadow-lg hover:border-blue-400 transition-all">
          <Search className="w-8 h-8 text-blue-600 mb-3" />
          <h2 className="text-xl font-bold text-gray-900 group-hover:text-blue-700">Choosing an MCA</h2>
          <p className="text-sm text-gray-500 mt-1">Pick the best deal, avoid traps</p>
        </Link>
        <Link href="/blog/getting-out" className="group block bg-red-50 border-2 border-red-200 rounded-2xl p-6 hover:shadow-lg hover:border-red-400 transition-all">
          <LifeBuoy className="w-8 h-8 text-red-600 mb-3" />
          <h2 className="text-xl font-bold text-gray-900 group-hover:text-red-700">Getting Out of MCA Debt</h2>
          <p className="text-sm text-gray-500 mt-1">Settlement, negotiation, recovery</p>
        </Link>
      </div>

      {categories.map((cat) => {
        const articles = allArticles.filter(
          (a) => a.frontmatter.category === cat.id
        );
        if (articles.length === 0) return null;

        const Icon = cat.icon;

        return (
          <section key={cat.id} className="mb-14">
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-12 h-12 rounded-xl ${cat.iconBg} flex items-center justify-center`}>
                <Icon className={`w-6 h-6 ${cat.iconColor}`} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{cat.title}</h2>
                <p className="text-sm text-gray-500">{cat.subtitle}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/articles/${article.slug}`}
                  className={`group block bg-white border-2 ${cat.borderColor} rounded-2xl p-5 hover:shadow-lg transition-all`}
                >
                  {article.frontmatter.heroImage && (
                    <div className="rounded-xl overflow-hidden mb-3 bg-gray-50">
                      <img src={article.frontmatter.heroImage} alt={article.frontmatter.title} className="w-full h-36 object-cover" />
                    </div>
                  )}
                  <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                    {article.frontmatter.title}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-2">{article.frontmatter.description}</p>
                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
                    <span className="text-xs text-gray-400">{article.readingTime}</span>
                    <span className="text-xs font-medium text-blue-600 group-hover:underline">Read →</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        );
      })}

      {/* Uncategorized articles fallback */}
      {(() => {
        const uncategorized = allArticles.filter(
          (a) => !a.frontmatter.category
        );
        if (uncategorized.length === 0) return null;
        return (
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">More Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {uncategorized.map((article) => (
                <Link
                  key={article.slug}
                  href={`/articles/${article.slug}`}
                  className="group block bg-white border-2 border-gray-200 rounded-2xl p-5 hover:shadow-lg transition-all"
                >
                  {article.frontmatter.heroImage && (
                    <div className="rounded-xl overflow-hidden mb-3 bg-gray-50">
                      <img src={article.frontmatter.heroImage} alt={article.frontmatter.title} className="w-full h-36 object-cover" />
                    </div>
                  )}
                  <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                    {article.frontmatter.title}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-2">{article.frontmatter.description}</p>
                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
                    <span className="text-xs text-gray-400">{article.readingTime}</span>
                    <span className="text-xs font-medium text-blue-600 group-hover:underline">Read →</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        );
      })()}
    </div>
  );
}
