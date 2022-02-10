import { IProps } from './IProps';
import bigDecimal = require('js-big-decimal');

export interface IPropsTaxing extends IProps {
  AllowancePayer(): number;
  AllowanceDisab1st(): number;
  AllowanceDisab2nd(): number;
  AllowanceDisab3rd(): number;
  AllowanceStudy(): number;
  AllowanceChild1st(): number;
  AllowanceChild2nd(): number;
  AllowanceChild3rd(): number;
  FactorAdvances(): bigDecimal;
  FactorWithhold(): bigDecimal;
  FactorSolidary(): bigDecimal;
  MinAmountOfTaxBonus(): number;
  MaxAmountOfTaxBonus(): number;
  MarginIncomeOfTaxBonus(): number;
  MarginIncomeOfRounding(): number;
  MarginIncomeOfWithhold(): number;
  MarginIncomeOfSolidary(): number;
  MarginIncomeOfWthEmp(): number;
  MarginIncomeOfWthAgr(): number;
}
