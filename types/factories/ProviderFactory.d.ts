import { IPeriod } from '../service_types/period';
import { IPropsProvider } from '../providers/ProviderBase';
import { IProps } from '../service_interfaces/IProps';
export interface IProviderFactory<B extends IPropsProvider<P>, P extends IProps> {
    GetProps(period: IPeriod): P;
}
export declare class ProviderFactory<B extends IPropsProvider<P>, P extends IProps> implements IProviderFactory<B, P> {
    Versions: Map<number, B>;
    DefaultProvider: B;
    EmptyPeriodProps: P;
    constructor(provider: B, props: P);
    GetProps(period: IPeriod): P;
    GetProvider(period: IPeriod, defProvider: B): B;
}
