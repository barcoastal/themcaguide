import { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllArticles, getArticleBySlug, getArticlesByPillar } from "@/lib/content";
import { mdxComponents } from "@/components/mdx/mdx-components";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ArticleHeader from "@/components/content/ArticleHeader";
import TableOfContents from "@/components/content/TableOfContents";
import RelatedArticles from "@/components/content/RelatedArticles";
import ShareButtons from "@/components/content/ShareButtons";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const guides = getAllArticles("guide");
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getArticleBySlug(slug, "guide");
  if (!guide) return {};

  return {
    title: guide.frontmatter.title,
    description: guide.frontmatter.description,
    openGraph: {
      title: guide.frontmatter.title,
      description: guide.frontmatter.description,
      type: "article",
      publishedTime: guide.frontmatter.publishedAt,
      modifiedTime: guide.frontmatter.updatedAt,
      images: guide.frontmatter.heroImage
        ? [{ url: guide.frontmatter.heroImage }]
        : [],
    },
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getArticleBySlug(slug, "guide");
  if (!guide) notFound();

  const relatedArticles = getArticlesByPillar(slug).slice(0, 6);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.frontmatter.title,
    description: guide.frontmatter.description,
    datePublished: guide.frontmatter.publishedAt,
    dateModified: guide.frontmatter.updatedAt || guide.frontmatter.publishedAt,
    author: {
      "@type": "Person",
      name: guide.frontmatter.author,
      url: "https://themcaguide.com/about",
    },
    publisher: {
      "@type": "Organization",
      name: "The MCA Guide",
      logo: {
        "@type": "ImageObject",
        url: "https://themcaguide.com/images/logo.png",
      },
    },
    image: guide.frontmatter.heroImage
      ? `https://themcaguide.com${guide.frontmatter.heroImage}`
      : undefined,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://themcaguide.com/guides/${slug}`,
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={[{ label: "Guides", href: "/guides" }, { label: guide.frontmatter.title }]} />

        <div className="flex gap-12">
          <TableOfContents />

          <article className="flex-1 min-w-0 prose prose-lg prose-blue max-w-none">
            <ArticleHeader
              title={guide.frontmatter.title}
              readingTime={guide.readingTime}
              publishedAt={guide.frontmatter.publishedAt}
              updatedAt={guide.frontmatter.updatedAt}
              author={guide.frontmatter.author}
              heroImage={guide.frontmatter.heroImage}
            />

            <MDXRemote source={guide.content} components={mdxComponents} />

            <ShareButtons title={guide.frontmatter.title} url={`https://themcaguide.com/guides/${slug}`} />
          </article>
        </div>

        <RelatedArticles articles={relatedArticles} />
      </div>
    </>
  );
}
