"use client";

import { useState } from "react";

const INDUSTRY_MULTIPLES: Record<string, { revenueLow: number; revenueHigh: number; profitLow: number; profitHigh: number }> = {
  retail: { revenueLow: 0.3, revenueHigh: 0.75, profitLow: 2.0, profitHigh: 4.0 },
  restaurant: { revenueLow: 0.25, revenueHigh: 0.5, profitLow: 1.5, profitHigh: 3.0 },
  services: { revenueLow: 0.5, revenueHigh: 1.0, profitLow: 2.5, profitHigh: 5.0 },
  tech: { revenueLow: 1.0, revenueHigh: 3.0, profitLow: 5.0, profitHigh: 12.0 },
  construction: { revenueLow: 0.25, revenueHigh: 0.65, profitLow: 2.0, profitHigh: 4.5 },
  healthcare: { revenueLow: 0.5, revenueHigh: 1.5, profitLow: 3.0, profitHigh: 7.0 },
  other: { revenueLow: 0.4, revenueHigh: 1.0, profitLow: 2.5, profitHigh: 5.0 },
};

function getYearsMultiplier(years: number): number {
  if (years >= 10) return 1.15;
  if (years >= 5) return 1.05;
  if (years >= 3) return 1.0;
  if (years >= 1) return 0.85;
  return 0.7;
}

export default function BusinessValuationEstimator() {
  const [annualRevenue, setAnnualRevenue] = useState(500000);
  const [annualProfit, setAnnualProfit] = useState(75000);
  const [industry, setIndustry] = useState("services");
  const [yearsInBusiness, setYearsInBusiness] = useState(5);

  const multiples = INDUSTRY_MULTIPLES[industry];
  const yearsMult = getYearsMultiplier(yearsInBusiness);

  const revLow = Math.round(annualRevenue * multiples.revenueLow * yearsMult);
  const revHigh = Math.round(annualRevenue * multiples.revenueHigh * yearsMult);
  const revMid = Math.round((revLow + revHigh) / 2);

  const profitLow = Math.round(annualProfit * multiples.profitLow * yearsMult);
  const profitHigh = Math.round(annualProfit * multiples.profitHigh * yearsMult);
  const profitMid = Math.round((profitLow + profitHigh) / 2);

  const overallLow = Math.min(revLow, profitLow);
  const overallHigh = Math.max(revHigh, profitHigh);
  const overallMid = Math.round((overallLow + overallHigh) / 2);

  const fmt = (n: number) =>
    n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Annual Revenue</span>
            <input
              type="number"
              value={annualRevenue}
              onChange={(e) => setAnnualRevenue(Number(e.target.value))}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500"
              min={0}
              step={10000}
            />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Annual Profit (Net Income)</span>
            <input
              type="number"
              value={annualProfit}
              onChange={(e) => setAnnualProfit(Number(e.target.value))}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500"
              min={0}
              step={5000}
            />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Industry</span>
            <select
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="retail">Retail</option>
              <option value="restaurant">Restaurant / Food Service</option>
              <option value="services">Professional Services</option>
              <option value="tech">Technology</option>
              <option value="construction">Construction</option>
              <option value="healthcare">Healthcare</option>
              <option value="other">Other</option>
            </select>
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Years in Business</span>
            <input
              type="number"
              value={yearsInBusiness}
              onChange={(e) => setYearsInBusiness(Number(e.target.value))}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500"
              min={0}
              max={100}
            />
          </label>
        </div>
        <div className="bg-blue-50 rounded-lg p-6 space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Estimated Valuation</h3>
          <div>
            <p className="text-sm text-gray-500">Overall Estimated Range</p>
            <p className="text-2xl font-bold text-gray-900">
              {fmt(overallLow)} to {fmt(overallHigh)}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Midpoint Estimate</p>
            <p className="text-xl font-semibold text-blue-600">{fmt(overallMid)}</p>
          </div>
          <hr className="border-blue-200" />
          <div>
            <p className="text-sm text-gray-500">Revenue Multiple Valuation ({multiples.revenueLow}x to {multiples.revenueHigh}x revenue)</p>
            <p className="text-lg font-semibold text-gray-900">{fmt(revLow)} to {fmt(revHigh)}</p>
            <p className="text-xs text-gray-500">Midpoint: {fmt(revMid)}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Profit Multiple Valuation ({multiples.profitLow}x to {multiples.profitHigh}x earnings)</p>
            <p className="text-lg font-semibold text-gray-900">{fmt(profitLow)} to {fmt(profitHigh)}</p>
            <p className="text-xs text-gray-500">Midpoint: {fmt(profitMid)}</p>
          </div>
          <hr className="border-blue-200" />
          <div>
            <p className="text-sm font-medium text-gray-700 mb-1">What Affects Valuation</p>
            <ul className="text-xs text-gray-600 space-y-1">
              <li>&#8226; Consistent revenue growth increases multiples</li>
              <li>&#8226; Customer concentration risk lowers valuation</li>
              <li>&#8226; Recurring revenue commands higher multiples</li>
              <li>&#8226; Owner dependency reduces attractiveness to buyers</li>
              <li>&#8226; Strong profit margins raise all estimates</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
