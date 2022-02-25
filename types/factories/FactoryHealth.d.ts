import { IPropsHealth } from '../service_interfaces/IPropsHealth';
import { IProviderHealth } from '../providers/IProviderHealth';
import { ProviderFactory, IProviderFactory } from './ProviderFactory';
export interface IFactoryHealth extends IProviderFactory<IProviderHealth, IPropsHealth> {
}
export declare class FactoryHealth extends ProviderFactory<IProviderHealth, IPropsHealth> {
    constructor();
    BuildFactory(): boolean;
}
