import TemplateViewer from "@/components/templates/TemplateViewer";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MCA Hardship Letter Template (Free Copy-and-Customize 2026)",
  description: "Free MCA hardship letter template. Request reduced daily or weekly payments before you default. Copy and customize.",
  alternates: { canonical: "https://themcaguide.com/templates/mca-hardship-letter" },
};

const TEMPLATE = `[YOUR BUSINESS NAME]
[STREET ADDRESS]
[CITY, STATE ZIP]
[PHONE]
[EMAIL]

[DATE]

[MCA COMPANY NAME]
ATTN: Reconciliation / Workout Department
[MCA COMPANY ADDRESS]

Re: Reconciliation Request under MCA Agreement dated [ORIGINAL AGREEMENT DATE]
Agreement Number: [CONTRACT NUMBER]
Business Name on Agreement: [BUSINESS NAME]

To Whom It May Concern:

I am writing to formally request a reconciliation of the daily receivables holdback under the above-referenced Merchant Cash Advance agreement. Our current holdback rate of [CURRENT HOLDBACK %] has become unsustainable given a material change in our business.

The following changes to our business operations have affected our cash receipts:

1. [SPECIFIC HARDSHIP EVENT, e.g., "A 40% decline in foot traffic beginning [DATE] following [EVENT]"]
2. [SECOND HARDSHIP, e.g., "Loss of [X]% of revenue from our largest customer on [DATE]"]
3. [THIRD HARDSHIP, e.g., "Increased operating costs from [SPECIFIC SOURCE]"]

As a result, our average daily gross receipts have declined from approximately [OLD AVERAGE] to [NEW AVERAGE], a reduction of [X]%. This is documented in the attached bank statements and profit and loss statement.

Under the reconciliation provision in Section [SECTION NUMBER] of our agreement, I am requesting that the daily holdback be reduced to [PROPOSED HOLDBACK %] beginning [PROPOSED EFFECTIVE DATE]. This adjustment reflects the proportional decline in our receipts and is consistent with the intent of the reconciliation provision.

I have attached the following documentation for your review:
- Bank statements for the past [X] months
- Profit and loss statement for [PERIOD]
- [ANY OTHER RELEVANT DOCUMENTATION]

I remain committed to fulfilling my obligations under the agreement and am asking for this adjustment in good faith. Please respond in writing within [5 / 7 / 10] business days. If additional documentation is needed, I am available to provide it immediately.

Thank you for your prompt attention to this matter.

Sincerely,


[YOUR NAME]
[YOUR TITLE]
[BUSINESS NAME]

Enclosures:
- Bank statements
- Profit and loss statement
- [OTHER]`;

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <nav className="text-sm mb-4">
        <Link href="/templates" className="text-blue-700 underline">&larr; All templates</Link>
      </nav>
      <h1 className="text-3xl font-bold mb-4">MCA Hardship Letter Template</h1>
      <p className="text-base text-slate-700 mb-6">
        Use this letter to request a reduced daily or weekly holdback before you default on your MCA. Fill in every field in brackets with your specific information, attach supporting documentation, and send by certified mail with return receipt (and email a copy).
      </p>

      <div className="rounded-xl border-l-4 border-blue-400 bg-blue-50 p-5 mb-8">
        <h3 className="text-base font-bold text-slate-900 mb-2 mt-0">When to send this</h3>
        <p className="text-sm text-slate-800 m-0">Send BEFORE you default. Once you miss payments, the dynamic shifts and the tools available to you change. If you are already in default or facing an imminent lawsuit, review the <Link href="/articles/mca-lawsuit-being-sued-playbook" className="underline">MCA Lawsuit Being Sued Playbook</Link> first.</p>
      </div>

      <TemplateViewer title="Hardship Letter Template" template={TEMPLATE} />

      <div className="prose max-w-none mt-10">
        <h2>How to customize this template</h2>
        <p>Replace every bracketed field with your specific information. The language deliberately references the reconciliation provision in your contract; pull out your MCA agreement and find the actual section number. If your agreement does not have a reconciliation provision, note that explicitly and request a workout under alternative terms.</p>

        <h2>What to attach</h2>
        <ul>
          <li>Bank statements for the most recent 3 to 6 months showing the revenue decline</li>
          <li>Profit and loss statement covering the same period</li>
          <li>Any specific documentation of the hardship event (insurance claim, news article, closure notice, etc.)</li>
          <li>A simple one-page summary of the business situation if your documentation is complex</li>
        </ul>

        <h2>How to send it</h2>
        <p>Certified mail with return receipt to the MCA company address on your agreement. Also email a PDF copy to any contact you have in the workout or collections department. Keep the certified mail receipt and the email delivery confirmation.</p>

        <h2>Follow-up timing</h2>
        <p>If you have not received a response within the timeframe you specified, follow up by phone and in writing on the next business day after the deadline. If you receive no response for 10+ business days, document that and consider whether to escalate to an attorney. Silence is often a negotiating tactic.</p>

        <h2>Related resources</h2>
        <ul>
          <li><Link href="/articles/mca-hardship-letter-template">MCA Hardship Letter Template (full article)</Link></li>
          <li><Link href="/articles/mca-restructuring-playbook">MCA Restructuring Playbook</Link></li>
          <li><Link href="/articles/can-you-negotiate-mca-debt">How to Negotiate MCA Settlement</Link></li>
          <li><Link href="/guides/mca-attorney-complete-guide">MCA Attorney Complete Guide</Link></li>
        </ul>
      </div>
    </div>
  );
}
