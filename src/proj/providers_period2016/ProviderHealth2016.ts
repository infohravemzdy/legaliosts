import { VersionId } from '../service_types/versionid';
import { IPeriod } from '../service_types/period';
import { ProviderBase } from '../providers/ProviderBase';
import { IProviderHealth } from '../providers/IProviderHealth';
import { IPropsHealth } from '../service_interfaces/IPropsHealth';
import { PropsHealth } from '../props/PropsHealth';
import { HistoryConstHealth2016 } from './HistoryConstHealth2016';
import bigDecimal = require('js-big-decimal');

export class ProviderHealth2016 extends ProviderBase implements IProviderHealth {
  constructor() {
    super(VersionId.get(HistoryConstHealth2016.VERSION_CODE));
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
    return HistoryConstHealth2016.MIN_MONTHLY_BASIS;
  }

  MaxAnnualsBasis(period: IPeriod): number {
    return HistoryConstHealth2016.MAX_ANNUALS_BASIS;
  }

  LimMonthlyState(period: IPeriod): number {
    return HistoryConstHealth2016.LIM_MONTHLY_STATE;
  }

  LimMonthlyDis50(period: IPeriod): number {
    return HistoryConstHealth2016.LIM_MONTHLY_DIS50;
  }

  FactorCompound(period: IPeriod): bigDecimal {
    return HistoryConstHealth2016.FACTOR_COMPOUND;
  }

  FactorEmployee(period: IPeriod): bigDecimal {
    return HistoryConstHealth2016.FACTOR_EMPLOYEE;
  }

  MarginIncomeEmp(period: IPeriod): number {
    return HistoryConstHealth2016.MARGIN_INCOME_EMP;
  }

  MarginIncomeAgr(period: IPeriod): number {
    return HistoryConstHealth2016.MARGIN_INCOME_AGR;
  }
}
