import { HistoryConstSocial2015 } from '../providers_period2015/HistoryConstSocial2015';
import bigDecimal = require('js-big-decimal');

// MAX_ANNUALS_BASIS            Maximální roční vyměřovací základ na jednoho pracovníka (tzv.strop)
//
// FACTOR_EMPLOYER              Sazba - standardní sociálního pojištění - zaměstnavatele
//
// FACTOR_EMPLOYER_HIGHER       Sazba - vyší sociálního pojištění - zaměstnavatele
//
// FACTOR_EMPLOYEE              Sazba sociálního pojištění - zaměstnance
//
// FACTOR_EMPLOYEE_REDUCE       Snížení sazby sociálního pojištění - zaměstnance - s důchodovým spořením
//
// FACTOR_EMPLOYEE_GARANT       Sazba důchodového spoření - zaměstnance - s důchodovým spořením
//
// MARGIN_INCOME_EMP            hranice příjmu pro vznik účasti na pojištění pro zaměstnace v pracovním poměru
//
// MARGIN_INCOME_AGR            hranice příjmu pro vznik účasti na pojištění pro zaměstnace na dohodu
export class HistoryConstSocial2016 {
  public static readonly VERSION_CODE: number = 2016;

  public static readonly MAX_ANNUALS_BASIS: number = 1296288;
  public static readonly FACTOR_EMPLOYER: bigDecimal = HistoryConstSocial2015.FACTOR_EMPLOYER;
  public static readonly FACTOR_EMPLOYER_HIGHER: bigDecimal = HistoryConstSocial2015.FACTOR_EMPLOYER_HIGHER;
  public static readonly FACTOR_EMPLOYEE: bigDecimal = HistoryConstSocial2015.FACTOR_EMPLOYEE;
  public static readonly FACTOR_EMPLOYEE_REDUCE: bigDecimal = new bigDecimal(0);
  public static readonly FACTOR_EMPLOYEE_GARANT: bigDecimal = new bigDecimal(0);
  public static readonly MARGIN_INCOME_EMP: number = HistoryConstSocial2015.MARGIN_INCOME_EMP;
  public static readonly MARGIN_INCOME_AGR: number = HistoryConstSocial2015.MARGIN_INCOME_AGR;
}
