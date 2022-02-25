import { IPeriod } from './period';
import { IBundleProps } from '../service_interfaces/IBundleProps';
import { IPropsSalary } from '../service_interfaces/IPropsSalary';
import { IPropsHealth } from '../service_interfaces/IPropsHealth';
import { IPropsSocial } from '../service_interfaces/IPropsSocial';
import { IPropsTaxing } from '../service_interfaces/IPropsTaxing';
export declare class BundleProps implements IBundleProps {
    readonly periodProps: IPeriod;
    readonly salaryProps: IPropsSalary;
    readonly healthProps: IPropsHealth;
    readonly socialProps: IPropsSocial;
    readonly taxingProps: IPropsTaxing;
    constructor(periodProps: IPeriod, salaryProps: IPropsSalary, healthProps: IPropsHealth, socialProps: IPropsSocial, taxingProps: IPropsTaxing);
    PeriodProps(): IPeriod;
    PeriodYear(): number;
    PeriodMonth(): number;
    SalaryProps(): IPropsSalary;
    HealthProps(): IPropsHealth;
    SocialProps(): IPropsSocial;
    TaxingProps(): IPropsTaxing;
    static empty(period: IPeriod): IBundleProps;
}
