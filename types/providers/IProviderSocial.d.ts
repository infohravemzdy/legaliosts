import { IPeriod } from '../service_types/period';
import { IPropsProvider } from './ProviderBase';
import { IPropsSocial } from '../service_interfaces/IPropsSocial';
import bigDecimal = require('js-big-decimal');
export interface IProviderSocial extends IPropsProvider<IPropsSocial> {
    MaxAnnualsBasis(period: IPeriod): number;
    FactorEmployer(period: IPeriod): bigDecimal;
    FactorEmployerHigher(period: IPeriod): bigDecimal;
    FactorEmployee(period: IPeriod): bigDecimal;
    FactorEmployeeGarant(period: IPeriod): bigDecimal;
    FactorEmployeeReduce(period: IPeriod): bigDecimal;
    MarginIncomeEmp(period: IPeriod): number;
    MarginIncomeAgr(period: IPeriod): number;
}
