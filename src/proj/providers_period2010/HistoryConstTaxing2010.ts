import { HistoryConstSalary2010 } from './HistoryConstSalary2010';
import bigDecimal = require('js-big-decimal');

// ALLOWANCE_PAYER                  Částka slevy na poplatníka
//
// ALLOWANCE_DISAB_1ST              Částka slevy na invaliditu 1.stupně poplatníka
//
// ALLOWANCE_DISAB_2ND              Částka slevy na invaliditu 2.stupně poplatníka
//
// ALLOWANCE_DISAB_3RD              Částka slevy na invaliditu 3.stupně poplatníka
//
// ALLOWANCE_STUDY                  Částka slevy na poplatníka studenta
//
// ALLOWANCE_CHILD_1ST              Částka slevy na dítě 1.pořadí
//
// ALLOWANCE_CHILD_2ND              Částka slevy na dítě 2.pořadí
//
// ALLOWANCE_CHILD_3RD              Částka slevy na dítě 3.pořadí
//
// FACTOR_ADVANCES                  Sazba daně na zálohový příjem
//
// FACTOR_WITHHOLD                  Sazba daně na srážkový příjem
//
// FACTOR_SOLIDARY                  Sazba daně na solidární zvýšení
//
// FACTOR_TAXRATE2                  Sazba daně pro druhé pásmo daně
//
// MIN_AMOUNT_OF_TAXBONUS           Minimální částka pro daňový bonus
//
// MAX_AMOUNT_OF_TAXBONUS           Maximální částka pro daňový bonus
//
// MARGIN_INCOME_OF_TAXBONUS        Minimální výše příjmu pro nároku na daňový bonus
//
// MARGIN_INCOME_OF_ROUNDING        Maximální výše příjmu pro zaokrouhlování
//
// MARGIN_INCOME_OF_WITHHOLD        Maximální výše příjmu pro srážkový příjem
//
// MARGIN_INCOME_OF_SOLIDARY        Minimální výše příjmu pro solidární zvýšení daně
//
// MARGIN_INCOME_OF_TAXRATE2        Minimální výše příjmu pro druhé pásmo daně
//
// MARGIN_INCOME_OF_WHT_AGR         hranice příjmu pro srážkovou daň pro zaměstnace v pracovním poměru (nepodepsal prohlášení)
//
// MARGIN_INCOME_OF_WHT_EMP         hranice příjmu pro srážkovou daň pro zaměstnace na dohodu (nepodepsal prohlášení)

export class HistoryConstTaxing2010 {
  public static readonly VERSION_CODE: number = 2010;

  public static readonly ALLOWANCE_PAYER: number = 1970;
  public static readonly ALLOWANCE_DISAB_1ST: number = 210;
  public static readonly ALLOWANCE_DISAB_2ND: number = 420;
  public static readonly ALLOWANCE_DISAB_3RD: number = 1345;
  public static readonly ALLOWANCE_STUDY: number = 335;
  public static readonly ALLOWANCE_CHILD_1ST: number = 967;
  public static readonly ALLOWANCE_CHILD_2ND: number = 967;
  public static readonly ALLOWANCE_CHILD_3RD: number = 967;
  public static readonly FACTOR_ADVANCES: bigDecimal = new bigDecimal(15);
  public static readonly FACTOR_WITHHOLD: bigDecimal = new bigDecimal(15);
  public static readonly FACTOR_SOLIDARY: bigDecimal = new bigDecimal(0);
  public static readonly FACTOR_TAXRATE2: bigDecimal = new bigDecimal(0);
  public static readonly MIN_AMOUNT_OF_TAXBONUS: number = 50;
  public static readonly MAX_AMOUNT_OF_TAXBONUS: number = 4350;
  public static readonly MARGIN_INCOME_OF_TAXBONUS: number = HistoryConstSalary2010.MIN_MONTHLY_WAGE / 2;
  public static readonly MARGIN_INCOME_OF_ROUNDING: number = 100;
  public static readonly MARGIN_INCOME_OF_WITHHOLD: number = 5000;
  public static readonly MARGIN_INCOME_OF_SOLIDARY: number = 0;
  public static readonly MARGIN_INCOME_OF_TAXRATE2: number = 0;
  public static readonly MARGIN_INCOME_OF_WHT_EMP: number = 0;
  public static readonly MARGIN_INCOME_OF_WHT_AGR: number = 0;
}
