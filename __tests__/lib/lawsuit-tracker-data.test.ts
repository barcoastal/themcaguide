import { lawsuits } from "@/app/tools/mca-lawsuit-tracker/tracker-data";

describe("lawsuit tracker data", () => {
  test("has minimum record count", () => {
    expect(lawsuits.length).toBeGreaterThanOrEqual(8);
  });

  test("every record has required fields populated", () => {
    for (const r of lawsuits) {
      expect(r.caseName).toBeTruthy();
      expect(r.lender).toBeTruthy();
      expect(r.court).toBeTruthy();
      expect(r.summary).toBeTruthy();
      expect(r.sourceUrl).toMatch(/^https?:\/\//);
      expect([
        "pending",
        "dismissed",
        "settled",
        "judgment",
        "appeal",
        "injunction",
        "consent-decree",
      ]).toContain(r.status);
    }
  });

  test("every record has a valid sourceType", () => {
    const validTypes = [
      "ny-ag",
      "ftc",
      "cfpb",
      "appellate",
      "news-investigation",
      "state-ag",
    ];
    for (const r of lawsuits) {
      expect(validTypes).toContain(r.sourceType);
    }
  });
});
