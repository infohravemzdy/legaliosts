import { VersionId } from '../service_types/versionid';
import { PropsBase } from './PropsBase';
import { IPropsHealth } from '../service_interfaces/IPropsHealth';
import bigDecimal = require('js-big-decimal');

export class PropsHealth extends PropsBase implements IPropsHealth {
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

  public static empty(): IPropsHealth {
    return new PropsHealth(VersionId.new(), 0, 0, 0, 0, new bigDecimal(0), new bigDecimal(0), 0, 0);
  }
}
