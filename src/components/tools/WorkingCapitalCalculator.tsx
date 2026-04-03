"use client";

import { useState } from "react";

export default function WorkingCapitalCalculator() {
  const [cash, setCash] = useState(25000);
  const [accountsReceivable, setAccountsReceivable] = useState(15000);
  const [inventory, setInventory] = useState(10000);
  const [accountsPayable, setAccountsPayable] = useState(12000);
  const [shortTermDebt, setShortTermDebt] = useState(8000);
  const [accruedExpenses, setAccruedExpenses] = useState(5000);
  const [dailyOperatingCosts, setDailyOperatingCosts] = useState(1500);

  const fmt = (n: number) =>
    n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

  const currentAssets = cash + accountsReceivable + inventory;
  const currentLiabilities = accountsPayable + shortTermDebt + accruedExpenses;
  const workingCapital = currentAssets - currentLiabilities;
  const currentRatio = currentLiabilities > 0 ? currentAssets / currentLiabilities : 0;
  const quickAssets = cash + accountsReceivable;
  const quickRatio = currentLiabilities > 0 ? quickAssets / currentLiabilities : 0;
  const daysCovered = dailyOperatingCosts > 0 ? Math.floor(workingCapital / dailyOperatingCosts) : 0;

  let healthLabel: string;
  let healthColor: string;
  let healthBg: string;
  let assessment: string;

  if (currentRatio >= 2.0 && workingCapital > 0) {
    healthLabel = "Strong";
    healthColor = "text-green-600";
    healthBg = "bg-green-50 border-green-200";
    assessment = "Your working capital position is strong. You have a comfortable cushion to cover short-term obligations and unexpected expenses. This also puts you in a good position to negotiate favorable terms with suppliers and lenders.";
  } else if (currentRatio >= 1.2 && workingCapital > 0) {
    healthLabel = "Adequate";
    healthColor = "text-yellow-600";
    healthBg = "bg-yellow-50 border-yellow-200";
    assessment = "Your working capital is adequate but leaves limited room for surprises. A slow month or an unexpected expense could create a cash crunch. Consider building a larger cash reserve or reducing short-term liabilities.";
  } else if (currentRatio >= 1.0 && workingCapital >= 0) {
    healthLabel = "Tight";
    healthColor = "text-orange-600";
    healthBg = "bg-orange-50 border-orange-200";
    assessment = "Your working capital is very tight. You are covering your short-term obligations, but there is almost no margin for error. Prioritize collecting receivables faster and negotiating longer payment terms with vendors.";
  } else {
    healthLabel = "Critical";
    healthColor = "text-red-600";
    healthBg = "bg-red-50 border-red-200";
    assessment = "Your current liabilities exceed your current assets. This means you may struggle to pay bills on time. Immediate action is needed. Look into short-term financing, accelerate collections, or reduce expenses.";
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Current Assets</p>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Cash and Bank Balances</span>
            <input type="number" value={cash} onChange={(e) => setCash(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500" min={0} step={1000} />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Accounts Receivable</span>
            <input type="number" value={accountsReceivable} onChange={(e) => setAccountsReceivable(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500" min={0} step={1000} />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Inventory</span>
            <input type="number" value={inventory} onChange={(e) => setInventory(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500" min={0} step={1000} />
          </label>

          <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide pt-4">Current Liabilities</p>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Accounts Payable</span>
            <input type="number" value={accountsPayable} onChange={(e) => setAccountsPayable(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500" min={0} step={1000} />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Short-Term Debt</span>
            <input type="number" value={shortTermDebt} onChange={(e) => setShortTermDebt(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500" min={0} step={1000} />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Accrued Expenses</span>
            <input type="number" value={accruedExpenses} onChange={(e) => setAccruedExpenses(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500" min={0} step={1000} />
          </label>

          <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide pt-4">Operating Costs</p>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Average Daily Operating Costs</span>
            <input type="number" value={dailyOperatingCosts} onChange={(e) => setDailyOperatingCosts(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500" min={0} step={100} />
          </label>
        </div>
        <div>
          <div className="bg-blue-50 rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Results</h3>
            <div><p className="text-sm text-gray-500">Working Capital</p><p className={`text-2xl font-bold ${workingCapital >= 0 ? "text-gray-900" : "text-red-600"}`}>{fmt(workingCapital)}</p></div>
            <div><p className="text-sm text-gray-500">Current Ratio</p><p className="text-2xl font-bold text-gray-900">{currentRatio.toFixed(2)}x</p></div>
            <div><p className="text-sm text-gray-500">Quick Ratio</p><p className="text-xl font-semibold text-gray-900">{quickRatio.toFixed(2)}x</p></div>
            <div><p className="text-sm text-gray-500">Days of Operations Covered</p><p className="text-xl font-semibold text-gray-900">{daysCovered > 0 ? `${daysCovered} days` : "0 days"}</p></div>
            <div><p className="text-sm text-gray-500">Health Assessment</p><p className={`text-2xl font-bold ${healthColor}`}>{healthLabel}</p></div>
          </div>

          <div className={`mt-4 border rounded-lg p-5 ${healthBg}`}>
            <h4 className="font-semibold text-gray-900 mb-2">Assessment</h4>
            <p className="text-sm text-gray-700">{assessment}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
