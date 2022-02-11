import { VersionId } from '../service_types/versionid';
import { IPropsHealth } from '../service_interfaces/IPropsHealth';
import { PropsHealthBase } from './PropsHealthBase';
import bigDecimal = require('js-big-decimal');
import { WorkHealthTerms } from '../service_types/ContractTerms';

export class PropsHealth2012 extends PropsHealthBase implements IPropsHealth {
  constructor(
    version: VersionId,
    minMonthlyBasis: number,
    maxAnnualsBasis: number,
    limMonthlyState: number,
    limMonthlyDis50: number,
    factorCompound: bigDecimal,
    factorEmployee: bigDecimal,
    marginIncomeEmp: number,
    marginIncomeAgr: number,
  )
  {
    super(version,
      minMonthlyBasis,
      maxAnnualsBasis,
      limMonthlyState,
      limMonthlyDis50,
      factorCompound,
      factorEmployee,
      marginIncomeEmp,
      marginIncomeAgr);
  }
  public static empty(): IPropsHealth {
    return new PropsHealth2012(VersionId.new(),
      0,
      0,
      0,
      0,
      new bigDecimal(0),
      new bigDecimal(0),
      0,
      0);
  }

  override hasTermExemptionParticy(term: WorkHealthTerms): boolean {
    return false;
  }
  override hasIncomeBasedEmploymentParticy(term: WorkHealthTerms): boolean {
    return (term === WorkHealthTerms.HEALTH_TERM_AGREEM_WORK);
  }
  override hasIncomeBasedAgreementsParticy(term: WorkHealthTerms): boolean {
    return (term === WorkHealthTerms.HEALTH_TERM_AGREEM_TASK);
  }
  override hasIncomeCumulatedParticy(term: WorkHealthTerms): boolean {
    switch (term) {
      case WorkHealthTerms.HEALTH_TERM_EMPLOYMENTS :
        return false;
      case WorkHealthTerms.HEALTH_TERM_AGREEM_WORK :
        return false;
      case WorkHealthTerms.HEALTH_TERM_AGREEM_TASK :
        return false;
      case WorkHealthTerms.HEALTH_TERM_BY_CONTRACT :
        return false;
    }
    return false;
  }
}
