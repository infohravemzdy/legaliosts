import { IPeriod } from '../service_types/period';
import { IPropsProvider } from './ProviderBase';
import { IPropsSalary } from '../service_interfaces/IPropsSalary';
export interface IProviderSalary extends IPropsProvider<IPropsSalary> {
    WorkingShiftWeek(period: IPeriod): number;
    WorkingShiftTime(period: IPeriod): number;
    MinMonthlyWage(period: IPeriod): number;
    MinHourlyWage(period: IPeriod): number;
}
