"use client";
import { useMemo, useState } from "react";
import { lawsuits, LawsuitRecord } from "./tracker-data";

const STATUS_LABELS: Record<LawsuitRecord["status"], string> = {
  pending: "Pending",
  dismissed: "Dismissed",
  settled: "Settled",
  judgment: "Judgment",
  appeal: "Appeal",
  injunction: "Injunction",
  "consent-decree": "Consent Decree",
};

const STATUS_COLORS: Record<LawsuitRecord["status"], string> = {
  pending: "bg-yellow-100 text-yellow-900",
  dismissed: "bg-slate-100 text-slate-700",
  settled: "bg-green-100 text-green-900",
  judgment: "bg-red-100 text-red-900",
  appeal: "bg-purple-100 text-purple-900",
  injunction: "bg-orange-100 text-orange-900",
  "consent-decree": "bg-blue-100 text-blue-900",
};

const SOURCE_LABELS: Record<LawsuitRecord["sourceType"], string> = {
  "ny-ag": "NY Attorney General",
  ftc: "FTC",
  cfpb: "CFPB",
  appellate: "Appellate Court",
  "news-investigation": "News Investigation",
  "state-ag": "State Attorney General",
};

export default function Tracker() {
  const [lenderFilter, setLenderFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("");
  const [sourceFilter, setSourceFilter] = useState<string>("");

  const lenders = useMemo(() => {
    const set = new Set(lawsuits.map((l) => l.lender));
    return Array.from(set).sort();
  }, []);

  const filtered = useMemo(() => {
    return lawsuits.filter((l) => {
      if (lenderFilter && l.lender !== lenderFilter) return false;
      if (statusFilter && l.status !== statusFilter) return false;
      if (sourceFilter && l.sourceType !== sourceFilter) return false;
      return true;
    });
  }, [lenderFilter, statusFilter, sourceFilter]);

  return (
    <div>
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <label className="block">
          <span className="block text-sm font-medium text-slate-700 mb-1">
            Filter by lender
          </span>
          <select
            value={lenderFilter}
            onChange={(e) => setLenderFilter(e.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All lenders</option>
            {lenders.map((l) => (
              <option key={l} value={l}>
                {l}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="block text-sm font-medium text-slate-700 mb-1">
            Filter by status
          </span>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All statuses</option>
            {Object.entries(STATUS_LABELS).map(([k, v]) => (
              <option key={k} value={k}>
                {v}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="block text-sm font-medium text-slate-700 mb-1">
            Filter by source
          </span>
          <select
            value={sourceFilter}
            onChange={(e) => setSourceFilter(e.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All sources</option>
            {Object.entries(SOURCE_LABELS).map(([k, v]) => (
              <option key={k} value={k}>
                {v}
              </option>
            ))}
          </select>
        </label>
      </div>

      {(lenderFilter || statusFilter || sourceFilter) && (
        <button
          onClick={() => {
            setLenderFilter("");
            setStatusFilter("");
            setSourceFilter("");
          }}
          className="text-sm text-blue-700 underline mb-4 block"
        >
          Clear all filters
        </button>
      )}

      <p className="text-sm text-slate-600 mb-4">
        Showing {filtered.length} of {lawsuits.length} tracked cases.
      </p>

      <div className="space-y-4">
        {filtered.map((l, i) => (
          <div
            key={i}
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="flex items-start justify-between gap-4 mb-2">
              <h3 className="text-lg font-semibold text-slate-900">
                {l.caseName}
              </h3>
              <span
                className={`shrink-0 rounded-full text-xs px-3 py-1 font-medium ${STATUS_COLORS[l.status]}`}
              >
                {STATUS_LABELS[l.status]}
              </span>
            </div>
            <div className="text-sm text-slate-600 mb-3 flex flex-wrap gap-x-2 gap-y-1">
              <span className="font-medium text-slate-800">{l.lender}</span>
              <span>&middot;</span>
              <span>{l.court}</span>
              {l.filingDate && (
                <>
                  <span>&middot;</span>
                  <span>Filed {l.filingDate}</span>
                </>
              )}
              {l.caseNumber && (
                <>
                  <span>&middot;</span>
                  <span>No. {l.caseNumber}</span>
                </>
              )}
              <span>&middot;</span>
              <span className="text-slate-500">
                {SOURCE_LABELS[l.sourceType]}
              </span>
            </div>
            <p className="text-slate-700 mb-3 text-sm leading-relaxed">
              {l.summary}
            </p>
            <a
              href={l.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-700 underline hover:text-blue-900"
            >
              View primary source &rarr;
            </a>
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="text-slate-500 italic py-8 text-center">
            No cases match your filters.
          </p>
        )}
      </div>
    </div>
  );
}
