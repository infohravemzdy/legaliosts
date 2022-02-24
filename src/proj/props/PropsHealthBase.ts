import bigDecimal = require('js-big-decimal');
import { VersionId } from '../service_types/versionid';
import { PropsBase } from './PropsBase';
import { IPropsHealth } from '../service_interfaces/IPropsHealth';
import { WorkHealthTerms } from '../service_types/ContractTerms';
import { OperationsRound } from '../service_types/OperationsRound';
import { OperationsDec } from '../service_types/OperationDec';
import { ParticyHealthResult, ParticyHealthTarget } from './ParticyResults';

export abstract class PropsHealthBase extends PropsBase implements IPropsHealth {
  private static BIG_100 = new bigDecimal(100);
  
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
  ) {
    super(version);
    this.minMonthlyBasis = minMonthlyBasis;
    this.maxAnnualsBasis = maxAnnualsBasis;
    this.limMonthlyState = limMonthlyState;
    this.limMonthlyDis50 = limMonthlyDis50;
    this.factorCompound = factorCompound;
    this.factorEmployee = factorEmployee;
    this.marginIncomeEmp = marginIncomeEmp;
    this.marginIncomeAgr = marginIncomeAgr;
  }
  minMonthlyBasis: number;
  maxAnnualsBasis: number;
  limMonthlyState: number;
  limMonthlyDis50: number;
  factorCompound: bigDecimal;
  factorEmployee: bigDecimal;
  marginIncomeEmp: number;
  marginIncomeAgr: number;

  MinMonthlyBasis(): number {
    return this.minMonthlyBasis;
  }

  MaxAnnualsBasis(): number {
    return this.maxAnnualsBasis;
  }

  LimMonthlyState(): number {
    return this.limMonthlyState;
  }

  LimMonthlyDis50(): number {
    return this.limMonthlyDis50;
  }

  FactorCompound(): bigDecimal {
    return this.factorCompound;
  }

  FactorEmployee(): bigDecimal {
    return this.factorEmployee;
  }

  MarginIncomeEmp(): number {
    return this.marginIncomeEmp;
  }

  MarginIncomeAgr(): number {
    return this.marginIncomeAgr;
  }

  valueEquals(other: IPropsHealth): boolean {
    if (other === undefined)
    {
      return false;
    }
    return (this.minMonthlyBasis === other.MinMonthlyBasis() &&
      this.maxAnnualsBasis === other.MaxAnnualsBasis() &&
      this.limMonthlyState === other.LimMonthlyState() &&
      this.limMonthlyDis50 === other.LimMonthlyDis50() &&
      this.factorCompound === other.FactorCompound() &&
      this.factorEmployee === other.FactorEmployee() &&
      this.marginIncomeEmp === other.MarginIncomeEmp() &&
      this.marginIncomeAgr === other.MarginIncomeAgr());
   }

  hasParticy(term: WorkHealthTerms, incomeTerm: number, incomeSpec: number): boolean {
    let particySpec: boolean = true;
    if (this.hasTermExemptionParticy(term)) {
      particySpec = false;
    } else if (this.hasIncomeBasedAgreementsParticy(term) && this.marginIncomeAgr > 0) {
      particySpec = false;
      if (this.hasIncomeCumulatedParticy(term)) {
        if (incomeTerm >= this.marginIncomeAgr) {
          particySpec = true;
        }
      } else {
        if (incomeSpec >= this.marginIncomeAgr) {
          particySpec = true;
        }
      }
    } else if (this.hasIncomeBasedEmploymentParticy(term) && this.marginIncomeEmp > 0) {
      particySpec = false;
      if (this.hasIncomeCumulatedParticy(term)) {
        if (incomeTerm >= this.marginIncomeEmp) {
          particySpec = true;
        }
      } else {
        if (incomeSpec >= this.marginIncomeEmp) {
          particySpec = true;
        }
      }
    }
    return particySpec;
  }

  protected abstract hasTermExemptionParticy(term: WorkHealthTerms): boolean;
  protected abstract hasIncomeBasedEmploymentParticy(term: WorkHealthTerms): boolean;
  protected abstract hasIncomeBasedAgreementsParticy(term: WorkHealthTerms): boolean;
  protected abstract hasIncomeCumulatedParticy(term: WorkHealthTerms): boolean;
  
  private decInsuranceRoundUp(valueDec: bigDecimal): bigDecimal {
    return OperationsRound.decRoundUp(valueDec);
  }
  
  private intInsuranceRoundUp(valueDec: bigDecimal): number {
    return OperationsRound.roundUp(valueDec);
  }
  
  roundedCompoundPaym(basisResult: number): number {
    const factorCompound = OperationsDec.divide(this.factorCompound, PropsHealthBase.BIG_100);
  
    return this.intInsuranceRoundUp(OperationsDec.multiply(new bigDecimal(basisResult), factorCompound))
  }
  
  roundedEmployeePaym(basisResult: number): number {
    const factorCompound = OperationsDec.divide(this.factorCompound, PropsHealthBase.BIG_100);
    return this.intInsuranceRoundUp(OperationsDec.multiplyAndDivide(new bigDecimal(basisResult), factorCompound, this.factorEmployee));
  }
  
  roundedAugmentEmployeePaym(basisGenerals: number, basisAugment: number): number {
    const factorCompound = OperationsDec.divide(this.factorCompound, PropsHealthBase.BIG_100);
  
    return this.intInsuranceRoundUp(
      OperationsDec.multiply(new bigDecimal(basisAugment), factorCompound)
        .add(OperationsDec.multiplyAndDivide(new bigDecimal(basisGenerals), factorCompound, this.factorEmployee))
    );
  }
  
  roundedAugmentEmployerPaym(basisGenerals: number, baseEmployee: number, baseEmployer: number): number {
    const factorCompound = OperationsDec.divide(this.factorCompound, PropsHealthBase.BIG_100);

    const compoundBasis = baseEmployer + baseEmployee + basisGenerals;

    const compoundPayment = this.intInsuranceRoundUp(OperationsDec.multiply(new bigDecimal(compoundBasis), factorCompound));
    const employeePayment = this.intInsuranceRoundUp(
      OperationsDec.multiply(new bigDecimal(baseEmployee), factorCompound)
        .add(OperationsDec.multiplyAndDivide(new bigDecimal(basisGenerals), factorCompound, this.factorEmployee))
    );
  
    return Math.max(0, compoundPayment - employeePayment);
  }

  roundedEmployerPaym(basisResult: number): number {
    const compoundPayment = this.roundedCompoundPaym(basisResult);
    const employeePayment = this.roundedEmployeePaym(basisResult);
  
    return Math.max(0, compoundPayment - employeePayment);
  }
  
  annualsBasisCut(incomeList: Iterable<ParticyHealthTarget>, annuityBasis: number): [number, number, Iterable<ParticyHealthResult>] {
    const annualyMaxim: number = this.maxAnnualsBasis;
    const annualsBasis = Math.max(0, annualyMaxim - annuityBasis);
    const resultInit: [number, number, Iterable<ParticyHealthResult>] = [annualyMaxim, annualsBasis, new Array<ParticyHealthResult>()];

    const resultList = Array.from<ParticyHealthTarget>(incomeList).reduce<[number, number, Iterable<ParticyHealthResult>]>((agr, x) => {
      let cutAnnualsBasis: number = 0;
      const rawAnnualsBasis: number = x.targetsBase;
      let remAnnualsBasis: number = agr[1];

      if (x.particyCode !== 0) {
        cutAnnualsBasis = rawAnnualsBasis;
        if (agr[0] > 0) {
          const ovrAnnualsBasis = Math.max(0, rawAnnualsBasis - agr[1]);
          cutAnnualsBasis = (rawAnnualsBasis - ovrAnnualsBasis)
        }
        remAnnualsBasis = Math.max(0, (agr[1] - cutAnnualsBasis));
      }

      const r = new ParticyHealthResult(x.contractCode, x.subjectType, x.interestCode,
        x.subjectTerm, x.particyCode, x.targetsBase, Math.max(0, cutAnnualsBasis));

      const result: Iterable<ParticyHealthResult> = Array.from(agr[2]).concat(r);
      return [agr[0], remAnnualsBasis, result];
    }, resultInit);

    return resultList;
  }
}
