"use client";

import { useState } from "react";
import { Target } from "lucide-react";

export default function BreakEvenCalculator() {
  const [fixedCosts, setFixedCosts] = useState(8000);
  const [pricePerUnit, setPricePerUnit] = useState(50);
  const [costPerUnit, setCostPerUnit] = useState(20);

  const margin = pricePerUnit - costPerUnit;
  const breakEvenUnits = margin > 0 ? Math.ceil(fixedCosts / margin) : 0;
  const breakEvenRevenue = breakEvenUnits * pricePerUnit;

  const fmt = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Monthly Fixed Costs (rent, payroll, insurance, etc.)</span>
            <input type="number" value={fixedCosts} onChange={(e) => setFixedCosts(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500" min={0} step={100} />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Average Price Per Sale/Unit</span>
            <input type="number" value={pricePerUnit} onChange={(e) => setPricePerUnit(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500" min={0} step={1} />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Average Cost Per Sale/Unit</span>
            <input type="number" value={costPerUnit} onChange={(e) => setCostPerUnit(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500" min={0} step={1} />
          </label>
        </div>
        <div className="bg-blue-50 rounded-lg p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Target className="w-5 h-5 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-900">Break-Even Point</h3>
          </div>
          <div>
            <p className="text-sm text-gray-500">Profit Per Unit</p>
            <p className="text-xl font-bold text-gray-900">{fmt(margin)}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Units to Break Even</p>
            <p className="text-2xl font-bold text-blue-700">{breakEvenUnits.toLocaleString()} units/month</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Revenue to Break Even</p>
            <p className="text-2xl font-bold text-blue-700">{fmt(breakEvenRevenue)}/month</p>
          </div>
          {margin <= 0 && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
              <p className="text-sm text-red-700 font-medium">Your cost per unit is higher than your price. You need to raise prices or cut costs.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
