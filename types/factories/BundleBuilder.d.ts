import { IPeriod } from '../service_types/period';
import { IBundleProps } from '../service_interfaces/IBundleProps';
import { IPropsSalary } from '../service_interfaces/IPropsSalary';
import { IPropsHealth } from '../service_interfaces/IPropsHealth';
import { IPropsSocial } from '../service_interfaces/IPropsSocial';
import { IPropsTaxing } from '../service_interfaces/IPropsTaxing';
import { IProviderSalary } from '../providers/IProviderSalary';
import { IProviderHealth } from '../providers/IProviderHealth';
import { IProviderSocial } from '../providers/IProviderSocial';
import { IProviderTaxing } from '../providers/IProviderTaxing';
import { IProviderFactory } from './ProviderFactory';
export interface IBundleBuilder {
    GetBundle(period: IPeriod): IBundleProps;
}
export declare class BundleBuilder implements IBundleBuilder {
    static MIN_VERSION: number;
    readonly SalaryFactory: IProviderFactory<IProviderSalary, IPropsSalary>;
    readonly HealthFactory: IProviderFactory<IProviderHealth, IPropsHealth>;
    readonly SocialFactory: IProviderFactory<IProviderSocial, IPropsSocial>;
    readonly TaxingFactory: IProviderFactory<IProviderTaxing, IPropsTaxing>;
    constructor();
    private static IsNullOrEmpty;
    private static IsValidBundle;
    GetBundle(period: IPeriod): IBundleProps;
    private GetSalaryProps;
    private GetHealthProps;
    private GetSocialProps;
    private GetTaxingProps;
}
