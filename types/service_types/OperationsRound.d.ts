import bigDecimal = require('js-big-decimal');
export declare class OperationsRound {
    private static INT_ROUNDING_CONST;
    private static ZERO;
    static abs(op: bigDecimal): bigDecimal;
    static roundToInt(valueDec: bigDecimal): number;
    static roundUp(valueDec: bigDecimal): number;
    static roundDown(valueDec: bigDecimal): number;
    static roundNorm(valueDec: bigDecimal): number;
    static nearRoundUp(valueDec: bigDecimal, nearest?: number): number;
    static nearRoundDown(valueDec: bigDecimal, nearest?: number): number;
    static roundUp50(valueDec: bigDecimal): number;
    static roundUp25(valueDec: bigDecimal): number;
    static decRoundUp(valueDec: bigDecimal): bigDecimal;
    static decRoundDown(valueDec: bigDecimal): bigDecimal;
    static decRoundNorm(valueDec: bigDecimal): bigDecimal;
    static decNearRoundUp(valueDec: bigDecimal, nearest?: number): bigDecimal;
    static decNearRoundDown(valueDec: bigDecimal, nearest?: number): bigDecimal;
    static decRoundUp50(valueDec: bigDecimal): bigDecimal;
    static decRoundUp25(valueDec: bigDecimal): bigDecimal;
    static decRoundUp01(valueDec: bigDecimal): bigDecimal;
    static decRoundDown50(valueDec: bigDecimal): bigDecimal;
    static decRoundDown25(valueDec: bigDecimal): bigDecimal;
    static decRoundDown01(valueDec: bigDecimal): bigDecimal;
    static decRoundNorm50(valueDec: bigDecimal): bigDecimal;
    static decRoundNorm25(valueDec: bigDecimal): bigDecimal;
    static decRoundNorm01(valueDec: bigDecimal): bigDecimal;
}
