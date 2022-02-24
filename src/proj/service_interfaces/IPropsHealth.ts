import { IProps } from './IProps';
import bigDecimal = require('js-big-decimal');
import { WorkHealthTerms } from '../service_types/ContractTerms';
import {
  ParticyHealthResult,
  ParticyHealthTarget,
} from '../props/ParticyResults';

export interface IPropsHealth extends IProps {
  MinMonthlyBasis(): number;
  MaxAnnualsBasis(): number;
  LimMonthlyState(): number;
  LimMonthlyDis50(): number;
  FactorCompound(): bigDecimal;
  FactorEmployee(): bigDecimal;
  MarginIncomeEmp(): number;
  MarginIncomeAgr(): number;

  valueEquals(other: IPropsHealth): boolean;
  hasParticy(term: WorkHealthTerms, incomeTerm: number, incomeSpec: number): boolean;
  roundedCompoundPaym(basisResult: number): number;
  roundedEmployeePaym(basisResult: number): number;
  roundedAugmentEmployeePaym(basisGenerals: number, basisAugment: number): number;
  roundedAugmentEmployerPaym(basisGenerals: number, baseEmployee: number, baseEmployer: number): number;
  roundedEmployerPaym(basisResult: number): number;
  annualsBasisCut(incomeList: Iterable<ParticyHealthTarget>, annuityBasis: number): [number, number, Iterable<ParticyHealthResult>];
}
