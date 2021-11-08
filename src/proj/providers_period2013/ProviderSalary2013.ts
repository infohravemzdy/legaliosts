import { VersionId } from '../service_types/versionid';
import { IPeriod } from '../service_types/period';
import { ProviderBase } from '../providers/ProviderBase';
import { IProviderSalary } from '../providers/IProviderSalary';
import { IPropsSalary } from '../service_interfaces/IPropsSalary';
import { PropsSalary } from '../props/PropsSalary';
import {HistoryConstSalary2013, HistoryConstSalary2013var08} from './HistoryConstSalary2013';
import {HistoryConstHealth2013var08} from "./HistoryConstHealth2013";

export class ProviderSalary2013 extends ProviderBase implements IProviderSalary {
  constructor() {
    super(VersionId.get(HistoryConstSalary2013.VERSION_CODE));
  }
  GetProps(period: IPeriod): IPropsSalary {
    return new PropsSalary(
      this.Version(),
      this.WorkingShiftWeek(period),
      this.WorkingShiftTime(period),
      this.MinMonthlyWage(period),
      this.MinHourlyWage(period),
    );
  }

  WorkingShiftWeek(period: IPeriod): number {
    return HistoryConstSalary2013.WORKING_SHIFT_WEEK;
  }

  WorkingShiftTime(period: IPeriod): number {
    return HistoryConstSalary2013.WORKING_SHIFT_TIME;
  }

  MinMonthlyWage(period: IPeriod): number {
    if (this.IsPeriodGreaterOrEqualThan(period, 2013, 8)) {
      return HistoryConstSalary2013var08.MIN_MONTHLY_WAGE
    }
    return HistoryConstSalary2013.MIN_MONTHLY_WAGE;
  }

  MinHourlyWage(period: IPeriod): number {
    if (this.IsPeriodGreaterOrEqualThan(period, 2013, 8)) {
      return HistoryConstSalary2013var08.MIN_HOURLY_WAGE
    }
    return HistoryConstSalary2013.MIN_HOURLY_WAGE;
  }
}
