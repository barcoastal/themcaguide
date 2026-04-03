"use client";

import { useState, useMemo } from "react";

export default function McaPaymentSchedule() {
  const [fundingAmount, setFundingAmount] = useState(50000);
  const [factorRate, setFactorRate] = useState(1.35);
  const [holdbackPercent, setHoldbackPercent] = useState(15);
  const [dailyRevenue, setDailyRevenue] = useState(5000);
  const [startDate, setStartDate] = useState(() => {
    const d = new Date();
    return d.toISOString().split("T")[0];
  });

  const fmt = (n: number) =>
    n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

  const totalRepayment = fundingAmount * factorRate;
  const totalCost = totalRepayment - fundingAmount;
  const dailyPayment = dailyRevenue * (holdbackPercent / 100);
  const totalDays = dailyPayment > 0 ? Math.ceil(totalRepayment / dailyPayment) : 0;

  const schedule = useMemo(() => {
    const rows: { day: number; date: string; payment: number; totalPaid: number; remaining: number }[] = [];
    let remaining = totalRepayment;
    let totalPaid = 0;
    const start = new Date(startDate + "T00:00:00");
    const displayDays = Math.min(totalDays, 30);

    for (let i = 0; i < displayDays; i++) {
      const currentDate = new Date(start);
      currentDate.setDate(start.getDate() + i);
      const dayOfWeek = currentDate.getDay();
      if (dayOfWeek === 0 || dayOfWeek === 6) continue;

      const payment = Math.min(dailyPayment, remaining);
      totalPaid += payment;
      remaining -= payment;

      rows.push({
        day: rows.length + 1,
        date: currentDate.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
        payment,
        totalPaid,
        remaining: Math.max(0, remaining),
      });

      if (remaining <= 0) break;
    }
    return rows;
  }, [totalRepayment, dailyPayment, startDate, totalDays]);

  const payoffDate = useMemo(() => {
    const start = new Date(startDate + "T00:00:00");
    let businessDays = 0;
    let current = new Date(start);
    while (businessDays < totalDays) {
      const dow = current.getDay();
      if (dow !== 0 && dow !== 6) businessDays++;
      if (businessDays < totalDays) current.setDate(current.getDate() + 1);
    }
    return current.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
  }, [startDate, totalDays]);

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Funding Amount</span>
            <input type="number" value={fundingAmount} onChange={(e) => setFundingAmount(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500" min={1000} step={1000} />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Factor Rate</span>
            <input type="number" value={factorRate} onChange={(e) => setFactorRate(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500" min={1.0} max={2.0} step={0.01} />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Holdback Percentage (%)</span>
            <input type="number" value={holdbackPercent} onChange={(e) => setHoldbackPercent(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500" min={1} max={100} />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Average Daily Revenue</span>
            <input type="number" value={dailyRevenue} onChange={(e) => setDailyRevenue(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500" min={100} step={100} />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Start Date</span>
            <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500" />
          </label>
        </div>
        <div className="bg-blue-50 rounded-lg p-6 space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Summary</h3>
          <div><p className="text-sm text-gray-500">Total Repayment</p><p className="text-2xl font-bold text-gray-900">{fmt(totalRepayment)}</p></div>
          <div><p className="text-sm text-gray-500">Total Cost of Funding</p><p className="text-2xl font-bold text-red-600">{fmt(totalCost)}</p></div>
          <div><p className="text-sm text-gray-500">Daily Payment</p><p className="text-xl font-semibold text-gray-900">{fmt(dailyPayment)}</p></div>
          <div><p className="text-sm text-gray-500">Total Business Days</p><p className="text-xl font-semibold text-gray-900">{totalDays} days</p></div>
          <div><p className="text-sm text-gray-500">Estimated Payoff Date</p><p className="text-xl font-semibold text-gray-900">{payoffDate}</p></div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Schedule (First 30 Business Days)</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left px-4 py-3 font-medium text-gray-700">Day</th>
                <th className="text-left px-4 py-3 font-medium text-gray-700">Date</th>
                <th className="text-right px-4 py-3 font-medium text-gray-700">Payment</th>
                <th className="text-right px-4 py-3 font-medium text-gray-700">Total Paid</th>
                <th className="text-right px-4 py-3 font-medium text-gray-700">Remaining</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((row) => (
                <tr key={row.day} className="border-t border-gray-200">
                  <td className="px-4 py-3 text-gray-900">{row.day}</td>
                  <td className="px-4 py-3 text-gray-600">{row.date}</td>
                  <td className="px-4 py-3 text-right text-gray-900">{fmt(row.payment)}</td>
                  <td className="px-4 py-3 text-right text-gray-900">{fmt(row.totalPaid)}</td>
                  <td className="px-4 py-3 text-right text-gray-900">{fmt(row.remaining)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {totalDays > 30 && (
          <p className="text-sm text-gray-500 mt-3">Showing first {schedule.length} business days of {totalDays} total days.</p>
        )}
      </div>
    </div>
  );
}
