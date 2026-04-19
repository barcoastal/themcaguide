import { Metadata } from "next";
import { getAllArticles } from "@/lib/content";
import EditorialHero from "@/components/layout/EditorialHero";
import EditorialArticleStack from "@/components/content/EditorialArticleStack";

export const metadata: Metadata = {
  title: "Before You Take an MCA. Better Options",
  description: "Explore cheaper, safer financing options before taking a merchant cash advance. Guides on cash flow, grants, SBA loans, and more.",
  alternates: {
    canonical: "https://themcaguide.com/blog/before-mca",
  },
};

export default function BeforeMcaPage() {
  const articles = getAllArticles("article").filter(
    (a) => a.frontmatter.category === "before-mca"
  );

  return (
    <div>
      <EditorialHero
        kicker="Before You Take an MCA"
        title="Is an MCA Even the Right Move?"
        dek="Before you sign anything, here is how MCAs actually work, what they really cost, and when they make sense (rarely)."
        align="center"
      />
      <EditorialArticleStack articles={articles} kicker="Section · Before MCA" />
    </div>
  );
}
