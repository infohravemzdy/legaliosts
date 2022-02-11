import bigDecimal = require('js-big-decimal');
import { OperationsDec } from './OperationDec';

export class OperationsRound {
  private static INT_ROUNDING_CONST = new bigDecimal("0.5");
  private static ZERO: bigDecimal = new bigDecimal(0);

  public static abs(op: bigDecimal): bigDecimal {
    return (op.compareTo(OperationsRound.ZERO) < 0) ? op.negate() : op;
  }

  public static roundToInt(valueDec: bigDecimal): number {
    const roundRet = OperationsRound.abs(valueDec)
      .add(OperationsRound.INT_ROUNDING_CONST)
      .round(0, bigDecimal.RoundingModes.FLOOR);

    if (valueDec.compareTo(OperationsRound.ZERO) < 0) {
      return Number(roundRet.negate().getValue());
    }
    return Number(roundRet.getValue());
  }
  public static roundUp(valueDec: bigDecimal): number {
    const roundRet = OperationsRound.abs(valueDec)
      .round(0, bigDecimal.RoundingModes.CEILING);

    if (valueDec.compareTo(OperationsRound.ZERO) < 0) {
      return Number(roundRet.negate().getValue());
    }
    return Number(roundRet.getValue());
  }

  public static roundDown(valueDec: bigDecimal): number {
    const roundRet = OperationsRound.abs(valueDec)
      .round(0, bigDecimal.RoundingModes.FLOOR);

    if (valueDec.compareTo(OperationsRound.ZERO) < 0) {
      return Number(roundRet.negate().getValue());
    }
    return Number(roundRet.getValue());
  }
  public static roundNorm(valueDec: bigDecimal): number {
    const roundRet = OperationsRound.abs(valueDec)
      .add(OperationsRound.INT_ROUNDING_CONST)
      .round(0, bigDecimal.RoundingModes.DOWN);

    if (valueDec.compareTo(OperationsRound.ZERO) < 0) {
      return Number(roundRet.negate().getValue());
    }
    return Number(roundRet.getValue());
  }

  public static nearRoundUp(valueDec: bigDecimal, nearest: number = 100): number {
    const nearestBig = new bigDecimal(nearest);
    const dividRet = OperationsDec.divide(valueDec, nearestBig)

    const multiRet = OperationsDec.multiply(OperationsRound.decRoundUp(dividRet), nearestBig);

    return OperationsRound.roundToInt(multiRet);
  }

  public static nearRoundDown(valueDec: bigDecimal, nearest: number = 100): number {
    const nearestBig = new bigDecimal(nearest);
    const dividRet = OperationsDec.divide(valueDec, nearestBig);

    const multiRet = OperationsDec.multiply(OperationsRound.decRoundDown(dividRet), nearestBig);

    return OperationsRound.roundToInt(multiRet);
  }
  public static roundUp50(valueDec: bigDecimal): number {
    const divider = new bigDecimal(2);
    const dividRet = OperationsDec.divide(OperationsRound.decRoundUp(OperationsDec.multiply(valueDec, divider)), divider);
    return OperationsRound.roundToInt(dividRet);
  }
  public static roundUp25(valueDec: bigDecimal): number {
    const divider = new bigDecimal(4);
    const dividRet = OperationsDec.divide(OperationsRound.decRoundUp(OperationsDec.multiply(valueDec, divider)), divider);
    return OperationsRound.roundToInt(dividRet)
  }

  public static decRoundUp(valueDec: bigDecimal): bigDecimal {
    const roundRet = OperationsRound.abs(valueDec)
      .round(0, bigDecimal.RoundingModes.CEILING);

    if (valueDec.compareTo(OperationsRound.ZERO) < 0) {
      return roundRet.negate()
    }
    return roundRet
  }

  public static decRoundDown(valueDec: bigDecimal): bigDecimal {
    const roundRet = OperationsRound.abs(valueDec)
      .round(0, bigDecimal.RoundingModes.FLOOR);

    if (valueDec.compareTo(OperationsRound.ZERO) < 0) {
      return roundRet.negate()
    }
    return roundRet
  }
  public static decRoundNorm(valueDec: bigDecimal): bigDecimal {
     const roundRet = OperationsRound.abs(valueDec)
      .add(OperationsRound.INT_ROUNDING_CONST)
      .round(0, bigDecimal.RoundingModes.DOWN);

    if (valueDec.compareTo(OperationsRound.ZERO) < 0) {
      return roundRet.negate();
    }
    return roundRet;
  }

  public static decNearRoundUp(valueDec: bigDecimal, nearest: number = 100): bigDecimal {
    const nearestBig = new bigDecimal(nearest);
    const dividRet = OperationsDec.divide(valueDec, nearestBig);

    const multiRet = OperationsDec.multiply(OperationsRound.decRoundUp(dividRet), nearestBig);

    return multiRet;
  }

  public static decNearRoundDown(valueDec: bigDecimal, nearest: number = 100): bigDecimal {
    const nearestBig = new bigDecimal(nearest);
    const dividRet = OperationsDec.divide(valueDec, nearestBig);

    const multiRet = OperationsDec.multiply(OperationsRound.decRoundDown(dividRet), nearestBig);

    return multiRet;
  }
  public static decRoundUp50(valueDec: bigDecimal): bigDecimal {
    const divider = new bigDecimal(2);
    return OperationsDec.divide(OperationsRound.decRoundUp(OperationsDec.multiply(valueDec, divider)), divider);
  }
  public static decRoundUp25(valueDec: bigDecimal): bigDecimal {
    const divider = new bigDecimal(4);
    return OperationsDec.divide(OperationsRound.decRoundUp(OperationsDec.multiply(valueDec, divider)), divider);
  }
  public static decRoundUp01(valueDec: bigDecimal): bigDecimal {
    const divider = new bigDecimal(100);
    return OperationsDec.divide(OperationsRound.decRoundUp(OperationsDec.multiply(valueDec, divider)), divider);
  }
  public static decRoundDown50(valueDec: bigDecimal): bigDecimal {
    const divider = new bigDecimal(2);
    return OperationsDec.divide(OperationsRound.decRoundDown(OperationsDec.multiply(valueDec, divider)), divider);
  }
  public static decRoundDown25(valueDec: bigDecimal): bigDecimal {
    const divider = new bigDecimal(4);
    return OperationsDec.divide(OperationsRound.decRoundDown(OperationsDec.multiply(valueDec, divider)), divider);
  }
  public static decRoundDown01(valueDec: bigDecimal): bigDecimal {
    const divider = new bigDecimal(100);
    return OperationsDec.divide(OperationsRound.decRoundDown(OperationsDec.multiply(valueDec, divider)), divider);
  }
  public static decRoundNorm50(valueDec: bigDecimal): bigDecimal {
    const divider = new bigDecimal(2);
    return OperationsDec.divide(OperationsRound.decRoundNorm(OperationsDec.multiply(valueDec, divider)), divider);
  }
  public static decRoundNorm25(valueDec: bigDecimal): bigDecimal {
    const divider = new bigDecimal(4);
    return OperationsDec.divide(OperationsRound.decRoundNorm(OperationsDec.multiply(valueDec, divider)), divider);
  }
  public static decRoundNorm01(valueDec: bigDecimal): bigDecimal {
    const divider = new bigDecimal(100);
    return OperationsDec.divide(OperationsRound.decRoundNorm(OperationsDec.multiply(valueDec, divider)), divider);
  }
}