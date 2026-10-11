export interface McaCostInput {
  fundingAmount: number;
  factorRate: number;
  holdbackPercent: number;
  dailyRevenue: number;
  paymentsPerYear?: number;
}

export interface McaCostResult {
  totalRepayment: number;
  totalCost: number;
  dailyPayment: number;
  estimatedDays: number;
  effectiveAPR: number;
}

export interface McaPayoffInput {
  remainingBalance: number;
  dailyPayment: number;
}

export interface McaPayoffResult {
  daysRemaining: number;
  payoffDate: string;
}

/** Solve an installment cash-flow rate, then annualize nominally (not APY).
 * Payments start one period after funding; the last can be smaller.
 * Returns NaN for unsupported inputs rather than a misleading estimate.
 */
export function estimateInstallmentApr(netProceeds: number, totalPayments: number, payment: number, periodsPerYear: number): number {
  if (![netProceeds,totalPayments,payment,periodsPerYear].every(Number.isFinite) || netProceeds <= 0 || totalPayments < netProceeds || payment <= 0 || periodsPerYear <= 0) return NaN;
  if (totalPayments === netProceeds) return 0;
  const periods = Math.ceil(totalPayments / payment);
  const lastPayment = totalPayments - payment * (periods - 1);
  const presentValue = (rate: number) => {
    if (rate === 0) return totalPayments;
    const fullPeriods = periods - 1;
    const annuity = payment * (-Math.expm1(-fullPeriods * Math.log1p(rate))) / rate;
    return annuity + lastPayment * Math.exp(-periods * Math.log1p(rate));
  };
  let low = 0, high = Math.max(1, totalPayments / netProceeds);
  for (let i = 0; i < 100; i++) {
    const mid = (low + high) / 2;
    if (presentValue(mid) > netProceeds) low = mid; else high = mid;
  }
  return ((low + high) / 2) * periodsPerYear * 100;
}

export function calculateMcaCost(input: McaCostInput): McaCostResult {
  const {fundingAmount, factorRate, holdbackPercent, dailyRevenue} = input;
  if (![fundingAmount,factorRate,holdbackPercent,dailyRevenue].every(Number.isFinite) || fundingAmount <= 0 || factorRate < 1 || holdbackPercent <= 0 || holdbackPercent > 100 || dailyRevenue <= 0) {
    return {totalRepayment: NaN,totalCost: NaN,dailyPayment: NaN,estimatedDays: NaN,effectiveAPR: NaN};
  }
  const totalRepayment = fundingAmount * factorRate;
  const totalCost = totalRepayment - fundingAmount;
  const dailyPayment = dailyRevenue * (holdbackPercent / 100);
  const estimatedDays = Math.ceil(totalRepayment / dailyPayment);
  const effectiveAPR = estimateInstallmentApr(fundingAmount, totalRepayment, dailyPayment, input.paymentsPerYear ?? 365);
  return {totalRepayment,totalCost,dailyPayment,estimatedDays,effectiveAPR};
}

export function calculateMcaPayoff(input: McaPayoffInput): McaPayoffResult {
  const daysRemaining = Math.ceil(input.remainingBalance / input.dailyPayment);
  const payoffDate = new Date();
  payoffDate.setDate(payoffDate.getDate() + daysRemaining);

  return {
    daysRemaining,
    payoffDate: payoffDate.toISOString().split("T")[0],
  };
}
