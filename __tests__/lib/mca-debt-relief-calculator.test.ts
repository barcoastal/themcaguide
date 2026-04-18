import { calculateDebtReliefCost } from "@/lib/mca-debt-relief-calculator";

describe("calculateDebtReliefCost", () => {
  test("DIY: no fees, just the settlement amount", () => {
    const r = calculateDebtReliefCost({ totalOwed: 100000, path: "diy", settlementPercent: 0.5 });
    expect(r.outOfPocket).toBe(50000);
    expect(r.totalFees).toBe(0);
    expect(r.savings).toBe(50000);
  });

  test("Debt relief company: percentage of savings fee", () => {
    const r = calculateDebtReliefCost({
      totalOwed: 100000,
      path: "debt-relief-company",
      settlementPercent: 0.5,
      feePercentOfSavings: 0.3,
    });
    expect(r.outOfPocket).toBe(65000);
    expect(r.totalFees).toBe(15000);
    expect(r.savings).toBe(35000);
  });

  test("Attorney: flat retainer + hourly", () => {
    const r = calculateDebtReliefCost({
      totalOwed: 100000,
      path: "attorney",
      settlementPercent: 0.5,
      retainer: 5000,
      hourlyRate: 400,
      estimatedHours: 20,
    });
    expect(r.outOfPocket).toBe(63000);
    expect(r.totalFees).toBe(13000);
    expect(r.savings).toBe(37000);
  });
});
