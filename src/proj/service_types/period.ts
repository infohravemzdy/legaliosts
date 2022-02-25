export interface IPeriod {
  code: number;
  year(): number;
  month(): number;
}

export class Period implements IPeriod {
  public static ZeroCode: number = 0;

  code: number;

  constructor(code: number) {
    this.code = code;
  }
  year(): number {
    return Math.floor(this.code / 100);
  }
  month(): number {
    return this.code % 100;
  }
  public static new(): IPeriod {
    return new Period(Period.ZeroCode);
  }
  public static zero(): IPeriod {
    return new Period(Period.ZeroCode);
  }
  public static get(code: number): IPeriod {
    return new Period(code);
  }
  public static getWithYearMonth(year: number, month: number): IPeriod {
    return new Period(year * 100 + month);
  }
}
