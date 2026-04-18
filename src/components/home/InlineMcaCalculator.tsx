"use client";

import { useState } from "react";
import Link from "next/link";
import { Calculator, ArrowRight } from "lucide-react";
import { calculateMcaCost } from "@/lib/calculator";

/**
 * Homepage-embedded MCA cost calculator.
 *
 * Uses slider inputs for a low-friction "move the sliders, see the real cost"
 * interaction instead of the bare <input type="number"> fields in the
 * dedicated /tools/mca-calculator page. Backed by the same calculateMcaCost
 * helper from src/lib/calculator.ts so numbers stay consistent.
 */
export default function InlineMcaCalculator() {
  const [fundingAmount, setFundingAmount] = useState(50000);
  const [factorRate, setFactorRate] = useState(1.35);
  const [holdbackPercent, setHoldbackPercent] = useState(15);
  const [dailyRevenue, setDailyRevenue] = useState(5000);

  const result = calculateMcaCost({
    fundingAmount,
    factorRate,
    holdbackPercent,
    dailyRevenue,
  });

  const fmt = (n: number) =>
    n.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    });

  return (
    <section id="mca-calculator" className="py-16 bg-blue-50 border-t border-b border-blue-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-blue-800 uppercase tracking-wider mb-2">
            Free Tool
          </p>
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
            MCA Cost Calculator
          </h2>
          <p className="mt-3 text-lg text-gray-500">
            Move the sliders. See the real cost before you sign.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:border-r border-gray-100 space-y-6">
              <SliderField
                label="Funding Amount"
                value={fmt(fundingAmount)}
                min={10000}
                max={250000}
                step={1000}
                current={fundingAmount}
                onChange={setFundingAmount}
                minLabel="$10K"
                maxLabel="$250K"
              />
              <SliderField
                label="Factor Rate"
                value={factorRate.toFixed(2)}
                min={1.1}
                max={1.6}
                step={0.01}
                current={factorRate}
                onChange={setFactorRate}
                minLabel="1.10"
                maxLabel="1.60"
              />
              <SliderField
                label="Holdback %"
                value={`${holdbackPercent}%`}
                min={5}
                max={25}
                step={1}
                current={holdbackPercent}
                onChange={setHoldbackPercent}
                minLabel="5%"
                maxLabel="25%"
              />
              <SliderField
                label="Avg. Daily Revenue"
                value={fmt(dailyRevenue)}
                min={500}
                max={25000}
                step={100}
                current={dailyRevenue}
                onChange={setDailyRevenue}
                minLabel="$500"
                maxLabel="$25K"
              />
            </div>

            <div className="p-8 bg-gray-50 space-y-4">
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Total Repayment
                </p>
                <p className="text-3xl font-bold text-gray-900 tabular-nums">
                  {fmt(result.totalRepayment)}
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Total Cost of Funding
                </p>
                <p className="text-3xl font-bold text-red-600 tabular-nums">
                  {fmt(result.totalCost)}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Daily Payment
                  </p>
                  <p className="text-xl font-bold text-gray-900 tabular-nums">
                    {fmt(result.dailyPayment)}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Repayment Period
                  </p>
                  <p className="text-xl font-bold text-gray-900 tabular-nums">
                    {result.estimatedDays} days
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Effective APR
                </p>
                <p className="text-3xl font-bold text-orange-600 tabular-nums">
                  {result.effectiveAPR.toFixed(1)}%
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  For reference: credit cards average ~22% APR
                </p>
              </div>

              <Link
                href="/tools/mca-calculator"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-800 hover:underline"
              >
                <Calculator className="w-4 h-4" />
                Open full calculator
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SliderField({
  label,
  value,
  min,
  max,
  step,
  current,
  onChange,
  minLabel,
  maxLabel,
}: {
  label: string;
  value: string;
  min: number;
  max: number;
  step: number;
  current: number;
  onChange: (n: number) => void;
  minLabel: string;
  maxLabel: string;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between mb-2">
        <label className="text-sm font-semibold text-gray-700">{label}</label>
        <span className="text-lg font-bold text-gray-900 tabular-nums">{value}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={current}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-blue-800"
      />
      <div className="flex justify-between text-xs text-gray-400 mt-1">
        <span>{minLabel}</span>
        <span>{maxLabel}</span>
      </div>
    </div>
  );
}
