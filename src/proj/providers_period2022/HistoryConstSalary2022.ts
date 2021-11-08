import { HistoryConstSalary2021 } from '../providers_period2021/HistoryConstSalary2021';
// WORKING_SHIFT_WEEK      Počet pracovních dnů v týdnu
//
// WORKING_SHIFT_TIME      Počet pracovních hodin denně
//
// MIN_MONTHLY_WAGE        Minimální mzda měsíční
//
// MIN_HOURLY_WAGE         Minimální mzda hodinová (100*Kč)
export class HistoryConstSalary2022 {
  public static readonly VERSION_CODE = 2022;

  public static readonly WORKING_SHIFT_WEEK: number = HistoryConstSalary2021.WORKING_SHIFT_WEEK;
  public static readonly WORKING_SHIFT_TIME: number = HistoryConstSalary2021.WORKING_SHIFT_TIME;
  public static readonly MIN_MONTHLY_WAGE: number = HistoryConstSalary2021.MIN_MONTHLY_WAGE;
  public static readonly MIN_HOURLY_WAGE: number = HistoryConstSalary2021.MIN_HOURLY_WAGE;
}
