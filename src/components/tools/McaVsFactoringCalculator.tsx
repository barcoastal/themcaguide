"use client";

import { useState } from "react";

export default function McaVsFactoringCalculator() {
  const [fundingNeeded, setFundingNeeded] = useState(50000);
  const [mcaFactorRate, setMcaFactorRate] = useState(1.35);
  const [mcaHoldbackPercent, setMcaHoldbackPercent] = useState(15);
  const [dailyRevenue, setDailyRevenue] = useState(5000);

  const [invoiceAmount, setInvoiceAmount] = useState(60000);
  const [factoringAdvanceRate, setFactoringAdvanceRate] = useState(85);
  const [factoringFeePercent, setFactoringFeePercent] = useState(3);
  const [invoiceTermsDays, setInvoiceTermsDays] = useState(30);

  // MCA calculations
  const mcaTotalRepayment = fundingNeeded * mcaFactorRate;
  const mcaTotalCost = mcaTotalRepayment - fundingNeeded;
  const mcaDailyPayment = dailyRevenue * (mcaHoldbackPercent / 100);
  const mcaMonthlyPayment = mcaDailyPayment * 22;
  const mcaDaysToRepay = mcaDailyPayment > 0 ? Math.ceil(mcaTotalRepayment / mcaDailyPayment) : 0;
  const mcaAPR = mcaDaysToRepay > 0 ? (mcaTotalCost / fundingNeeded) * (365 / mcaDaysToRepay) * 100 : 0;

  // Factoring calculations
  const factoringAdvance = invoiceAmount * (factoringAdvanceRate / 100);
  const factoringFee = invoiceAmount * (factoringFeePercent / 100);
  const factoringTotalCost = factoringFee;
  const factoringDaysToRepay = invoiceTermsDays;
  const factoringAPR = factoringAdvance > 0 ? (factoringTotalCost / factoringAdvance) * (365 / factoringDaysToRepay) * 100 : 0;

  const fmt = (n: number) =>
    n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

  const cheaper = mcaTotalCost < factoringTotalCost ? "MCA" : "Invoice Factoring";

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Funding Needed</span>
            <input type="number" value={fundingNeeded} onChange={(e) => setFundingNeeded(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500" min={1000} step={1000} />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Average Daily Revenue</span>
            <input type="number" value={dailyRevenue} onChange={(e) => setDailyRevenue(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500" min={100} step={100} />
          </label>

          <p className="text-sm font-semibold text-gray-800 border-b pb-2">MCA Terms</p>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Factor Rate</span>
            <input type="number" value={mcaFactorRate} onChange={(e) => setMcaFactorRate(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500" min={1.0} max={2.0} step={0.01} />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Holdback Percentage (%)</span>
            <input type="number" value={mcaHoldbackPercent} onChange={(e) => setMcaHoldbackPercent(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500" min={1} max={100} />
          </label>

          <p className="text-sm font-semibold text-gray-800 border-b pb-2">Invoice Factoring Terms</p>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Invoice Amount</span>
            <input type="number" value={invoiceAmount} onChange={(e) => setInvoiceAmount(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500" min={1000} step={1000} />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Advance Rate (%)</span>
            <input type="number" value={factoringAdvanceRate} onChange={(e) => setFactoringAdvanceRate(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500" min={50} max={100} />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Factoring Fee (%)</span>
            <input type="number" value={factoringFeePercent} onChange={(e) => setFactoringFeePercent(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500" min={0.5} max={10} step={0.5} />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Invoice Payment Terms (Days)</span>
            <input type="number" value={invoiceTermsDays} onChange={(e) => setInvoiceTermsDays(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500" min={1} max={180} />
          </label>
        </div>

        <div className="bg-blue-50 rounded-lg p-6 space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Side-by-Side Comparison</h3>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <p className="text-sm font-semibold text-gray-700 mb-3">MCA</p>
              <div className="space-y-2">
                <div><p className="text-xs text-gray-500">Total Cost</p><p className="text-lg font-bold text-red-600">{fmt(mcaTotalCost)}</p></div>
                <div><p className="text-xs text-gray-500">Effective APR</p><p className="text-lg font-semibold text-orange-600">{mcaAPR.toFixed(1)}%</p></div>
                <div><p className="text-xs text-gray-500">Daily Payment</p><p className="text-base font-semibold text-gray-900">{fmt(mcaDailyPayment)}</p></div>
                <div><p className="text-xs text-gray-500">Monthly Payment</p><p className="text-base font-semibold text-gray-900">{fmt(mcaMonthlyPayment)}</p></div>
                <div><p className="text-xs text-gray-500">Time to Repay</p><p className="text-base font-semibold text-gray-900">{mcaDaysToRepay} days</p></div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <p className="text-sm font-semibold text-gray-700 mb-3">Invoice Factoring</p>
              <div className="space-y-2">
                <div><p className="text-xs text-gray-500">Total Cost</p><p className="text-lg font-bold text-red-600">{fmt(factoringTotalCost)}</p></div>
                <div><p className="text-xs text-gray-500">Effective APR</p><p className="text-lg font-semibold text-orange-600">{factoringAPR.toFixed(1)}%</p></div>
                <div><p className="text-xs text-gray-500">Advance Amount</p><p className="text-base font-semibold text-gray-900">{fmt(factoringAdvance)}</p></div>
                <div><p className="text-xs text-gray-500">Remaining After Fee</p><p className="text-base font-semibold text-gray-900">{fmt(factoringAdvance - factoringFee)}</p></div>
                <div><p className="text-xs text-gray-500">Time to Settle</p><p className="text-base font-semibold text-gray-900">{factoringDaysToRepay} days</p></div>
              </div>
            </div>
          </div>

          <div className="bg-green-100 border border-green-300 rounded-lg p-4 text-sm text-green-800">
            <strong>Lower Cost Option:</strong> {cheaper} is cheaper by {fmt(Math.abs(mcaTotalCost - factoringTotalCost))} in total fees.
          </div>
        </div>
      </div>
    </div>
  );
}
