import { IProps } from './IProps';
import bigDecimal = require('js-big-decimal');
import { WorkTaxingTerms } from '../service_types/ContractTerms';
import {
  TaxDeclBenfOption,
  TaxDeclDisabOption,
  TaxDeclSignOption,
  TaxNoneSignOption,
} from '../service_types/TaxingOptions';

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
  FactorTaxRate2(): bigDecimal;
  MinAmountOfTaxBonus(): number;
  MaxAmountOfTaxBonus(): number;
  MarginIncomeOfTaxBonus(): number;
  MarginIncomeOfRounding(): number;
  MarginIncomeOfWithhold(): number;
  MarginIncomeOfSolidary(): number;
  MarginIncomeOfTaxRate2(): number;
  MarginIncomeOfWthEmp(): number;
  MarginIncomeOfWthAgr(): number;

  valueEquals(other: IPropsTaxing): boolean;
  hasWithholdIncome(
    termOpt: WorkTaxingTerms,
    signOpt: TaxDeclSignOption,
    noneOpt: TaxNoneSignOption,
    incomeSum: number,
  ): boolean;
  benefitAllowancePayer(signOpts: TaxDeclSignOption, benefitOpts: TaxDeclBenfOption): number;
  benefitAllowanceDisab(signOpts: TaxDeclSignOption, benefitOpts: TaxDeclDisabOption): number;
  benefitAllowanceStudy(signOpts: TaxDeclSignOption, benefitOpts: TaxDeclBenfOption): number;
  benefitAllowanceChild(
    signOpts: TaxDeclSignOption,
    benefitOpts: TaxDeclBenfOption,
    benefitOrds: number,
    disabelOpts: number,
  ): number;
  bonusChildRaw(income: number, benefit: number, rebated: number): number;
  bonusChildFix(income: number, benefit: number, rebated: number): number;
  taxableIncomeSupers(incomeResult: number, healthResult: number, socialResult: number): number;
  taxableIncomeBasis(incomeResult: number): number;
  roundedRawBaseAdvances(incomeResult: number): number;
  roundedBaseAdvances(incomeResult: number, healthResult: number, socialResult: number): number;
  roundedBaseSolidary(incomeResult: number): number;
  roundedAdvancesPaym(supersResult: number, basisResult: number): number;
  roundedSolidaryPaym(basisResult: number): number;
  roundedBaseWithhold(incomeResult: number): number;
  roundedWithholdPaym(supersResult: number, basisResult: number): number;
}
