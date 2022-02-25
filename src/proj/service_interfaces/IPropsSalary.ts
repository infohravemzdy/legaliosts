import { IProps } from './IProps';
import bigDecimal = require('js-big-decimal');

export interface IPropsSalary extends IProps {
  WorkingShiftWeek(): number;
  WorkingShiftTime(): number;
  MinMonthlyWage(): number;
  MinHourlyWage(): number;

  valueEquals(other: IPropsSalary): boolean;
  coeffWithPartAndFullHours(fullWorkHours: bigDecimal, partWorkHours: bigDecimal): bigDecimal;
  paymentWithMonthlyAndFullWeekAndFullAndWorkHours(
    amountMonthly: bigDecimal,
    fullWeekHours: number,
    partWeekHours: number,
    fullWorkHours: number,
    partWorkHours: number,
  ): bigDecimal;
  paymentRoundUpWithMonthlyAndFullWeekAndFullAndWorkHours(
    amountMonthly: bigDecimal,
    fullWeekHours: number,
    partWeekHours: number,
    fullWorkHours: number,
    partWorkHours: number,
  ): bigDecimal;
  paymentWithMonthlyAndCoeffAndFullAndWorkHours(
    amountMonthly: bigDecimal,
    monthlyCoeff: bigDecimal,
    fullWorkHours: number,
    partWorkHours: number,
  ): bigDecimal;
  paymentRoundUpWithMonthlyAndCoeffAndFullAndWorkHours(
    amountMonthly: bigDecimal,
    monthlyCoeff: bigDecimal,
    fullWorkHours: number,
    partWorkHours: number,
  ): bigDecimal;
  paymentWithMonthlyAndCoeffAndWorkCoeff(
    amountMonthly: bigDecimal,
    monthlyCoeff: bigDecimal,
    workingCoeff: bigDecimal,
  ): bigDecimal;
  paymentRoundUpWithMonthlyAndCoeffAndWorkCoeff(
    amountMonthly: bigDecimal,
    monthlyCoeff: bigDecimal,
    workingCoeff: bigDecimal,
  ): bigDecimal;
  relativeAmountWithMonthlyAndCoeffAndWorkCoeff(
    amountMonthly: bigDecimal,
    monthlyCoeff: bigDecimal,
    workingCoeff: bigDecimal,
  ): bigDecimal;
  relativeTariffWithMonthlyAndCoeffAndWorkCoeff(
    amountMonthly: bigDecimal,
    monthlyCoeff: bigDecimal,
    workingCoeff: bigDecimal,
  ): bigDecimal;
  relativePaymentWithMonthlyAndCoeffAndWorkCoeff(
    amountMonthly: bigDecimal,
    monthlyCoeff: bigDecimal,
    workingCoeff: bigDecimal,
  ): bigDecimal;
  reverzedAmountWithMonthlyAndCoeffAndWorkCoeff(
    amountMonthly: bigDecimal,
    monthlyCoeff: bigDecimal,
    workingCoeff: bigDecimal,
  ): bigDecimal;
  reverzedTariffWithMonthlyAndCoeffAndWorkCoeff(
    amountMonthly: bigDecimal,
    monthlyCoeff: bigDecimal,
    workingCoeff: bigDecimal,
  ): bigDecimal;
  reverzedPaymentWithMonthlyAndCoeffAndWorkCoeff(
    amountMonthly: bigDecimal,
    monthlyCoeff: bigDecimal,
    workingCoeff: bigDecimal,
  ): bigDecimal;
  paymentWithTariffAndHours(tariffHourly: bigDecimal, workingsHours: bigDecimal): bigDecimal;
  paymentRoundUpWithTariffAndHours(tariffHourly: bigDecimal, workingsHours: bigDecimal): bigDecimal;
  tariffWithPaymentAndHours(amountHourly: bigDecimal, workingsHours: bigDecimal): bigDecimal;
  paymentWithAmountFixed(amountFixed: bigDecimal): bigDecimal;
  paymentRoundUpWithAmountFixed(amountFixed: bigDecimal): bigDecimal;
  hoursToHalfHoursUp(hoursValue: bigDecimal): bigDecimal;
  hoursToQuartHoursUp(hoursValue: bigDecimal): bigDecimal;
  hoursToHalfHoursDown(hoursValue: bigDecimal): bigDecimal;
  hoursToQuartHoursDown(hoursValue: bigDecimal): bigDecimal;
  hoursToHalfHoursNorm(hoursValue: bigDecimal): bigDecimal;
  hoursToQuartHoursNorm(hoursValue: bigDecimal): bigDecimal;
  moneyToRoundDown(moneyValue: bigDecimal): bigDecimal;
  moneyToRoundUp(moneyValue: bigDecimal): bigDecimal;
  moneyToRoundNorm(moneyValue: bigDecimal): bigDecimal;
}
