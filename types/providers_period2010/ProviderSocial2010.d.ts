import { IPeriod } from '../service_types/period';
import { ProviderBase } from '../providers/ProviderBase';
import { IProviderSocial } from '../providers/IProviderSocial';
import { IPropsSocial } from '../service_interfaces/IPropsSocial';
import bigDecimal = require('js-big-decimal');
export declare class ProviderSocial2010 extends ProviderBase implements IProviderSocial {
    constructor();
    GetProps(period: IPeriod): IPropsSocial;
    MaxAnnualsBasis(period: IPeriod): number;
    FactorEmployer(period: IPeriod): bigDecimal;
    FactorEmployerHigher(period: IPeriod): bigDecimal;
    FactorEmployee(period: IPeriod): bigDecimal;
    FactorEmployeeGarant(period: IPeriod): bigDecimal;
    FactorEmployeeReduce(period: IPeriod): bigDecimal;
    MarginIncomeEmp(period: IPeriod): number;
    MarginIncomeAgr(period: IPeriod): number;
}
