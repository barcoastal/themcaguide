"use client";
import {useState} from "react";
import {estimateInstallmentApr} from "@/lib/calculator";
export default function FactorRateToAprConverter(){
 const [factor,setFactor]=useState("1.35"),[months,setMonths]=useState("6"),[amount,setAmount]=useState("50000"),[fees,setFees]=useState("0");
 const a=Number(amount),f=Number(factor),m=Number(months),fee=Number(fees),total=a*f,net=a-fee;
 const apr=estimateInstallmentApr(net,total,total/m,12);
 const valid=[amount,factor,months,fees].every(v=>v!=="")&&a>0&&f>=1&&fee>=0&&fee<a&&Number.isInteger(m)&&m>=1&&m<=120&&Number.isFinite(apr);
 const fmt=(n:number)=>n.toLocaleString("en-US",{style:"currency",currency:"USD",maximumFractionDigits:0});
 return <div className="bg-white border rounded-lg p-6 md:p-8"><div className="grid md:grid-cols-2 gap-7"><div className="space-y-4">{[
 {label:"Advance amount ($)",value:amount,set:setAmount,min:1,step:1000}, {label:"Factor rate",value:factor,set:setFactor,min:1,step:.01}, {label:"Number of monthly payments",value:months,set:setMonths,min:1,max:120,step:1},{label:"Fees withheld upfront ($)",value:fees,set:setFees,min:0,step:100}
 ].map(x=><label className="block" key={x.label}><span className="text-sm font-medium">{x.label}</span><input type="number" className="mt-1 w-full border rounded-lg px-4 py-3" value={x.value} min={x.min} max={x.max} step={x.step} onChange={e=>x.set(e.target.value)}/></label>)}</div><div className="bg-[#edf3e6] rounded-lg p-6 space-y-5" aria-live="polite">{valid?<>{[["Estimated annualized rate",apr.toFixed(1)+"%"],["Cash received",fmt(net)],["Total payments",fmt(total)],["Cost above cash received",fmt(total-net)],["Assumed monthly payment",fmt(total/m)]].map(([k,v])=><div key={k}><p className="text-xs text-slate-600">{k}</p><p className="text-2xl font-semibold tracking-tight">{v}</p></div>)}</>:<p role="status">Enter a positive advance, a factor of at least 1, 1–120 whole monthly payments, and upfront fees below the advance.</p>}</div></div><p className="mt-6 text-xs text-slate-600 leading-relaxed">Assumes equal monthly installments, first payment one month after funding. Solves for the monthly rate equating payments to net proceeds, then multiplies by 12. This is nominal annualization, not compounded APY. Daily debits, irregular dates, fees paid separately, and variable receipts require a different cash-flow schedule.</p></div>;
}
