"use client";
import { useState } from "react";
import { calculateDebtReliefCost, DebtReliefPath } from "@/lib/mca-debt-relief-calculator";

function NumberInput({ label, value, onChange, prefix, suffix, step = 100 }: {
  label: string; value: number; onChange: (n: number) => void;
  prefix?: string; suffix?: string; step?: number;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-slate-700 mb-1">{label}</span>
      <div className="flex items-center rounded-lg border border-slate-300 bg-white focus-within:ring-2 focus-within:ring-blue-500">
        {prefix && <span className="pl-3 text-slate-500">{prefix}</span>}
        <input
          type="number"
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full px-3 py-2 bg-transparent outline-none"
        />
        {suffix && <span className="pr-3 text-slate-500">{suffix}</span>}
      </div>
    </label>
  );
}

export default function Calculator() {
  const [totalOwed, setTotalOwed] = useState(100000);
  const [settlementPercent, setSettlementPercent] = useState(50);
  const [path, setPath] = useState<DebtReliefPath>("diy");
  const [feePercentOfSavings, setFeePercentOfSavings] = useState(30);
  const [retainer, setRetainer] = useState(5000);
  const [hourlyRate, setHourlyRate] = useState(400);
  const [estimatedHours, setEstimatedHours] = useState(20);

  const result = calculateDebtReliefCost({
    totalOwed,
    path,
    settlementPercent: settlementPercent / 100,
    feePercentOfSavings: feePercentOfSavings / 100,
    retainer,
    hourlyRate,
    estimatedHours,
  });

  return (
    <div className="space-y-6 p-6 bg-white rounded-2xl shadow border border-slate-200">
      <div className="grid md:grid-cols-2 gap-4">
        <NumberInput label="Total MCA debt owed" value={totalOwed} onChange={setTotalOwed} prefix="$" step={1000} />
        <NumberInput label="Expected settlement percent" value={settlementPercent} onChange={setSettlementPercent} suffix="%" step={5} />
      </div>

      <div>
        <span className="block text-sm font-medium text-slate-700 mb-2">Path</span>
        <div className="grid grid-cols-3 gap-2">
          {(["diy", "debt-relief-company", "attorney"] as DebtReliefPath[]).map((p) => (
            <button
              key={p}
              onClick={() => setPath(p)}
              className={`px-4 py-3 rounded-lg border-2 text-sm font-medium transition ${
                path === p ? "border-blue-600 bg-blue-50 text-blue-900" : "border-slate-200 text-slate-700 hover:border-slate-400"
              }`}
            >
              {p === "diy" ? "DIY" : p === "debt-relief-company" ? "Debt relief company" : "Attorney"}
            </button>
          ))}
        </div>
      </div>

      {path === "debt-relief-company" && (
        <NumberInput label="Company fee (% of savings)" value={feePercentOfSavings} onChange={setFeePercentOfSavings} suffix="%" step={5} />
      )}

      {path === "attorney" && (
        <div className="grid md:grid-cols-3 gap-4">
          <NumberInput label="Retainer" value={retainer} onChange={setRetainer} prefix="$" step={500} />
          <NumberInput label="Hourly rate" value={hourlyRate} onChange={setHourlyRate} prefix="$" step={50} />
          <NumberInput label="Estimated hours" value={estimatedHours} onChange={setEstimatedHours} step={1} />
        </div>
      )}

      <div className="grid grid-cols-3 gap-4 mt-8">
        <div className="bg-slate-50 p-4 rounded-lg">
          <div className="text-xs uppercase text-slate-500">Out of pocket</div>
          <div className="text-2xl font-bold text-slate-900">${result.outOfPocket.toLocaleString()}</div>
        </div>
        <div className="bg-red-50 p-4 rounded-lg">
          <div className="text-xs uppercase text-red-700">Total fees</div>
          <div className="text-2xl font-bold text-red-900">${result.totalFees.toLocaleString()}</div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="text-xs uppercase text-green-700">Your savings</div>
          <div className="text-2xl font-bold text-green-900">${result.savings.toLocaleString()}</div>
        </div>
      </div>
    </div>
  );
}
