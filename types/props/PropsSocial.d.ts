import { VersionId } from '../service_types/versionid';
import { IPropsSocial } from '../service_interfaces/IPropsSocial';
import { PropsSocialBase } from './PropsSocialBase';
import bigDecimal = require('js-big-decimal');
import { WorkSocialTerms } from '../service_types/ContractTerms';
export declare class PropsSocial extends PropsSocialBase implements IPropsSocial {
    constructor(version: VersionId, maxAnnualsBasis: number, factorEmployer: bigDecimal, factorEmployerHigher: bigDecimal, factorEmployee: bigDecimal, factorEmployeeGarant: bigDecimal, factorEmployeeReduce: bigDecimal, marginIncomeEmp: number, marginIncomeAgr: number);
    static empty(): IPropsSocial;
    hasTermExemptionParticy(term: WorkSocialTerms): boolean;
    hasIncomeBasedEmploymentParticy(term: WorkSocialTerms): boolean;
    hasIncomeBasedAgreementsParticy(term: WorkSocialTerms): boolean;
    hasIncomeCumulatedParticy(term: WorkSocialTerms): boolean;
}
