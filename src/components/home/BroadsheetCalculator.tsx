"use client";
import Link from "next/link";
import { useState } from "react";
const money = (n:number) => n.toLocaleString("en-US",{style:"currency",currency:"USD",maximumFractionDigits:0});
export default function BroadsheetCalculator(){
  const [amount,setAmount]=useState("50000");const [factor,setFactor]=useState("1.35");const [payment,setPayment]=useState("500");const [fees,setFees]=useState("0");
  const a=Number(amount),f=Number(factor),p=Number(payment),fee=Number(fees);
  const valid=amount!==""&&factor!==""&&payment!==""&&fees!==""&&[a,f,p,fee].every(Number.isFinite)&&a>0&&f>=1&&f<=3&&p>0&&fee>=0&&fee<a;
  const total=a*f,net=a-fee;
  return <div className="cost-calculator"><div className="calc-title-row"><h2>Your MCA, in numbers.</h2><span className="calc-badge">FREE CALCULATOR</span></div><div className="calc-controls">
    <label className="calc-field"><span>Advance amount ($)</span><input aria-label="Advance amount" type="number" min="1" step="1000" value={amount} onChange={e=>setAmount(e.target.value)} /></label>
    <label className="calc-field"><span>Factor rate (×)</span><input aria-label="Factor rate" type="number" min="1" max="3" step="0.01" value={factor} onChange={e=>setFactor(e.target.value)} /></label>
    <label className="calc-field"><span>Payment per business day ($)</span><input aria-label="Business day payment" type="number" min="1" step="50" value={payment} onChange={e=>setPayment(e.target.value)} /></label>
    <label className="calc-field"><span>Fees withheld upfront ($)</span><input aria-label="Upfront fees" type="number" min="0" step="100" value={fees} onChange={e=>setFees(e.target.value)} /></label>
  </div>{valid?<div className="calc-result" aria-live="polite"><span>Total contracted payments</span><div className="calc-total">{money(total)}</div><div className="calc-detail-grid"><div><span>Cost above cash received</span><strong>{money(total-net)}</strong></div><div><span>Estimated payment days</span><strong>{Math.ceil(total/p).toLocaleString()} days</strong></div></div><p className="calc-note">You receive {money(net)} after upfront fees. Assumes a fixed business-day payment and a smaller final payment if needed. Excludes other charges and holidays. <Link href="/tools/mca-calculator">Payment and APR estimator ↗</Link></p></div>:<p role="status" className="calc-error">Enter positive amounts, a factor from 1.00 to 3.00, and upfront fees below the advance.</p>}</div>;
}
