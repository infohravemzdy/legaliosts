import { IPeriod } from '../service_types/period';
import { ProviderBase } from '../providers/ProviderBase';
import { IProviderHealth } from '../providers/IProviderHealth';
import { IPropsHealth } from '../service_interfaces/IPropsHealth';
import bigDecimal = require('js-big-decimal');
export declare class ProviderHealth2012 extends ProviderBase implements IProviderHealth {
    constructor();
    GetProps(period: IPeriod): IPropsHealth;
    MinMonthlyBasis(period: IPeriod): number;
    MaxAnnualsBasis(period: IPeriod): number;
    LimMonthlyState(period: IPeriod): number;
    LimMonthlyDis50(period: IPeriod): number;
    FactorCompound(period: IPeriod): bigDecimal;
    FactorEmployee(period: IPeriod): bigDecimal;
    MarginIncomeEmp(period: IPeriod): number;
    MarginIncomeAgr(period: IPeriod): number;
}
