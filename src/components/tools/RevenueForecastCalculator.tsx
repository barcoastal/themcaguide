"use client";

import { useState } from "react";

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export default function RevenueForecastCalculator() {
  const [month1, setMonth1] = useState(80000);
  const [month2, setMonth2] = useState(85000);
  const [month3, setMonth3] = useState(90000);
  const [growthRate, setGrowthRate] = useState(5);
  const [useSeasonal, setUseSeasonal] = useState(false);
  const [slowMonths, setSlowMonths] = useState<number[]>([]);
  const [marketingBoost, setMarketingBoost] = useState(0);

  const avgRevenue = (month1 + month2 + month3) / 3;
  const monthlyGrowth = growthRate / 100;
  const now = new Date();
  const startMonth = (now.getMonth() + 1) % 12;

  const projections: { name: string; projected: number; flat: number }[] = [];
  let current = avgRevenue;

  for (let i = 0; i < 12; i++) {
    const monthIndex = (startMonth + i) % 12;
    current = current * (1 + monthlyGrowth);
    let adjusted = current + marketingBoost;
    if (useSeasonal && slowMonths.includes(monthIndex)) {
      adjusted = adjusted * 0.75;
    }
    projections.push({
      name: MONTH_NAMES[monthIndex],
      projected: Math.round(adjusted),
      flat: Math.round(avgRevenue),
    });
  }

  const projectedAnnual = projections.reduce((sum, p) => sum + p.projected, 0);
  const flatAnnual = projections.reduce((sum, p) => sum + p.flat, 0);

  const fmt = (n: number) =>
    n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

  const toggleSlowMonth = (idx: number) => {
    setSlowMonths((prev) =>
      prev.includes(idx) ? prev.filter((m) => m !== idx) : [...prev, idx]
    );
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Month 1 Revenue (most recent)</span>
            <input
              type="number"
              value={month3}
              onChange={(e) => setMonth3(Number(e.target.value))}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500"
              min={0}
              step={1000}
            />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Month 2 Revenue</span>
            <input
              type="number"
              value={month2}
              onChange={(e) => setMonth2(Number(e.target.value))}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500"
              min={0}
              step={1000}
            />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Month 3 Revenue</span>
            <input
              type="number"
              value={month1}
              onChange={(e) => setMonth1(Number(e.target.value))}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500"
              min={0}
              step={1000}
            />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Monthly Growth Rate (%)</span>
            <input
              type="number"
              value={growthRate}
              onChange={(e) => setGrowthRate(Number(e.target.value))}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500"
              min={-50}
              max={100}
              step={0.5}
            />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Additional Monthly Revenue (marketing, new product, hiring)</span>
            <input
              type="number"
              value={marketingBoost}
              onChange={(e) => setMarketingBoost(Number(e.target.value))}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500"
              min={0}
              step={500}
            />
          </label>
          <div>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={useSeasonal}
                onChange={(e) => setUseSeasonal(e.target.checked)}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm font-medium text-gray-700">Apply seasonal adjustment</span>
            </label>
            {useSeasonal && (
              <div className="mt-2 grid grid-cols-3 sm:grid-cols-4 gap-2">
                {MONTH_NAMES.map((name, idx) => (
                  <button
                    key={name}
                    onClick={() => toggleSlowMonth(idx)}
                    className={`rounded-lg border px-2 py-1 text-xs transition-colors ${
                      slowMonths.includes(idx)
                        ? "border-orange-500 bg-orange-50 text-orange-700 font-medium"
                        : "border-gray-300 bg-white text-gray-700 hover:border-gray-400"
                    }`}
                  >
                    {name.slice(0, 3)}
                  </button>
                ))}
                <p className="col-span-full text-xs text-gray-500 mt-1">Select your slow months (revenue reduced by 25%)</p>
              </div>
            )}
          </div>
        </div>
        <div className="bg-blue-50 rounded-lg p-6 space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">12-Month Revenue Projection</h3>
          <div>
            <p className="text-sm text-gray-500">Projected Annual Revenue</p>
            <p className="text-2xl font-bold text-gray-900">{fmt(projectedAnnual)}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Flat Growth Annual Revenue</p>
            <p className="text-xl font-semibold text-gray-500">{fmt(flatAnnual)}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Projected vs Flat Difference</p>
            <p className={`text-xl font-semibold ${projectedAnnual >= flatAnnual ? "text-green-600" : "text-red-600"}`}>
              {projectedAnnual >= flatAnnual ? "+" : ""}{fmt(projectedAnnual - flatAnnual)}
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-blue-200">
                  <th className="text-left py-2 text-gray-600 font-medium">Month</th>
                  <th className="text-right py-2 text-gray-600 font-medium">Projected</th>
                  <th className="text-right py-2 text-gray-600 font-medium">Flat</th>
                </tr>
              </thead>
              <tbody>
                {projections.map((row) => (
                  <tr key={row.name} className="border-b border-blue-100">
                    <td className="py-1.5 text-gray-700">{row.name}</td>
                    <td className="py-1.5 text-right font-medium text-gray-900">{fmt(row.projected)}</td>
                    <td className="py-1.5 text-right text-gray-500">{fmt(row.flat)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
