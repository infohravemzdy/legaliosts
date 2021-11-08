import { HistoryConstSalary2016 } from './HistoryConstSalary2016';
import { HistoryConstHealth2015 } from '../providers_period2015/HistoryConstHealth2015';
import bigDecimal = require('js-big-decimal');

// MIN_MONTHLY_BASIS     Minimální základ zdravotního pojištění na jednoho pracovníka
//
// MAX_ANNUALS_BASIS     Maximální roční vyměřovací základ na jednoho pracovníka (tzv.strop)
//
// LIM_MONTHLY_STATE     Vyměřovací základ ze kterého platí pojistnéé stát za státní pojištěnce (mateřská, studenti, důchodci)
//
// LIM_MONTHLY_DIS50     Vyměřovací základ ze kterého platí pojistnéé stát za státní pojištěnce (mateřská, studenti, důchodci)
//                       u zaměstnavatele zaměstnávajícího více než 50% osob OZP
// FACTOR_COMPOUND       složená sazba zdravotního pojištění (zaměstnace + zaměstnavatele)
//
// FACTOR_EMPLOYEE       podíl sazby zdravotního pojištění připadajícího na zaměstnace (1/FACTOR_EMPLOYEE)
//
// MARGIN_INCOME_EMP     hranice příjmu pro vznik účasti na pojištění pro zaměstnace v pracovním poměru
//
// MARGIN_INCOME_AGR     hranice příjmu pro vznik účasti na pojištění pro zaměstnace na dohodu
export class HistoryConstHealth2016 {
  public static readonly VERSION_CODE: number = 2016;

  public static readonly MIN_MONTHLY_BASIS: number = HistoryConstSalary2016.MIN_MONTHLY_WAGE;
  public static readonly MAX_ANNUALS_BASIS: number = HistoryConstHealth2015.MAX_ANNUALS_BASIS;
  public static readonly LIM_MONTHLY_STATE: number = HistoryConstHealth2015.LIM_MONTHLY_STATE;
  public static readonly LIM_MONTHLY_DIS50: number = 6444;
  public static readonly FACTOR_COMPOUND: bigDecimal = HistoryConstHealth2015.FACTOR_COMPOUND;
  public static readonly FACTOR_EMPLOYEE: bigDecimal = HistoryConstHealth2015.FACTOR_EMPLOYEE;
  public static readonly MARGIN_INCOME_EMP: number = HistoryConstHealth2015.MARGIN_INCOME_EMP;
  public static readonly MARGIN_INCOME_AGR: number = HistoryConstHealth2015.MARGIN_INCOME_AGR;
}
