interface ArticleHeaderProps {
  title: string;
  readingTime: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  authorImage?: string;
  pillarLabel?: string;
  pillarHref?: string;
}

export default function ArticleHeader({
  title, readingTime, publishedAt, updatedAt, author, authorImage, pillarLabel, pillarHref,
}: ArticleHeaderProps) {
  return (
    <header className="mb-8">
      {pillarLabel && pillarHref && (
        <a href={pillarHref} className="text-sm text-blue-700 hover:text-blue-900 font-medium">
          Part of the {pillarLabel} Guide
        </a>
      )}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 leading-tight">{title}</h1>
      <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
        {authorImage && (
          <img src={authorImage} alt={author} className="w-10 h-10 rounded-full" />
        )}
        <div>
          <p className="font-medium text-gray-700">{author}</p>
          <p>
            {readingTime} &middot; Published {new Date(publishedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            {updatedAt && ` · Updated ${new Date(updatedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}`}
          </p>
        </div>
      </div>
    </header>
  );
}
