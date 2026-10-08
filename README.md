# Chinese Metaphysics & Astronomical Calendar Benchmarks

[![CI Tests](https://github.com/fds2003/funtesthub-astronomy-benchmarks/actions/workflows/test.yml/badge.svg)](https://github.com/fds2003/funtesthub-astronomy-benchmarks/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue.svg)](https://www.typescriptlang.org/)
[![Benchmarks: 266 Passed](https://img.shields.io/badge/Benchmarks-266%20Passed%20(100%25)-success.svg)](https://github.com/fds2003/funtesthub-astronomy-benchmarks)

A curated, open-source verification benchmark of **266 astronomical edge cases** for traditional Chinese metaphysics (BaZi Four Pillars of Destiny and Ziwei Dou Shu Purple Star Astrology).

---

## 🌟 Overview & Purpose

Computational Chinese metaphysics often suffers from discrepancies across online software:
1. **Solar-Term (Jie Qi) Drift**: Whether the Year and Month Pillars switch at midnight on Gregorian dates or at exact astronomical solar-term moments (*Li Chun* and the twelve *Jie* terms).
2. **Late-Zi (23:00–24:00) Rollovers**: The ongoing debate between Sect 1 (day rolls over to tomorrow at 23:00) and Sect 2 (day rolls over at midnight 00:00).
3. **Leap Months (*Run Yue*)**: How lunar intercalation interacts with solar terms in BaZi and star placement in Ziwei Dou Shu.
4. **Annual Transit Mutations**: Verified Si Hua (Four Flying Transformations) mappings for transition years (such as Year 2027 Ding Wei).

This repository provides an open, machine-readable dataset and automated test suite cross-verified against astronomical ephemerides (Purple Mountain Observatory) and standard classical texts (*Yuan Hai Zi Ping*, *San Ming Tong Hui*, *Di Tian Sui*, and Wei Qianli's *Qian Li Ming Gao*).

---

## 🔬 Benchmark Dataset Structure (266 Test Fixtures)

The benchmark dataset is located at [`data/fixtures.json`](./data/fixtures.json) and organized into 5 core verification categories:

| Category | Count | Focus Area & Edge Case Scenario |
|---|---:|---|
| `solar-term-boundary` | **110** | Verifies Li Chun (立春) transition moments across 55 continuous years (1980–2034), comparing points immediately before vs. after astronomical交节 to ensure zero Year Pillar drift. |
| `late-zi-rollover` | **40** | Verifies 10 representative birth dates at 22:50 (Hai), 23:30 (Sect 1), 23:30 (Sect 2), and 00:30 (Early Zi), confirming mathematical adherence to the Wu Shu Dun (五鼠遁) formula. |
| `leap-month-transit` | **40** | Covers 20 leap-month years (1984 through 2036), confirming that BaZi Month Pillars adhere strictly to astronomical solar terms rather than nominal lunar month indices. |
| `year-2027-ding-wei` | **36** | Comprehensive verification of all 12 flow-months of the 2027 Ding Wei (Fire Goat) year, including the Ding stem Si Hua mutators: Tai Yin (Lu), Tian Tong (Quan), Tian Ji (Ke), and Ju Men (Ji). |
| `classical-historical` | **40** | Standard benchmark charts from imperial biographies and classical compendiums (Emperor Qianlong, Zhu Yuanzhang, Su Shi, Yue Fei, Zeng Guofan, etc.). |

---

## 🚀 Live Production Implementation

These benchmarks are continuously verified and run in production by **[FunTestHub](https://funtesthub.com/en/about/)** across its suite of privacy-preserving, client-side Chinese astrology tools:

* **[Free Bazi (Four Pillars) Calculator](https://funtesthub.com/en/bazi/)**: Browser-executed Four Pillars engine adhering to Sect 2 midnight rollover conventions.
* **[Ziwei Dou Shu Online Chart](https://funtesthub.com/en/ziwei/)**: 12-palace Purple Star cartography based on Chen Tuan's classical lineage.
* **[2027 Personal Fortune Report](https://funtesthub.com/en/2027-horoscope/)**: 12-month energy timeline and annual transit maps.
* **[Methodology & Conventions](https://funtesthub.com/en/about/)**: Transparent documentation of calendar engines and classical references.

---

## 🛠️ Installation & Testing

Ensure you have Node.js 20+ installed:

```bash
# Clone the repository
git clone https://github.com/fds2003/funtesthub-astronomy-benchmarks.git
cd funtesthub-astronomy-benchmarks

# Install dependencies
npm install

# Run full Vitest benchmark suite
npm test
```

### CLI Verification Report
You can also run the direct verification runner:

```bash
npx tsx src/verify.ts
```

Output:
```text
Running FunTestHub Astronomy Benchmarks...
Results: 266/266 passed (100.00% accuracy)

Category Breakdown:
  - solar-term-boundary: 110/110 (100.0%)
  - late-zi-rollover: 40/40 (100.0%)
  - leap-month-transit: 40/40 (100.0%)
  - year-2027-ding-wei: 36/36 (100.0%)
  - classical-historical: 40/40 (100.0%)
```

---

## 📄 License & Attribution

This project is licensed under the **MIT License**. See [`LICENSE`](./LICENSE) for details.

Maintained by **fds2003** and the **[FunTestHub Engineering Team](https://funtesthub.com)**.
Contributions, edge-case submissions, and astronomical corrections are welcome via [GitHub Issues](https://github.com/fds2003/funtesthub-astronomy-benchmarks/issues).
