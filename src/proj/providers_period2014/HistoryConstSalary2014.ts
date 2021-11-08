import { HistoryConstSalary2013, HistoryConstSalary2013var08 } from '../providers_period2013/HistoryConstSalary2013';

// WORKING_SHIFT_WEEK      Počet pracovních dnů v týdnu
//
// WORKING_SHIFT_TIME      Počet pracovních hodin denně
//
// MIN_MONTHLY_WAGE        Minimální mzda měsíční
//
// MIN_HOURLY_WAGE         Minimální mzda hodinová (100*Kč)
export class HistoryConstSalary2014 {
  public static readonly VERSION_CODE = 2014;

  public static readonly WORKING_SHIFT_WEEK: number = HistoryConstSalary2013.WORKING_SHIFT_WEEK;
  public static readonly WORKING_SHIFT_TIME: number = HistoryConstSalary2013.WORKING_SHIFT_TIME;
  public static readonly MIN_MONTHLY_WAGE: number = HistoryConstSalary2013var08.MIN_MONTHLY_WAGE; // 8000
  public static readonly MIN_HOURLY_WAGE: number = HistoryConstSalary2013var08.MIN_HOURLY_WAGE; // 4810
}
