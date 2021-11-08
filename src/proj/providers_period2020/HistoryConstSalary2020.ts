import { HistoryConstSalary2019 } from '../providers_period2019/HistoryConstSalary2019';
// WORKING_SHIFT_WEEK      Počet pracovních dnů v týdnu
//
// WORKING_SHIFT_TIME      Počet pracovních hodin denně
//
// MIN_MONTHLY_WAGE        Minimální mzda měsíční
//
// MIN_HOURLY_WAGE         Minimální mzda hodinová (100*Kč)
export class HistoryConstSalary2020 {
  public static readonly VERSION_CODE = 2020;

  public static readonly WORKING_SHIFT_WEEK: number = HistoryConstSalary2019.WORKING_SHIFT_WEEK;
  public static readonly WORKING_SHIFT_TIME: number = HistoryConstSalary2019.WORKING_SHIFT_TIME;
  public static readonly MIN_MONTHLY_WAGE: number = 14600;
  public static readonly MIN_HOURLY_WAGE: number = 8730;
}
