export type DebtReliefPath = "diy" | "debt-relief-company" | "attorney";

export interface CalcInput {
  totalOwed: number;
  path: DebtReliefPath;
  settlementPercent: number;
  feePercentOfSavings?: number;
  retainer?: number;
  hourlyRate?: number;
  estimatedHours?: number;
}

export interface CalcResult {
  outOfPocket: number;
  totalFees: number;
  savings: number;
}

export function calculateDebtReliefCost(input: CalcInput): CalcResult {
  const settlementAmount = input.totalOwed * input.settlementPercent;
  const savingsBeforeFees = input.totalOwed - settlementAmount;

  if (input.path === "diy") {
    return { outOfPocket: settlementAmount, totalFees: 0, savings: savingsBeforeFees };
  }

  if (input.path === "debt-relief-company") {
    const fee = savingsBeforeFees * (input.feePercentOfSavings ?? 0);
    return {
      outOfPocket: settlementAmount + fee,
      totalFees: fee,
      savings: savingsBeforeFees - fee,
    };
  }

  const legalFees = (input.retainer ?? 0) + (input.hourlyRate ?? 0) * (input.estimatedHours ?? 0);
  return {
    outOfPocket: settlementAmount + legalFees,
    totalFees: legalFees,
    savings: savingsBeforeFees - legalFees,
  };
}
