import { HistoryConstSalary2018 } from './HistoryConstSalary2018';
import { HistoryConstTaxing2017, HistoryConstTaxing2017var07 } from '../providers_period2017/HistoryConstTaxing2017';
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
// FACTOR_SOLITARY                  Sazba daně na solidární zvýšení
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
// MARGIN_INCOME_OF_SOLITARY        Minimální výše příjmu pro solidární zvýšení daně
//
// MARGIN_INCOME_OF_WHT_AGR         hranice příjmu pro srážkovou daň pro zaměstnace v pracovním poměru (nepodepsal prohlášení)
//
// MARGIN_INCOME_OF_WHT_EMP         hranice příjmu pro srážkovou daň pro zaměstnace na dohodu (nepodepsal prohlášení)
export class HistoryConstTaxing2018 {
  public static readonly VERSION_CODE: number = 2018;

  public static readonly ALLOWANCE_PAYER: number = HistoryConstTaxing2017.ALLOWANCE_PAYER;
  public static readonly ALLOWANCE_DISAB_1ST: number = HistoryConstTaxing2017.ALLOWANCE_DISAB_1ST;
  public static readonly ALLOWANCE_DISAB_2ND: number = HistoryConstTaxing2017.ALLOWANCE_DISAB_2ND;
  public static readonly ALLOWANCE_DISAB_3RD: number = HistoryConstTaxing2017.ALLOWANCE_DISAB_3RD;
  public static readonly ALLOWANCE_STUDY: number = HistoryConstTaxing2017.ALLOWANCE_STUDY;
  public static readonly ALLOWANCE_CHILD_1ST: number = 1267;
  public static readonly ALLOWANCE_CHILD_2ND: number = HistoryConstTaxing2017var07.ALLOWANCE_CHILD_2ND;
  public static readonly ALLOWANCE_CHILD_3RD: number = HistoryConstTaxing2017var07.ALLOWANCE_CHILD_3RD;
  public static readonly FACTOR_ADVANCES: bigDecimal = HistoryConstTaxing2017.FACTOR_ADVANCES;
  public static readonly FACTOR_WITHHOLD: bigDecimal = HistoryConstTaxing2017.FACTOR_WITHHOLD;
  public static readonly FACTOR_SOLITARY: bigDecimal = HistoryConstTaxing2017.FACTOR_SOLITARY;
  public static readonly MIN_AMOUNT_OF_TAXBONUS: number = HistoryConstTaxing2017.MIN_AMOUNT_OF_TAXBONUS;
  public static readonly MAX_AMOUNT_OF_TAXBONUS: number = HistoryConstTaxing2017.MAX_AMOUNT_OF_TAXBONUS;
  public static readonly MARGIN_INCOME_OF_TAXBONUS: number = HistoryConstSalary2018.MIN_MONTHLY_WAGE / 2;
  public static readonly MARGIN_INCOME_OF_ROUNDING: number = HistoryConstTaxing2017.MARGIN_INCOME_OF_ROUNDING;
  public static readonly MARGIN_INCOME_OF_WITHHOLD: number = HistoryConstTaxing2017.MARGIN_INCOME_OF_WITHHOLD;
  public static readonly MARGIN_INCOME_OF_SOLITARY: number = 4 * 29979;
  public static readonly MARGIN_INCOME_OF_WHT_EMP: number = 2500;
  public static readonly MARGIN_INCOME_OF_WHT_AGR: number = HistoryConstTaxing2017.MARGIN_INCOME_OF_WHT_AGR;
}
