import { VersionId } from '../service_types/versionid';
import { PropsBase } from './PropsBase';
import { IPropsSalary } from '../service_interfaces/IPropsSalary';
import bigDecimal = require('js-big-decimal');
import { OperationsDec } from '../service_types/OperationDec';
import { OperationsRound } from '../service_types/OperationsRound';

export class PropsSalary extends PropsBase implements IPropsSalary {
  protected static BIG_ZERO = new bigDecimal(0);

  constructor(
    version: VersionId,
    workingShiftWeek: number,
    workingShiftTime: number,
    minMonthlyWage: number,
    minHourlyWage: number,
  ) {
    super(version);
    this.workingShiftWeek = workingShiftWeek;
    this.workingShiftTime = workingShiftTime;
    this.minMonthlyWage = minMonthlyWage;
    this.minHourlyWage = minHourlyWage;
  }
  workingShiftWeek: number;
  workingShiftTime: number;
  minMonthlyWage: number;
  minHourlyWage: number;

  WorkingShiftWeek(): number {
    return this.workingShiftWeek;
  }

  WorkingShiftTime(): number {
    return this.workingShiftTime;
  }

  MinMonthlyWage(): number {
    return this.minMonthlyWage;
  }

  MinHourlyWage(): number {
    return this.minHourlyWage;
  }

  public static empty(): IPropsSalary {
    return new PropsSalary(VersionId.new(), 0, 0, 0, 0);
  }

  valueEquals(other: IPropsSalary): boolean {
    if (other == null) {
      return false;
    }
    return (
      this.workingShiftWeek === other.WorkingShiftWeek() &&
      this.workingShiftTime === other.WorkingShiftTime() &&
      this.minMonthlyWage === other.MinMonthlyWage() &&
      this.minHourlyWage === other.MinHourlyWage()
    );
  }

  private totalHoursWithFullAndPartHours(fullWorkHours: number, partWorkHours: number): number {
    const totalsHours = Math.max(0, partWorkHours);

    const resultHours = Math.min(fullWorkHours, totalsHours);

    return resultHours;
  }
  private decPaymentWithMonthlyAndCoeffAndFullAndWorkHours(
    amountMonthly: bigDecimal,
    monthlyCoeff: bigDecimal,
    fullWorkHours: number,
    partWorkHours: number,
  ): bigDecimal {
    const coeffAmount = this.factorizeValue(amountMonthly, monthlyCoeff);

    const payment = this.decPaymentWithMonthlyAndFullAndWorkHours(coeffAmount, fullWorkHours, partWorkHours);

    return payment;
  }
  private decPaymentWithMonthlyAndFullAndWorkHours(
    amountMonthly: bigDecimal,
    fullWorkHours: number,
    partWorkHours: number,
  ): bigDecimal {
    const paymWorkHours = this.totalHoursWithFullAndPartHours(fullWorkHours, partWorkHours);

    const payment = OperationsDec.multiplyAndDivide(
      amountMonthly,
      new bigDecimal(paymWorkHours),
      new bigDecimal(fullWorkHours),
    );

    return payment;
  }
  private decPaymentWithTariffAndHours(tariffHourly: bigDecimal, workingsHours: bigDecimal): bigDecimal {
    const totalHours = OperationsDec.max(PropsSalary.BIG_ZERO, workingsHours);

    const payment = OperationsDec.multiply(totalHours, tariffHourly);

    return payment;
  }
  private decTariffWithPaymentAndHours(amountHourly: bigDecimal, workingsHours: bigDecimal): bigDecimal {
    const totalHours = OperationsDec.max(PropsSalary.BIG_ZERO, workingsHours);

    const tariff = OperationsDec.divide(amountHourly, totalHours);

    return tariff;
  }
  private decPaymentWithAmountFixed(amountFixed: bigDecimal): bigDecimal {
    const payment = amountFixed;

    return payment;
  }

  coeffWithPartAndFullHours(fullWorkHours: bigDecimal, partWorkHours: bigDecimal): bigDecimal {
    const coeffWorking = OperationsDec.max(new bigDecimal(1), OperationsDec.divide(partWorkHours, fullWorkHours));

    return coeffWorking;
  }

  relativeAmountWithMonthlyAndCoeffAndWorkCoeff(
    amountMonthly: bigDecimal,
    monthlyCoeff: bigDecimal,
    workingCoeff: bigDecimal,
  ): bigDecimal {
    const amountCoeffs = this.factorizeValue(amountMonthly, monthlyCoeff);

    const relativeAmount = this.factorizeValue(amountCoeffs, workingCoeff);

    return relativeAmount;
  }

  reverzedAmountWithMonthlyAndCoeffAndWorkCoeff(
    amountMonthly: bigDecimal,
    monthlyCoeff: bigDecimal,
    workingCoeff: bigDecimal,
  ): bigDecimal {
    const amountCoeffs = this.reverzedFactorizeValue(amountMonthly, monthlyCoeff);

    const reverzedAmount = this.reverzedFactorizeValue(amountCoeffs, workingCoeff);

    return reverzedAmount;
  }

  relativeTariffWithMonthlyAndCoeffAndWorkCoeff(
    amountMonthly: bigDecimal,
    monthlyCoeff: bigDecimal,
    workingCoeff: bigDecimal,
  ): bigDecimal {
    const paymentValue = this.relativeAmountWithMonthlyAndCoeffAndWorkCoeff(amountMonthly, monthlyCoeff, workingCoeff);

    return OperationsRound.decRoundNorm01(paymentValue);
  }

  reverzedTariffWithMonthlyAndCoeffAndWorkCoeff(
    amountMonthly: bigDecimal,
    monthlyCoeff: bigDecimal,
    workingCoeff: bigDecimal,
  ): bigDecimal {
    const paymentValue = this.reverzedAmountWithMonthlyAndCoeffAndWorkCoeff(amountMonthly, monthlyCoeff, workingCoeff);

    return OperationsRound.decRoundNorm01(paymentValue);
  }

  relativePaymentWithMonthlyAndCoeffAndWorkCoeff(
    amountMonthly: bigDecimal,
    monthlyCoeff: bigDecimal,
    workingCoeff: bigDecimal,
  ): bigDecimal {
    const paymentValue = this.relativeAmountWithMonthlyAndCoeffAndWorkCoeff(amountMonthly, monthlyCoeff, workingCoeff);

    return OperationsRound.decRoundNorm(paymentValue);
  }

  reverzedPaymentWithMonthlyAndCoeffAndWorkCoeff(
    amountMonthly: bigDecimal,
    monthlyCoeff: bigDecimal,
    workingCoeff: bigDecimal,
  ): bigDecimal {
    const paymentValue = this.reverzedAmountWithMonthlyAndCoeffAndWorkCoeff(amountMonthly, monthlyCoeff, workingCoeff);

    return OperationsRound.decRoundNorm(paymentValue);
  }

  paymentWithAmountFixed(amountFixed: bigDecimal): bigDecimal {
    const paymentValue = this.decPaymentWithAmountFixed(amountFixed);

    return OperationsRound.decRoundNorm(paymentValue);
  }
  paymentRoundUpWithAmountFixed(amountFixed: bigDecimal): bigDecimal {
    const paymentValue = this.decPaymentWithAmountFixed(amountFixed);

    return OperationsRound.decRoundUp(paymentValue);
  }
  paymentWithTariffAndHours(tariffHourly: bigDecimal, workingsHours: bigDecimal): bigDecimal {
    const paymentValue = this.decPaymentWithTariffAndHours(tariffHourly, workingsHours);

    return OperationsRound.decRoundNorm(paymentValue);
  }
  paymentRoundUpWithTariffAndHours(tariffHourly: bigDecimal, workingsHours: bigDecimal): bigDecimal {
    const paymentValue = this.decPaymentWithTariffAndHours(tariffHourly, workingsHours);

    return OperationsRound.decRoundUp(paymentValue);
  }
  tariffWithPaymentAndHours(amountHourly: bigDecimal, workingsHours: bigDecimal): bigDecimal {
    const tariffValue = this.decTariffWithPaymentAndHours(amountHourly, workingsHours);

    return this.moneyToRoundNorm(tariffValue);
  }

  paymentWithMonthlyAndCoeffAndFullAndWorkHours(
    amountMonthly: bigDecimal,
    monthlyCoeff: bigDecimal,
    fullWorkHours: number,
    partWorkHours: number,
  ): bigDecimal {
    const amountCoeffs = this.factorizeValue(amountMonthly, monthlyCoeff);

    const paymentValue = this.decPaymentWithMonthlyAndFullAndWorkHours(amountCoeffs, fullWorkHours, partWorkHours);

    return OperationsRound.decRoundNorm(paymentValue);
  }
  paymentRoundUpWithMonthlyAndCoeffAndFullAndWorkHours(
    amountMonthly: bigDecimal,
    monthlyCoeff: bigDecimal,
    fullWorkHours: number,
    partWorkHours: number,
  ): bigDecimal {
    const amountCoeffs = this.factorizeValue(amountMonthly, monthlyCoeff);

    const paymentValue = this.decPaymentWithMonthlyAndFullAndWorkHours(amountCoeffs, fullWorkHours, partWorkHours);

    return OperationsRound.decRoundUp(paymentValue);
  }
  paymentWithMonthlyAndCoeffAndWorkCoeff(
    amountMonthly: bigDecimal,
    monthlyCoeff: bigDecimal,
    workingCoeff: bigDecimal,
  ): bigDecimal {
    const amountFactor = this.factorizeValue(amountMonthly, monthlyCoeff);

    const paymentValue = this.factorizeValue(amountFactor, workingCoeff);

    return OperationsRound.decRoundNorm(paymentValue);
  }
  paymentRoundUpWithMonthlyAndCoeffAndWorkCoeff(
    amountMonthly: bigDecimal,
    monthlyCoeff: bigDecimal,
    workingCoeff: bigDecimal,
  ): bigDecimal {
    const amountFactor = this.factorizeValue(amountMonthly, monthlyCoeff);

    const paymentValue = this.factorizeValue(amountFactor, workingCoeff);

    return OperationsRound.decRoundUp(paymentValue);
  }
  paymentWithMonthlyAndFullWeekAndFullAndWorkHours(
    amountMonthly: bigDecimal,
    fullWeekHours: number,
    partWeekHours: number,
    fullWorkHours: number,
    partWorkHours: number,
  ): bigDecimal {
    const coeffSalary = this.coeffWithPartAndFullHours(new bigDecimal(partWeekHours), new bigDecimal(fullWeekHours));

    const salaryValue = this.paymentWithMonthlyAndCoeffAndFullAndWorkHours(
      amountMonthly,
      coeffSalary,
      fullWorkHours,
      partWorkHours,
    );

    return salaryValue;
  }
  paymentRoundUpWithMonthlyAndFullWeekAndFullAndWorkHours(
    amountMonthly: bigDecimal,
    fullWeekHours: number,
    partWeekHours: number,
    fullWorkHours: number,
    partWorkHours: number,
  ): bigDecimal {
    const coeffSalary = this.coeffWithPartAndFullHours(new bigDecimal(partWeekHours), new bigDecimal(fullWeekHours));

    const salaryValue = this.paymentRoundUpWithMonthlyAndCoeffAndFullAndWorkHours(
      amountMonthly,
      coeffSalary,
      fullWorkHours,
      partWorkHours,
    );

    return salaryValue;
  }
  hoursToHalfHoursUp(hoursValue: bigDecimal): bigDecimal {
    return OperationsRound.decRoundUp50(hoursValue);
  }
  hoursToQuartHoursUp(hoursValue: bigDecimal): bigDecimal {
    return OperationsRound.decRoundUp25(hoursValue);
  }
  hoursToHalfHoursDown(hoursValue: bigDecimal): bigDecimal {
    return OperationsRound.decRoundDown50(hoursValue);
  }
  hoursToQuartHoursDown(hoursValue: bigDecimal): bigDecimal {
    return OperationsRound.decRoundDown25(hoursValue);
  }
  hoursToHalfHoursNorm(hoursValue: bigDecimal): bigDecimal {
    return OperationsRound.decRoundNorm50(hoursValue);
  }
  hoursToQuartHoursNorm(hoursValue: bigDecimal): bigDecimal {
    return OperationsRound.decRoundNorm25(hoursValue);
  }
  moneyToRoundDown(moneyValue: bigDecimal): bigDecimal {
    return OperationsRound.decRoundDown01(moneyValue);
  }
  moneyToRoundUp(moneyValue: bigDecimal): bigDecimal {
    return OperationsRound.decRoundUp01(moneyValue);
  }
  moneyToRoundNorm(moneyValue: bigDecimal): bigDecimal {
    return OperationsRound.decRoundNorm01(moneyValue);
  }

  factorizeValue(baseValue: bigDecimal, factor: bigDecimal): bigDecimal {
    const result = OperationsDec.multiply(baseValue, factor);

    return result;
  }
  reverzedFactorizeValue(baseValue: bigDecimal, factor: bigDecimal): bigDecimal {
    const result = OperationsDec.multiply(baseValue, OperationsDec.divide(new bigDecimal(1), factor));

    return result;
  }
}
