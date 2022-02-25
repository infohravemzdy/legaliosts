export class VersionId {
  public static VERSION_ZERO: number = 0;

  readonly value: number;

  constructor(id: number) {
    this.value = id;
  }
  public static new(): VersionId {
    return new VersionId(VersionId.VERSION_ZERO);
  }
  public static get(id: number): VersionId {
    return new VersionId(id);
  }
}
