import { Metadata } from "next";
import EditorialHero from "@/components/layout/EditorialHero";

export const metadata: Metadata = {
  title: "Editorial Policy",
  description: "How The MCA Guide creates, reviews, and maintains the accuracy of our content. Our commitment to honest, fact-checked small business education.",
  alternates: { canonical: "https://themcaguide.com/editorial-policy" },
};

export default function EditorialPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <EditorialHero
        kicker="Our Standards"
        title="Editorial Policy"
        dek="How The MCA Guide creates, reviews, and maintains the accuracy of our content."
      />
      <div className="py-12">
      <div className="prose prose-lg max-w-none">
        <p>
          The MCA Guide is committed to providing accurate, honest, and helpful information for small business owners. Here is how we create and maintain our content.
        </p>

        <h2>Who Writes Our Content</h2>
        <p>
          All content is written or reviewed by <a href="/about/bar-alezrah">Bar Alezrah</a>, a small business owner with firsthand experience navigating MCA debt. Bar has personal experience with MCA contracts, debt stacking, settlement negotiation, and business recovery.
        </p>

        <h2>How We Research</h2>
        <ul>
          <li>We reference primary government sources: the Small Business Administration (SBA), the Federal Trade Commission (FTC), the Consumer Financial Protection Bureau (CFPB), and the Federal Reserve.</li>
          <li>We cite specific court cases and state legislation when discussing MCA law.</li>
          <li>We verify lender information, factor rates, and terms against publicly available data.</li>
          <li>We do not accept payment to feature or review any MCA company.</li>
        </ul>

        <h2>How We Review Content</h2>
        <ul>
          <li>Every article is reviewed for factual accuracy before publishing.</li>
          <li>Articles are updated when laws, regulations, or market conditions change.</li>
          <li>Each article displays its publication date and last updated date.</li>
          <li>We mark outdated information clearly when regulations change.</li>
        </ul>

        <h2>Affiliate Links</h2>
        <p>
          Some articles contain affiliate links. These are clearly disclosed. Affiliate relationships never influence our editorial recommendations, ratings, or advice. We recommend products and services based solely on whether they help small business owners.
        </p>

        <h2>Corrections</h2>
        <p>
          We take mistakes seriously. If you find an error:
        </p>
        <ul>
          <li>Email <a href="mailto:hello@themcaguide.com">hello@themcaguide.com</a> with the article URL and the error.</li>
          <li>We will investigate and correct verified errors within 48 hours.</li>
          <li>Significant corrections will include a note at the top of the article explaining what changed.</li>
        </ul>

        <h2>Independence</h2>
        <p>
          The MCA Guide is independently owned and operated. We are not affiliated with any MCA company, lender, broker, or financial institution. Our only goal is to help small business owners make informed decisions.
        </p>
      </div>
      </div>
    </div>
  );
}
