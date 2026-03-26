import Link from "next/link";
import { Calendar, TrendingUp, RefreshCw, Scale, Building2, FileWarning } from "lucide-react";
import { ReactNode } from "react";

export default function TopRisks() {
  const risks: { icon: ReactNode; title: string; description: string }[] = [
    { icon: <Calendar className="w-6 h-6 text-red-600" />, title: "Daily Payments", description: "Money is taken from your account every single day, even when business is slow." },
    { icon: <TrendingUp className="w-6 h-6 text-red-600" />, title: "Sky-High Costs", description: "Effective APR can be 40% to 350%. way more than any bank loan." },
    { icon: <RefreshCw className="w-6 h-6 text-red-600" />, title: "Debt Stacking", description: "Many businesses take a second MCA to pay the first. This is a dangerous spiral." },
    { icon: <Scale className="w-6 h-6 text-red-600" />, title: "Confession of Judgment", description: "Some MCAs make you sign away your right to fight in court if there's a dispute." },
    { icon: <Building2 className="w-6 h-6 text-red-600" />, title: "Bank Account Freeze", description: "Default on an MCA and they may freeze your business bank account." },
    { icon: <FileWarning className="w-6 h-6 text-red-600" />, title: "UCC Liens", description: "MCAs file liens on your business assets. this can block you from getting other funding." },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">6 Risks Every Business Owner Should Know</h2>
          <p className="mt-3 text-lg text-gray-500">Before you sign, understand what you&apos;re getting into</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {risks.map((risk) => (
            <div key={risk.title} className="bg-red-50 rounded-2xl p-6 border border-red-100">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-3">
                {risk.icon}
              </div>
              <h3 className="font-bold text-gray-900 text-lg">{risk.title}</h3>
              <p className="text-gray-600 text-sm mt-2 leading-relaxed">{risk.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/guides/how-to-get-out-of-mca-debt" className="text-blue-600 font-semibold hover:underline">
            Already in MCA debt? Here&apos;s how to get out &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
