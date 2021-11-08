import { IProps } from './IProps';
import bigDecimal = require('js-big-decimal');

export interface IPropsSocial extends IProps {
  MaxAnnualsBasis(): number;
  FactorEmployer(): bigDecimal;
  FactorEmployerHigher(): bigDecimal;
  FactorEmployee(): bigDecimal;
  FactorEmployeeGarant(): bigDecimal;
  FactorEmployeeReduce(): bigDecimal;
  MarginIncomeEmp(): number;
  MarginIncomeAgr(): number;
}
