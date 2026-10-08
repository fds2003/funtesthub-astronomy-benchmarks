import { Solar } from "lunar-javascript";
import type { BenchmarkFixture, VerificationReport, BenchmarkCategory } from "./types.js";
import fixturesData from "../data/fixtures.json" with { type: "json" };

const fixtures = fixturesData as BenchmarkFixture[];

export function verifyFixture(fixture: BenchmarkFixture): { pass: boolean; errors: string[] } {
  const { input, expected } = fixture;
  const solar = Solar.fromYmdHms(
    input.year,
    input.month,
    input.day,
    input.hour,
    input.minute ?? 0,
    0
  );
  const lunar = solar.getLunar();
  const eightChar = lunar.getEightChar();
  if (input.sect !== undefined) {
    eightChar.setSect(input.sect);
  }

  const errors: string[] = [];

  if (expected.yearPillar && eightChar.getYear() !== expected.yearPillar) {
    errors.push(`Year Pillar mismatch: expected ${expected.yearPillar}, got ${eightChar.getYear()}`);
  }
  if (expected.monthPillar && eightChar.getMonth() !== expected.monthPillar) {
    errors.push(`Month Pillar mismatch: expected ${expected.monthPillar}, got ${eightChar.getMonth()}`);
  }
  if (expected.dayPillar && eightChar.getDay() !== expected.dayPillar) {
    errors.push(`Day Pillar mismatch: expected ${expected.dayPillar}, got ${eightChar.getDay()}`);
  }
  if (expected.hourPillar && eightChar.getTime() !== expected.hourPillar) {
    errors.push(`Hour Pillar mismatch: expected ${expected.hourPillar}, got ${eightChar.getTime()}`);
  }
  if (expected.dayMaster && eightChar.getDayGan() !== expected.dayMaster) {
    errors.push(`Day Master mismatch: expected ${expected.dayMaster}, got ${eightChar.getDayGan()}`);
  }

  return { pass: errors.length === 0, errors };
}

export function runAllBenchmarks(): VerificationReport {
  let passed = 0;
  let failed = 0;
  const categoryBreakdown: Record<BenchmarkCategory, { total: number; passed: number }> = {
    "solar-term-boundary": { total: 0, passed: 0 },
    "late-zi-rollover": { total: 0, passed: 0 },
    "leap-month-transit": { total: 0, passed: 0 },
    "year-2027-ding-wei": { total: 0, passed: 0 },
    "classical-historical": { total: 0, passed: 0 },
  };

  for (const f of fixtures) {
    const cat = f.category;
    categoryBreakdown[cat].total++;
    const res = verifyFixture(f);
    if (res.pass) {
      passed++;
      categoryBreakdown[cat].passed++;
    } else {
      failed++;
    }
  }

  const total = fixtures.length;
  const accuracyRate = `${((passed / total) * 100).toFixed(2)}%`;

  return { total, passed, failed, accuracyRate, categoryBreakdown };
}

// CLI runner if invoked directly
if (process.argv[1]?.endsWith("verify.js") || process.argv[1]?.endsWith("verify.ts")) {
  console.log("Running FunTestHub Astronomy Benchmarks...");
  const report = runAllBenchmarks();
  console.log(`\nResults: ${report.passed}/${report.total} passed (${report.accuracyRate} accuracy)`);
  console.log("\nCategory Breakdown:");
  for (const [cat, stat] of Object.entries(report.categoryBreakdown)) {
    console.log(`  - ${cat}: ${stat.passed}/${stat.total} (${((stat.passed / stat.total) * 100).toFixed(1)}%)`);
  }
}
