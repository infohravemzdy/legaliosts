import { VersionId } from '../service_types/versionid';
import { IPeriod } from '../service_types/period';
import { ProviderBase } from '../providers/ProviderBase';
import { IProviderSocial } from '../providers/IProviderSocial';
import { IPropsSocial } from '../service_interfaces/IPropsSocial';
import { PropsSocial } from '../props/PropsSocial';
import { HistoryConstSocial2022 } from './HistoryConstSocial2022';
import bigDecimal = require('js-big-decimal');

export class ProviderSocial2022 extends ProviderBase implements IProviderSocial {
  constructor() {
    super(VersionId.get(HistoryConstSocial2022.VERSION_CODE));
  }
  GetProps(period: IPeriod): IPropsSocial {
    return new PropsSocial(
      this.Version(),
      this.MaxAnnualsBasis(period),
      this.FactorEmployer(period),
      this.FactorEmployerHigher(period),
      this.FactorEmployee(period),
      this.FactorEmployeeGarant(period),
      this.FactorEmployeeReduce(period),
      this.MarginIncomeEmp(period),
      this.MarginIncomeAgr(period),
    );
  }

  MaxAnnualsBasis(period: IPeriod): number {
    return HistoryConstSocial2022.MAX_ANNUALS_BASIS;
  }

  FactorEmployer(period: IPeriod): bigDecimal {
    return HistoryConstSocial2022.FACTOR_EMPLOYER;
  }

  FactorEmployerHigher(period: IPeriod): bigDecimal {
    return HistoryConstSocial2022.FACTOR_EMPLOYER_HIGHER;
  }

  FactorEmployee(period: IPeriod): bigDecimal {
    return HistoryConstSocial2022.FACTOR_EMPLOYEE;
  }

  FactorEmployeeGarant(period: IPeriod): bigDecimal {
    return HistoryConstSocial2022.FACTOR_EMPLOYEE_GARANT;
  }

  FactorEmployeeReduce(period: IPeriod): bigDecimal {
    return HistoryConstSocial2022.FACTOR_EMPLOYEE_REDUCE;
  }

  MarginIncomeEmp(period: IPeriod): number {
    return HistoryConstSocial2022.MARGIN_INCOME_EMP;
  }

  MarginIncomeAgr(period: IPeriod): number {
    return HistoryConstSocial2022.MARGIN_INCOME_AGR;
  }
}
