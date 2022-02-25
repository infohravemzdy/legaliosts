import bigDecimal = require('js-big-decimal');
export declare class OperationsDec {
    private static ZERO;
    static max(op1: bigDecimal, op2: bigDecimal): bigDecimal;
    static min(op1: bigDecimal, op2: bigDecimal): bigDecimal;
    static multiply(op1: bigDecimal, op2: bigDecimal): bigDecimal;
    static divide(op1: bigDecimal, div: bigDecimal): bigDecimal;
    static multiplyAndDivide(op1: bigDecimal, op2: bigDecimal, div: bigDecimal): bigDecimal;
    static decimalCast(numb: number): bigDecimal;
    static minIncMaxDecValue(valueToMinMax: bigDecimal, accValueToMax: bigDecimal, minLimitTo: bigDecimal, maxLimitTo: bigDecimal): bigDecimal;
    static maxDecAccumValue(valueToMax: bigDecimal, accumToMax: bigDecimal, maxLimitTo: bigDecimal): bigDecimal;
    static maxDecAccumAbove(valueToMax: bigDecimal, accumToMax: bigDecimal, maxLimitTo: bigDecimal): bigDecimal;
    static minIncValue(valueToMin: bigDecimal, minLimitTo: bigDecimal): bigDecimal;
    static maxDecValue(valueToMax: bigDecimal, maxLimitTo: bigDecimal): bigDecimal;
    static suppressNegative(suppress: boolean, valueDec: bigDecimal): bigDecimal;
}
