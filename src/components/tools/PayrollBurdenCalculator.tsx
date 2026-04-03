"use client";

import { useState } from "react";

const STATE_TAX_RATES: Record<string, { label: string; sui: number; }> = {
  AL: { label: "Alabama", sui: 2.7 },
  AK: { label: "Alaska", sui: 2.07 },
  AZ: { label: "Arizona", sui: 2.0 },
  AR: { label: "Arkansas", sui: 3.1 },
  CA: { label: "California", sui: 3.4 },
  CO: { label: "Colorado", sui: 1.7 },
  CT: { label: "Connecticut", sui: 3.0 },
  DE: { label: "Delaware", sui: 1.8 },
  FL: { label: "Florida", sui: 2.7 },
  GA: { label: "Georgia", sui: 2.7 },
  HI: { label: "Hawaii", sui: 3.0 },
  ID: { label: "Idaho", sui: 1.35 },
  IL: { label: "Illinois", sui: 3.175 },
  IN: { label: "Indiana", sui: 2.5 },
  IA: { label: "Iowa", sui: 1.0 },
  KS: { label: "Kansas", sui: 2.7 },
  KY: { label: "Kentucky", sui: 2.7 },
  LA: { label: "Louisiana", sui: 1.66 },
  ME: { label: "Maine", sui: 2.37 },
  MD: { label: "Maryland", sui: 2.3 },
  MA: { label: "Massachusetts", sui: 1.87 },
  MI: { label: "Michigan", sui: 2.7 },
  MN: { label: "Minnesota", sui: 1.0 },
  MS: { label: "Mississippi", sui: 1.0 },
  MO: { label: "Missouri", sui: 2.376 },
  MT: { label: "Montana", sui: 1.18 },
  NE: { label: "Nebraska", sui: 1.25 },
  NV: { label: "Nevada", sui: 2.95 },
  NH: { label: "New Hampshire", sui: 2.7 },
  NJ: { label: "New Jersey", sui: 2.8 },
  NM: { label: "New Mexico", sui: 1.0 },
  NY: { label: "New York", sui: 3.525 },
  NC: { label: "North Carolina", sui: 1.0 },
  ND: { label: "North Dakota", sui: 1.02 },
  OH: { label: "Ohio", sui: 2.7 },
  OK: { label: "Oklahoma", sui: 1.5 },
  OR: { label: "Oregon", sui: 2.1 },
  PA: { label: "Pennsylvania", sui: 3.6890 },
  RI: { label: "Rhode Island", sui: 1.69 },
  SC: { label: "South Carolina", sui: 0.06 },
  SD: { label: "South Dakota", sui: 1.2 },
  TN: { label: "Tennessee", sui: 2.7 },
  TX: { label: "Texas", sui: 2.7 },
  UT: { label: "Utah", sui: 1.1 },
  VT: { label: "Vermont", sui: 1.0 },
  VA: { label: "Virginia", sui: 2.5 },
  WA: { label: "Washington", sui: 2.0 },
  WV: { label: "West Virginia", sui: 2.7 },
  WI: { label: "Wisconsin", sui: 3.05 },
  WY: { label: "Wyoming", sui: 1.68 },
};

const FICA_RATE = 7.65; // Social Security 6.2% + Medicare 1.45%
const FUTA_RATE = 0.6; // After state credit

export default function PayrollBurdenCalculator() {
  const [salary, setSalary] = useState(55000);
  const [state, setState] = useState("CA");
  const [healthInsurance, setHealthInsurance] = useState(6000);
  const [retirementMatch, setRetirementMatch] = useState(3);
  const [includePayrollTaxes, setIncludePayrollTaxes] = useState(true);

  const stateInfo = STATE_TAX_RATES[state];
  const suiWageBase = 7000;

  const ficaCost = includePayrollTaxes ? salary * (FICA_RATE / 100) : 0;
  const futaCost = includePayrollTaxes ? Math.min(salary, suiWageBase) * (FUTA_RATE / 100) : 0;
  const suiCost = includePayrollTaxes ? Math.min(salary, suiWageBase) * (stateInfo.sui / 100) : 0;
  const retirementCost = salary * (retirementMatch / 100);
  const totalTaxes = ficaCost + futaCost + suiCost;
  const totalBenefits = healthInsurance + retirementCost;
  const totalCost = salary + totalTaxes + totalBenefits;
  const burdenRate = ((totalCost - salary) / salary) * 100;
  const monthlyCost = totalCost / 12;
  const costPerHour = totalCost / 2080;

  const fmt = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Employee Annual Salary</span>
            <input type="number" value={salary} onChange={(e) => setSalary(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500" min={0} step={1000} />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">State</span>
            <select value={state} onChange={(e) => setState(e.target.value)} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500">
              {Object.entries(STATE_TAX_RATES).map(([code, s]) => (
                <option key={code} value={code}>{s.label}</option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Annual Health Insurance Cost (employer portion)</span>
            <input type="number" value={healthInsurance} onChange={(e) => setHealthInsurance(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500" min={0} step={500} />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Retirement Match (%)</span>
            <input type="number" value={retirementMatch} onChange={(e) => setRetirementMatch(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500" min={0} max={100} step={0.5} />
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" checked={includePayrollTaxes} onChange={(e) => setIncludePayrollTaxes(e.target.checked)} className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
            <span className="text-sm font-medium text-gray-700">Include Payroll Taxes (FICA, FUTA, SUI)</span>
          </label>
        </div>
        <div className="bg-blue-50 rounded-lg p-6 space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Results</h3>
          <div><p className="text-sm text-gray-500">Total Employee Cost (Annual)</p><p className="text-2xl font-bold text-gray-900">{fmt(totalCost)}</p></div>
          <div><p className="text-sm text-gray-500">Burden Rate</p><p className="text-2xl font-bold text-red-600">{burdenRate.toFixed(1)}%</p></div>
          <div><p className="text-sm text-gray-500">Monthly Cost</p><p className="text-xl font-semibold text-gray-900">{fmt(monthlyCost)}</p></div>
          <div><p className="text-sm text-gray-500">Cost Per Hour (2,080 hrs/yr)</p><p className="text-xl font-semibold text-gray-900">{fmt(costPerHour)}</p></div>
          <hr className="border-gray-200" />
          <h4 className="text-sm font-semibold text-gray-700">Breakdown</h4>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between"><span className="text-gray-600">Base Salary</span><span className="font-medium">{fmt(salary)}</span></div>
            {includePayrollTaxes && (
              <>
                <div className="flex justify-between"><span className="text-gray-600">FICA (Social Security + Medicare)</span><span className="font-medium">{fmt(ficaCost)}</span></div>
                <div className="flex justify-between"><span className="text-gray-600">FUTA</span><span className="font-medium">{fmt(futaCost)}</span></div>
                <div className="flex justify-between"><span className="text-gray-600">State Unemployment ({stateInfo.label})</span><span className="font-medium">{fmt(suiCost)}</span></div>
              </>
            )}
            <div className="flex justify-between"><span className="text-gray-600">Health Insurance</span><span className="font-medium">{fmt(healthInsurance)}</span></div>
            <div className="flex justify-between"><span className="text-gray-600">Retirement Match ({retirementMatch}%)</span><span className="font-medium">{fmt(retirementCost)}</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}
