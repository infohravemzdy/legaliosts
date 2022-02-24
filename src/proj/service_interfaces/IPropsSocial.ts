import { IProps } from './IProps';
import bigDecimal = require('js-big-decimal');
import { WorkSocialTerms } from '../service_types/ContractTerms';
import { ParticySocialResult, ParticySocialTarget } from '../props/ParticyResults';

export interface IPropsSocial extends IProps {
  MaxAnnualsBasis(): number;
  FactorEmployer(): bigDecimal;
  FactorEmployerHigher(): bigDecimal;
  FactorEmployee(): bigDecimal;
  FactorEmployeeGarant(): bigDecimal;
  FactorEmployeeReduce(): bigDecimal;
  MarginIncomeEmp(): number;
  MarginIncomeAgr(): number;

  valueEquals(other: IPropsSocial): boolean;
  hasParticy(term: WorkSocialTerms, incomeTerm: number, incomeSpec: number): boolean;
  roundedEmployeePaym(basisResult: number): number;
  roundedEmployerPaym(basisResult: number): number;
  resultOvercaps(baseSuma: number, overCaps: number): [number, number];
  annualsBasisCut(incomeList: Iterable<ParticySocialTarget>, annuityBasis: number): [number, number, Iterable<ParticySocialResult>];
}
