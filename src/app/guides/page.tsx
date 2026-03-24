import { Metadata } from "next";
import Link from "next/link";
import { getAllArticles } from "@/lib/content";

export const metadata: Metadata = {
  title: "Guides",
  description: "Comprehensive guides on merchant cash advances, debt settlement, and small business financing.",
};

export default function GuidesPage() {
  const guides = getAllArticles("guide");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">MCA Guides</h1>
      <p className="text-lg text-gray-500 mb-8">
        In-depth guides covering everything you need to know about merchant cash advances.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {guides.map((guide) => (
          <Link
            key={guide.slug}
            href={`/guides/${guide.slug}`}
            className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-2">{guide.frontmatter.title}</h2>
            <p className="text-gray-500">{guide.frontmatter.description}</p>
            <p className="text-sm text-gray-400 mt-3">{guide.readingTime}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
