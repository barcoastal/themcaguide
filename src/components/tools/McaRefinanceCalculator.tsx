"use client";

import { useState } from "react";

export default function McaRefinanceCalculator() {
  const [currentBalance, setCurrentBalance] = useState(35000);
  const [currentDailyPayment, setCurrentDailyPayment] = useState(750);
  const [currentDaysRemaining, setCurrentDaysRemaining] = useState(47);

  const [newFundingAmount, setNewFundingAmount] = useState(50000);
  const [newFactorRate, setNewFactorRate] = useState(1.30);
  const [newHoldbackPercent, setNewHoldbackPercent] = useState(12);
  const [dailyRevenue, setDailyRevenue] = useState(5000);

  const costToFinishCurrent = currentBalance;
  const newTotalRepayment = newFundingAmount * newFactorRate;
  const newTotalCost = newTotalRepayment - newFundingAmount;
  const newDailyPayment = dailyRevenue * (newHoldbackPercent / 100);
  const newEstimatedDays = newDailyPayment > 0 ? Math.ceil(newTotalRepayment / newDailyPayment) : 0;

  const totalCostIfStay = costToFinishCurrent;
  const netFundsAfterPayoff = newFundingAmount - currentBalance;
  const totalSavingsOnPayment = currentDailyPayment - newDailyPayment;

  const currentEffectiveMonthly = currentDailyPayment * 22;
  const newEffectiveMonthly = newDailyPayment * 22;

  const isGoodDeal = newDailyPayment < currentDailyPayment && netFundsAfterPayoff > 0;

  const fmt = (n: number) =>
    n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <p className="text-sm font-semibold text-gray-800 border-b pb-2">Current MCA</p>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Remaining Balance</span>
            <input type="number" value={currentBalance} onChange={(e) => setCurrentBalance(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500" min={0} step={1000} />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Current Daily Payment</span>
            <input type="number" value={currentDailyPayment} onChange={(e) => setCurrentDailyPayment(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500" min={0} step={50} />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Days Remaining</span>
            <input type="number" value={currentDaysRemaining} onChange={(e) => setCurrentDaysRemaining(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500" min={1} step={1} />
          </label>

          <p className="text-sm font-semibold text-gray-800 border-b pb-2 mt-6">New MCA Offer</p>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">New Funding Amount</span>
            <input type="number" value={newFundingAmount} onChange={(e) => setNewFundingAmount(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500" min={1000} step={1000} />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">New Factor Rate</span>
            <input type="number" value={newFactorRate} onChange={(e) => setNewFactorRate(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500" min={1.0} max={2.0} step={0.01} />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">New Holdback Percentage (%)</span>
            <input type="number" value={newHoldbackPercent} onChange={(e) => setNewHoldbackPercent(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500" min={1} max={100} />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Average Daily Revenue</span>
            <input type="number" value={dailyRevenue} onChange={(e) => setDailyRevenue(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500" min={100} step={100} />
          </label>
        </div>

        <div className="bg-blue-50 rounded-lg p-6 space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Results</h3>
          <div><p className="text-sm text-gray-500">Cost to Finish Current MCA</p><p className="text-2xl font-bold text-gray-900">{fmt(costToFinishCurrent)}</p></div>
          <div><p className="text-sm text-gray-500">New MCA Total Cost</p><p className="text-2xl font-bold text-red-600">{fmt(newTotalCost)}</p></div>
          <div><p className="text-sm text-gray-500">Net Cash After Paying Off Current</p><p className="text-xl font-semibold text-gray-900">{fmt(netFundsAfterPayoff)}</p></div>
          <div><p className="text-sm text-gray-500">Daily Payment Change</p><p className={`text-xl font-semibold ${totalSavingsOnPayment > 0 ? "text-green-600" : "text-red-600"}`}>{fmt(currentDailyPayment)} → {fmt(newDailyPayment)}</p></div>
          <div><p className="text-sm text-gray-500">Monthly Payment Change</p><p className={`text-xl font-semibold ${totalSavingsOnPayment > 0 ? "text-green-600" : "text-red-600"}`}>{fmt(currentEffectiveMonthly)} → {fmt(newEffectiveMonthly)}</p></div>
          <div><p className="text-sm text-gray-500">New Repayment Period</p><p className="text-xl font-semibold text-gray-900">{newEstimatedDays} days</p></div>

          <div className={`rounded-lg p-4 text-sm ${isGoodDeal ? "bg-green-100 border border-green-300 text-green-800" : "bg-yellow-100 border border-yellow-300 text-yellow-800"}`}>
            <strong>Recommendation:</strong>{" "}
            {isGoodDeal
              ? "This refinance lowers your daily payment and puts cash in your pocket. It could be worth considering if you need the breathing room."
              : "This refinance may not save you money. The new MCA costs more than finishing your current one, or the daily payment is higher. Proceed with caution."}
          </div>
        </div>
      </div>
    </div>
  );
}
