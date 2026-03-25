import { AlertTriangle, Lightbulb, Info } from "lucide-react";

interface CalloutBoxProps {
  type: "warning" | "tip" | "info";
  title?: string;
  children: React.ReactNode;
}

const styles = {
  warning: { bg: "bg-amber-50", border: "border-amber-400", icon: AlertTriangle, iconColor: "text-amber-600", text: "text-amber-800" },
  tip: { bg: "bg-green-50", border: "border-green-400", icon: Lightbulb, iconColor: "text-green-600", text: "text-green-800" },
  info: { bg: "bg-blue-50", border: "border-blue-400", icon: Info, iconColor: "text-blue-600", text: "text-blue-800" },
};

export default function CalloutBox({ type, title, children }: CalloutBoxProps) {
  const s = styles[type];
  const Icon = s.icon;
  return (
    <div className={`${s.bg} ${s.border} border-l-4 rounded-r-xl p-5 my-6 not-prose`}>
      {title && (
        <p className={`${s.text} font-semibold mb-2 flex items-center gap-2`}>
          <Icon className={`w-5 h-5 ${s.iconColor}`} />
          {title}
        </p>
      )}
      <div className={`${s.text} text-sm leading-relaxed`}>{children}</div>
    </div>
  );
}
