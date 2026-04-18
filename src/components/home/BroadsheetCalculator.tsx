"use client";

import { useState } from "react";
import { calculateMcaCost } from "@/lib/calculator";

const fmtUSD = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

export default function BroadsheetCalculator() {
  const [amount, setAmount] = useState(50000);
  const [factor, setFactor] = useState(1.35);
  const [holdback, setHoldback] = useState(12);
  const [revenue, setRevenue] = useState(3500);

  const result = calculateMcaCost({
    fundingAmount: amount,
    factorRate: factor,
    holdbackPercent: holdback,
    dailyRevenue: revenue,
  });

  const termMonths = result.estimatedDays / 21;

  return (
    <div className="calc">
      <div className="calc-head">
        <span>The Rate Table</span>
        <span className="live">Live</span>
      </div>
      <div className="calc-body">
        <div className="calc-title">Your advance, translated into a true cost.</div>

        <div className="field">
          <div className="field-row">
            <span className="field-label">Advance Amount</span>
            <span className="field-value">{fmtUSD(amount)}</span>
          </div>
          <input
            type="range"
            min={10000}
            max={500000}
            step={5000}
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </div>

        <div className="field">
          <div className="field-row">
            <span className="field-label">Factor Rate</span>
            <span className="field-value">{factor.toFixed(2)}</span>
          </div>
          <input
            type="range"
            min={1.15}
            max={1.55}
            step={0.01}
            value={factor}
            onChange={(e) => setFactor(Number(e.target.value))}
          />
        </div>

        <div className="field">
          <div className="field-row">
            <span className="field-label">Holdback (% of daily sales)</span>
            <span className="field-value">{holdback}%</span>
          </div>
          <input
            type="range"
            min={5}
            max={25}
            step={1}
            value={holdback}
            onChange={(e) => setHoldback(Number(e.target.value))}
          />
        </div>

        <div className="field">
          <div className="field-row">
            <span className="field-label">Daily Revenue</span>
            <span className="field-value">{fmtUSD(revenue)}</span>
          </div>
          <input
            type="range"
            min={500}
            max={20000}
            step={100}
            value={revenue}
            onChange={(e) => setRevenue(Number(e.target.value))}
          />
        </div>

        <div className="results">
          <div className="result-row prime">
            <span className="result-label">Effective APR</span>
            <span className="result-value">{result.effectiveAPR.toFixed(0)}%</span>
          </div>
          <div className="result-row">
            <span className="result-label">Total Paid Back</span>
            <span className="result-value">{fmtUSD(result.totalRepayment)}</span>
          </div>
          <div className="result-row">
            <span className="result-label">Cost in Fees</span>
            <span className="result-value">{fmtUSD(result.totalCost)}</span>
          </div>
          <div className="result-row">
            <span className="result-label">Daily Payment</span>
            <span className="result-value">{fmtUSD(result.dailyPayment)}</span>
          </div>
          <div className="result-row">
            <span className="result-label">Term</span>
            <span className="result-value">
              {termMonths.toFixed(1)} mo ({result.estimatedDays} days)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
