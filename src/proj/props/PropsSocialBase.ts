import { VersionId } from '../service_types/versionid';
import { PropsBase } from './PropsBase';
import { IPropsSocial } from '../service_interfaces/IPropsSocial';
import bigDecimal = require('js-big-decimal');
import { WorkSocialTerms } from '../service_types/ContractTerms';
import { OperationsRound } from '../service_types/OperationsRound';
import { OperationsDec } from '../service_types/OperationDec';
import { ParticySocialResult, ParticySocialTarget } from './ParticyResults';

export abstract class PropsSocialBase extends PropsBase implements IPropsSocial {
  private static BIG_100 = new bigDecimal(100);

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
  ) {
    super(version);
    this.maxAnnualsBasis = maxAnnualsBasis;
    this.factorEmployer = factorEmployer;
    this.factorEmployerHigher = factorEmployerHigher;
    this.factorEmployee = factorEmployee;
    this.factorEmployeeGarant = factorEmployeeGarant;
    this.factorEmployeeReduce = factorEmployeeReduce;
    this.marginIncomeEmp = marginIncomeEmp;
    this.marginIncomeAgr = marginIncomeAgr;
  }
  maxAnnualsBasis: number;
  factorEmployer: bigDecimal;
  factorEmployerHigher: bigDecimal;
  factorEmployee: bigDecimal;
  factorEmployeeGarant: bigDecimal;
  factorEmployeeReduce: bigDecimal;
  marginIncomeEmp: number;
  marginIncomeAgr: number;

  MaxAnnualsBasis(): number {
    return this.maxAnnualsBasis;
  }
  FactorEmployer(): bigDecimal {
    return this.factorEmployer;
  }
  FactorEmployerHigher(): bigDecimal {
    return this.factorEmployerHigher;
  }
  FactorEmployee(): bigDecimal {
    return this.factorEmployee;
  }
  FactorEmployeeGarant(): bigDecimal {
    return this.factorEmployeeGarant;
  }
  FactorEmployeeReduce(): bigDecimal {
    return this.factorEmployeeReduce;
  }
  MarginIncomeEmp(): number {
    return this.marginIncomeEmp;
  }
  MarginIncomeAgr(): number {
    return this.marginIncomeAgr;
  }

  valueEquals(other: IPropsSocial): boolean {
    if (other === undefined) {
      return false;
    }
    return (
      this.maxAnnualsBasis === other.MaxAnnualsBasis() &&
      this.factorEmployer === other.FactorEmployer() &&
      this.factorEmployerHigher === other.FactorEmployerHigher() &&
      this.factorEmployee === other.FactorEmployee() &&
      this.factorEmployeeGarant === other.FactorEmployeeGarant() &&
      this.factorEmployeeReduce === other.FactorEmployeeReduce() &&
      this.marginIncomeEmp === other.MarginIncomeEmp() &&
      this.marginIncomeAgr === other.MarginIncomeAgr()
    );
  }

  hasParticy(term: WorkSocialTerms, incomeTerm: number, incomeSpec: number): boolean {
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

  protected abstract hasTermExemptionParticy(term: WorkSocialTerms): boolean;
  protected abstract hasIncomeBasedEmploymentParticy(term: WorkSocialTerms): boolean;
  protected abstract hasIncomeBasedAgreementsParticy(term: WorkSocialTerms): boolean;
  protected abstract hasIncomeCumulatedParticy(term: WorkSocialTerms): boolean;

  private decInsuranceRoundUp(valueDec: bigDecimal): bigDecimal {
    return OperationsRound.decRoundUp(valueDec);
  }

  private intInsuranceRoundUp(valueDec: bigDecimal): number {
    return OperationsRound.roundUp(valueDec);
  }

  roundedEmployeePaym(basisResult: number): number {
    const factorEmployee = OperationsDec.divide(this.factorEmployee, PropsSocialBase.BIG_100);
    return this.intInsuranceRoundUp(OperationsDec.multiply(new bigDecimal(basisResult), factorEmployee));
  }

  roundedEmployerPaym(basisResult: number): number {
    const factorEmployer = OperationsDec.divide(this.factorEmployer, PropsSocialBase.BIG_100);
    return this.intInsuranceRoundUp(OperationsDec.multiply(new bigDecimal(basisResult), factorEmployer));
  }

  resultOvercaps(baseSuma: number, overCaps: number): [number, number] {
    const maxBaseEmployee = Math.max(0, baseSuma - overCaps);
    const empBaseOvercaps = Math.max(0, baseSuma - maxBaseEmployee);
    const valBaseOvercaps = Math.max(0, overCaps - empBaseOvercaps);
    return [maxBaseEmployee, valBaseOvercaps];
  }

  annualsBasisCut(
    incomeList: Iterable<ParticySocialTarget>,
    annuityBasis: number,
  ): [number, number, Iterable<ParticySocialResult>] {
    const annualyMaxim: number = this.maxAnnualsBasis;
    const annualsBasis = Math.max(0, annualyMaxim - annuityBasis);
    const resultInit: [number, number, Iterable<ParticySocialResult>] = [
      annualyMaxim,
      annualsBasis,
      new Array<ParticySocialResult>(),
    ];

    const resultList = Array.from<ParticySocialTarget>(incomeList).reduce<
      [number, number, Iterable<ParticySocialResult>]
    >((agr, x) => {
      let cutAnnualsBasis: number = 0;
      const rawAnnualsBasis: number = x.targetsBase;
      let remAnnualsBasis: number = agr[1];

      if (x.particyCode !== 0) {
        cutAnnualsBasis = rawAnnualsBasis;
        if (agr[0] > 0) {
          const ovrAnnualsBasis = Math.max(0, rawAnnualsBasis - agr[1]);
          cutAnnualsBasis = rawAnnualsBasis - ovrAnnualsBasis;
        }
        remAnnualsBasis = Math.max(0, agr[1] - cutAnnualsBasis);
      }

      const r = new ParticySocialResult(
        x.contractCode,
        x.subjectType,
        x.interestCode,
        x.subjectTerm,
        x.particyCode,
        x.targetsBase,
        Math.max(0, cutAnnualsBasis),
      );

      const result: Iterable<ParticySocialResult> = Array.from(agr[2]).concat(r);
      return [agr[0], remAnnualsBasis, result];
    }, resultInit);

    return resultList;
  }
}
