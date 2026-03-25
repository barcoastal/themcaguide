"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { AlertTriangle } from "lucide-react";

const data = [
  { name: "MCA", cost: 67500, fill: "#ef4444" },
  { name: "Online Lender", cost: 58000, fill: "#f97316" },
  { name: "SBA Loan", cost: 53500, fill: "#22c55e" },
  { name: "Bank LOC", cost: 52500, fill: "#16a34a" },
];

const formatDollar = (value: number) => `$${(value / 1000).toFixed(1)}K`;

export default function RealCost() {
  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">The Real Cost of a $50,000 Advance</h2>
          <p className="mt-3 text-lg text-gray-500">See how MCA compares to other financing options</p>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 80, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" horizontal={false} />
              <XAxis type="number" domain={[50000, 70000]} tickFormatter={formatDollar} />
              <YAxis type="category" dataKey="name" tick={{ fontSize: 14, fontWeight: 600 }} />
              <Tooltip formatter={(value) => [`$${Number(value).toLocaleString()}`, "Total Repayment"]} />
              <Bar dataKey="cost" radius={[0, 8, 8, 0]} barSize={36}>
                {data.map((entry, index) => (
                  <Cell key={index} fill={entry.fill} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-6 p-4 bg-amber-50 rounded-xl border border-amber-200 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-amber-800">
              <span className="font-bold">Did you know?</span> On a $50,000 MCA with a 1.35 factor rate, you pay back $67,500 — that&apos;s $17,500 in fees. The same $50K through an SBA loan could cost just $3,500 in interest.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
