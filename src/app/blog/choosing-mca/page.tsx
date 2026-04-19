import { Metadata } from "next";
import { getAllArticles } from "@/lib/content";
import TopLenders from "@/components/home/TopLenders";
import EditorialHero from "@/components/layout/EditorialHero";
import EditorialArticleStack from "@/components/content/EditorialArticleStack";

export const metadata: Metadata = {
  title: "Choosing an MCA. How to Pick the Best Deal",
  description: "If an MCA is your only option, here's how to choose the best lender, spot red flags, and protect your business.",
  alternates: {
    canonical: "https://themcaguide.com/blog/choosing-mca",
  },
};

export default function ChoosingMcaPage() {
  const articles = getAllArticles("article").filter(
    (a) => a.frontmatter.category === "choosing-lender"
  );

  return (
    <div>
      <EditorialHero
        kicker="If You Really Need an MCA"
        title="How to Pick the Least Bad Deal"
        dek="If MCA is truly your only option, here is how to compare offers, spot red flags, and avoid the traps that bury businesses."
        align="center"
      />
      <EditorialArticleStack articles={articles} kicker="Section · Choosing MCA" />
      <TopLenders />
    </div>
  );
}
