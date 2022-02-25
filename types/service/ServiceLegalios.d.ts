import { IPeriod } from '../service_types/period';
import { Result } from '@badrap/result';
import { IBundleBuilder } from '../factories/BundleBuilder';
import { IBundleProps } from '../service_interfaces/IBundleProps';
import { HistoryResultError } from '../service_errors/HistoryResultError';
export interface IServiceLegalios {
    GetBundle(period: IPeriod): Result<IBundleProps, HistoryResultError>;
}
export declare class ServiceLegalios implements IServiceLegalios {
    readonly Builder: IBundleBuilder;
    constructor();
    GetBundle(period: IPeriod): Result<IBundleProps, HistoryResultError>;
}
