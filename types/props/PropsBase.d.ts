import { VersionId } from '../service_types/versionid';
import { IProps } from '../service_interfaces/IProps';
export declare class PropsBase implements IProps {
    private static VERSION_ZERO;
    readonly version: VersionId;
    constructor(versionId: VersionId);
    Version(): VersionId;
    isValid(): boolean;
}
