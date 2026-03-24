import Link from "next/link";
import { Article } from "@/lib/types";

export default function ReadNext({ article }: { article: Article }) {
  return (
    <div className="mt-8 bg-blue-50 rounded-lg p-6">
      <p className="text-sm text-blue-700 font-medium mb-1">Read Next</p>
      <Link
        href={`/${article.type === "guide" ? "guides" : "articles"}/${article.slug}`}
        className="text-lg font-semibold text-gray-900 hover:text-blue-800"
      >
        {article.frontmatter.title}
      </Link>
      <p className="text-sm text-gray-600 mt-1">{article.frontmatter.description}</p>
    </div>
  );
}
