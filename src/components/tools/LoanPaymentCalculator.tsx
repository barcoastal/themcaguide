"use client";

import { useState } from "react";
import { Calculator } from "lucide-react";

export default function LoanPaymentCalculator() {
  const [amount, setAmount] = useState(50000);
  const [rate, setRate] = useState(10);
  const [months, setMonths] = useState(36);

  const monthlyRate = rate / 100 / 12;
  const monthly = monthlyRate > 0
    ? (amount * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1)
    : amount / months;
  const totalPaid = monthly * months;
  const totalInterest = totalPaid - amount;

  const fmt = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Loan Amount</span>
            <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500" min={1000} step={1000} />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Annual Interest Rate (%)</span>
            <input type="number" value={rate} onChange={(e) => setRate(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500" min={0} max={50} step={0.5} />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Loan Term (months)</span>
            <input type="number" value={months} onChange={(e) => setMonths(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500" min={1} max={360} step={1} />
          </label>
        </div>
        <div className="space-y-4">
          <div className="bg-blue-50 rounded-lg p-6">
            <Calculator className="w-6 h-6 text-blue-600 mb-2" />
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Loan Summary</h3>
            <div className="space-y-3">
              <div className="flex justify-between"><span className="text-gray-500">Monthly Payment</span><span className="text-2xl font-bold text-blue-700">{fmt(monthly)}</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Total Interest</span><span className="font-semibold text-gray-900">{fmt(totalInterest)}</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Total Paid</span><span className="font-semibold text-gray-900">{fmt(totalPaid)}</span></div>
            </div>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <p className="text-sm text-green-700 font-medium">Compare this to an MCA: a $50K loan at 10% for 3 years costs {fmt(totalInterest)} in interest. The same $50K as an MCA at 1.35 factor rate costs $17,500 in fees.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
