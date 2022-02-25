import { IPropsTaxing } from '../service_interfaces/IPropsTaxing';
import { IProviderTaxing } from '../providers/IProviderTaxing';
import { ProviderFactory, IProviderFactory } from './ProviderFactory';
export interface IFactoryTaxing extends IProviderFactory<IProviderTaxing, IPropsTaxing> {
}
export declare class FactoryTaxing extends ProviderFactory<IProviderTaxing, IPropsTaxing> {
    constructor();
    BuildFactory(): boolean;
}
