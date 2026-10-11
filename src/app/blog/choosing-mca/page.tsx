import { Metadata } from "next";
import { getAllArticles } from "@/lib/content";
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
        title="Compare the complete offer."
        dek="Look beyond the factor rate. Compare net funding, payment timing, guarantees, and the terms that apply when receipts fall."
        align="center"
      />
      <EditorialArticleStack articles={articles} kicker="Section · Choosing MCA" />
    </div>
  );
}
