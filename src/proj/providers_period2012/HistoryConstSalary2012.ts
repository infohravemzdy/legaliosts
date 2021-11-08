import { HistoryConstSalary2011 } from '../providers_period2011/HistoryConstSalary2011';

// WORKING_SHIFT_WEEK      Počet pracovních dnů v týdnu
//
// WORKING_SHIFT_TIME      Počet pracovních hodin denně
//
// MIN_MONTHLY_WAGE        Minimální mzda měsíční
//
// MIN_HOURLY_WAGE         Minimální mzda hodinová (100*Kč)
export class HistoryConstSalary2012 {
  public static readonly VERSION_CODE = 2012;

  public static readonly WORKING_SHIFT_WEEK: number = HistoryConstSalary2011.WORKING_SHIFT_WEEK;
  public static readonly WORKING_SHIFT_TIME: number = HistoryConstSalary2011.WORKING_SHIFT_TIME;
  public static readonly MIN_MONTHLY_WAGE: number = HistoryConstSalary2011.MIN_MONTHLY_WAGE;
  public static readonly MIN_HOURLY_WAGE: number = HistoryConstSalary2011.MIN_HOURLY_WAGE;
}
