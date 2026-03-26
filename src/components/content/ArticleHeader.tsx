import { Clock, Calendar, User } from "lucide-react";

interface ArticleHeaderProps {
  title: string;
  readingTime: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  authorImage?: string;
  pillarLabel?: string;
  pillarHref?: string;
  heroImage?: string;
}

export default function ArticleHeader({
  title, readingTime, publishedAt, updatedAt, author, authorImage, pillarLabel, pillarHref, heroImage,
}: ArticleHeaderProps) {
  return (
    <header className="mb-10 not-prose">
      {pillarLabel && pillarHref && (
        <a href={pillarHref} className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 font-medium mb-3 bg-blue-50 px-3 py-1 rounded-full">
          ← Part of the {pillarLabel} Guide
        </a>
      )}

      {heroImage && (
        <div className="rounded-2xl overflow-hidden mb-6 bg-gray-50">
          <img src={heroImage} alt={title} className="w-full h-40 md:h-64 object-cover" />
        </div>
      )}

      <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2 leading-tight">{title}</h1>
      <div className="flex flex-wrap items-center gap-4 mt-6 text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <User className="w-4 h-4" />
          <span className="font-medium text-gray-700">{author}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <span>{readingTime}</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          <span>
            {new Date(publishedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            {updatedAt && ` · Updated ${new Date(updatedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}`}
          </span>
        </div>
      </div>
    </header>
  );
}
