"use client";

import { useState } from "react";
import { Percent } from "lucide-react";

export default function ProfitMarginCalculator() {
  const [revenue, setRevenue] = useState(100000);
  const [cogs, setCogs] = useState(40000);
  const [expenses, setExpenses] = useState(35000);

  const grossProfit = revenue - cogs;
  const grossMargin = revenue > 0 ? (grossProfit / revenue) * 100 : 0;
  const netProfit = grossProfit - expenses;
  const netMargin = revenue > 0 ? (netProfit / revenue) * 100 : 0;
  const markup = cogs > 0 ? (grossProfit / cogs) * 100 : 0;

  const fmt = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Annual Revenue</span>
            <input type="number" value={revenue} onChange={(e) => setRevenue(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500" min={0} step={1000} />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Cost of Goods Sold (COGS)</span>
            <input type="number" value={cogs} onChange={(e) => setCogs(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500" min={0} step={1000} />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Operating Expenses (rent, payroll, etc.)</span>
            <input type="number" value={expenses} onChange={(e) => setExpenses(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500" min={0} step={1000} />
          </label>
        </div>
        <div className="space-y-4">
          <div className="bg-blue-50 rounded-lg p-5">
            <p className="text-sm text-gray-500">Gross Profit</p>
            <p className="text-2xl font-bold text-gray-900">{fmt(grossProfit)}</p>
            <p className="text-sm font-semibold text-blue-600">{grossMargin.toFixed(1)}% gross margin</p>
          </div>
          <div className={`${netProfit >= 0 ? "bg-green-50" : "bg-red-50"} rounded-lg p-5`}>
            <p className="text-sm text-gray-500">Net Profit</p>
            <p className={`text-2xl font-bold ${netProfit >= 0 ? "text-green-700" : "text-red-700"}`}>{fmt(netProfit)}</p>
            <p className={`text-sm font-semibold ${netProfit >= 0 ? "text-green-600" : "text-red-600"}`}>{netMargin.toFixed(1)}% net margin</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-5">
            <p className="text-sm text-gray-500">Markup on COGS</p>
            <p className="text-xl font-bold text-gray-900">{markup.toFixed(1)}%</p>
          </div>
          {netMargin < 5 && netMargin >= 0 && (
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
              <p className="text-sm text-amber-700 font-medium">Your net margin is thin. Taking on MCA debt with daily payments could push you into the red.</p>
            </div>
          )}
          {netProfit < 0 && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
              <p className="text-sm text-red-700 font-medium">You are losing money. Fix profitability before taking on any debt.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
