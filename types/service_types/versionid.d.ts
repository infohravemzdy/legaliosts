export declare class VersionId {
    static VERSION_ZERO: number;
    readonly value: number;
    constructor(id: number);
    static new(): VersionId;
    static get(id: number): VersionId;
}
