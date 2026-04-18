import TemplateViewer from "@/components/templates/TemplateViewer";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MCA COJ Defense Response Template — NY CPLR 5015 Motion to Vacate Outline (2026)",
  description: "Structural outline for a motion to vacate a pre-2019 MCA Confession of Judgment under NY CPLR 5015. Educational only — not a filable motion. Consult an attorney.",
  alternates: { canonical: "https://themcaguide.com/templates/mca-coj-defense-response" },
};

const TEMPLATE = `SUPREME COURT OF THE STATE OF NEW YORK
COUNTY OF [COUNTY WHERE COJ WAS ENTERED]
------------------------------------------------------X
[MCA COMPANY NAME],

                              Plaintiff,

        -against-                                          Index No.: [INDEX NUMBER]

[YOUR BUSINESS NAME] and [YOUR PERSONAL NAME],

                              Defendants.
------------------------------------------------------X

NOTICE OF MOTION TO VACATE CONFESSION OF JUDGMENT
AND SUPPORTING AFFIRMATION

[NOTE: THIS IS A STRUCTURAL OUTLINE ONLY. A REAL MOTION REQUIRES AN ATTORNEY.
ALL CAPS SECTIONS IN BRACKETS ARE PLACEHOLDERS — DO NOT FILE THIS DOCUMENT.]

-----------------------------------------------------------------------
PRELIMINARY STATEMENT
-----------------------------------------------------------------------

Defendant [YOUR NAME / BUSINESS NAME] respectfully moves this Court pursuant to CPLR 5015(a) for an order vacating the Confession of Judgment ("COJ") entered against Defendants on or about [DATE OF COJ ENTRY] in the amount of [JUDGMENT AMOUNT].

This motion is based on the grounds set forth below, including [select applicable]:
[ ] Lack of jurisdiction over the Defendant under CPLR 5015(a)(4)
[ ] Fraud, misrepresentation, or other misconduct by the opposing party under CPLR 5015(a)(3)
[ ] A meritorious defense to the underlying obligation
[ ] The COJ was entered after August 30, 2019 in violation of New York's prohibition on out-of-state COJs (CPLR 3218 amendment)

-----------------------------------------------------------------------
FACTUAL BACKGROUND
[FILL IN WITH YOUR SPECIFIC FACTS]
-----------------------------------------------------------------------

1. On or about [DATE], Defendant entered into a Merchant Cash Advance agreement with Plaintiff, designated as Agreement No. [CONTRACT NUMBER].

2. On or about [DATE], Plaintiff caused a Confession of Judgment to be entered in [COUNTY] County, New York in the amount of $[AMOUNT].

3. Defendant [did / did not] reside or maintain a principal place of business in New York at the time the COJ was entered.

4. [DESCRIBE THE SPECIFIC CIRCUMSTANCES: e.g., "Defendant was not provided a copy of the COJ affidavit before signing," "the affidavit of confession contained materially false statements about the amount owed," "the MCA agreement was entered into on [DATE] after the August 30, 2019 prohibition," etc.]

-----------------------------------------------------------------------
LEGAL ARGUMENT
-----------------------------------------------------------------------

POINT I: THE COURT LACKS PERSONAL JURISDICTION OVER DEFENDANT
[CPLR 5015(a)(4)]

The COJ statute, CPLR 3218, requires that the affiant be a resident of New York or that the debtor submit to jurisdiction. [Describe why jurisdiction is lacking in your case — e.g., defendant is a non-New York resident/business and the agreement predates or postdates the relevant period.] Courts have vacated COJs entered without proper jurisdictional basis. [Cite: applicable case law from your attorney's research.]

POINT II: THE COJ WAS PROCURED BY FRAUD OR MISREPRESENTATION
[CPLR 5015(a)(3)]

[Describe specific misrepresentations: e.g., the amount in the COJ affidavit exceeds the actual amount owed; the COJ was presented as a routine "form" without disclosure of its legal effect; the MCA agreement contained materially false representations about the nature of the transaction.] CPLR 5015(a)(3) allows vacatur where the judgment was obtained through fraud, misrepresentation, or other misconduct. [Cite applicable case law.]

POINT III: DEFENDANT HAS A MERITORIOUS DEFENSE TO THE UNDERLYING CLAIM

[Describe substantive defenses: e.g., the MCA was a loan disguised as a purchase of receivables (usury defense); the funder breached the agreement by failing to reconcile; the amounts sought exceed what is owed under the contract.] To prevail on a motion to vacate, a defendant must demonstrate a meritorious defense. [Describe your specific defense with supporting facts.]

-----------------------------------------------------------------------
CONCLUSION
-----------------------------------------------------------------------

For the foregoing reasons, Defendant respectfully requests that this Court:

(a) Vacate the Confession of Judgment entered on [DATE] under Index No. [INDEX NUMBER];
(b) Stay enforcement of the judgment pending determination of this motion;
(c) Grant such other and further relief as the Court deems just and proper.

Dated: [DATE]
[CITY], New York

Respectfully submitted,


_______________________________
[ATTORNEY NAME]
[LAW FIRM NAME]
Attorney for Defendant
[ADDRESS]
[PHONE]
[EMAIL]

[NOTE: IF YOU DO NOT HAVE AN ATTORNEY, DO NOT SIGN AND FILE THIS DOCUMENT.
A PRO SE MOTION TO VACATE A COJ IN NY SUPREME COURT IS EXTREMELY DIFFICULT
AND IS UNLIKELY TO SUCCEED WITHOUT LEGAL REPRESENTATION.
PLEASE SEE THE RESOURCES BELOW.]`;

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <nav className="text-sm mb-4">
        <Link href="/templates" className="text-blue-700 underline">&larr; All templates</Link>
      </nav>

      {/* Heavy disclaimer banner */}
      <div className="rounded-xl border-2 border-red-400 bg-red-50 p-6 mb-8">
        <h2 className="text-base font-bold text-red-900 mb-2 mt-0">IMPORTANT — READ BEFORE USING</h2>
        <p className="text-sm text-red-900 font-medium mb-2">This is a structural outline only. It is NOT a filable legal document.</p>
        <ul className="text-sm text-red-900 space-y-1 mb-0 pl-4 list-disc">
          <li>Legal motions filed in court require exact formatting, citations, and procedural compliance. This outline does not meet those standards.</li>
          <li>Filing a motion to vacate a Confession of Judgment without an attorney is extremely difficult and frequently fails.</li>
          <li>If you have been served with enforcement actions (bank levy, marshal execution, asset freeze), you are in an urgent situation. Contact an attorney immediately — many MCA defense attorneys offer free initial consultations.</li>
          <li>This template is provided for educational purposes only. It does not constitute legal advice and does not create an attorney-client relationship.</li>
        </ul>
      </div>

      <h1 className="text-3xl font-bold mb-4">MCA COJ Defense Response — Motion to Vacate Outline (NY CPLR 5015)</h1>
      <p className="text-base text-slate-700 mb-6">
        This structural outline covers the key components of a motion to vacate a Confession of Judgment (COJ) entered under New York law. It is intended to help you understand the process and communicate with your attorney — not to be filed as-is.
      </p>

      <div className="rounded-xl border-l-4 border-blue-400 bg-blue-50 p-5 mb-8">
        <h3 className="text-base font-bold text-slate-900 mb-2 mt-0">Background: the 2019 NY COJ ban</h3>
        <p className="text-sm text-slate-800 m-0">In August 2019, New York amended CPLR 3218 to prohibit out-of-state businesses and residents from filing Confessions of Judgment in New York courts. If your COJ was entered <strong>after August 30, 2019</strong> and you are not a New York resident or business, it may be vacatable on that ground alone. See our full article: <Link href="/articles/ny-confession-of-judgment-ban-mca" className="underline">NY Confession of Judgment Ban — MCA</Link>.</p>
      </div>

      <TemplateViewer title="COJ Motion to Vacate Outline (NY CPLR 5015)" template={TEMPLATE} />

      <div className="prose max-w-none mt-10">
        <h2>The three grounds to vacate a COJ</h2>
        <p>The template covers the three most common grounds used in MCA COJ defense. Your attorney will determine which apply to your facts:</p>
        <ul>
          <li><strong>CPLR 5015(a)(4) — Lack of jurisdiction.</strong> If you are not a New York resident or business, the court may lack personal jurisdiction over you, especially for pre-2019 COJs where funders abused the NY courts to reach out-of-state defendants.</li>
          <li><strong>CPLR 5015(a)(3) — Fraud or misrepresentation.</strong> This covers cases where the COJ affidavit contained inflated amounts, where the nature of the COJ was misrepresented to you at signing, or where the underlying agreement was fraudulently structured.</li>
          <li><strong>Meritorious defense.</strong> Even without jurisdictional or fraud arguments, you can seek vacatur if you have a legitimate defense to the underlying claim — such as a usury argument (the MCA was actually a loan at an illegal interest rate) or a breach of contract by the funder.</li>
        </ul>

        <h2>Post-2019 COJs</h2>
        <p>If your COJ was entered after August 30, 2019 and you are not a New York resident or business entity, the 2019 CPLR 3218 amendment may render it void on its face. This is a stronger basis for vacatur and some attorneys have had success obtaining vacaturs on this ground without extensive litigation. Confirm the entry date from the court index number.</p>

        <h2>Finding an MCA defense attorney</h2>
        <p>Several attorneys specialize in MCA COJ defense, particularly in New York. Look for attorneys with experience in commercial litigation and MCA or merchant funding matters. Many offer free initial consultations and some work on contingency or flat-fee arrangements for vacatur motions. See our full guide: <Link href="/articles/new-york-mca-defense-attorney">New York MCA Defense Attorney</Link>.</p>

        <h2>Related resources</h2>
        <ul>
          <li><Link href="/articles/ny-confession-of-judgment-ban-mca">NY Confession of Judgment Ban — MCA (full article)</Link></li>
          <li><Link href="/articles/new-york-mca-defense-attorney">New York MCA Defense Attorney</Link></li>
          <li><Link href="/guides/mca-attorney-complete-guide">MCA Attorney Complete Guide</Link></li>
        </ul>
      </div>
    </div>
  );
}
