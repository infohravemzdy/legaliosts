export class HistoryResultError extends Error {
  InnerResult: HistoryResultError;

  constructor(inner: HistoryResultError, errorText: string) {
    super(`ResultError for ${errorText}`);
    this.InnerResult = inner;
  }

  static CreateErrorWithInner(inner: HistoryResultError, errorText: string): HistoryResultError {
    return new HistoryResultError(inner, errorText);
  }
  static CreateError(errorText: string): HistoryResultError {
    return new HistoryResultError(null, errorText);
  }
  static CreateBundleNoneError(): HistoryResultError {
    return new HistoryResultError(null, "service hasn't returned bundle");
  }
  static CreateBundleNullError(): HistoryResultError {
    return new HistoryResultError(null, 'service returned null bundle');
  }
  static CreateBundleEmptyError(): HistoryResultError {
    return new HistoryResultError(null, 'service returned empty bundle');
  }
  static CreateBundleInvalidError(): HistoryResultError {
    return new HistoryResultError(null, 'service returned invalid bundle');
  }
  Description(): string {
    let errorBuilder = this.message;
    if (this.InnerResult != null) {
      errorBuilder += 'Inner error:\n';
      errorBuilder += this.InnerResult.Description();
    }
    return errorBuilder;
  }
}
