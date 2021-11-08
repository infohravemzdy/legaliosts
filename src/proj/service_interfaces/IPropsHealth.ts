import { IProps } from './IProps';
import bigDecimal = require('js-big-decimal');

export interface IPropsHealth extends IProps {
  MinMonthlyBasis(): number;
  MaxAnnualsBasis(): number;
  LimMonthlyState(): number;
  LimMonthlyDis50(): number;
  FactorCompound(): bigDecimal;
  FactorEmployee(): bigDecimal;
  MarginIncomeEmp(): number;
  MarginIncomeAgr(): number;
}
