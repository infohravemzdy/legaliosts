import { VersionId } from '../service_types/versionid';
import { PropsBase } from './PropsBase';
import { IPropsTaxing } from '../service_interfaces/IPropsTaxing';
import bigDecimal = require('js-big-decimal');
import { OperationsRound } from '../service_types/OperationsRound';
import { WorkTaxingTerms } from '../service_types/ContractTerms';
import { OperationsDec } from '../service_types/OperationDec';

export abstract class PropsTaxingBase extends PropsBase implements IPropsTaxing {
  protected static BIG_100 = new bigDecimal(100);
  protected static BIG_ZERO = new bigDecimal(0);

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
    factorTaxRate2: bigDecimal,
    minAmountOfTaxBonus: number,
    maxAmountOfTaxBonus: number,
    marginIncomeOfTaxBonus: number,
    marginIncomeOfRounding: number,
    marginIncomeOfWithhold: number,
    marginIncomeOfSolidary: number,
    marginIncomeOfTaxRate2: number,
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
    this.factorTaxRate2 = factorTaxRate2;
    this.minAmountOfTaxBonus = minAmountOfTaxBonus;
    this.maxAmountOfTaxBonus = maxAmountOfTaxBonus;
    this.marginIncomeOfTaxBonus = marginIncomeOfTaxBonus;
    this.marginIncomeOfRounding = marginIncomeOfRounding;
    this.marginIncomeOfWithhold = marginIncomeOfWithhold;
    this.marginIncomeOfSolidary = marginIncomeOfSolidary;
    this.marginIncomeOfTaxRate2 = marginIncomeOfTaxRate2;
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
  factorTaxRate2: bigDecimal;
  minAmountOfTaxBonus: number;
  maxAmountOfTaxBonus: number;
  marginIncomeOfTaxBonus: number;
  marginIncomeOfRounding: number;
  marginIncomeOfWithhold: number;
  marginIncomeOfSolidary: number;
  marginIncomeOfTaxRate2: number;
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
  FactorTaxRate2(): bigDecimal {
    return this.factorTaxRate2;
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
  MarginIncomeOfTaxRate2(): number {
    return this.marginIncomeOfTaxRate2;
  }
  MarginIncomeOfWthEmp(): number {
    return this.marginIncomeOfWthEmp;
  }
  MarginIncomeOfWthAgr(): number {
    return this.marginIncomeOfWthAgr;
  }

  valueEquals(other: IPropsTaxing): boolean {
    if (other === null) {
      return false;
    }
    return (this.allowancePayer === other.AllowancePayer() &&
      this.allowanceDisab1st === other.AllowanceDisab1st() &&
      this.allowanceDisab2nd === other.AllowanceDisab2nd() &&
      this.allowanceDisab3rd === other.AllowanceDisab3rd() &&
      this.allowanceStudy === other.AllowanceStudy() &&
      this.allowanceChild1st === other.AllowanceChild1st() &&
      this.allowanceChild2nd === other.AllowanceChild2nd() &&
      this.allowanceChild3rd === other.AllowanceChild3rd() &&
      this.factorAdvances === other.FactorAdvances() &&
      this.factorWithhold === other.FactorWithhold() &&
      this.factorSolidary === other.FactorSolidary() &&
      this.factorTaxRate2 === other.FactorTaxRate2() &&
      this.minAmountOfTaxBonus === other.MinAmountOfTaxBonus() &&
      this.maxAmountOfTaxBonus === other.MaxAmountOfTaxBonus() &&
      this.marginIncomeOfTaxBonus === other.MarginIncomeOfTaxBonus() &&
      this.marginIncomeOfRounding === other.MarginIncomeOfRounding() &&
      this.marginIncomeOfWithhold === other.MarginIncomeOfWithhold() &&
      this.marginIncomeOfSolidary === other.MarginIncomeOfSolidary() &&
      this.marginIncomeOfTaxRate2 === other.MarginIncomeOfTaxRate2() &&
      this.marginIncomeOfWthEmp === other.MarginIncomeOfWthEmp() &&
      this.marginIncomeOfWthAgr === other.MarginIncomeOfWthAgr());
  }

  intTaxRoundUp(valueDec: bigDecimal): number {
    return OperationsRound.roundUp(valueDec);
  }
  intTaxRoundNearUp(valueDec: bigDecimal, nearest: number = 100): number {
    return OperationsRound.nearRoundUp(valueDec, nearest);
  }
  intTaxRoundDown(valueDec: bigDecimal): number {
    return OperationsRound.roundDown(valueDec);
  }
  intTaxRoundNearDown(valueDec: bigDecimal, nearest: number = 100): number {
    return OperationsRound.nearRoundDown(valueDec, nearest);
  }
  
  decTaxRoundUp(valueDec: bigDecimal): bigDecimal {
    return OperationsRound.decRoundUp(valueDec);
  }
  
  decTaxRoundNearUp(valueDec: bigDecimal, nearest: number = 100): bigDecimal {
    return OperationsRound.decNearRoundUp(valueDec, nearest);
  }
  decTaxRoundDown(valueDec: bigDecimal): bigDecimal {
    return OperationsRound.decRoundDown(valueDec);
  }
  decTaxRoundNearDown(valueDec: bigDecimal, nearest: number = 100): bigDecimal {
    return OperationsRound.decNearRoundDown(valueDec, nearest);
  }
  
  abstract hasWithholdIncome(termOpt: WorkTaxingTerms, signOpt: TaxDeclSignOption, noneOpt: TaxNoneSignOption, incomeSum: number): boolean;
  
  benefitAllowancePayer(signOpts: TaxDeclSignOption, benefitOpts: TaxDeclBenfOption): number {
    let benefitValue: number = 0;
    if (signOpts === TaxDeclSignOption.DECL_TAX_DO_SIGNED)
    {
      if (benefitOpts === TaxDeclBenfOption.DECL_TAX_BENEF1)
      {
        benefitValue = this.allowancePayer;
      }
    }
    return benefitValue;
  }
  benefitAllowanceDisab(signOpts: TaxDeclSignOption, benefitOpts: TaxDeclDisabOption): number {
    let benefitValue: number = 0;
    if (signOpts === TaxDeclSignOption.DECL_TAX_DO_SIGNED)
    {
      switch (benefitOpts) {
        case TaxDeclDisabOption.DECL_TAX_DISAB1 : benefitValue = this.allowanceDisab1st; break;
        case TaxDeclDisabOption.DECL_TAX_DISAB2 : benefitValue = this.allowanceDisab2nd; break;
        case TaxDeclDisabOption.DECL_TAX_DISAB3 : benefitValue = this.allowanceDisab3rd; break;
      }
    }
    return benefitValue;
  }
  benefitAllowanceStudy(signOpts: TaxDeclSignOption, benefitOpts: TaxDeclBenfOption): number {
    let benefitValue: number = 0;
  
    if (signOpts === TaxDeclSignOption.DECL_TAX_DO_SIGNED)
    {
      if (benefitOpts === TaxDeclBenfOption.DECL_TAX_BENEF1)
      {
        benefitValue = this.allowanceStudy;
      }
    }
    return benefitValue;
  }
  benefitAllowanceChild(signOpts: TaxDeclSignOption, benefitOpts: TaxDeclBenfOption, benefitOrds: number, disabelOpts: number): number {
    let benefitValue: number = 0;
    if (signOpts === TaxDeclSignOption.DECL_TAX_DO_SIGNED)
    {
      let benefitUnits: number = 0;
      switch (benefitOrds) {
        case 0 : benefitUnits = this.allowanceChild1st; break;
        case 1 : benefitUnits = this.allowanceChild2nd; break;
        case 2 : benefitUnits = this.allowanceChild3rd; break;
      }
      if (benefitOpts === TaxDeclBenfOption.DECL_TAX_BENEF1)
      {
        if (disabelOpts === 1)
        {
          benefitValue = benefitUnits * 2;
        }
        else
        {
          benefitValue = benefitUnits;
        }
      }
    }
    return benefitValue;
  }
  bonusChildRaw(income: number, benefit: number, rebated: number): number {
    let bonusForChild: bigDecimal = OperationsDec.min(PropsTaxingBase.BIG_100, new bigDecimal(rebated - benefit)).negate();
  
    if (this.marginIncomeOfTaxBonus > 0)
    {
      if (income < this.marginIncomeOfTaxBonus)
      {
        bonusForChild = PropsTaxingBase.BIG_100;
      }
    }
    return OperationsRound.roundToInt(bonusForChild);
  }
  bonusChildFix(income: number, benefit: number, rebated: number): number {
    const childBonus = this.bonusChildRaw(income, benefit, rebated)
  
    if (this.minAmountOfTaxBonus > 0)
    {
      if (childBonus < this.minAmountOfTaxBonus)
      {
        return 0;
      }
    }
    if (this.maxAmountOfTaxBonus > 0)
    {
      if (childBonus > this.maxAmountOfTaxBonus)
      {
        return this.maxAmountOfTaxBonus;
      }
    }
    return childBonus;
  }
  
  taxableIncomeSupers(incomeResult: number, healthResult: number, socialResult: number): number {
    return this.taxableIncomeBasis(incomeResult + healthResult + socialResult);
  }
  
  taxableIncomeBasis(incomeResult: number): number {
    const taxableSuper: number = Math.max(0, incomeResult);
    return taxableSuper;
  }
  
  roundedBaseAdvances(incomeResult: number, healthResult: number, socialResult: number): number {
    const advanceBase = this.roundedRawBaseAdvances(incomeResult + healthResult + socialResult);
  
    return advanceBase;
  }
  
  roundedRawBaseAdvances(incomeResult: number): number {
    const amountForCalc: number = this.taxableIncomeBasis(incomeResult);
  
    let advanceBase: number = 0;
    if (amountForCalc <= this.marginIncomeOfRounding)
    {
      advanceBase = this.intTaxRoundUp(new bigDecimal(amountForCalc));
    }
    else
    {
      advanceBase = this.intTaxRoundNearUp(new bigDecimal(amountForCalc), 100);
    }
    return advanceBase;
  }
  
  roundedBaseSolidary(incomeResult: number): number {
    let solidaryBase: number = 0;
  
    const taxableIncome: number = Math.max(0, incomeResult);
    if (this.marginIncomeOfSolidary !== 0)
    {
      solidaryBase = Math.max(0, taxableIncome - this.marginIncomeOfSolidary);
    }
    return solidaryBase
  }

  abstract roundedAdvancesPaym(supersResult: number, basisResult: number): number;
  
  roundedSolidaryPaym(basisResult: number): number {
    const factorSolidary = OperationsDec.divide(this.factorSolidary, PropsTaxingBase.BIG_100);
  
    let solidaryTaxing: number = 0;
    if (this.marginIncomeOfSolidary !== 0)
    {
      solidaryTaxing = this.intTaxRoundUp(OperationsDec.multiply(new bigDecimal(basisResult), factorSolidary));
    }
  
    return solidaryTaxing;
  }
  roundedBaseWithhold(incomeResult: number): number {
    const amountForCalc: number = Math.max(0, incomeResult);
    const withholdBase: number = this.intTaxRoundDown(new bigDecimal(amountForCalc));
  
    return withholdBase;
  }
  roundedWithholdPaym(supersResult: number, basisResult: number): number {
    const factorWithhold = OperationsDec.divide(this.factorWithhold, PropsTaxingBase.BIG_100);
  
    let withholdTaxing: number = Math.max(0, supersResult);
    if (withholdTaxing > 0)
    {
      withholdTaxing = this.intTaxRoundDown(OperationsDec.multiply(new bigDecimal(supersResult), factorWithhold));
    }
    return withholdTaxing;
  }
}
