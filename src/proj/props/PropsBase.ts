import { VersionId } from '../service_types/versionid';
import { IProps } from '../service_interfaces/IProps';

export class PropsBase implements IProps {
  readonly version: VersionId;

  constructor(versionId: VersionId) {
    this.version = versionId;
  }
  public Version(): VersionId {
    return this.version;
  }
}
