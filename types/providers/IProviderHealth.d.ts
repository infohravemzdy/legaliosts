import { IPeriod } from '../service_types/period';
import { IPropsProvider } from './ProviderBase';
import { IPropsHealth } from '../service_interfaces/IPropsHealth';
import bigDecimal = require('js-big-decimal');
export interface IProviderHealth extends IPropsProvider<IPropsHealth> {
    MinMonthlyBasis(period: IPeriod): number;
    MaxAnnualsBasis(period: IPeriod): number;
    LimMonthlyState(period: IPeriod): number;
    LimMonthlyDis50(period: IPeriod): number;
    FactorCompound(period: IPeriod): bigDecimal;
    FactorEmployee(period: IPeriod): bigDecimal;
    MarginIncomeEmp(period: IPeriod): number;
    MarginIncomeAgr(period: IPeriod): number;
}
