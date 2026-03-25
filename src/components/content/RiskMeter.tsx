import { AlertTriangle, ShieldCheck, ShieldAlert } from "lucide-react";

interface RiskMeterProps {
  level: "low" | "medium" | "high" | "very-high";
  label: string;
}

const config = {
  low: { width: "w-1/4", color: "bg-green-500", bg: "bg-green-50", border: "border-green-200", icon: ShieldCheck, iconColor: "text-green-600", text: "Low Risk" },
  medium: { width: "w-2/4", color: "bg-yellow-500", bg: "bg-yellow-50", border: "border-yellow-200", icon: AlertTriangle, iconColor: "text-yellow-600", text: "Medium Risk" },
  high: { width: "w-3/4", color: "bg-orange-500", bg: "bg-orange-50", border: "border-orange-200", icon: ShieldAlert, iconColor: "text-orange-600", text: "High Risk" },
  "very-high": { width: "w-full", color: "bg-red-500", bg: "bg-red-50", border: "border-red-200", icon: ShieldAlert, iconColor: "text-red-600", text: "Very High Risk" },
};

export default function RiskMeter({ level, label }: RiskMeterProps) {
  const c = config[level];
  const Icon = c.icon;

  return (
    <div className={`${c.bg} ${c.border} border-2 rounded-2xl p-6 my-8 not-prose`}>
      <div className="flex items-center gap-3 mb-3">
        <Icon className={`w-6 h-6 ${c.iconColor}`} />
        <span className="font-bold text-gray-900">{label}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
        <div className={`${c.color} ${c.width} h-4 rounded-full transition-all duration-500`} />
      </div>
      <p className={`text-sm font-semibold ${c.iconColor}`}>{c.text}</p>
    </div>
  );
}
