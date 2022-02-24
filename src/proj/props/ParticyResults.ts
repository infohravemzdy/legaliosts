import { WorkHealthTerms, WorkSocialTerms, WorkTaxingTerms } from '../service_types/ContractTerms';

export class ParticyHealthTarget {
  constructor(_contractCode: number, _subjectType: WorkTaxingTerms, _interestCode: number,
              _subjectTerm: WorkHealthTerms, _particyCode: number, _targetsBase: number) {
    this.contractCode = _contractCode;
    this.subjectType = _subjectType;
    this.interestCode = _interestCode;
    this.subjectTerm = _subjectTerm;
    this.particyCode = _particyCode;
    this.targetsBase = _targetsBase;
  }
  contractCode: number;
  subjectType: WorkTaxingTerms;
  interestCode: number;
  subjectTerm: WorkHealthTerms;
  particyCode: number;
  targetsBase: number;

  addTargetBase(_targetsBase: number): number {
    this.targetsBase += _targetsBase
    return this.targetsBase
  }

  incomeScore(): number {
    let resultType : number = 0;
    switch (this.subjectType) {
      case WorkTaxingTerms.TAXING_TERM_EMPLOYMENTS : resultType = 900; break;
      case WorkTaxingTerms.TAXING_TERM_AGREEM_TASK : resultType = 100; break;
      case WorkTaxingTerms.TAXING_TERM_STATUT_PART : resultType = 500; break;
      case WorkTaxingTerms.TAXING_TERM_BY_CONTRACT : resultType = 0; break;
    }
    let resultBase = 0;
    switch (this.subjectTerm) {
      case WorkHealthTerms.HEALTH_TERM_EMPLOYMENTS : resultBase = 9000; break;
      case WorkHealthTerms.HEALTH_TERM_AGREEM_WORK : resultBase = 5000; break;
      case WorkHealthTerms.HEALTH_TERM_AGREEM_TASK : resultBase = 4000; break;
      case WorkHealthTerms.HEALTH_TERM_BY_CONTRACT : resultBase = 0; break;
    }
    let interestRes: number = 0;
    if (this.interestCode === 1) {
      interestRes = 10000
    }
    let particyRes: number = 0;
    if (this.particyCode === 1) {
      particyRes = 100000
    }
    return (resultType + resultBase + interestRes + particyRes)
  }
  resultComparator(): (x: ParticyHealthTarget, y: ParticyHealthTarget) => number {
    return (x: ParticyHealthTarget, y: ParticyHealthTarget): number => {
      const xIncomeScore = x.incomeScore();
      const yIncomeScore = y.incomeScore();

      if (xIncomeScore === yIncomeScore) {
        if (x.contractCode < y.contractCode) return -1;
        if (x.contractCode > y.contractCode) return 1;
        return 0;
      }
      if (yIncomeScore < xIncomeScore) return -1;
      if (yIncomeScore > xIncomeScore) return 1;
      return 0;
    };
  }
}

export class ParticyHealthResult {
  constructor(_contractCode: number, _subjectType: WorkTaxingTerms, _interestCode: number, _subjectTerm: WorkHealthTerms, _particyCode: number, _targetsBase: number, _resultsBase: number) {
    this.contractCode = _contractCode;
    this.subjectType = _subjectType;
    this.interestCode = _interestCode;
    this.subjectTerm = _subjectTerm;
    this.particyCode = _particyCode;
    this.targetsBase = _targetsBase;
    this.resultsBase = _resultsBase;
  }

  contractCode: number;
  subjectType: WorkTaxingTerms;
  interestCode: number;
  subjectTerm: WorkHealthTerms;
  particyCode: number;
  targetsBase: number;
  resultsBase: number;
}

export class ParticySocialTarget {
  constructor(_contractCode: number, _subjectType: WorkTaxingTerms, _interestCode: number, _subjectTerm: WorkSocialTerms, _particyCode: number, _targetsBase: number) {
    this.contractCode = _contractCode;
    this.subjectType = _subjectType;
    this.interestCode = _interestCode;
    this.subjectTerm = _subjectTerm;
    this.particyCode = _particyCode;
    this.targetsBase = _targetsBase;
  }

  contractCode: number;
  subjectType: WorkTaxingTerms;
  interestCode: number;
  subjectTerm: WorkSocialTerms;
  particyCode: number;
  targetsBase: number;

  addTargetBase(targetsBase: number): number {
    this.targetsBase += targetsBase
    return this.targetsBase
  }

  incomeScore(): number {
    let resultType : number = 0;
    switch (this.subjectType) {
      case WorkTaxingTerms.TAXING_TERM_EMPLOYMENTS : resultType = 900; break;
      case WorkTaxingTerms.TAXING_TERM_AGREEM_TASK : resultType = 100; break;
      case WorkTaxingTerms.TAXING_TERM_STATUT_PART : resultType = 500; break;
      case WorkTaxingTerms.TAXING_TERM_BY_CONTRACT : resultType = 0; break;
    }
    let resultBase : number = 0;
    switch (this.subjectTerm) {
      case WorkSocialTerms.SOCIAL_TERM_EMPLOYMENTS : resultBase = 9000; break;
      case WorkSocialTerms.SOCIAL_TERM_SMALLS_EMPL : resultBase = 5000; break;
      case WorkSocialTerms.SOCIAL_TERM_SHORTS_MEET : resultBase = 4000; break;
      case WorkSocialTerms.SOCIAL_TERM_SHORTS_DENY : resultBase = 0; break;
      case WorkSocialTerms.SOCIAL_TERM_BY_CONTRACT : resultBase = 0; break;
      case WorkSocialTerms.SOCIAL_TERM_AGREEM_TASK : resultBase = 0; break;
    }
    let interestRes : number = 0
    if (this.interestCode === 1) {
      interestRes = 10000;
    }
    let particyRes : number = 0
    if (this.particyCode === 1) {
      particyRes = 100000;
    }
    return (resultType + resultBase + interestRes + particyRes)
  }
  resultComparator(): (x: ParticySocialTarget, y: ParticySocialTarget) => number {
    return (x: ParticySocialTarget, y: ParticySocialTarget): number => {
      const xIncomeScore = x.incomeScore();
      const yIncomeScore = y.incomeScore();

      if (xIncomeScore === yIncomeScore) {
        if (x.contractCode < y.contractCode) return -1;
        if (x.contractCode > y.contractCode) return 1;
        return 0;
      }
      if (yIncomeScore < xIncomeScore) return -1;
      if (yIncomeScore > xIncomeScore) return 1;
      return 0;
    };
  }
}

export class ParticySocialResult {
  constructor(_contractCode: number, _subjectType: WorkTaxingTerms, _interestCode: number, _subjectTerm: WorkSocialTerms, _particyCode: number, _targetsBase: number, _resultsBase: number) {
    this.contractCode = _contractCode;
    this.subjectType = _subjectType;
    this.interestCode = _interestCode;
    this.subjectTerm = _subjectTerm;
    this.particyCode = _particyCode;
    this.targetsBase = _targetsBase;
    this.resultsBase = _resultsBase;
  }

  contractCode: number;
  subjectType: WorkTaxingTerms;
  interestCode: number;
  subjectTerm: WorkSocialTerms;
  particyCode: number;
  targetsBase: number;
  resultsBase: number;
}