"use client";

import { useState } from "react";
import { DollarSign, AlertTriangle } from "lucide-react";

export default function DailyRevenueCalculator() {
  const [dailyRevenue, setDailyRevenue] = useState(3000);
  const [holdbackPercent, setHoldbackPercent] = useState(15);
  const [mcaBalance, setMcaBalance] = useState(50000);

  const dailyPayment = dailyRevenue * (holdbackPercent / 100);
  const monthlyPayment = dailyPayment * 22; // business days
  const yearlyPayment = dailyPayment * 260;
  const daysToPayoff = mcaBalance > 0 ? Math.ceil(mcaBalance / dailyPayment) : 0;
  const monthsToPayoff = (daysToPayoff / 22).toFixed(1);
  const revenueAfterMca = dailyRevenue - dailyPayment;
  const percentKept = ((revenueAfterMca / dailyRevenue) * 100).toFixed(0);

  const fmt = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Your Average Daily Revenue</span>
            <input type="number" value={dailyRevenue} onChange={(e) => setDailyRevenue(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500" min={100} step={100} />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">MCA Holdback Percentage (%)</span>
            <input type="number" value={holdbackPercent} onChange={(e) => setHoldbackPercent(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500" min={1} max={50} step={1} />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Total MCA Balance Owed</span>
            <input type="number" value={mcaBalance} onChange={(e) => setMcaBalance(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500" min={0} step={1000} />
          </label>
        </div>
        <div className="space-y-4">
          <div className="bg-red-50 rounded-lg p-5">
            <p className="text-sm text-gray-500">MCA Takes From You Daily</p>
            <p className="text-2xl font-bold text-red-600">{fmt(dailyPayment)}/day</p>
            <p className="text-sm text-red-500">{fmt(monthlyPayment)}/month &middot; {fmt(yearlyPayment)}/year</p>
          </div>
          <div className="bg-green-50 rounded-lg p-5">
            <p className="text-sm text-gray-500">What You Keep</p>
            <p className="text-2xl font-bold text-green-700">{fmt(revenueAfterMca)}/day</p>
            <p className="text-sm text-green-600">You keep {percentKept}% of your revenue</p>
          </div>
          <div className="bg-blue-50 rounded-lg p-5">
            <p className="text-sm text-gray-500">Days Until Payoff</p>
            <p className="text-2xl font-bold text-blue-700">{daysToPayoff} business days</p>
            <p className="text-sm text-blue-500">About {monthsToPayoff} months</p>
          </div>
          {holdbackPercent > 20 && (
            <div className="flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-lg p-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-amber-700 font-medium">A {holdbackPercent}% holdback is very aggressive. Most businesses struggle with anything over 15%. Consider negotiating this down.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
