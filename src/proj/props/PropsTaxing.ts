import { VersionId } from '../service_types/versionid';
import { IPropsTaxing } from '../service_interfaces/IPropsTaxing';
import { PropsTaxingBase } from './PropsTaxingBase';
import bigDecimal = require('js-big-decimal');
import { WorkTaxingTerms } from '../service_types/ContractTerms';
import { OperationsDec } from '../service_types/OperationDec';
import { TaxDeclSignOption, TaxNoneSignOption } from '../service_types/TaxingOptions';

export class PropsTaxing extends PropsTaxingBase implements IPropsTaxing {
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
    super(
      version,
      allowancePayer,
      allowanceDisab1st,
      allowanceDisab2nd,
      allowanceDisab3rd,
      allowanceStudy,
      allowanceChild1st,
      allowanceChild2nd,
      allowanceChild3rd,
      factorAdvances,
      factorWithhold,
      factorSolidary,
      factorTaxRate2,
      minAmountOfTaxBonus,
      maxAmountOfTaxBonus,
      marginIncomeOfTaxBonus,
      marginIncomeOfRounding,
      marginIncomeOfWithhold,
      marginIncomeOfSolidary,
      marginIncomeOfTaxRate2,
      marginIncomeOfWthEmp,
      marginIncomeOfWthAgr,
    );
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
      new bigDecimal(0),
      0,
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

  override hasWithholdIncome(
    termOpt: WorkTaxingTerms,
    signOpt: TaxDeclSignOption,
    noneOpt: TaxNoneSignOption,
    incomeSum: number,
  ): boolean {
    // *****************************************************************************
    // Tax income for advance from Year 2014 to Year 2017
    // *****************************************************************************
    // - withhold tax (non-signed declaration) and income
    // if (period.Year >= 2018)
    // -- income from DPP is less than X CZK
    // -- income from low-income employment is less than X CZK
    // -- income from statutory employment and non-resident is always withhold tax

    let withholdIncome: boolean = false;
    if (signOpt !== TaxDeclSignOption.DECL_TAX_NO_SIGNED) {
      return withholdIncome;
    }
    if (noneOpt !== TaxNoneSignOption.NOSIGN_TAX_WITHHOLD) {
      return withholdIncome;
    }
    if (termOpt === WorkTaxingTerms.TAXING_TERM_AGREEM_TASK) {
      if (this.marginIncomeOfWthAgr === 0 || incomeSum <= this.marginIncomeOfWthAgr) {
        if (incomeSum > 0) {
          withholdIncome = true;
        }
      }
    } else if (termOpt === WorkTaxingTerms.TAXING_TERM_EMPLOYMENTS) {
      if (this.marginIncomeOfWthEmp === 0 || incomeSum <= this.marginIncomeOfWthEmp) {
        if (incomeSum > 0) {
          withholdIncome = true;
        }
      }
    } else if (termOpt === WorkTaxingTerms.TAXING_TERM_STATUT_PART) {
      if (incomeSum > 0) {
        withholdIncome = true;
      }
    }
    return withholdIncome;
  }
  override roundedAdvancesPaym(supersResult: number, basisResult: number): number {
    const factorAdvances = OperationsDec.divide(this.factorAdvances, PropsTaxingBase.BIG_ZERO);
    const factorTaxRate2 = OperationsDec.divide(this.factorTaxRate2, PropsTaxingBase.BIG_ZERO);

    let taxRate1Basis: number = basisResult;
    let taxRate2Basis: number = 0;
    if (this.marginIncomeOfTaxRate2 !== 0) {
      taxRate1Basis = Math.min(basisResult, this.marginIncomeOfTaxRate2);
      taxRate2Basis = Math.max(0, basisResult - this.marginIncomeOfTaxRate2);
    }
    let taxRate1Taxing: bigDecimal = PropsTaxingBase.BIG_ZERO;
    if (basisResult <= this.marginIncomeOfRounding) {
      taxRate1Taxing = OperationsDec.multiply(new bigDecimal(taxRate1Basis), factorAdvances);
    } else {
      taxRate1Taxing = OperationsDec.multiply(new bigDecimal(taxRate1Basis), factorAdvances);
    }
    let taxRate2Taxing: bigDecimal = PropsTaxingBase.BIG_ZERO;
    if (this.marginIncomeOfTaxRate2 !== 0) {
      taxRate2Taxing = OperationsDec.multiply(new bigDecimal(taxRate2Basis), factorTaxRate2);
    }
    return this.intTaxRoundUp(taxRate1Taxing.add(taxRate2Taxing));
  }
}
