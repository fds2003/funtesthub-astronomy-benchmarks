declare module "lunar-javascript" {
  export interface EightChar {
    getYear(): string;
    getMonth(): string;
    getDay(): string;
    getTime(): string;
    getDayGan(): string;
    setSect(sect: 1 | 2): void;
    toString(): string;
  }

  export interface LunarInstance {
    getEightChar(): EightChar;
  }

  export interface SolarInstance {
    getLunar(): LunarInstance;
  }

  export class Solar {
    static fromYmdHms(
      year: number,
      month: number,
      day: number,
      hour: number,
      minute: number,
      second: number
    ): SolarInstance;
  }

  export class Lunar {
    static fromYmdHms(
      year: number,
      month: number,
      day: number,
      hour: number,
      minute: number,
      second: number
    ): LunarInstance;
  }
}
