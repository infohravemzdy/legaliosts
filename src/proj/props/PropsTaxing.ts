import { VersionId } from '../service_types/versionid';
import { PropsBase } from './PropsBase';
import { IPropsTaxing } from '../service_interfaces/IPropsTaxing';
import bigDecimal = require('js-big-decimal');

export class PropsTaxing extends PropsBase implements IPropsTaxing {
  constructor(
    version: VersionId,
    allowancePayer: number,
    allowanceDisab1st: number,
    allowanceDisab2nd: number,
    allowanceDisab3rd: number,
    allowanceStudy: number,
    allowanceChild1st: number,
    allowanceChild2nd: number,
    allowanceChild3rd: number,
    factorAdvances: bigDecimal,
    factorWithhold: bigDecimal,
    factorSolidary: bigDecimal,
    minAmountOfTaxBonus: number,
    maxAmountOfTaxBonus: number,
    marginIncomeOfTaxBonus: number,
    marginIncomeOfRounding: number,
    marginIncomeOfWithhold: number,
    marginIncomeOfSolidary: number,
    marginIncomeOfWthEmp: number,
    marginIncomeOfWthAgr: number,
  ) {
    super(version);
    this.allowancePayer = allowancePayer;
    this.allowanceDisab1st = allowanceDisab1st;
    this.allowanceDisab2nd = allowanceDisab2nd;
    this.allowanceDisab3rd = allowanceDisab3rd;
    this.allowanceStudy = allowanceStudy;
    this.allowanceChild1st = allowanceChild1st;
    this.allowanceChild2nd = allowanceChild2nd;
    this.allowanceChild3rd = allowanceChild3rd;
    this.factorAdvances = factorAdvances;
    this.factorWithhold = factorWithhold;
    this.factorSolidary = factorSolidary;
    this.minAmountOfTaxBonus = minAmountOfTaxBonus;
    this.maxAmountOfTaxBonus = maxAmountOfTaxBonus;
    this.marginIncomeOfTaxBonus = marginIncomeOfTaxBonus;
    this.marginIncomeOfRounding = marginIncomeOfRounding;
    this.marginIncomeOfWithhold = marginIncomeOfWithhold;
    this.marginIncomeOfSolidary = marginIncomeOfSolidary;
    this.marginIncomeOfWthEmp = marginIncomeOfWthEmp;
    this.marginIncomeOfWthAgr = marginIncomeOfWthAgr;
  }
  allowancePayer: number;
  allowanceDisab1st: number;
  allowanceDisab2nd: number;
  allowanceDisab3rd: number;
  allowanceStudy: number;
  allowanceChild1st: number;
  allowanceChild2nd: number;
  allowanceChild3rd: number;
  factorAdvances: bigDecimal;
  factorWithhold: bigDecimal;
  factorSolidary: bigDecimal;
  minAmountOfTaxBonus: number;
  maxAmountOfTaxBonus: number;
  marginIncomeOfTaxBonus: number;
  marginIncomeOfRounding: number;
  marginIncomeOfWithhold: number;
  marginIncomeOfSolidary: number;
  marginIncomeOfWthEmp: number;
  marginIncomeOfWthAgr: number;

  AllowancePayer(): number {
    return this.allowancePayer;
  }
  AllowanceDisab1st(): number {
    return this.allowanceDisab1st;
  }
  AllowanceDisab2nd(): number {
    return this.allowanceDisab2nd;
  }
  AllowanceDisab3rd(): number {
    return this.allowanceDisab3rd;
  }
  AllowanceStudy(): number {
    return this.allowanceStudy;
  }
  AllowanceChild1st(): number {
    return this.allowanceChild1st;
  }
  AllowanceChild2nd(): number {
    return this.allowanceChild2nd;
  }
  AllowanceChild3rd(): number {
    return this.allowanceChild3rd;
  }
  FactorAdvances(): bigDecimal {
    return this.factorAdvances;
  }
  FactorWithhold(): bigDecimal {
    return this.factorWithhold;
  }
  FactorSolidary(): bigDecimal {
    return this.factorSolidary;
  }
  MinAmountOfTaxBonus(): number {
    return this.minAmountOfTaxBonus;
  }
  MaxAmountOfTaxBonus(): number {
    return this.maxAmountOfTaxBonus;
  }
  MarginIncomeOfTaxBonus(): number {
    return this.marginIncomeOfTaxBonus;
  }
  MarginIncomeOfRounding(): number {
    return this.marginIncomeOfRounding;
  }
  MarginIncomeOfWithhold(): number {
    return this.marginIncomeOfWithhold;
  }
  MarginIncomeOfSolidary(): number {
    return this.marginIncomeOfSolidary;
  }
  MarginIncomeOfWthEmp(): number {
    return this.marginIncomeOfWthEmp;
  }
  MarginIncomeOfWthAgr(): number {
    return this.marginIncomeOfWthAgr;
  }

  public static empty(): IPropsTaxing {
    return new PropsTaxing(
      VersionId.new(),
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      new bigDecimal(0),
      new bigDecimal(0),
      new bigDecimal(0),
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
    );
  }
}
