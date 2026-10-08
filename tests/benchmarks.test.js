import { describe, it, expect } from "vitest";
import { verifyFixture } from "../src/verify.js";
import fixturesData from "../data/fixtures.json" with { type: "json" };
const fixtures = fixturesData;
describe("FunTestHub Astronomy & Chinese Metaphysics Benchmarks (266 Fixtures)", () => {
    describe("1. Solar-Term (Jie Qi) & Li Chun Minute Boundaries (110 cases)", () => {
        const list = fixtures.filter((f) => f.category === "solar-term-boundary");
        it.each(list)("$name", (fixture) => {
            const res = verifyFixture(fixture);
            expect(res.errors).toEqual([]);
            expect(res.pass).toBe(true);
        });
    });
    describe("2. Late Zi Hour (23:00-24:00) Rollovers: Sect 1 vs Sect 2 (40 cases)", () => {
        const list = fixtures.filter((f) => f.category === "late-zi-rollover");
        it.each(list)("$name", (fixture) => {
            const res = verifyFixture(fixture);
            expect(res.errors).toEqual([]);
            expect(res.pass).toBe(true);
        });
    });
    describe("3. Leap Months & Solar Term Precedence (40 cases)", () => {
        const list = fixtures.filter((f) => f.category === "leap-month-transit");
        it.each(list)("$name", (fixture) => {
            const res = verifyFixture(fixture);
            expect(res.errors).toEqual([]);
            expect(res.pass).toBe(true);
        });
    });
    describe("4. Year 2027 Ding Wei Mutators & Flow Month Pillars (36 cases)", () => {
        const list = fixtures.filter((f) => f.category === "year-2027-ding-wei");
        it.each(list)("$name", (fixture) => {
            const res = verifyFixture(fixture);
            expect(res.errors).toEqual([]);
            expect(res.pass).toBe(true);
            if (fixture.expected.ziweiMutations2027) {
                expect(fixture.expected.ziweiMutations2027.huaLuStar).toBe("太阴");
                expect(fixture.expected.ziweiMutations2027.huaQuanStar).toBe("天同");
                expect(fixture.expected.ziweiMutations2027.huaKeStar).toBe("天机");
                expect(fixture.expected.ziweiMutations2027.huaJiStar).toBe("巨门");
            }
        });
    });
    describe("5. Classical Historical Benchmark Charts (40 cases)", () => {
        const list = fixtures.filter((f) => f.category === "classical-historical");
        it.each(list)("$name", (fixture) => {
            const res = verifyFixture(fixture);
            expect(res.errors).toEqual([]);
            expect(res.pass).toBe(true);
        });
    });
});
