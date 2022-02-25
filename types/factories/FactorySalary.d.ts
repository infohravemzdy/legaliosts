import { IPropsSalary } from '../service_interfaces/IPropsSalary';
import { IProviderSalary } from '../providers/IProviderSalary';
import { ProviderFactory, IProviderFactory } from './ProviderFactory';
export interface IFactorySalary extends IProviderFactory<IProviderSalary, IPropsSalary> {
}
export declare class FactorySalary extends ProviderFactory<IProviderSalary, IPropsSalary> {
    constructor();
    BuildFactory(): boolean;
}
