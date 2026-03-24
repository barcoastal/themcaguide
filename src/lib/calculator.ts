export interface McaCostInput {
  fundingAmount: number;
  factorRate: number;
  holdbackPercent: number;
  dailyRevenue: number;
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

export function calculateMcaCost(input: McaCostInput): McaCostResult {
  const totalRepayment = input.fundingAmount * input.factorRate;
  const totalCost = totalRepayment - input.fundingAmount;
  const dailyPayment = input.dailyRevenue * (input.holdbackPercent / 100);
  const estimatedDays = Math.ceil(totalRepayment / dailyPayment);
  const effectiveAPR =
    (totalCost / input.fundingAmount) * (365 / estimatedDays) * 100;

  return {
    totalRepayment,
    totalCost,
    dailyPayment,
    estimatedDays,
    effectiveAPR,
  };
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
