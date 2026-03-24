"use client";

import { useState } from "react";
import { calculateMcaPayoff } from "@/lib/calculator";

export default function McaPayoffCalculator() {
  const [remainingBalance, setRemainingBalance] = useState(30000);
  const [dailyPayment, setDailyPayment] = useState(750);

  const result = calculateMcaPayoff({ remainingBalance, dailyPayment });

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Remaining Balance</span>
            <input type="number" value={remainingBalance} onChange={(e) => setRemainingBalance(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500" min={100} step={100} />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Daily Payment Amount</span>
            <input type="number" value={dailyPayment} onChange={(e) => setDailyPayment(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500" min={1} step={50} />
          </label>
        </div>
        <div className="bg-green-50 rounded-lg p-6 space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Payoff Timeline</h3>
          <div><p className="text-sm text-gray-500">Days Remaining</p><p className="text-2xl font-bold text-gray-900">{result.daysRemaining} days</p></div>
          <div><p className="text-sm text-gray-500">Estimated Payoff Date</p><p className="text-xl font-semibold text-green-700">{new Date(result.payoffDate).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</p></div>
        </div>
      </div>
    </div>
  );
}
