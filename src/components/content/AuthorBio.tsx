import { Author } from "@/lib/types";

export default function AuthorBio({ author }: { author: Author }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: author.name,
    jobTitle: author.role,
    image: author.image,
    ...(author.linkedin ? { sameAs: [author.linkedin] } : {}),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="bg-gray-50 rounded-lg p-6 mt-12 flex gap-4">
        <img src={author.image} alt={author.name} className="w-16 h-16 rounded-full flex-shrink-0" />
        <div>
          <p className="font-semibold text-gray-900">{author.name}</p>
          <p className="text-sm text-gray-500">{author.role}</p>
          {author.credentials && <p className="text-sm text-gray-500">{author.credentials}</p>}
          <p className="text-sm text-gray-600 mt-2">{author.bio}</p>
          {author.linkedin && (
            <a href={author.linkedin} target="_blank" rel="noopener" className="text-sm text-blue-700 hover:underline mt-1 inline-block">
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </>
  );
}
