import { VersionId } from '../service_types/versionid';
import { PropsBase } from './PropsBase';
import { IPropsSocial } from '../service_interfaces/IPropsSocial';
import bigDecimal = require('js-big-decimal');

export class PropsSocial extends PropsBase implements IPropsSocial {
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

  public static empty(): IPropsSocial {
    return new PropsSocial(
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
}
