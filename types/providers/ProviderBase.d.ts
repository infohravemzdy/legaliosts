import { VersionId } from '../service_types/versionid';
import { IPeriod } from '../service_types/period';
import { IProps } from '../service_interfaces/IProps';
export interface IPropsProvider<P extends IProps> {
    GetProps(period: IPeriod): P;
    Version(): VersionId;
}
export declare class ProviderBase {
    readonly version: VersionId;
    constructor(versionId: VersionId);
    Version(): VersionId;
    protected IsPeriodGreaterOrEqualThan(period: IPeriod, yearFrom: number, monthFrom: number): boolean;
}
