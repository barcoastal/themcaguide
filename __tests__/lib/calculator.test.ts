import {
  calculateMcaCost,
  calculateMcaPayoff,
  estimateInstallmentApr,
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

  it("calculates the annualized installment rate", () => {
    const result = calculateMcaCost({
      fundingAmount: 50000,
      factorRate: 1.35,
      holdbackPercent: 15,
      dailyRevenue: 5000,
    });
    const periodic = result.effectiveAPR / 100 / 365;
    const pv = Array.from({length: 90}, (_, i) => 750 / (1 + periodic) ** (i + 1)).reduce((a,b) => a+b,0);
    expect(pv).toBeCloseTo(50000, 6);
    expect(result.effectiveAPR).toBeGreaterThan(141.94);
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


describe("installment APR methodology", () => {
  it("matches a known 1% monthly amortizing loan", () => {
    const payment = 10000 * 0.01 / (1 - (1.01 ** -12));
    expect(estimateInstallmentApr(10000, payment * 12, payment, 12)).toBeCloseTo(12, 7);
  });
  it("accounts for a smaller final installment", () => {
    const payments = [400,400,300];
    const proceeds = payments.reduce((sum, p, i) => sum + p / 1.02 ** (i+1), 0);
    expect(estimateInstallmentApr(proceeds,1100,400,12)).toBeCloseTo(24,7);
  });
  it("charges a higher annualized rate when fees reduce proceeds", () => {
    expect(estimateInstallmentApr(48000,67500,11250,12)).toBeGreaterThan(estimateInstallmentApr(50000,67500,11250,12));
  });
  it("returns zero for a no-cost advance and rejects zero payments", () => {
    expect(estimateInstallmentApr(1000,1000,100,12)).toBe(0);
    expect(Number.isNaN(estimateInstallmentApr(1000,1350,0,12))).toBe(true);
    expect(Number.isNaN(calculateMcaCost({fundingAmount:0,factorRate:1.35,holdbackPercent:15,dailyRevenue:5000}).effectiveAPR)).toBe(true);
  });
});
