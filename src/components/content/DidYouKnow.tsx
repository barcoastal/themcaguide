import { Lightbulb } from "lucide-react";

interface DidYouKnowProps {
  children: React.ReactNode;
}

export default function DidYouKnow({ children }: DidYouKnowProps) {
  return (
    <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6 my-8 not-prose">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
          <Lightbulb className="w-5 h-5 text-amber-600" />
        </div>
        <div>
          <p className="font-bold text-amber-900 text-sm uppercase tracking-wide mb-1">Did You Know?</p>
          <div className="text-amber-800 text-sm leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
}
