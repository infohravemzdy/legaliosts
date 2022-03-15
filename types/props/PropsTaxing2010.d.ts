import { VersionId } from '../service_types/versionid';
import { IPropsTaxing } from '../service_interfaces/IPropsTaxing';
import { PropsTaxingBase } from './PropsTaxingBase';
import bigDecimal = require('js-big-decimal');
import { WorkTaxingTerms } from '../service_types/ContractTerms';
import { TaxDeclSignOption, TaxNoneSignOption } from '../service_types/TaxingOptions';
export declare class PropsTaxing2010 extends PropsTaxingBase implements IPropsTaxing {
    constructor(version: VersionId, allowancePayer: number, allowanceDisab1st: number, allowanceDisab2nd: number, allowanceDisab3rd: number, allowanceStudy: number, allowanceChild1st: number, allowanceChild2nd: number, allowanceChild3rd: number, factorAdvances: bigDecimal, factorWithhold: bigDecimal, factorSolidary: bigDecimal, factorTaxRate2: bigDecimal, minAmountOfTaxBonus: number, maxAmountOfTaxBonus: number, marginIncomeOfTaxBonus: number, marginIncomeOfRounding: number, marginIncomeOfWithhold: number, marginIncomeOfSolidary: number, marginIncomeOfTaxRate2: number, marginIncomeOfWthEmp: number, marginIncomeOfWthAgr: number);
    static empty(): IPropsTaxing;
    hasWithholdIncome(termOpt: WorkTaxingTerms, signOpt: TaxDeclSignOption, noneOpt: TaxNoneSignOption, incomeSum: number): boolean;
    roundedAdvancesPaym(supersResult: number, basisResult: number): number;
}
