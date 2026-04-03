"use client";

import { useState } from "react";

interface Invoice {
  id: number;
  amount: number;
  bucket: "current" | "30" | "60" | "90";
}

const BUCKET_LABELS: Record<string, string> = {
  current: "Current (not yet due)",
  "30": "1 to 30 days past due",
  "60": "31 to 60 days past due",
  "90": "61+ days past due",
};

const COLLECTION_RATES: Record<string, number> = {
  current: 0.98,
  "30": 0.92,
  "60": 0.80,
  "90": 0.55,
};

let nextId = 1;

export default function InvoiceAgingCalculator() {
  const [mode, setMode] = useState<"invoices" | "totals">("totals");
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [newAmount, setNewAmount] = useState(0);
  const [newBucket, setNewBucket] = useState<Invoice["bucket"]>("current");

  const [totalCurrent, setTotalCurrent] = useState(50000);
  const [total30, setTotal30] = useState(20000);
  const [total60, setTotal60] = useState(8000);
  const [total90, setTotal90] = useState(3000);

  const [annualRevenue, setAnnualRevenue] = useState(500000);

  const addInvoice = () => {
    if (newAmount <= 0) return;
    setInvoices((prev) => [...prev, { id: nextId++, amount: newAmount, bucket: newBucket }]);
    setNewAmount(0);
  };

  const removeInvoice = (id: number) => {
    setInvoices((prev) => prev.filter((inv) => inv.id !== id));
  };

  let buckets: Record<string, number>;
  if (mode === "totals") {
    buckets = { current: totalCurrent, "30": total30, "60": total60, "90": total90 };
  } else {
    buckets = { current: 0, "30": 0, "60": 0, "90": 0 };
    invoices.forEach((inv) => {
      buckets[inv.bucket] += inv.amount;
    });
  }

  const totalOutstanding = Object.values(buckets).reduce((s, v) => s + v, 0);
  const estimatedCollectable = Object.entries(buckets).reduce(
    (sum, [key, val]) => sum + val * COLLECTION_RATES[key],
    0
  );
  const dailyRevenue = annualRevenue / 365;
  const dso = dailyRevenue > 0 ? Math.round(totalOutstanding / dailyRevenue) : 0;

  let dsoRating: string;
  let dsoColor: string;
  let recommendation: string;

  if (dso <= 30) {
    dsoRating = "Excellent";
    dsoColor = "text-green-600";
    recommendation = "Your collections are strong. Keep up your current invoicing and follow-up practices.";
  } else if (dso <= 45) {
    dsoRating = "Good";
    dsoColor = "text-blue-600";
    recommendation = "Your DSO is reasonable. Consider tightening payment terms or offering early payment discounts to improve further.";
  } else if (dso <= 60) {
    dsoRating = "Needs Attention";
    dsoColor = "text-orange-600";
    recommendation = "Your DSO is above average. Review your invoicing process and consider implementing automated payment reminders.";
  } else {
    dsoRating = "Critical";
    dsoColor = "text-red-600";
    recommendation = "Your DSO is high and likely hurting your cash flow. Consider hiring a collections specialist or using invoice factoring to accelerate cash inflow.";
  }

  const fmt = (n: number) =>
    n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8">
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setMode("totals")}
          className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
            mode === "totals" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Enter Totals
        </button>
        <button
          onClick={() => setMode("invoices")}
          className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
            mode === "invoices" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Add Individual Invoices
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          {mode === "totals" ? (
            <>
              <label className="block">
                <span className="text-sm font-medium text-gray-700">Current (not yet due)</span>
                <input type="number" value={totalCurrent} onChange={(e) => setTotalCurrent(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500" min={0} step={1000} />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-gray-700">1 to 30 Days Past Due</span>
                <input type="number" value={total30} onChange={(e) => setTotal30(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500" min={0} step={1000} />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-gray-700">31 to 60 Days Past Due</span>
                <input type="number" value={total60} onChange={(e) => setTotal60(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500" min={0} step={1000} />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-gray-700">61+ Days Past Due</span>
                <input type="number" value={total90} onChange={(e) => setTotal90(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500" min={0} step={1000} />
              </label>
            </>
          ) : (
            <>
              <div className="flex gap-2 items-end">
                <label className="block flex-1">
                  <span className="text-sm font-medium text-gray-700">Amount</span>
                  <input type="number" value={newAmount} onChange={(e) => setNewAmount(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500" min={0} step={100} />
                </label>
                <label className="block flex-1">
                  <span className="text-sm font-medium text-gray-700">Status</span>
                  <select value={newBucket} onChange={(e) => setNewBucket(e.target.value as Invoice["bucket"])} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500">
                    <option value="current">Current</option>
                    <option value="30">30 days</option>
                    <option value="60">60 days</option>
                    <option value="90">90+ days</option>
                  </select>
                </label>
                <button onClick={addInvoice} className="rounded-lg bg-blue-600 text-white px-4 py-3 text-lg font-medium hover:bg-blue-700 transition-colors">
                  Add
                </button>
              </div>
              {invoices.length > 0 && (
                <div className="space-y-1 max-h-48 overflow-y-auto">
                  {invoices.map((inv) => (
                    <div key={inv.id} className="flex items-center justify-between bg-gray-50 rounded px-3 py-2 text-sm">
                      <span>{fmt(inv.amount)} - {BUCKET_LABELS[inv.bucket]}</span>
                      <button onClick={() => removeInvoice(inv.id)} className="text-red-500 hover:text-red-700 text-xs font-medium">Remove</button>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Annual Revenue (for DSO calculation)</span>
            <input type="number" value={annualRevenue} onChange={(e) => setAnnualRevenue(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500" min={0} step={10000} />
          </label>
        </div>

        <div className="bg-blue-50 rounded-lg p-6 space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Results</h3>
          <div>
            <p className="text-sm text-gray-500">Total Outstanding</p>
            <p className="text-2xl font-bold text-gray-900">{fmt(totalOutstanding)}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-2">Aging Breakdown</p>
            <div className="space-y-1 text-sm">
              {Object.entries(buckets).map(([key, val]) => {
                const pct = totalOutstanding > 0 ? ((val / totalOutstanding) * 100).toFixed(1) : "0.0";
                return (
                  <div key={key} className="flex justify-between">
                    <span className="text-gray-600">{BUCKET_LABELS[key]}</span>
                    <span className="font-medium text-gray-900">{fmt(val)} ({pct}%)</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-500">Estimated Collectable</p>
            <p className="text-xl font-semibold text-green-600">{fmt(Math.round(estimatedCollectable))}</p>
            <p className="text-xs text-gray-500">Based on typical collection rates by aging bucket</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Days Sales Outstanding (DSO)</p>
            <p className={`text-xl font-semibold ${dsoColor}`}>{dso} days ({dsoRating})</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Recommendation</p>
            <p className="text-sm text-gray-700">{recommendation}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
