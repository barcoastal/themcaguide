import TemplateViewer from "@/components/templates/TemplateViewer";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MCA Settlement Letter Template (Free Copy-and-Customize 2026)",
  description: "Free MCA settlement letter template. Make a formal lump sum payoff offer to your MCA funder. Copy and customize — no signup required.",
  alternates: { canonical: "https://themcaguide.com/templates/mca-settlement-letter" },
};

const TEMPLATE = `[YOUR BUSINESS NAME]
[STREET ADDRESS]
[CITY, STATE ZIP]
[PHONE]
[EMAIL]

[DATE]

[MCA COMPANY NAME]
ATTN: Collections / Workout Department
[MCA COMPANY ADDRESS]

Re: Settlement Offer — MCA Agreement dated [ORIGINAL AGREEMENT DATE]
Agreement Number: [CONTRACT NUMBER]
Business Name on Agreement: [BUSINESS NAME]

To Whom It May Concern:

I am writing to propose a full and final settlement of the above-referenced Merchant Cash Advance agreement. This offer is made in good faith to resolve the outstanding balance without further collection action and represents the maximum I am able to pay under current business conditions.

CURRENT OBLIGATION SUMMARY

Total amount funded:              $[FUNDED AMOUNT]
Total amount already remitted:    $[AMOUNT ALREADY PAID]
Remaining balance per agreement:  $[REMAINING BALANCE]

SETTLEMENT OFFER

I am prepared to pay $[SETTLEMENT AMOUNT] as full and final satisfaction of the remaining balance, representing approximately [X]% of the outstanding obligation. This offer is contingent upon execution of a written Settlement and Release Agreement prior to payment.

SOURCE OF FUNDS

The settlement funds will be sourced from [SOURCE, e.g., "a personal loan from a family member," "business cash reserves," "proceeds from the sale of business equipment"]. These funds are available for a limited time and this offer expires on [OFFER EXPIRATION DATE].

BASIS FOR THIS OFFER

[Choose one or more of the following and customize:]

Option A (Hardship): Our business has experienced a significant decline in revenue due to [SPECIFIC CAUSE], reducing our ability to service this obligation. Supporting documentation including bank statements and profit and loss statements is available upon request.

Option B (No hardship, straight settlement): We are offering this settlement as a good-faith effort to resolve the obligation efficiently, without implying any inability to pay in full over time. We believe a prompt resolution at this amount is in both parties' interests.

REQUESTED TERMS

In exchange for the settlement payment of $[SETTLEMENT AMOUNT], I request:

1. A written Settlement and Release Agreement confirming that payment of the settlement amount constitutes full and final satisfaction of all obligations under the agreement, including any fees, interest, and costs.
2. A written confirmation that no further collection action, including but not limited to bank account debits, ACH pulls, UCC lien enforcement, or third-party collection referral, will be taken following execution of the agreement and receipt of funds.
3. A UCC-1 termination filing (if applicable) within [10 / 15 / 30] days of payment.
4. A satisfaction letter suitable for use with my bank.

NEXT STEPS

Please respond in writing to this offer within [5 / 7 / 10] business days. I am available to discuss terms and provide documentation. Please direct your response to the contact information at the top of this letter.

I hope we can reach a mutually acceptable resolution promptly.

Sincerely,


[YOUR NAME]
[YOUR TITLE]
[BUSINESS NAME]

[OPTIONAL] Enclosures:
- Bank statements for [PERIOD]
- Profit and loss statement for [PERIOD]
- [OTHER DOCUMENTATION]`;

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <nav className="text-sm mb-4">
        <Link href="/templates" className="text-blue-700 underline">&larr; All templates</Link>
      </nav>
      <h1 className="text-3xl font-bold mb-4">MCA Settlement Letter Template</h1>
      <p className="text-base text-slate-700 mb-6">
        Use this letter to make a formal lump sum settlement offer to your MCA funder. Fill in every bracketed field, choose the basis section that applies to your situation, and send by certified mail with a copy by email.
      </p>

      <div className="rounded-xl border-l-4 border-blue-400 bg-blue-50 p-5 mb-8">
        <h3 className="text-base font-bold text-slate-900 mb-2 mt-0">Realistic settlement range</h3>
        <p className="text-sm text-slate-800 m-0">MCA settlements typically settle between 40% and 65% of the remaining balance, depending on how far in default you are, your documentation, and the funder. Starting at 35-40% is common. Read our <Link href="/articles/mca-settlement-success-rates" className="underline">MCA Settlement Success Rates</Link> article before you decide what to offer.</p>
      </div>

      <TemplateViewer title="Settlement Letter Template" template={TEMPLATE} />

      <div className="prose max-w-none mt-10">
        <h2>How to customize this template</h2>
        <p>Replace every bracketed field with your specific numbers and situation. The template includes two "basis for offer" options — use Option A if you have documented hardship (revenue decline, business disruption), or Option B for a straight settlement without admitting inability to pay. You can use both if appropriate.</p>

        <h2>Key points before you send</h2>
        <ul>
          <li><strong>Never release funds without a signed written agreement first.</strong> Verbal agreements are not enforceable. Insist on a written Settlement and Release Agreement before any payment is made.</li>
          <li>Set an expiration date on the offer. This creates urgency and is a standard negotiating tool.</li>
          <li>The source of funds statement matters. Funders are more likely to accept a settlement when funds come from a one-time source (asset sale, family loan) rather than ongoing business operations.</li>
          <li>Request UCC lien termination in writing. Many funders file UCC-1 financing statements and the termination is often overlooked.</li>
        </ul>

        <h2>What happens after you send it</h2>
        <p>Most funders will counter with a higher number. Expect 1-3 rounds of negotiation. Do not increase your offer more than once without new documentation or a changed situation. If the funder goes silent, follow up in writing after the deadline and document the non-response.</p>

        <h2>When not to send this without an attorney</h2>
        <p>If you have already been served with a lawsuit, if there is a Confession of Judgment (COJ) entered against you, or if your bank account has already been frozen, do not send this letter without consulting an attorney first. A settlement offer sent while in active litigation can affect your legal position.</p>

        <h2>Related resources</h2>
        <ul>
          <li><Link href="/articles/mca-settlement-letter-template">MCA Settlement Letter Template (full article)</Link></li>
          <li><Link href="/articles/how-to-negotiate-mca-settlement">How to Negotiate MCA Settlement</Link></li>
          <li><Link href="/articles/mca-settlement-complete-guide">MCA Settlement Complete Guide</Link></li>
          <li><Link href="/articles/mca-settlement-success-rates">MCA Settlement Success Rates</Link></li>
        </ul>
      </div>
    </div>
  );
}
