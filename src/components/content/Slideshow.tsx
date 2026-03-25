"use client";

import { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface Slide {
  icon: React.ReactNode;
  title: string;
  body: React.ReactNode;
  highlight?: {
    label: string;
    value: string;
    color: "red" | "blue" | "green" | "amber";
  };
}

interface SlideshowProps {
  title: string;
  slides: Slide[];
}

const highlightColors = {
  red: "bg-red-50 border-red-200 text-red-700",
  blue: "bg-blue-50 border-blue-200 text-blue-700",
  green: "bg-green-50 border-green-200 text-green-700",
  amber: "bg-amber-50 border-amber-200 text-amber-700",
};

export default function Slideshow({ title, slides }: SlideshowProps) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => Math.min(c + 1, slides.length - 1));
  }, [slides.length]);

  const prev = useCallback(() => {
    setCurrent((c) => Math.max(c - 1, 0));
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [next, prev]);

  const slide = slides[current];
  const progress = ((current + 1) / slides.length) * 100;

  return (
    <div className="my-10 not-prose">
      <div className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden shadow-sm">
        {/* Header */}
        <div className="bg-gray-50 px-6 py-3 flex items-center justify-between border-b border-gray-200">
          <span className="text-sm font-semibold text-gray-600">{title}</span>
          <span className="text-sm text-gray-400">{current + 1} / {slides.length}</span>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-gray-100 h-1">
          <div
            className="bg-blue-600 h-1 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Slide content */}
        <div className="px-8 py-10 md:px-12 md:py-14 min-h-[320px] flex flex-col items-center text-center">
          <div className="text-5xl mb-6">{slide.icon}</div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{slide.title}</h3>
          <div className="text-gray-600 text-lg leading-relaxed max-w-2xl">{slide.body}</div>

          {slide.highlight && (
            <div className={`mt-6 px-6 py-4 rounded-xl border-2 ${highlightColors[slide.highlight.color]}`}>
              <p className="text-sm font-medium mb-1">{slide.highlight.label}</p>
              <p className="text-2xl font-bold">{slide.highlight.value}</p>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="px-6 py-4 flex items-center justify-between border-t border-gray-200 bg-gray-50">
          <button
            onClick={prev}
            disabled={current === 0}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-200 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </button>

          {/* Dot indicators */}
          <div className="flex items-center gap-1.5">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i === current ? "bg-blue-600" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            disabled={current === slides.length - 1}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-blue-600 hover:bg-blue-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
