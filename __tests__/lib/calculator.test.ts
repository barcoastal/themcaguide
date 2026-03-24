import {
  calculateMcaCost,
  calculateMcaPayoff,
  McaCostResult,
  McaPayoffResult,
} from "@/lib/calculator";

describe("calculateMcaCost", () => {
  it("calculates total repayment from funding amount and factor rate", () => {
    const result = calculateMcaCost({
      fundingAmount: 50000,
      factorRate: 1.35,
      holdbackPercent: 15,
      dailyRevenue: 5000,
    });
    expect(result.totalRepayment).toBe(67500);
    expect(result.totalCost).toBe(17500);
  });

  it("calculates daily payment from holdback and revenue", () => {
    const result = calculateMcaCost({
      fundingAmount: 50000,
      factorRate: 1.35,
      holdbackPercent: 15,
      dailyRevenue: 5000,
    });
    expect(result.dailyPayment).toBe(750);
  });

  it("estimates repayment days", () => {
    const result = calculateMcaCost({
      fundingAmount: 50000,
      factorRate: 1.35,
      holdbackPercent: 15,
      dailyRevenue: 5000,
    });
    expect(result.estimatedDays).toBe(90);
  });

  it("calculates effective APR", () => {
    const result = calculateMcaCost({
      fundingAmount: 50000,
      factorRate: 1.35,
      holdbackPercent: 15,
      dailyRevenue: 5000,
    });
    expect(result.effectiveAPR).toBeCloseTo(141.94, 0);
  });
});

describe("calculateMcaPayoff", () => {
  it("calculates days remaining to payoff", () => {
    const result = calculateMcaPayoff({
      remainingBalance: 30000,
      dailyPayment: 750,
    });
    expect(result.daysRemaining).toBe(40);
  });

  it("calculates payoff date from today", () => {
    const result = calculateMcaPayoff({
      remainingBalance: 30000,
      dailyPayment: 750,
    });
    expect(result.daysRemaining).toBe(40);
    expect(typeof result.payoffDate).toBe("string");
  });
});
