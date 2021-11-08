import { VersionId } from '../service_types/versionid';
import { IPeriod } from '../service_types/period';
import { ProviderBase } from '../providers/ProviderBase';
import { IProviderHealth } from '../providers/IProviderHealth';
import { IPropsHealth } from '../service_interfaces/IPropsHealth';
import { PropsHealth } from '../props/PropsHealth';
import {HistoryConstHealth2020, HistoryConstHealth2020var06} from './HistoryConstHealth2020';
import bigDecimal = require('js-big-decimal');
import {HistoryConstHealth2013var08} from "../providers_period2013/HistoryConstHealth2013";
import {HistoryConstHealth2019} from "../providers_period2019/HistoryConstHealth2019";

export class ProviderHealth2020 extends ProviderBase implements IProviderHealth {
  constructor() {
    super(VersionId.get(HistoryConstHealth2020.VERSION_CODE));
  }
  GetProps(period: IPeriod): IPropsHealth {
    return new PropsHealth(
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
    return HistoryConstHealth2020.MIN_MONTHLY_BASIS;
  }

  MaxAnnualsBasis(period: IPeriod): number {
    return HistoryConstHealth2020.MAX_ANNUALS_BASIS;
  }

  LimMonthlyState(period: IPeriod): number {
    return HistoryConstHealth2020.LIM_MONTHLY_STATE;
  }

  LimMonthlyDis50(period: IPeriod): number {
    if (this.IsPeriodGreaterOrEqualThan(period, 2020, 6)) {
      return HistoryConstHealth2020var06.LIM_MONTHLY_DIS50
    }
    return HistoryConstHealth2020.LIM_MONTHLY_DIS50;
  }

  FactorCompound(period: IPeriod): bigDecimal {
    return HistoryConstHealth2020.FACTOR_COMPOUND;
  }

  FactorEmployee(period: IPeriod): bigDecimal {
    return HistoryConstHealth2020.FACTOR_EMPLOYEE;
  }

  MarginIncomeEmp(period: IPeriod): number {
    return HistoryConstHealth2020.MARGIN_INCOME_EMP;
  }

  MarginIncomeAgr(period: IPeriod): number {
    return HistoryConstHealth2020.MARGIN_INCOME_AGR;
  }
}
