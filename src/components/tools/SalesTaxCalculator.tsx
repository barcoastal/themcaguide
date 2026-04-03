"use client";

import { useState } from "react";

const STATE_SALES_TAX: Record<string, { label: string; rate: number }> = {
  AL: { label: "Alabama", rate: 4.0 },
  AK: { label: "Alaska", rate: 0.0 },
  AZ: { label: "Arizona", rate: 5.6 },
  AR: { label: "Arkansas", rate: 6.5 },
  CA: { label: "California", rate: 7.25 },
  CO: { label: "Colorado", rate: 2.9 },
  CT: { label: "Connecticut", rate: 6.35 },
  DE: { label: "Delaware", rate: 0.0 },
  DC: { label: "District of Columbia", rate: 6.0 },
  FL: { label: "Florida", rate: 6.0 },
  GA: { label: "Georgia", rate: 4.0 },
  HI: { label: "Hawaii", rate: 4.0 },
  ID: { label: "Idaho", rate: 6.0 },
  IL: { label: "Illinois", rate: 6.25 },
  IN: { label: "Indiana", rate: 7.0 },
  IA: { label: "Iowa", rate: 6.0 },
  KS: { label: "Kansas", rate: 6.5 },
  KY: { label: "Kentucky", rate: 6.0 },
  LA: { label: "Louisiana", rate: 4.45 },
  ME: { label: "Maine", rate: 5.5 },
  MD: { label: "Maryland", rate: 6.0 },
  MA: { label: "Massachusetts", rate: 6.25 },
  MI: { label: "Michigan", rate: 6.0 },
  MN: { label: "Minnesota", rate: 6.875 },
  MS: { label: "Mississippi", rate: 7.0 },
  MO: { label: "Missouri", rate: 4.225 },
  MT: { label: "Montana", rate: 0.0 },
  NE: { label: "Nebraska", rate: 5.5 },
  NV: { label: "Nevada", rate: 6.85 },
  NH: { label: "New Hampshire", rate: 0.0 },
  NJ: { label: "New Jersey", rate: 6.625 },
  NM: { label: "New Mexico", rate: 4.875 },
  NY: { label: "New York", rate: 4.0 },
  NC: { label: "North Carolina", rate: 4.75 },
  ND: { label: "North Dakota", rate: 5.0 },
  OH: { label: "Ohio", rate: 5.75 },
  OK: { label: "Oklahoma", rate: 4.5 },
  OR: { label: "Oregon", rate: 0.0 },
  PA: { label: "Pennsylvania", rate: 6.0 },
  RI: { label: "Rhode Island", rate: 7.0 },
  SC: { label: "South Carolina", rate: 6.0 },
  SD: { label: "South Dakota", rate: 4.5 },
  TN: { label: "Tennessee", rate: 7.0 },
  TX: { label: "Texas", rate: 6.25 },
  UT: { label: "Utah", rate: 6.1 },
  VT: { label: "Vermont", rate: 6.0 },
  VA: { label: "Virginia", rate: 5.3 },
  WA: { label: "Washington", rate: 6.5 },
  WV: { label: "West Virginia", rate: 6.0 },
  WI: { label: "Wisconsin", rate: 5.0 },
  WY: { label: "Wyoming", rate: 4.0 },
};

export default function SalesTaxCalculator() {
  const [saleAmount, setSaleAmount] = useState(1000);
  const [state, setState] = useState("CA");
  const [localTaxRate, setLocalTaxRate] = useState(0);
  const [monthlySalesVolume, setMonthlySalesVolume] = useState(0);

  const stateInfo = STATE_SALES_TAX[state];
  const stateRate = stateInfo.rate;
  const combinedRate = stateRate + localTaxRate;
  const taxAmount = saleAmount * (combinedRate / 100);
  const totalWithTax = saleAmount + taxAmount;
  const monthlyTaxEstimate = monthlySalesVolume > 0 ? monthlySalesVolume * (combinedRate / 100) : 0;

  const fmt = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 2 });
  const fmtWhole = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Sale Amount</span>
            <input type="number" value={saleAmount} onChange={(e) => setSaleAmount(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500" min={0} step={100} />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">State</span>
            <select value={state} onChange={(e) => setState(e.target.value)} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500">
              {Object.entries(STATE_SALES_TAX).map(([code, s]) => (
                <option key={code} value={code}>{s.label} ({s.rate}%)</option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Local Tax Rate (% , city/county, optional)</span>
            <input type="number" value={localTaxRate} onChange={(e) => setLocalTaxRate(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500" min={0} max={10} step={0.25} />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Monthly Sales Volume (optional, for monthly estimate)</span>
            <input type="number" value={monthlySalesVolume} onChange={(e) => setMonthlySalesVolume(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500" min={0} step={1000} />
          </label>
        </div>
        <div className="bg-blue-50 rounded-lg p-6 space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Results</h3>
          <div><p className="text-sm text-gray-500">State Tax Rate ({stateInfo.label})</p><p className="text-2xl font-bold text-gray-900">{stateRate.toFixed(2)}%</p></div>
          <div><p className="text-sm text-gray-500">Combined Tax Rate (state + local)</p><p className="text-2xl font-bold text-blue-700">{combinedRate.toFixed(2)}%</p></div>
          <div><p className="text-sm text-gray-500">Tax Amount</p><p className="text-2xl font-bold text-red-600">{fmt(taxAmount)}</p></div>
          <div><p className="text-sm text-gray-500">Total with Tax</p><p className="text-xl font-semibold text-gray-900">{fmt(totalWithTax)}</p></div>
          {monthlySalesVolume > 0 && (
            <div><p className="text-sm text-gray-500">Estimated Monthly Tax</p><p className="text-xl font-semibold text-orange-600">{fmtWhole(monthlyTaxEstimate)}</p></div>
          )}
        </div>
      </div>
    </div>
  );
}
