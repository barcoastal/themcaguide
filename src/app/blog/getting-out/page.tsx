import { Metadata } from "next";
import { getAllArticles } from "@/lib/content";
import EditorialHero from "@/components/layout/EditorialHero";
import EditorialArticleStack from "@/components/content/EditorialArticleStack";

export const metadata: Metadata = {
  title: "Getting Out of MCA Debt. Your Options Explained",
  description: "Stuck in MCA debt? Here's every option: negotiation, settlement, legal help, and how to protect your business.",
  alternates: {
    canonical: "https://themcaguide.com/blog/getting-out",
  },
};

export default function GettingOutPage() {
  const articles = getAllArticles("article").filter(
    (a) => a.frontmatter.category === "getting-out"
  );

  return (
    <div>
      <EditorialHero
        kicker="Getting Out of MCA Debt"
        title="You Have Options. Let's Find Yours."
        dek="Take a deep breath. MCA debt is stressful, but it's fixable. Here are your options, from negotiation to settlement to legal help."
        align="center"
      />
      <EditorialArticleStack articles={articles} kicker="Section · Getting Out" />
    </div>
  );
}
