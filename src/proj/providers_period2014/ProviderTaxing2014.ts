﻿import { VersionId } from '../service_types/versionid';
import { IPeriod } from '../service_types/period';
import { ProviderBase } from '../providers/ProviderBase';
import { IProviderTaxing } from '../providers/IProviderTaxing';
import { PropsTaxing2014 } from '../props/PropsTaxing2014';
import { IPropsTaxing } from '../service_interfaces/IPropsTaxing';
import { HistoryConstTaxing2014 } from './HistoryConstTaxing2014';
import bigDecimal = require('js-big-decimal');

export class ProviderTaxing2014 extends ProviderBase implements IProviderTaxing {
  constructor() {
    super(VersionId.get(HistoryConstTaxing2014.VERSION_CODE));
  }
  GetProps(period: IPeriod): IPropsTaxing {
    return new PropsTaxing2014(
      this.Version(),
      this.AllowancePayer(period),
      this.AllowanceDisab1st(period),
      this.AllowanceDisab2nd(period),
      this.AllowanceDisab3rd(period),
      this.AllowanceStudy(period),
      this.AllowanceChild1st(period),
      this.AllowanceChild2nd(period),
      this.AllowanceChild3rd(period),
      this.FactorAdvances(period),
      this.FactorWithhold(period),
      this.FactorSolidary(period),
      this.FactorTaxRate2(period),
      this.MinAmountOfTaxBonus(period),
      this.MaxAmountOfTaxBonus(period),
      this.MarginIncomeOfTaxBonus(period),
      this.MarginIncomeOfRounding(period),
      this.MarginIncomeOfWithhold(period),
      this.MarginIncomeOfSolidary(period),
      this.MarginIncomeOfTaxRate2(period),
      this.MarginIncomeOfWthEmp(period),
      this.MarginIncomeOfWthAgr(period),
    );
  }

  AllowancePayer(period: IPeriod): number {
    return HistoryConstTaxing2014.ALLOWANCE_PAYER;
  }
  AllowanceDisab1st(period: IPeriod): number {
    return HistoryConstTaxing2014.ALLOWANCE_DISAB_1ST;
  }
  AllowanceDisab2nd(period: IPeriod): number {
    return HistoryConstTaxing2014.ALLOWANCE_DISAB_2ND;
  }
  AllowanceDisab3rd(period: IPeriod): number {
    return HistoryConstTaxing2014.ALLOWANCE_DISAB_3RD;
  }
  AllowanceStudy(period: IPeriod): number {
    return HistoryConstTaxing2014.ALLOWANCE_STUDY;
  }
  AllowanceChild1st(period: IPeriod): number {
    return HistoryConstTaxing2014.ALLOWANCE_CHILD_1ST;
  }
  AllowanceChild2nd(period: IPeriod): number {
    return HistoryConstTaxing2014.ALLOWANCE_CHILD_2ND;
  }
  AllowanceChild3rd(period: IPeriod): number {
    return HistoryConstTaxing2014.ALLOWANCE_CHILD_3RD;
  }
  FactorAdvances(period: IPeriod): bigDecimal {
    return HistoryConstTaxing2014.FACTOR_ADVANCES;
  }
  FactorWithhold(period: IPeriod): bigDecimal {
    return HistoryConstTaxing2014.FACTOR_WITHHOLD;
  }
  FactorSolidary(period: IPeriod): bigDecimal {
    return HistoryConstTaxing2014.FACTOR_SOLIDARY;
  }
  FactorTaxRate2(period: IPeriod): bigDecimal {
    return HistoryConstTaxing2014.FACTOR_TAXRATE2;
  }
  MinAmountOfTaxBonus(period: IPeriod): number {
    return HistoryConstTaxing2014.MIN_AMOUNT_OF_TAXBONUS;
  }
  MaxAmountOfTaxBonus(period: IPeriod): number {
    return HistoryConstTaxing2014.MAX_AMOUNT_OF_TAXBONUS;
  }
  MarginIncomeOfTaxBonus(period: IPeriod): number {
    return HistoryConstTaxing2014.MARGIN_INCOME_OF_TAXBONUS;
  }
  MarginIncomeOfRounding(period: IPeriod): number {
    return HistoryConstTaxing2014.MARGIN_INCOME_OF_ROUNDING;
  }
  MarginIncomeOfWithhold(period: IPeriod): number {
    return HistoryConstTaxing2014.MARGIN_INCOME_OF_WITHHOLD;
  }
  MarginIncomeOfSolidary(period: IPeriod): number {
    return HistoryConstTaxing2014.MARGIN_INCOME_OF_SOLIDARY;
  }
  MarginIncomeOfTaxRate2(period: IPeriod): number {
    return HistoryConstTaxing2014.MARGIN_INCOME_OF_TAXRATE2;
  }
  MarginIncomeOfWthEmp(period: IPeriod): number {
    return HistoryConstTaxing2014.MARGIN_INCOME_OF_WHT_EMP;
  }
  MarginIncomeOfWthAgr(period: IPeriod): number {
    return HistoryConstTaxing2014.MARGIN_INCOME_OF_WHT_AGR;
  }
}
