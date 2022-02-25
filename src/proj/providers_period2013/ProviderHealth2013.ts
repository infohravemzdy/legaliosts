import { VersionId } from '../service_types/versionid';
import { IPeriod } from '../service_types/period';
import { ProviderBase } from '../providers/ProviderBase';
import { IProviderHealth } from '../providers/IProviderHealth';
import { IPropsHealth } from '../service_interfaces/IPropsHealth';
import { PropsHealth2012 } from '../props/PropsHealth2012';
import {
  HistoryConstHealth2013,
  HistoryConstHealth2013var08,
  HistoryConstHealth2013var11,
} from './HistoryConstHealth2013';
import bigDecimal = require('js-big-decimal');

export class ProviderHealth2013 extends ProviderBase implements IProviderHealth {
  constructor() {
    super(VersionId.get(HistoryConstHealth2013.VERSION_CODE));
  }
  GetProps(period: IPeriod): IPropsHealth {
    return new PropsHealth2012(
      this.Version(),
      this.MinMonthlyBasis(period),
      this.MaxAnnualsBasis(period),
      this.LimMonthlyState(period),
      this.LimMonthlyDis50(period),
      this.FactorCompound(period),
      this.FactorEmployee(period),
      this.MarginIncomeEmp(period),
      this.MarginIncomeAgr(period),
    );
  }

  MinMonthlyBasis(period: IPeriod): number {
    if (this.IsPeriodGreaterOrEqualThan(period, 2013, 8)) {
      return HistoryConstHealth2013var08.MIN_MONTHLY_BASIS;
    }
    return HistoryConstHealth2013.MIN_MONTHLY_BASIS;
  }

  MaxAnnualsBasis(period: IPeriod): number {
    return HistoryConstHealth2013.MAX_ANNUALS_BASIS;
  }

  LimMonthlyState(period: IPeriod): number {
    return HistoryConstHealth2013.LIM_MONTHLY_STATE;
  }

  LimMonthlyDis50(period: IPeriod): number {
    if (this.IsPeriodGreaterOrEqualThan(period, 2013, 11)) {
      return HistoryConstHealth2013var11.LIM_MONTHLY_DIS50;
    }
    return HistoryConstHealth2013.LIM_MONTHLY_DIS50;
  }

  FactorCompound(period: IPeriod): bigDecimal {
    return HistoryConstHealth2013.FACTOR_COMPOUND;
  }

  FactorEmployee(period: IPeriod): bigDecimal {
    return HistoryConstHealth2013.FACTOR_EMPLOYEE;
  }

  MarginIncomeEmp(period: IPeriod): number {
    return HistoryConstHealth2013.MARGIN_INCOME_EMP;
  }

  MarginIncomeAgr(period: IPeriod): number {
    return HistoryConstHealth2013.MARGIN_INCOME_AGR;
  }
}
