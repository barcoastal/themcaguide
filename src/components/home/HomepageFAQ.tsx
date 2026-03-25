import FAQ from "@/components/mdx/FAQ";
import { HelpCircle } from "lucide-react";

const faqItems = [
  { question: "What is a merchant cash advance?", answer: "A merchant cash advance (MCA) is a type of business financing where a company receives a lump sum of cash in exchange for a percentage of future credit card sales or revenue. It is technically a purchase of future receivables, not a loan." },
  { question: "How much does an MCA cost?", answer: "MCA costs are expressed as a factor rate, typically between 1.1 and 1.5. For example, a factor rate of 1.3 on a $50,000 advance means you repay $65,000 total. The effective APR can range from 40% to over 350% depending on the repayment speed." },
  { question: "Can you negotiate MCA debt?", answer: "Yes, MCA debt can often be negotiated. Options include requesting a lower holdback percentage, settling for a reduced lump sum, or working with an MCA debt settlement company to negotiate on your behalf." },
  { question: "Is an MCA a loan?", answer: "Technically no. An MCA is structured as a purchase of future receivables, not a loan. This distinction means MCAs are not subject to the same regulations as traditional business loans, including usury laws in most states." },
  { question: "What happens if you default on an MCA?", answer: "Defaulting on an MCA can result in the provider enforcing a UCC lien on business assets, filing a confession of judgment (in states where allowed), freezing business bank accounts, or pursuing legal action." },
];

export default function HomepageFAQ() {
  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-center justify-center gap-3 mb-8">
        <HelpCircle className="w-8 h-8 text-blue-600" />
        <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
      </div>
      <FAQ items={faqItems} />
    </section>
  );
}
