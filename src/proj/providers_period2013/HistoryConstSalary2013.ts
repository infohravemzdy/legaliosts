import { HistoryConstSalary2012 } from '../providers_period2012/HistoryConstSalary2012';

// WORKING_SHIFT_WEEK      Počet pracovních dnů v týdnu
//
// WORKING_SHIFT_TIME      Počet pracovních hodin denně
//
// MIN_MONTHLY_WAGE        Minimální mzda měsíční
//
// MIN_HOURLY_WAGE         Minimální mzda hodinová (100*Kč)
export class HistoryConstSalary2013var08 {
  public static readonly MIN_MONTHLY_WAGE = 8500; // 8000
  public static readonly MIN_HOURLY_WAGE = 5060; // 4810
}

export class HistoryConstSalary2013 {
  public static readonly VERSION_CODE = 2013;

  public static readonly WORKING_SHIFT_WEEK: number = HistoryConstSalary2012.WORKING_SHIFT_WEEK;
  public static readonly WORKING_SHIFT_TIME: number = HistoryConstSalary2012.WORKING_SHIFT_TIME;
  public static readonly MIN_MONTHLY_WAGE: number = HistoryConstSalary2012.MIN_MONTHLY_WAGE;
  public static readonly MIN_HOURLY_WAGE: number = HistoryConstSalary2012.MIN_HOURLY_WAGE;
}
