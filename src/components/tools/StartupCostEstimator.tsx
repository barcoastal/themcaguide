"use client";

import { useState } from "react";

type BusinessType = "retail" | "restaurant" | "online" | "services" | "construction";
type EquipmentLevel = "none" | "basic" | "significant";
type EmployeeRange = "0" | "1-3" | "4-10" | "10+";
type MarketingLevel = "minimal" | "moderate" | "aggressive";
type LegalLevel = "basic" | "moderate" | "complex";

const STEPS = ["Business Type", "Location", "Equipment", "Employees", "Marketing", "Legal"];

export default function StartupCostEstimator() {
  const [step, setStep] = useState(0);
  const [businessType, setBusinessType] = useState<BusinessType>("services");
  const [needsLocation, setNeedsLocation] = useState(false);
  const [squareFootage, setSquareFootage] = useState(1000);
  const [equipment, setEquipment] = useState<EquipmentLevel>("basic");
  const [employees, setEmployees] = useState<EmployeeRange>("1-3");
  const [marketing, setMarketing] = useState<MarketingLevel>("moderate");
  const [legal, setLegal] = useState<LegalLevel>("basic");
  const [showResults, setShowResults] = useState(false);

  const fmt = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

  function calculate() {
    const costs = { location: { low: 0, mid: 0, high: 0 }, equipment: { low: 0, mid: 0, high: 0 }, employees: { low: 0, mid: 0, high: 0 }, marketing: { low: 0, mid: 0, high: 0 }, legal: { low: 0, mid: 0, high: 0 }, inventory: { low: 0, mid: 0, high: 0 } };

    // Location costs (first month rent + buildout per sqft)
    if (needsLocation) {
      const ratePerSqft: Record<BusinessType, { low: number; mid: number; high: number }> = {
        retail: { low: 15, mid: 25, high: 40 },
        restaurant: { low: 30, mid: 60, high: 100 },
        online: { low: 8, mid: 15, high: 25 },
        services: { low: 10, mid: 20, high: 35 },
        construction: { low: 8, mid: 15, high: 25 },
      };
      const r = ratePerSqft[businessType];
      costs.location = { low: squareFootage * r.low, mid: squareFootage * r.mid, high: squareFootage * r.high };
    }

    // Equipment
    const equipCosts: Record<BusinessType, Record<EquipmentLevel, { low: number; mid: number; high: number }>> = {
      retail: { none: { low: 0, mid: 0, high: 0 }, basic: { low: 2000, mid: 5000, high: 10000 }, significant: { low: 10000, mid: 25000, high: 50000 } },
      restaurant: { none: { low: 0, mid: 0, high: 0 }, basic: { low: 10000, mid: 25000, high: 50000 }, significant: { low: 50000, mid: 100000, high: 200000 } },
      online: { none: { low: 0, mid: 0, high: 0 }, basic: { low: 500, mid: 2000, high: 5000 }, significant: { low: 5000, mid: 15000, high: 30000 } },
      services: { none: { low: 0, mid: 0, high: 0 }, basic: { low: 1000, mid: 5000, high: 10000 }, significant: { low: 10000, mid: 25000, high: 50000 } },
      construction: { none: { low: 0, mid: 0, high: 0 }, basic: { low: 5000, mid: 20000, high: 40000 }, significant: { low: 25000, mid: 75000, high: 150000 } },
    };
    costs.equipment = equipCosts[businessType][equipment];

    // Employees (first 3 months payroll)
    const empCosts: Record<EmployeeRange, { low: number; mid: number; high: number }> = {
      "0": { low: 0, mid: 0, high: 0 },
      "1-3": { low: 10000, mid: 25000, high: 45000 },
      "4-10": { low: 40000, mid: 80000, high: 150000 },
      "10+": { low: 100000, mid: 200000, high: 400000 },
    };
    costs.employees = empCosts[employees];

    // Marketing
    const mktCosts: Record<MarketingLevel, { low: number; mid: number; high: number }> = {
      minimal: { low: 500, mid: 2000, high: 5000 },
      moderate: { low: 3000, mid: 8000, high: 15000 },
      aggressive: { low: 10000, mid: 25000, high: 50000 },
    };
    costs.marketing = mktCosts[marketing];

    // Legal
    const legalCosts: Record<LegalLevel, { low: number; mid: number; high: number }> = {
      basic: { low: 500, mid: 1500, high: 3000 },
      moderate: { low: 2000, mid: 5000, high: 10000 },
      complex: { low: 5000, mid: 15000, high: 30000 },
    };
    costs.legal = legalCosts[legal];

    // Inventory (for retail and restaurant)
    if (businessType === "retail") {
      costs.inventory = { low: 5000, mid: 15000, high: 40000 };
    } else if (businessType === "restaurant") {
      costs.inventory = { low: 3000, mid: 8000, high: 15000 };
    }

    const totalLow = Object.values(costs).reduce((s, c) => s + c.low, 0);
    const totalMid = Object.values(costs).reduce((s, c) => s + c.mid, 0);
    const totalHigh = Object.values(costs).reduce((s, c) => s + c.high, 0);
    const reserveLow = totalLow * 0.2;
    const reserveMid = totalMid * 0.2;
    const reserveHigh = totalHigh * 0.2;

    return { costs, totalLow, totalMid, totalHigh, reserveLow, reserveMid, reserveHigh };
  }

  const result = calculate();

  const selectClass = "mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500";
  const inputClass = "mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500";

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <label className="block">
            <span className="text-sm font-medium text-gray-700">What type of business are you starting?</span>
            <select value={businessType} onChange={(e) => setBusinessType(e.target.value as BusinessType)} className={selectClass}>
              <option value="retail">Retail Store</option>
              <option value="restaurant">Restaurant / Food Service</option>
              <option value="online">Online / E-commerce</option>
              <option value="services">Professional Services</option>
              <option value="construction">Construction / Trades</option>
            </select>
          </label>
        );
      case 1:
        return (
          <div className="space-y-4">
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" checked={needsLocation} onChange={(e) => setNeedsLocation(e.target.checked)} className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
              <span className="text-sm font-medium text-gray-700">I need a physical location</span>
            </label>
            {needsLocation && (
              <label className="block">
                <span className="text-sm font-medium text-gray-700">Estimated Square Footage</span>
                <input type="number" value={squareFootage} onChange={(e) => setSquareFootage(Number(e.target.value))} className={inputClass} min={100} step={100} />
              </label>
            )}
          </div>
        );
      case 2:
        return (
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Equipment needed?</span>
            <select value={equipment} onChange={(e) => setEquipment(e.target.value as EquipmentLevel)} className={selectClass}>
              <option value="none">None</option>
              <option value="basic">Basic (computers, small tools)</option>
              <option value="significant">Significant (specialized machinery, commercial gear)</option>
            </select>
          </label>
        );
      case 3:
        return (
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Employees at launch?</span>
            <select value={employees} onChange={(e) => setEmployees(e.target.value as EmployeeRange)} className={selectClass}>
              <option value="0">Just me (0 employees)</option>
              <option value="1-3">1 to 3 employees</option>
              <option value="4-10">4 to 10 employees</option>
              <option value="10+">More than 10 employees</option>
            </select>
          </label>
        );
      case 4:
        return (
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Marketing budget level?</span>
            <select value={marketing} onChange={(e) => setMarketing(e.target.value as MarketingLevel)} className={selectClass}>
              <option value="minimal">Minimal (word of mouth, free social media)</option>
              <option value="moderate">Moderate (paid ads, basic website, branding)</option>
              <option value="aggressive">Aggressive (full campaigns, SEO, agency)</option>
            </select>
          </label>
        );
      case 5:
        return (
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Legal and licensing needs?</span>
            <select value={legal} onChange={(e) => setLegal(e.target.value as LegalLevel)} className={selectClass}>
              <option value="basic">Basic (LLC filing, simple permits)</option>
              <option value="moderate">Moderate (professional licenses, contracts)</option>
              <option value="complex">Complex (patents, regulatory compliance, franchise)</option>
            </select>
          </label>
        );
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8">
      {!showResults ? (
        <div>
          {/* Progress bar */}
          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-500 mb-2">
              <span>Step {step + 1} of {STEPS.length}</span>
              <span>{STEPS[step]}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full transition-all" style={{ width: `${((step + 1) / STEPS.length) * 100}%` }} />
            </div>
          </div>

          <div className="min-h-[120px]">{renderStep()}</div>

          <div className="flex justify-between mt-6">
            <button onClick={() => setStep(step - 1)} disabled={step === 0} className="px-6 py-2 rounded-lg border border-gray-300 text-gray-700 disabled:opacity-40">
              Back
            </button>
            {step < STEPS.length - 1 ? (
              <button onClick={() => setStep(step + 1)} className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
                Next
              </button>
            ) : (
              <button onClick={() => setShowResults(true)} className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
                See Results
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Estimated Startup Cost Range</h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div><p className="text-sm text-gray-500">Low Estimate</p><p className="text-2xl font-bold text-green-700">{fmt(result.totalLow)}</p></div>
              <div><p className="text-sm text-gray-500">Mid Estimate</p><p className="text-2xl font-bold text-gray-900">{fmt(result.totalMid)}</p></div>
              <div><p className="text-sm text-gray-500">High Estimate</p><p className="text-2xl font-bold text-red-600">{fmt(result.totalHigh)}</p></div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-3">Breakdown by Category</h4>
            <div className="space-y-2 text-sm">
              {needsLocation && (
                <div className="flex justify-between"><span className="text-gray-600">Location (rent + buildout)</span><span className="font-medium">{fmt(result.costs.location.low)} - {fmt(result.costs.location.high)}</span></div>
              )}
              <div className="flex justify-between"><span className="text-gray-600">Equipment</span><span className="font-medium">{fmt(result.costs.equipment.low)} - {fmt(result.costs.equipment.high)}</span></div>
              <div className="flex justify-between"><span className="text-gray-600">Employees (first 3 months)</span><span className="font-medium">{fmt(result.costs.employees.low)} - {fmt(result.costs.employees.high)}</span></div>
              <div className="flex justify-between"><span className="text-gray-600">Marketing</span><span className="font-medium">{fmt(result.costs.marketing.low)} - {fmt(result.costs.marketing.high)}</span></div>
              <div className="flex justify-between"><span className="text-gray-600">Legal / Licensing</span><span className="font-medium">{fmt(result.costs.legal.low)} - {fmt(result.costs.legal.high)}</span></div>
              {(result.costs.inventory.low > 0) && (
                <div className="flex justify-between"><span className="text-gray-600">Initial Inventory</span><span className="font-medium">{fmt(result.costs.inventory.low)} - {fmt(result.costs.inventory.high)}</span></div>
              )}
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-sm font-semibold text-yellow-800">Recommended Emergency Reserve (20%)</p>
            <p className="text-lg font-bold text-yellow-900">{fmt(result.reserveLow)} - {fmt(result.reserveHigh)}</p>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-sm font-semibold text-gray-700">Total Funding Needed (costs + reserve)</p>
            <p className="text-2xl font-bold text-gray-900">{fmt(result.totalLow + result.reserveLow)} - {fmt(result.totalHigh + result.reserveHigh)}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-2">Financing Options to Consider</h4>
            <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
              <li>SBA microloans (up to $50,000 at 8-13% interest)</li>
              <li>Small business grants (federal, state, and private)</li>
              <li>Business line of credit for ongoing expenses</li>
              <li>Equipment financing (use the equipment as collateral)</li>
              {result.totalMid > 100000 && <li>SBA 7(a) loan for larger startup costs</li>}
            </ul>
          </div>

          <button onClick={() => { setShowResults(false); setStep(0); }} className="px-6 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50">
            Start Over
          </button>
        </div>
      )}
    </div>
  );
}
