import { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import RentAffordabilityCalculator from "@/components/tools/RentAffordabilityCalculator";

export const metadata: Metadata = {
  title: "Rent Affordability Calculator. Can Your Business Afford This Lease?",
  description: "Free rent affordability calculator for small businesses. Enter your revenue, expenses, and proposed rent to see if a commercial lease fits your budget.",
  alternates: {
    canonical: "https://themcaguide.com/tools/rent-affordability-calculator",
  },
};

export default function RentAffordabilityCalculatorPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Tools", href: "/tools" }, { label: "Rent Affordability Calculator" }]} />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Rent Affordability Calculator</h1>
      <p className="text-lg text-gray-500 mb-8">Find out if a commercial lease fits your budget. Enter your revenue, expenses, and proposed rent to see the impact on your cash flow.</p>
      <RentAffordabilityCalculator />
      <article className="prose prose-lg prose-blue max-w-none mt-12">

        <h2 id="what-is-rent-affordability">How to Know If Your Business Can Afford a Lease</h2>
        <p>Commercial rent is usually the second or third biggest expense for a small business, right behind payroll. Signing a lease you cannot afford is one of the fastest ways to put your business in danger. Unlike a bad vendor contract, you cannot just cancel a lease when things get tight. You are locked in for the full term, and breaking it early usually means paying several months of rent as a penalty.</p>
        <p>This calculator helps you answer a simple question: can your business afford this rent? It looks at your revenue, your existing expenses, and the proposed rent to show you how much breathing room you have. It also compares your rent to industry benchmarks so you can see if you are overspending.</p>

        <h2 id="rent-to-revenue-rule">The Rent-to-Revenue Rule</h2>
        <p>A common guideline is that commercial rent should be no more than 5% to 10% of your gross monthly revenue. If your business brings in $50,000 a month, your rent should ideally be $2,500 to $5,000. Going above 10% starts to strain most businesses, and above 15% puts you in risky territory.</p>
        <p>Of course, this varies by industry. Restaurants and retail stores often spend more on rent because location is critical to foot traffic. Service businesses and online companies can usually keep rent lower. The key is to know your ratio and make a conscious decision rather than signing a lease based on how the space looks.</p>

        <h2 id="total-lease-cost">Think About Total Lease Cost</h2>
        <p>Monthly rent is just one part of the picture. Before you sign, add up the total lease cost including the security deposit, any buildout costs, moving expenses, and the full rent over the lease term. A $3,000 per month lease for 3 years costs $108,000 in rent alone. Add a $6,000 deposit and $15,000 in buildout, and you are committing to nearly $130,000. Seeing that total number helps you make a more informed decision.</p>

        <h2 id="cash-flow-impact">Watch Your Cash Flow</h2>
        <p>The most important number in this calculator is your monthly cash flow after rent. If that number is negative or barely positive, you have a problem. You need enough cash left over after rent and all other expenses to handle surprises, slow months, and growth opportunities. A good rule of thumb is to have at least 10% to 15% of revenue left as free cash flow after all expenses including rent.</p>

        <h2 id="faq">Frequently Asked Questions</h2>

        <details>
          <summary>What percentage of revenue should go to rent?</summary>
          <p>Most financial advisors recommend keeping commercial rent between 5% and 10% of gross monthly revenue. Retail businesses with high foot traffic may go up to 12% to 15%, but anything above that starts to squeeze margins. The lower your rent-to-revenue ratio, the more resilient your business is during slow periods.</p>
        </details>

        <details>
          <summary>Should I include NNN costs in my rent calculation?</summary>
          <p>Yes. Triple net (NNN) leases add property taxes, insurance, and maintenance on top of base rent. You need to factor in the total monthly occupancy cost, not just the base rent. Ask your landlord for an estimate of NNN charges before running the numbers.</p>
        </details>

        <details>
          <summary>What if the calculator says my rent is too high?</summary>
          <p>You have a few options. Negotiate with the landlord for a lower rate, look for a smaller space, consider a different location, or explore shared office or coworking arrangements. You can also negotiate a graduated lease where rent starts lower and increases over time as your business grows.</p>
        </details>

        <details>
          <summary>How much should I budget for a security deposit?</summary>
          <p>Commercial security deposits are typically 1 to 3 months of rent. Landlords may require more if your business is new or if you have limited credit history. Some landlords accept a letter of credit instead of cash, which frees up working capital.</p>
        </details>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What percentage of revenue should go to rent?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most financial advisors recommend keeping commercial rent between 5% and 10% of gross monthly revenue. Retail businesses with high foot traffic may go up to 12% to 15%."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Should I include NNN costs in my rent calculation?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Triple net (NNN) leases add property taxes, insurance, and maintenance on top of base rent. You need to factor in the total monthly occupancy cost."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What if the calculator says my rent is too high?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can negotiate with the landlord for a lower rate, look for a smaller space, consider a different location, or explore shared office arrangements."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How much should I budget for a security deposit?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Commercial security deposits are typically 1 to 3 months of rent. Some landlords accept a letter of credit instead of cash."
                  }
                }
              ]
            })
          }}
        />

        <h2 id="sources">Sources</h2>
        <ul>
          <li><a href="https://www.sba.gov/business-guide/launch-your-business/pick-your-business-location" target="_blank" rel="noopener noreferrer">SBA - Pick Your Business Location</a></li>
          <li><a href="https://www.score.org/resource/guide-finding-right-small-business-space" target="_blank" rel="noopener noreferrer">SCORE - Guide to Finding the Right Small Business Space</a></li>
          <li><a href="https://www.naiop.org/research-and-publications" target="_blank" rel="noopener noreferrer">NAIOP - Commercial Real Estate Research</a></li>
        </ul>

      </article>
    </div>
  );
}
