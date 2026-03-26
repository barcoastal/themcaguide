"use client";

import { useState } from "react";
import { TrendingUp, TrendingDown, DollarSign } from "lucide-react";

export default function CashFlowCalculator() {
  const [revenue, setRevenue] = useState(25000);
  const [cogs, setCogs] = useState(10000);
  const [rent, setRent] = useState(3000);
  const [payroll, setPayroll] = useState(5000);
  const [utilities, setUtilities] = useState(500);
  const [marketing, setMarketing] = useState(1000);
  const [insurance, setInsurance] = useState(400);
  const [loanPayments, setLoanPayments] = useState(0);
  const [mcaPayments, setMcaPayments] = useState(0);
  const [otherExpenses, setOtherExpenses] = useState(500);

  const totalExpenses = cogs + rent + payroll + utilities + marketing + insurance + loanPayments + mcaPayments + otherExpenses;
  const netCashFlow = revenue - totalExpenses;
  const isPositive = netCashFlow >= 0;

  const fmt = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

  const inputs = [
    { label: "Monthly Revenue", value: revenue, setter: setRevenue, step: 500 },
    { label: "Cost of Goods Sold", value: cogs, setter: setCogs, step: 500 },
    { label: "Rent / Lease", value: rent, setter: setRent, step: 100 },
    { label: "Payroll", value: payroll, setter: setPayroll, step: 500 },
    { label: "Utilities", value: utilities, setter: setUtilities, step: 50 },
    { label: "Marketing", value: marketing, setter: setMarketing, step: 100 },
    { label: "Insurance", value: insurance, setter: setInsurance, step: 50 },
    { label: "Loan Payments", value: loanPayments, setter: setLoanPayments, step: 100 },
    { label: "MCA Payments (monthly)", value: mcaPayments, setter: setMcaPayments, step: 100 },
    { label: "Other Expenses", value: otherExpenses, setter: setOtherExpenses, step: 100 },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-3">
          {inputs.map((input) => (
            <label key={input.label} className="flex items-center justify-between gap-4">
              <span className="text-sm text-gray-700 whitespace-nowrap">{input.label}</span>
              <input
                type="number"
                value={input.value}
                onChange={(e) => input.setter(Number(e.target.value))}
                className="w-32 rounded-lg border border-gray-300 px-3 py-2 text-right text-sm focus:border-blue-500 focus:ring-blue-500"
                min={0}
                step={input.step}
              />
            </label>
          ))}
        </div>
        <div className="space-y-4">
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <DollarSign className="w-5 h-5 text-gray-500" />
              <h3 className="text-lg font-semibold text-gray-900">Monthly Summary</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 flex items-center gap-1"><TrendingUp className="w-4 h-4 text-green-500" /> Revenue</span>
                <span className="font-semibold text-green-600">{fmt(revenue)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 flex items-center gap-1"><TrendingDown className="w-4 h-4 text-red-500" /> Total Expenses</span>
                <span className="font-semibold text-red-600">{fmt(totalExpenses)}</span>
              </div>
              <hr />
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-900">Net Cash Flow</span>
                <span className={`text-2xl font-bold ${isPositive ? "text-green-600" : "text-red-600"}`}>
                  {fmt(netCashFlow)}
                </span>
              </div>
            </div>
          </div>
          {!isPositive && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-sm text-red-700 font-medium">Your expenses exceed your revenue by {fmt(Math.abs(netCashFlow))} per month. Look at ways to cut costs or increase revenue before taking on more debt.</p>
            </div>
          )}
          {mcaPayments > 0 && (
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <p className="text-sm text-amber-700 font-medium">MCA payments make up {((mcaPayments / totalExpenses) * 100).toFixed(0)}% of your expenses. If this is over 20%, consider settlement or refinancing.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
