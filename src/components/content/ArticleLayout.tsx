"use client";

import { useEffect, useState } from "react";

export default function ArticleLayout({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const article = document.querySelector("article");
      if (!article) return;
      const rect = article.getBoundingClientRect();
      const total = article.scrollHeight - window.innerHeight;
      const current = -rect.top;
      setProgress(Math.min(100, Math.max(0, (current / total) * 100)));
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Reading progress bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-gray-100">
        <div
          className="h-1 bg-blue-600 transition-all duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>
      {children}
    </>
  );
}
