import { IPeriod } from '../service_types/period';
import { IPropsProvider } from './ProviderBase';
import { IPropsTaxing } from '../service_interfaces/IPropsTaxing';
import bigDecimal = require('js-big-decimal');

export interface IProviderTaxing extends IPropsProvider<IPropsTaxing> {
  AllowancePayer(period: IPeriod): number;
  AllowanceDisab1st(period: IPeriod): number;
  AllowanceDisab2nd(period: IPeriod): number;
  AllowanceDisab3rd(period: IPeriod): number;
  AllowanceStudy(period: IPeriod): number;
  AllowanceChild1st(period: IPeriod): number;
  AllowanceChild2nd(period: IPeriod): number;
  AllowanceChild3rd(period: IPeriod): number;
  FactorAdvances(period: IPeriod): bigDecimal;
  FactorWithhold(period: IPeriod): bigDecimal;
  FactorSolidary(period: IPeriod): bigDecimal;
  FactorTaxRate2(period: IPeriod): bigDecimal;
  MinAmountOfTaxBonus(period: IPeriod): number;
  MaxAmountOfTaxBonus(period: IPeriod): number;
  MarginIncomeOfTaxBonus(period: IPeriod): number;
  MarginIncomeOfRounding(period: IPeriod): number;
  MarginIncomeOfWithhold(period: IPeriod): number;
  MarginIncomeOfSolidary(period: IPeriod): number;
  MarginIncomeOfTaxRate2(period: IPeriod): number;
  MarginIncomeOfWthEmp(period: IPeriod): number;
  MarginIncomeOfWthAgr(period: IPeriod): number;
}
