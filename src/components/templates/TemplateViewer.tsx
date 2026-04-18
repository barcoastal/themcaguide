"use client";
import { useState } from "react";

interface TemplateViewerProps {
  title: string;
  template: string;
}

export default function TemplateViewer({ title, template }: TemplateViewerProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(template);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="my-8 rounded-2xl border-2 border-slate-200 bg-white overflow-hidden">
      <div className="flex items-center justify-between px-6 py-4 bg-slate-50 border-b border-slate-200">
        <h2 className="text-lg font-bold text-slate-900 m-0">{title}</h2>
        <button
          onClick={handleCopy}
          className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
        >
          {copied ? "Copied!" : "Copy template"}
        </button>
      </div>
      <pre className="p-6 text-sm text-slate-800 whitespace-pre-wrap font-mono bg-white overflow-x-auto">{template}</pre>
    </div>
  );
}
