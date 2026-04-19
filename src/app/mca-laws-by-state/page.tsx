import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import EditorialHero from "@/components/layout/EditorialHero";

export const metadata: Metadata = {
  title: "MCA Laws by State: Know Your Rights in Every State",
  description:
    "Find merchant cash advance laws and regulations for your state. All 50 states covered with specific protections, disclosure requirements, and resources.",
  alternates: {
    canonical: "https://themcaguide.com/mca-laws-by-state",
  },
  openGraph: {
    title: "MCA Laws by State: Know Your Rights in Every State",
    description:
      "Find merchant cash advance laws and regulations for your state. All 50 states covered with specific protections, disclosure requirements, and resources.",
    type: "website",
    images: [{ url: "/images/og-image.webp", width: 1200, height: 630, alt: "The MCA Guide" }],
  },
};

interface StateInfo {
  name: string;
  slug: string;
  summary: string;
  hasRegulation: boolean;
}

const states: StateInfo[] = [
  { name: "Alabama", slug: "mca-laws-alabama", summary: "No MCA-specific laws; general contract law applies", hasRegulation: false },
  { name: "Alaska", slug: "mca-laws-alaska", summary: "No MCA-specific laws; general contract law applies", hasRegulation: false },
  { name: "Arizona", slug: "mca-laws-arizona", summary: "No MCA-specific laws; general contract law applies", hasRegulation: false },
  { name: "Arkansas", slug: "mca-laws-arkansas", summary: "Strict usury cap of 17% limits some MCA structures", hasRegulation: false },
  { name: "California", slug: "mca-laws-california", summary: "SB 1235 requires APR disclosure on commercial financing", hasRegulation: true },
  { name: "Colorado", slug: "mca-laws-colorado", summary: "HB 23-1229 requires disclosure and licensing for funders", hasRegulation: true },
  { name: "Connecticut", slug: "mca-laws-connecticut", summary: "SB 1032 requires disclosure on small business financing", hasRegulation: false },
  { name: "Delaware", slug: "mca-laws-delaware", summary: "No MCA-specific laws; general contract law applies", hasRegulation: false },
  { name: "Florida", slug: "mca-laws-florida", summary: "No MCA-specific laws; general contract law applies", hasRegulation: false },
  { name: "Georgia", slug: "mca-laws-georgia", summary: "No MCA-specific laws; general contract law applies", hasRegulation: false },
  { name: "Hawaii", slug: "mca-laws-hawaii", summary: "No MCA-specific laws; general contract law applies", hasRegulation: false },
  { name: "Idaho", slug: "mca-laws-idaho", summary: "No MCA-specific laws; general contract law applies", hasRegulation: false },
  { name: "Illinois", slug: "mca-laws-illinois", summary: "SB 2234 requires APR and fee disclosure for small businesses", hasRegulation: true },
  { name: "Indiana", slug: "mca-laws-indiana", summary: "No MCA-specific laws; general contract law applies", hasRegulation: false },
  { name: "Iowa", slug: "mca-laws-iowa", summary: "No MCA-specific laws; general contract law applies", hasRegulation: false },
  { name: "Kansas", slug: "mca-laws-kansas", summary: "No MCA-specific laws; general contract law applies", hasRegulation: false },
  { name: "Kentucky", slug: "mca-laws-kentucky", summary: "No MCA-specific laws; general contract law applies", hasRegulation: false },
  { name: "Louisiana", slug: "mca-laws-louisiana", summary: "No MCA-specific laws; general contract law applies", hasRegulation: false },
  { name: "Maine", slug: "mca-laws-maine", summary: "No MCA-specific laws; general contract law applies", hasRegulation: false },
  { name: "Maryland", slug: "mca-laws-maryland", summary: "HB 1211 requires licensing and disclosure for MCA providers", hasRegulation: true },
  { name: "Massachusetts", slug: "mca-laws-massachusetts", summary: "No MCA-specific laws; general contract law applies", hasRegulation: false },
  { name: "Michigan", slug: "mca-laws-michigan", summary: "No MCA-specific laws; general contract law applies", hasRegulation: false },
  { name: "Minnesota", slug: "mca-laws-minnesota", summary: "No MCA-specific laws; general contract law applies", hasRegulation: false },
  { name: "Mississippi", slug: "mca-laws-mississippi", summary: "No MCA-specific laws; general contract law applies", hasRegulation: false },
  { name: "Missouri", slug: "mca-laws-missouri", summary: "No MCA-specific laws; general contract law applies", hasRegulation: false },
  { name: "Montana", slug: "mca-laws-montana", summary: "No MCA-specific laws; general contract law applies", hasRegulation: false },
  { name: "Nebraska", slug: "mca-laws-nebraska", summary: "No MCA-specific laws; general contract law applies", hasRegulation: false },
  { name: "Nevada", slug: "mca-laws-nevada", summary: "No MCA-specific laws; general contract law applies", hasRegulation: false },
  { name: "New Hampshire", slug: "mca-laws-new-hampshire", summary: "No MCA-specific laws; general contract law applies", hasRegulation: false },
  { name: "New Jersey", slug: "mca-laws-new-jersey", summary: "No MCA-specific laws; general contract law applies", hasRegulation: false },
  { name: "New Mexico", slug: "mca-laws-new-mexico", summary: "No MCA-specific laws; general contract law applies", hasRegulation: false },
  { name: "New York", slug: "mca-laws-new-york", summary: "Disclosure law requires APR, total cost, and prepayment terms", hasRegulation: true },
  { name: "North Carolina", slug: "mca-laws-north-carolina", summary: "No MCA-specific laws; general contract law applies", hasRegulation: false },
  { name: "North Dakota", slug: "mca-laws-north-dakota", summary: "No MCA-specific laws; general contract law applies", hasRegulation: false },
  { name: "Ohio", slug: "mca-laws-ohio", summary: "No MCA-specific laws; general contract law applies", hasRegulation: false },
  { name: "Oklahoma", slug: "mca-laws-oklahoma", summary: "No MCA-specific laws; general contract law applies", hasRegulation: false },
  { name: "Oregon", slug: "mca-laws-oregon", summary: "No MCA-specific laws; general contract law applies", hasRegulation: false },
  { name: "Pennsylvania", slug: "mca-laws-pennsylvania", summary: "No MCA-specific laws; general contract law applies", hasRegulation: false },
  { name: "Rhode Island", slug: "mca-laws-rhode-island", summary: "No MCA-specific laws; general contract law applies", hasRegulation: false },
  { name: "South Carolina", slug: "mca-laws-south-carolina", summary: "No MCA-specific laws; general contract law applies", hasRegulation: false },
  { name: "South Dakota", slug: "mca-laws-south-dakota", summary: "No MCA-specific laws; general contract law applies", hasRegulation: false },
  { name: "Tennessee", slug: "mca-laws-tennessee", summary: "No MCA-specific laws; general contract law applies", hasRegulation: false },
  { name: "Texas", slug: "mca-laws-texas", summary: "No MCA-specific laws; general contract law applies", hasRegulation: false },
  { name: "Utah", slug: "mca-laws-utah", summary: "SB 183 requires registration and disclosure for MCA funders", hasRegulation: true },
  { name: "Vermont", slug: "mca-laws-vermont", summary: "No MCA-specific laws; general contract law applies", hasRegulation: false },
  { name: "Virginia", slug: "mca-laws-virginia", summary: "SB 1252 requires licensing, disclosure, and broker registration", hasRegulation: true },
  { name: "Washington", slug: "mca-laws-washington", summary: "SB 5031 requires disclosure on commercial financing transactions", hasRegulation: true },
  { name: "West Virginia", slug: "mca-laws-west-virginia", summary: "No MCA-specific laws; general contract law applies", hasRegulation: false },
  { name: "Wisconsin", slug: "mca-laws-wisconsin", summary: "No MCA-specific laws; general contract law applies", hasRegulation: false },
  { name: "Wyoming", slug: "mca-laws-wyoming", summary: "No MCA-specific laws; general contract law applies", hasRegulation: false },
];

const strongStates = states.filter((s) => s.hasRegulation);

const faqs = [
  {
    question: "Are merchant cash advances regulated by federal law?",
    answer:
      "MCAs are not directly regulated by federal lending laws like the Truth in Lending Act (TILA) because they are structured as purchases of future receivables, not loans. However, the FTC can take action against deceptive practices, and the CFPB has signaled increasing interest in oversight of commercial financing.",
  },
  {
    question: "Which states have the strongest MCA protections?",
    answer:
      "California, New York, Virginia, and Utah currently have the strongest MCA-specific laws. These states require disclosure of APR or equivalent cost metrics, total repayment amounts, and other key terms before a business owner signs an MCA agreement.",
  },
  {
    question: "Can an MCA company sue me in a different state?",
    answer:
      "Many MCA contracts include a forum selection clause that requires disputes to be resolved in a specific state (often New York). Some states have pushed back on this practice, but it remains common. Always review the jurisdiction clause in your contract before signing.",
  },
  {
    question: "Do MCA laws protect sole proprietors differently than LLCs?",
    answer:
      "In most states, the protections apply based on the size of the transaction or the revenue of the business, not the entity type. For example, California's SB 1235 applies to transactions under $500,000 regardless of whether the borrower is a sole proprietor or an LLC.",
  },
  {
    question: "What should I do if an MCA company violates my state's laws?",
    answer:
      "Document everything, including your contract, payment records, and any communications. File a complaint with your state attorney general's office and consider consulting a business attorney who specializes in commercial financing disputes.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function MCALawsByStatePage() {
  const breadcrumbs = [{ label: "MCA Laws by State" }];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={breadcrumbs} />

        {/* Hero */}
        <EditorialHero
          kicker="Know Your Rights"
          title="MCA Laws by State"
          dek="Merchant cash advance regulations vary dramatically from state to state. Knowing where your state stands can help you negotiate better terms, spot red flags, and protect your business."
        />

        {/* States with Strong Protections */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">States with Strong MCA Protections</h2>
          <p className="text-gray-600 mb-6">
            These states have enacted laws specifically targeting merchant cash advance transactions,
            requiring disclosure, licensing, or both.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {strongStates.map((state) => (
              <Link
                key={state.slug}
                href={`/articles/${state.slug}`}
                className="group block bg-blue-50 border-2 border-blue-200 hover:border-blue-400 rounded-2xl p-5 hover:shadow-lg transition-all"
              >
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                  {state.name}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{state.summary}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* States with No MCA-Specific Laws */}
        <section className="mb-16">
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">States with No MCA-Specific Laws</h2>
            <p className="text-gray-600">
              The majority of states have not passed laws that specifically regulate merchant cash
              advances. In these states, MCA transactions are governed by general contract law,
              the Uniform Commercial Code (UCC), and whatever terms are written into your
              agreement. This means fewer automatic protections for business owners, making it
              even more important to read every page of your contract before signing.
            </p>
          </div>
        </section>

        {/* Full Alphabetical Grid */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">All 50 States</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {states.map((state) => (
              <Link
                key={state.slug}
                href={`/articles/${state.slug}`}
                className={`group block border-2 rounded-2xl p-5 hover:shadow-lg transition-all ${
                  state.hasRegulation
                    ? "bg-blue-50 border-blue-200 hover:border-blue-400"
                    : "bg-white border-gray-200 hover:border-gray-400"
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                    {state.name}
                  </h3>
                  {state.hasRegulation && (
                    <span className="text-xs font-semibold bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                      Regulated
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-500 mt-1">{state.summary}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Prose Content */}
        <div className="prose prose-base md:prose-lg max-w-none mb-16">
          <h2>Why MCA Laws Matter</h2>
          <p>
            A merchant cash advance is not technically a loan. It is structured as a purchase of
            future receivables, which means it falls outside most traditional lending regulations.
            This distinction has allowed MCA providers to operate with minimal oversight in many
            states, sometimes charging effective APRs well above 100% without any disclosure
            requirement.
          </p>
          <p>
            State-level MCA laws close that gap. In states with strong regulations, providers must
            disclose the total cost of financing in clear, standardized terms. This lets business
            owners compare offers, understand what they are actually paying, and make informed
            decisions instead of relying on confusing factor rates.
          </p>

          <h2>What to Look For in Your State</h2>
          <p>When reviewing MCA regulations in your state, pay attention to these key areas:</p>
          <ul>
            <li>
              <strong>Disclosure requirements:</strong> Does the state require providers to show APR,
              total repayment amount, or estimated term length?
            </li>
            <li>
              <strong>Licensing:</strong> Must MCA providers register or obtain a license to operate
              in your state?
            </li>
            <li>
              <strong>Broker registration:</strong> Are MCA brokers required to disclose their fees
              and register with a state agency?
            </li>
            <li>
              <strong>Usury protections:</strong> Does your state have interest rate caps that could
              apply to MCA-like products?
            </li>
            <li>
              <strong>Right to rescind:</strong> Can you cancel an MCA within a certain number of
              days after signing?
            </li>
          </ul>

          <h2>Federal Protections</h2>
          <p>
            While there is no federal law that directly regulates MCAs, two agencies play an
            important role in protecting business owners:
          </p>
          <ul>
            <li>
              <strong>Federal Trade Commission (FTC):</strong> The FTC can take action against MCA
              providers that engage in deceptive or unfair business practices, even if the
              product is not classified as a loan.
            </li>
            <li>
              <strong>Consumer Financial Protection Bureau (CFPB):</strong> The CFPB has expanded
              its focus to include small business lending and has proposed rules that would
              require data collection on small business credit applications, including MCAs.
            </li>
          </ul>
          <p>
            Until stronger federal rules take effect, state laws remain the primary line of
            defense for business owners considering an MCA.
          </p>
        </div>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group border border-gray-200 rounded-xl bg-white"
              >
                <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-base font-semibold text-gray-900 hover:text-blue-700 transition-colors">
                  {faq.question}
                  <span className="ml-4 text-gray-400 group-open:rotate-45 transition-transform text-xl leading-none">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Sources */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sources</h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              California Department of Financial Protection and Innovation, SB 1235 Commercial
              Financing Disclosure -{" "}
              <a
                href="https://dfpi.ca.gov/sb-1235-commercial-financing-disclosure/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                dfpi.ca.gov
              </a>
            </li>
            <li>
              New York Department of Financial Services, Commercial Financing Disclosure Law -{" "}
              <a
                href="https://www.dfs.ny.gov/industry_guidance/commercial_financing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                dfs.ny.gov
              </a>
            </li>
            <li>
              Virginia State Corporation Commission, Commercial Financing Licensees -{" "}
              <a
                href="https://scc.virginia.gov/pages/Commercial-Financing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                scc.virginia.gov
              </a>
            </li>
            <li>
              Federal Trade Commission, Small Business Financing -{" "}
              <a
                href="https://www.ftc.gov/business-guidance/small-businesses"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                ftc.gov
              </a>
            </li>
            <li>
              Consumer Financial Protection Bureau, Small Business Lending Rule -{" "}
              <a
                href="https://www.consumerfinance.gov/rules-policy/final-rules/small-business-lending-under-the-equal-credit-opportunity-act-regulation-b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                consumerfinance.gov
              </a>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
