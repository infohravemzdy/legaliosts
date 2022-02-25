import { VersionId } from '../service_types/versionid';
import { IPropsHealth } from '../service_interfaces/IPropsHealth';
import { PropsHealthBase } from './PropsHealthBase';
import bigDecimal = require('js-big-decimal');
import { WorkHealthTerms } from '../service_types/ContractTerms';
export declare class PropsHealth2012 extends PropsHealthBase implements IPropsHealth {
    constructor(version: VersionId, minMonthlyBasis: number, maxAnnualsBasis: number, limMonthlyState: number, limMonthlyDis50: number, factorCompound: bigDecimal, factorEmployee: bigDecimal, marginIncomeEmp: number, marginIncomeAgr: number);
    static empty(): IPropsHealth;
    hasTermExemptionParticy(term: WorkHealthTerms): boolean;
    hasIncomeBasedEmploymentParticy(term: WorkHealthTerms): boolean;
    hasIncomeBasedAgreementsParticy(term: WorkHealthTerms): boolean;
    hasIncomeCumulatedParticy(term: WorkHealthTerms): boolean;
}
