export interface IPeriod {
    code: number;
    year(): number;
    month(): number;
}
export declare class Period implements IPeriod {
    static ZeroCode: number;
    code: number;
    constructor(code: number);
    year(): number;
    month(): number;
    static new(): IPeriod;
    static zero(): IPeriod;
    static get(code: number): IPeriod;
    static getWithYearMonth(year: number, month: number): IPeriod;
}
