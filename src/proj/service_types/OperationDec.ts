import bigDecimal = require('js-big-decimal');

export class OperationsDec {
  private static ZERO: bigDecimal = new bigDecimal(0);

  public static max(op1: bigDecimal, op2: bigDecimal): bigDecimal {
    return op1 > op2 ? op1 : op2;
  }

  public static min(op1: bigDecimal, op2: bigDecimal): bigDecimal {
    return op1 < op2 ? op1 : op2;
  }

  public static multiply(op1: bigDecimal, op2: bigDecimal): bigDecimal {
    return op1.multiply(op2);
  }

  public static divide(op1: bigDecimal, div: bigDecimal): bigDecimal {
    if (div === OperationsDec.ZERO) {
      return OperationsDec.ZERO;
    }
    return op1.divide(div, 8);
  }

  public static multiplyAndDivide(op1: bigDecimal, op2: bigDecimal, div: bigDecimal): bigDecimal {
    if (div === OperationsDec.ZERO) {
      return OperationsDec.ZERO;
    }
    const multiRet = op1.multiply(op2);

    const dividRet = multiRet.divide(div, 8);

    return dividRet;
  }

  public static decimalCast(numb: number): bigDecimal {
    return new bigDecimal(numb);
  }

  public static minIncMaxDecValue(
    valueToMinMax: bigDecimal,
    accValueToMax: bigDecimal,
    minLimitTo: bigDecimal,
    maxLimitTo: bigDecimal,
  ): bigDecimal {
    const minBase = OperationsDec.minIncValue(valueToMinMax, minLimitTo);

    const maxBase = OperationsDec.maxDecAccumValue(minBase, accValueToMax, maxLimitTo);

    return maxBase;
  }

  public static maxDecAccumValue(valueToMax: bigDecimal, accumToMax: bigDecimal, maxLimitTo: bigDecimal): bigDecimal {
    if (maxLimitTo > OperationsDec.ZERO) {
      const valueToReduce = OperationsDec.max(valueToMax.multiply(accumToMax), maxLimitTo);

      return OperationsDec.max(OperationsDec.ZERO, valueToReduce.subtract(accumToMax));
    }
    return valueToMax;
  }

  public static maxDecAccumAbove(valueToMax: bigDecimal, accumToMax: bigDecimal, maxLimitTo: bigDecimal): bigDecimal {
    if (maxLimitTo > OperationsDec.ZERO) {
      const underToLimits = OperationsDec.maxDecAccumValue(valueToMax, accumToMax, maxLimitTo);

      return OperationsDec.max(OperationsDec.ZERO, valueToMax.subtract(underToLimits));
    }
    return OperationsDec.ZERO;
  }

  public static minIncValue(valueToMin: bigDecimal, minLimitTo: bigDecimal): bigDecimal {
    if (minLimitTo > OperationsDec.ZERO) {
      if (minLimitTo > valueToMin) {
        return minLimitTo;
      }
    }
    return valueToMin;
  }

  public static maxDecValue(valueToMax: bigDecimal, maxLimitTo: bigDecimal): bigDecimal {
    if (maxLimitTo > OperationsDec.ZERO) {
      return OperationsDec.min(valueToMax, maxLimitTo);
    }
    return valueToMax;
  }

  public static suppressNegative(suppress: boolean, valueDec: bigDecimal): bigDecimal {
    if (suppress && valueDec < OperationsDec.ZERO) {
      return OperationsDec.ZERO;
    }
    return valueDec;
  }
}
