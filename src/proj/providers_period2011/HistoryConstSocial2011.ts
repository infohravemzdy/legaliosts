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
export class HistoryConstSocial2011 {
  public static readonly VERSION_CODE: number = 2011;

  public static readonly MAX_ANNUALS_BASIS: number = 1781280;
  public static readonly FACTOR_EMPLOYER: bigDecimal = new bigDecimal(25);
  public static readonly FACTOR_EMPLOYER_HIGHER: bigDecimal = new bigDecimal(26);
  public static readonly FACTOR_EMPLOYEE: bigDecimal = new bigDecimal(6.5);
  public static readonly FACTOR_EMPLOYEE_REDUCE: bigDecimal = new bigDecimal(0);
  public static readonly FACTOR_EMPLOYEE_GARANT: bigDecimal = new bigDecimal(0);
  public static readonly MARGIN_INCOME_EMP: number = 2000;
  public static readonly MARGIN_INCOME_AGR: number = HistoryConstSocial2011.MARGIN_INCOME_EMP;
}
