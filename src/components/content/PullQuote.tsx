import { Quote } from "lucide-react";

interface PullQuoteProps {
  children: React.ReactNode;
}

export default function PullQuote({ children }: PullQuoteProps) {
  return (
    <blockquote className="my-8 not-prose relative bg-gradient-to-r from-blue-50 to-white border-l-4 border-blue-500 rounded-r-2xl p-6 pl-8">
      <Quote className="w-8 h-8 text-blue-200 absolute top-4 right-4" />
      <div className="text-xl font-semibold text-blue-900 leading-relaxed italic">{children}</div>
    </blockquote>
  );
}
