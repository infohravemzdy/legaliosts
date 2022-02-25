import { IPeriod } from '../service_types/period';
import { ProviderBase } from '../providers/ProviderBase';
import { IProviderSalary } from '../providers/IProviderSalary';
import { IPropsSalary } from '../service_interfaces/IPropsSalary';
export declare class ProviderSalary2012 extends ProviderBase implements IProviderSalary {
    constructor();
    GetProps(period: IPeriod): IPropsSalary;
    WorkingShiftWeek(period: IPeriod): number;
    WorkingShiftTime(period: IPeriod): number;
    MinMonthlyWage(period: IPeriod): number;
    MinHourlyWage(period: IPeriod): number;
}
