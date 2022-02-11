import { VersionId } from '../service_types/versionid';
import { IPropsSocial } from '../service_interfaces/IPropsSocial';
import { PropsSocialBase } from './PropsSocialBase';
import bigDecimal = require('js-big-decimal');
import { WorkSocialTerms } from '../service_types/ContractTerms';

export class PropsSocial2012 extends PropsSocialBase implements IPropsSocial {
  constructor(
    version: VersionId,
    maxAnnualsBasis: number,
    factorEmployer: bigDecimal,
    factorEmployerHigher: bigDecimal,
    factorEmployee: bigDecimal,
    factorEmployeeGarant: bigDecimal,
    factorEmployeeReduce: bigDecimal,
    marginIncomeEmp: number,
    marginIncomeAgr: number,
  )
  {
    super(version,
      maxAnnualsBasis,
      factorEmployer,
      factorEmployerHigher,
      factorEmployee,
      factorEmployeeGarant,
      factorEmployeeReduce,
      marginIncomeEmp,
      marginIncomeAgr);
  }
  public static empty(): IPropsSocial {
    return new PropsSocial2012(
      VersionId.new(),
      0,
      new bigDecimal(0),
      new bigDecimal(0),
      new bigDecimal(0),
      new bigDecimal(0),
      new bigDecimal(0),
      0,
      0,
    );
  }

  override hasTermExemptionParticy(term: WorkSocialTerms): boolean {
    return false;
  }
  override hasIncomeBasedEmploymentParticy(term: WorkSocialTerms): boolean {
    return (term === WorkSocialTerms.SOCIAL_TERM_SMALLS_EMPL);
  }
  override hasIncomeBasedAgreementsParticy(term: WorkSocialTerms): boolean {
    return (term === WorkSocialTerms.SOCIAL_TERM_AGREEM_TASK);
  }
  override hasIncomeCumulatedParticy(term: WorkSocialTerms): boolean {
    switch (term) {
      case WorkSocialTerms.SOCIAL_TERM_EMPLOYMENTS : return false;
      case WorkSocialTerms.SOCIAL_TERM_AGREEM_TASK : return true;
      case WorkSocialTerms.SOCIAL_TERM_SMALLS_EMPL : return false;
      case WorkSocialTerms.SOCIAL_TERM_SHORTS_MEET : return false;
      case WorkSocialTerms.SOCIAL_TERM_SHORTS_DENY : return false;
      case WorkSocialTerms.SOCIAL_TERM_BY_CONTRACT : return false;
    }
    return false;
  }

}
