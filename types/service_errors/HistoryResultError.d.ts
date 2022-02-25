export declare class HistoryResultError extends Error {
    InnerResult: HistoryResultError;
    constructor(inner: HistoryResultError, errorText: string);
    static CreateErrorWithInner(inner: HistoryResultError, errorText: string): HistoryResultError;
    static CreateError(errorText: string): HistoryResultError;
    static CreateBundleNoneError(): HistoryResultError;
    static CreateBundleNullError(): HistoryResultError;
    static CreateBundleEmptyError(): HistoryResultError;
    static CreateBundleInvalidError(): HistoryResultError;
    Description(): string;
}
