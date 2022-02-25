import { WorkHealthTerms, WorkSocialTerms, WorkTaxingTerms } from '../service_types/ContractTerms';
export declare class ParticyHealthTarget {
    constructor(_contractCode: number, _subjectType: WorkTaxingTerms, _interestCode: number, _subjectTerm: WorkHealthTerms, _particyCode: number, _targetsBase: number);
    contractCode: number;
    subjectType: WorkTaxingTerms;
    interestCode: number;
    subjectTerm: WorkHealthTerms;
    particyCode: number;
    targetsBase: number;
    addTargetBase(_targetsBase: number): number;
    incomeScore(): number;
    resultComparator(): (x: ParticyHealthTarget, y: ParticyHealthTarget) => number;
}
export declare class ParticyHealthResult {
    constructor(_contractCode: number, _subjectType: WorkTaxingTerms, _interestCode: number, _subjectTerm: WorkHealthTerms, _particyCode: number, _targetsBase: number, _resultsBase: number);
    contractCode: number;
    subjectType: WorkTaxingTerms;
    interestCode: number;
    subjectTerm: WorkHealthTerms;
    particyCode: number;
    targetsBase: number;
    resultsBase: number;
}
export declare class ParticySocialTarget {
    constructor(_contractCode: number, _subjectType: WorkTaxingTerms, _interestCode: number, _subjectTerm: WorkSocialTerms, _particyCode: number, _targetsBase: number);
    contractCode: number;
    subjectType: WorkTaxingTerms;
    interestCode: number;
    subjectTerm: WorkSocialTerms;
    particyCode: number;
    targetsBase: number;
    addTargetBase(targetsBase: number): number;
    incomeScore(): number;
    resultComparator(): (x: ParticySocialTarget, y: ParticySocialTarget) => number;
}
export declare class ParticySocialResult {
    constructor(_contractCode: number, _subjectType: WorkTaxingTerms, _interestCode: number, _subjectTerm: WorkSocialTerms, _particyCode: number, _targetsBase: number, _resultsBase: number);
    contractCode: number;
    subjectType: WorkTaxingTerms;
    interestCode: number;
    subjectTerm: WorkSocialTerms;
    particyCode: number;
    targetsBase: number;
    resultsBase: number;
}
