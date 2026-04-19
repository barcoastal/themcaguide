import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import EditorialHero from "@/components/layout/EditorialHero";

export const metadata: Metadata = {
  title: "How We Make Money",
  description: "Full transparency about how The MCA Guide earns revenue. We explain our affiliate relationships, how they work, and how we keep our content unbiased.",
  alternates: { canonical: "https://themcaguide.com/how-we-make-money" },
};

export default function HowWeMakeMoneyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "How We Make Money" }]} />
      <EditorialHero
        kicker="Transparency"
        title="How We Make Money"
        dek="Full transparency about our revenue sources and how we keep our content unbiased."
      />
      <div className="py-12">
      <div className="prose prose-lg max-w-none">
        <p>
          Transparency matters, especially when it comes to financial content. Here is exactly how The MCA Guide earns revenue and how we keep our content honest.
        </p>

        <h2>Our Revenue Sources</h2>
        <p>
          The MCA Guide earns money through <strong>affiliate links</strong>. When you click a link to a lender or financial product on our site and apply or sign up, we may earn a referral commission. This costs you nothing extra.
        </p>
        <p>
          That is our only revenue source. We do not:
        </p>
        <ul>
          <li>Charge users for access to any content or tools</li>
          <li>Accept payment from companies for higher rankings or positive reviews</li>
          <li>Sell your personal data</li>
          <li>Offer MCA products or act as a lender or broker</li>
          <li>Receive compensation for recommending one provider over another</li>
        </ul>

        <h2>How Affiliate Relationships Work</h2>
        <p>
          Some of the MCA companies and financial products mentioned on our site have affiliate programs. If you click through to their website from ours and take an action (such as submitting an application), we may receive a commission from that company.
        </p>
        <p>
          <strong>Important:</strong> Not all companies we review have affiliate relationships with us. We include companies in our reviews based on their relevance, reputation, and the quality of their products, regardless of whether they offer an affiliate program. Companies without affiliate programs are reviewed with the same criteria and standards.
        </p>

        <h2>How We Stay Unbiased</h2>
        <ul>
          <li><strong>Rankings are based on criteria, not commissions.</strong> Our evaluation criteria (transparency, cost, speed, terms, customer experience) are applied equally to every provider, whether they pay us or not.</li>
          <li><strong>We highlight risks prominently.</strong> Every article about MCAs includes warnings about high costs, debt cycles, and alternatives. We believe an informed reader who decides NOT to take an MCA is a success, not a lost sale.</li>
          <li><strong>We recommend alternatives first.</strong> Our content consistently directs readers toward cheaper financing options (SBA loans, lines of credit, invoice factoring) before discussing MCAs.</li>
          <li><strong>We include negative reviews.</strong> If a company has problems, regulatory issues, or bad borrower feedback, we say so, even if they are an affiliate partner.</li>
          <li><strong>Our tools have no bias.</strong> Our 28 free calculators run the same math regardless of which company you are evaluating. The numbers do not change based on affiliate status.</li>
        </ul>

        <h2>What We Are Not</h2>
        <p>
          The MCA Guide is <strong>not</strong> a lender, broker, or financial advisor. We do not originate loans, process applications, or provide personalized financial advice. Our content is educational and informational. Always consult a qualified financial professional, attorney, or accountant before making business financing decisions.
        </p>

        <h2>Our Position on MCAs</h2>
        <p>
          We believe MCAs are one of the most expensive forms of business financing available. According to the{" "}
          <a href="https://www.consumerfinance.gov/ask-cfpb/what-is-a-merchant-cash-advance-en-1981/" target="_blank" rel="noopener noreferrer">Consumer Financial Protection Bureau (CFPB)</a>, MCAs can create repayment burdens that threaten business survival. The{" "}
          <a href="https://www.fedsmallbusiness.org/" target="_blank" rel="noopener noreferrer">Federal Reserve's Small Business Credit Survey</a>{" "}
          consistently shows MCAs have the lowest borrower satisfaction of any financing product.
        </p>
        <p>
          We created this site because too many business owners take MCAs without understanding the true cost. Our goal is to educate first, and if someone still decides an MCA is their best option, to help them find the most transparent and fairly priced provider.
        </p>

        <h2>Questions?</h2>
        <p>
          If you have questions about our business model or editorial independence, email us at{" "}
          <a href="mailto:hello@themcaguide.com">hello@themcaguide.com</a>. We are happy to explain any aspect of how we operate.
        </p>
      </div>
      </div>
    </div>
  );
}
