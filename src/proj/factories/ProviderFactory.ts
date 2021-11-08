import { IPeriod } from '../service_types/period';
import { IPropsProvider } from '../providers/ProviderBase';
import { IProps } from '../service_interfaces/IProps';

export interface IProviderFactory<B extends IPropsProvider<P>, P extends IProps> {
  GetProps(period: IPeriod): P;
}

export class ProviderFactory<B extends IPropsProvider<P>, P extends IProps> implements IProviderFactory<B, P> {
  Versions: Map<number, B>;

  DefaultProvider: B;
  EmptyPeriodProps: P;

  constructor(provider: B, props: P) {
    this.DefaultProvider = provider;
    this.EmptyPeriodProps = props;
  }

  GetProps(period: IPeriod): P {
    const provider = this.GetProvider(period, this.DefaultProvider);
    if (provider == null) {
      return this.EmptyPeriodProps;
    }
    return provider.GetProps(period);
  }

  GetProvider(period: IPeriod, defProvider: B): B {
    const hasProvider = this.Versions.has(period.year());
    if (hasProvider === false) {
      if (period.year() > defProvider.Version().value) {
        return defProvider;
      }
      return null;
    }
    const provider = this.Versions.get(period.year());
    if (period.year() === provider.Version().value) {
      return provider;
    }
    return null;
  }
}
