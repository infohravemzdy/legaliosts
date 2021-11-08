import { HistoryConstSalary2011 } from './HistoryConstSalary2011';
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
export class HistoryConstHealth2011 {
  public static readonly VERSION_CODE: number = 2011;

  public static readonly MIN_MONTHLY_BASIS: number = HistoryConstSalary2011.MIN_MONTHLY_WAGE;
  public static readonly MAX_ANNUALS_BASIS: number = 1781280;
  public static readonly LIM_MONTHLY_STATE: number = 0;
  public static readonly LIM_MONTHLY_DIS50: number = 5355;
  public static readonly FACTOR_COMPOUND: bigDecimal = new bigDecimal(13.5);
  public static readonly FACTOR_EMPLOYEE: bigDecimal = new bigDecimal(3);
  public static readonly MARGIN_INCOME_EMP: number = 2000;
  public static readonly MARGIN_INCOME_AGR: number = HistoryConstHealth2011.MARGIN_INCOME_EMP;
}
