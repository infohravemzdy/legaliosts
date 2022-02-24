import { VersionId } from '../service_types/versionid';
import { IProps } from '../service_interfaces/IProps';

export class PropsBase implements IProps {
  private static VERSION_ZERO: number = 0;

  readonly version: VersionId;

  constructor(versionId: VersionId) {
    this.version = versionId;
  }
  public Version(): VersionId {
    return this.version;
  }

  public isValid(): boolean { return this.version.value !== PropsBase.VERSION_ZERO; }
}
