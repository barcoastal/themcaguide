import { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllArticles, getArticleBySlug } from "@/lib/content";
import { mdxComponents } from "@/components/mdx/mdx-components";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ArticleHeader from "@/components/content/ArticleHeader";
import TableOfContents from "@/components/content/TableOfContents";
import ShareButtons from "@/components/content/ShareButtons";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = getAllArticles("article");
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug, "article");
  if (!article) return {};

  const title = article.frontmatter.title.length > 48
    ? article.frontmatter.title.substring(0, 45) + "..."
    : article.frontmatter.title;

  return {
    title,
    description: article.frontmatter.description,
    openGraph: {
      title: article.frontmatter.title,
      description: article.frontmatter.description,
      type: "article",
      publishedTime: article.frontmatter.publishedAt,
      modifiedTime: article.frontmatter.updatedAt,
      images: article.frontmatter.heroImage
        ? [{ url: article.frontmatter.heroImage }]
        : [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "The MCA Guide" }],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug, "article");
  if (!article) notFound();

  const pillarSlug = article.frontmatter.pillar;
  const pillarGuide = pillarSlug ? getArticleBySlug(pillarSlug, "guide") : null;

  const breadcrumbs = [
    { label: "Articles", href: "/articles" },
    ...(pillarGuide
      ? [{ label: pillarGuide.frontmatter.title, href: `/guides/${pillarSlug}` }]
      : []),
    { label: article.frontmatter.title },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.frontmatter.title,
    description: article.frontmatter.description,
    datePublished: article.frontmatter.publishedAt,
    dateModified: article.frontmatter.updatedAt || article.frontmatter.publishedAt,
    author: {
      "@type": "Person",
      name: article.frontmatter.author,
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
    image: article.frontmatter.heroImage
      ? `https://themcaguide.com${article.frontmatter.heroImage}`
      : undefined,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://themcaguide.com/articles/${slug}`,
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={breadcrumbs} />

        <div className="lg:flex lg:gap-12">
          <TableOfContents />

          <article className="flex-1 min-w-0 prose prose-sm md:prose-lg prose-blue max-w-none">
            <ArticleHeader
              title={article.frontmatter.title}
              readingTime={article.readingTime}
              publishedAt={article.frontmatter.publishedAt}
              updatedAt={article.frontmatter.updatedAt}
              author={article.frontmatter.author}
              pillarLabel={pillarGuide?.frontmatter.title}
              pillarHref={pillarSlug ? `/guides/${pillarSlug}` : undefined}
              heroImage={article.frontmatter.heroImage}
            />

            <MDXRemote source={article.content} components={mdxComponents} />

            <ShareButtons title={article.frontmatter.title} url={`https://themcaguide.com/articles/${slug}`} />
          </article>
        </div>
      </div>
    </>
  );
}
