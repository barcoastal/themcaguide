import { CheckCircle2 } from "lucide-react";

interface KeyTakeawaysProps {
  items: string[];
}

export default function KeyTakeaways({ items }: KeyTakeawaysProps) {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8 not-prose">
      <h2 className="text-lg font-bold text-blue-900 mb-4 flex items-center gap-2">
        <CheckCircle2 className="w-5 h-5 text-blue-600" />
        Key Takeaways
      </h2>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
