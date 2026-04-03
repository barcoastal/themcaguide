import { Metadata } from "next";
import Link from "next/link";
import { Calculator, CalendarCheck, TrendingUp, Target, Scale, Percent, DollarSign, Layers, RefreshCw, FileText, ShieldCheck, Clock, CreditCard, Wallet, BarChart3, Building2, FileSearch, Users, Home, Receipt, Rocket, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Free Business Tools & Calculators",
  description: "28 free business calculators and tools. MCA cost calculators, loan eligibility checker, business valuation, payroll calculator, and more. No sign-up required.",
  alternates: {
    canonical: "https://themcaguide.com/tools",
  },
};

const tools = [
  { href: "/tools/mca-calculator", icon: Calculator, title: "MCA Cost Calculator", description: "See the true cost of any MCA offer. Enter factor rate, holdback, and funding amount.", color: "bg-blue-50 border-blue-200 hover:border-blue-400", iconColor: "text-blue-600" },
  { href: "/tools/mca-payoff-calculator", icon: CalendarCheck, title: "MCA Payoff Calculator", description: "Find out when you will finish paying off your MCA.", color: "bg-green-50 border-green-200 hover:border-green-400", iconColor: "text-green-600" },
  { href: "/tools/debt-comparison", icon: Scale, title: "MCA vs Loan Comparison", description: "Compare an MCA offer against a traditional business loan side by side.", color: "bg-purple-50 border-purple-200 hover:border-purple-400", iconColor: "text-purple-600" },
  { href: "/tools/cashflow-calculator", icon: TrendingUp, title: "Cash Flow Calculator", description: "Track your monthly revenue and expenses. Find out if you have a cash flow problem.", color: "bg-amber-50 border-amber-200 hover:border-amber-400", iconColor: "text-amber-600" },
  { href: "/tools/break-even-calculator", icon: Target, title: "Break-Even Calculator", description: "How many sales do you need each month to cover your costs?", color: "bg-red-50 border-red-200 hover:border-red-400", iconColor: "text-red-600" },
  { href: "/tools/profit-margin-calculator", icon: Percent, title: "Profit Margin Calculator", description: "See your gross margin, net margin, and markup. Know if your margins can handle MCA payments.", color: "bg-amber-50 border-amber-200 hover:border-amber-400", iconColor: "text-amber-600" },
  { href: "/tools/loan-payment-calculator", icon: Calculator, title: "Loan Payment Calculator", description: "Calculate monthly payments, total interest, and total cost on any business loan.", color: "bg-indigo-50 border-indigo-200 hover:border-indigo-400", iconColor: "text-indigo-600" },
  { href: "/tools/daily-revenue-calculator", icon: DollarSign, title: "Daily Revenue Impact Calculator", description: "See what your MCA holdback really costs you per day, per month, and how long until payoff.", color: "bg-pink-50 border-pink-200 hover:border-pink-400", iconColor: "text-pink-600" },
  { href: "/tools/mca-stacking-calculator", icon: Layers, title: "MCA Stacking Calculator", description: "Calculate the combined cost of multiple MCAs and see if your revenue can handle the payments.", color: "bg-red-50 border-red-200 hover:border-red-400", iconColor: "text-red-600" },
  { href: "/tools/mca-refinance-calculator", icon: RefreshCw, title: "MCA Refinance Calculator", description: "Compare your current MCA against a refinance offer to see if switching saves you money.", color: "bg-teal-50 border-teal-200 hover:border-teal-400", iconColor: "text-teal-600" },
  { href: "/tools/mca-vs-factoring-calculator", icon: Scale, title: "MCA vs Invoice Factoring", description: "Compare the cost of an MCA against invoice factoring side by side.", color: "bg-cyan-50 border-cyan-200 hover:border-cyan-400", iconColor: "text-cyan-600" },
  { href: "/tools/mca-affordability-calculator", icon: ShieldCheck, title: "MCA Affordability Calculator", description: "Enter your revenue and expenses to see if your business can handle an MCA payment.", color: "bg-emerald-50 border-emerald-200 hover:border-emerald-400", iconColor: "text-emerald-600" },
  { href: "/tools/mca-early-payoff-calculator", icon: Clock, title: "MCA Early Payoff Calculator", description: "See how much you save by paying off your MCA early with extra or lump sum payments.", color: "bg-violet-50 border-violet-200 hover:border-violet-400", iconColor: "text-violet-600" },
  { href: "/tools/factor-rate-to-apr", icon: Percent, title: "Factor Rate to APR Converter", description: "Convert any MCA factor rate to an effective APR so you can compare it to traditional loans.", color: "bg-orange-50 border-orange-200 hover:border-orange-400", iconColor: "text-orange-600" },
  { href: "/tools/mca-payment-schedule", icon: CalendarCheck, title: "MCA Payment Schedule", description: "Generate a full daily payment calendar for your MCA with running balance and payoff date.", color: "bg-sky-50 border-sky-200 hover:border-sky-400", iconColor: "text-sky-600" },
  { href: "/tools/loan-eligibility-checker", icon: FileText, title: "Loan Eligibility Checker", description: "Answer 5 questions to see which business loans you likely qualify for and estimated rates.", color: "bg-lime-50 border-lime-200 hover:border-lime-400", iconColor: "text-lime-600" },
  { href: "/tools/debt-to-revenue-calculator", icon: BarChart3, title: "Debt-to-Revenue Calculator", description: "Calculate your debt-to-revenue ratio and debt service coverage to see your financial health.", color: "bg-rose-50 border-rose-200 hover:border-rose-400", iconColor: "text-rose-600" },
  { href: "/tools/working-capital-calculator", icon: Wallet, title: "Working Capital Calculator", description: "Calculate your working capital, current ratio, and how many days of operations you can cover.", color: "bg-fuchsia-50 border-fuchsia-200 hover:border-fuchsia-400", iconColor: "text-fuchsia-600" },
  { href: "/tools/credit-score-estimator", icon: CreditCard, title: "Business Credit Score Estimator", description: "Answer a few questions to estimate your business credit score and see your financing options.", color: "bg-blue-50 border-blue-200 hover:border-blue-400", iconColor: "text-blue-600" },
  { href: "/tools/emergency-fund-calculator", icon: ShieldCheck, title: "Emergency Fund Calculator", description: "Find out how much your business needs in reserve and how long it would take to build it.", color: "bg-green-50 border-green-200 hover:border-green-400", iconColor: "text-green-600" },
  { href: "/tools/revenue-forecast-calculator", icon: TrendingUp, title: "Revenue Forecast Calculator", description: "Project your next 12 months of revenue based on recent trends and growth assumptions.", color: "bg-amber-50 border-amber-200 hover:border-amber-400", iconColor: "text-amber-600" },
  { href: "/tools/business-valuation-estimator", icon: Building2, title: "Business Valuation Estimator", description: "Estimate what your business is worth using revenue and profit multiples for your industry.", color: "bg-indigo-50 border-indigo-200 hover:border-indigo-400", iconColor: "text-indigo-600" },
  { href: "/tools/invoice-aging-calculator", icon: FileSearch, title: "Invoice Aging Calculator", description: "Track outstanding invoices by age and see how late payments are affecting your cash flow.", color: "bg-yellow-50 border-yellow-200 hover:border-yellow-400", iconColor: "text-yellow-600" },
  { href: "/tools/payroll-burden-calculator", icon: Users, title: "Payroll Burden Calculator", description: "Calculate the true cost of an employee including taxes, benefits, and overhead.", color: "bg-purple-50 border-purple-200 hover:border-purple-400", iconColor: "text-purple-600" },
  { href: "/tools/rent-affordability-calculator", icon: Home, title: "Rent Affordability Calculator", description: "See if your business can afford a lease based on your revenue and expenses.", color: "bg-stone-50 border-stone-200 hover:border-stone-400", iconColor: "text-stone-600" },
  { href: "/tools/sales-tax-calculator", icon: Receipt, title: "Sales Tax Calculator", description: "Look up sales tax rates by state and calculate tax on any sale amount.", color: "bg-teal-50 border-teal-200 hover:border-teal-400", iconColor: "text-teal-600" },
  { href: "/tools/startup-cost-estimator", icon: Rocket, title: "Startup Cost Estimator", description: "Answer 6 questions to estimate how much it costs to start your type of business.", color: "bg-pink-50 border-pink-200 hover:border-pink-400", iconColor: "text-pink-600" },
  { href: "/tools/should-i-take-mca-quiz", icon: HelpCircle, title: "Should I Take an MCA? Quiz", description: "Answer 8 questions to find out if a merchant cash advance is right for your situation.", color: "bg-red-50 border-red-200 hover:border-red-400", iconColor: "text-red-600" },
];

export default function ToolsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Free Business Tools</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">Every tool is 100% free. No sign-up required. Built for small business owners.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => {
          const Icon = tool.icon;
          return (
            <Link key={tool.href} href={tool.href} className={`group block ${tool.color} border-2 rounded-2xl p-6 hover:shadow-lg transition-all`}>
              <Icon className={`w-10 h-10 ${tool.iconColor} mb-4`} />
              <h2 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">{tool.title}</h2>
              <p className="text-sm text-gray-500 mt-2">{tool.description}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
