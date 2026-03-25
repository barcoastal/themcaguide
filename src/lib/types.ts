export interface ArticleFrontmatter {
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  pillar?: string;
  category?: "before-mca" | "choosing-lender" | "getting-out" | "mca-basics" | "legal";
  tags?: string[];
  readNext?: string;
  affiliateDisclosure?: boolean;
  heroImage?: string;
}

export interface Article {
  slug: string;
  frontmatter: ArticleFrontmatter;
  content: string;
  readingTime: string;
  type: "guide" | "article";
}

export interface GlossaryTerm {
  term: string;
  definition: string;
  relatedArticle?: string;
  articleType?: "guide" | "article";
}

export interface Author {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  credentials?: string;
}
