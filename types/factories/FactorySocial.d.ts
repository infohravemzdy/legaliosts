import { IPropsSocial } from '../service_interfaces/IPropsSocial';
import { IProviderSocial } from '../providers/IProviderSocial';
import { ProviderFactory, IProviderFactory } from './ProviderFactory';
export interface IFactorySocial extends IProviderFactory<IProviderSocial, IPropsSocial> {
}
export declare class FactorySocial extends ProviderFactory<IProviderSocial, IPropsSocial> {
    constructor();
    BuildFactory(): boolean;
}
