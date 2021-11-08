import { IPeriod } from '../service_types/period';
import { Result } from '@badrap/result';
import { BundleBuilder, IBundleBuilder } from '../factories/BundleBuilder';
import { IBundleProps } from '../service_interfaces/IBundleProps';
import { HistoryResultError } from '../service_errors/HistoryResultError';

export interface IServiceLegalios {
  GetBundle(period: IPeriod): Result<IBundleProps, HistoryResultError>;
}

export class ServiceLegalios implements IServiceLegalios {
  readonly Builder: IBundleBuilder;
  constructor() {
    this.Builder = new BundleBuilder();
  }
  GetBundle(period: IPeriod): Result<IBundleProps, HistoryResultError> {
    const resultBundle = this.Builder.GetBundle(period);
    if (resultBundle == null) {
      return Result.err(HistoryResultError.CreateBundleNullError());
    }
    if (resultBundle.PeriodProps().code === 0) {
      return Result.err(HistoryResultError.CreateBundleEmptyError());
    }
    if (resultBundle.PeriodProps().code < period.code) {
      return Result.err(HistoryResultError.CreateBundleInvalidError());
    }
    return Result.ok(resultBundle);
  }
}
