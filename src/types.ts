export type BenchmarkCategory =
  | "solar-term-boundary"      // 立春与24节气秒级交节边界
  | "late-zi-rollover"        // 晚子时 (23:00~24:00) 换日约定
  | "leap-month-transit"      // 农历闰月与节气换月边界
  | "year-2027-ding-wei"      // 2027 丁未流年专属四化与叠盘
  | "classical-historical";   // 传世典籍历史标准名造 (《渊海子平》《三命通会》)

export interface BenchmarkInput {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute?: number;
  gender?: "male" | "female";
  /** 晚子时换日约定：1 为 23:00 换日，2 为 00:00 换日 (默认 2) */
  sect?: 1 | 2;
}

export interface BenchmarkExpected {
  yearPillar?: string;
  monthPillar?: string;
  dayPillar?: string;
  hourPillar?: string;
  dayMaster?: string;
  fiveElements?: Record<string, number>;
  ziweiLifePalaceBranch?: string;
  ziweiMutations2027?: {
    huaLuStar?: string;
    huaQuanStar?: string;
    huaKeStar?: string;
    huaJiStar?: string;
  };
}

export interface BenchmarkFixture {
  id: string;
  category: BenchmarkCategory;
  name: string;
  description: string;
  input: BenchmarkInput;
  expected: BenchmarkExpected;
  sourceOrClassicalReference: string;
}

export interface VerificationReport {
  total: number;
  passed: number;
  failed: number;
  accuracyRate: string;
  categoryBreakdown: Record<BenchmarkCategory, { total: number; passed: number }>;
}
