import { IPeriod } from '../service_types/period';
import { IProps } from '../service_interfaces/IProps';
import { IBundleProps } from '../service_interfaces/IBundleProps';
import { IPropsSalary } from '../service_interfaces/IPropsSalary';
import { IPropsHealth } from '../service_interfaces/IPropsHealth';
import { IPropsSocial } from '../service_interfaces/IPropsSocial';
import { IPropsTaxing } from '../service_interfaces/IPropsTaxing';
import { BundleProps } from './BundleProps';
import { IProviderSalary } from '../providers/IProviderSalary';
import { IProviderHealth } from '../providers/IProviderHealth';
import { IProviderSocial } from '../providers/IProviderSocial';
import { IProviderTaxing } from '../providers/IProviderTaxing';
import { IProviderFactory } from './ProviderFactory';
import { FactorySalary } from './FactorySalary';
import { FactoryHealth } from './FactoryHealth';
import { FactorySocial } from './FactorySocial';
import { FactoryTaxing } from './FactoryTaxing';

export interface IBundleBuilder {
  GetBundle(period: IPeriod): IBundleProps;
}

export class BundleBuilder implements IBundleBuilder {
  static MIN_VERSION = 2011;

  readonly SalaryFactory: IProviderFactory<IProviderSalary, IPropsSalary>;
  readonly HealthFactory: IProviderFactory<IProviderHealth, IPropsHealth>;
  readonly SocialFactory: IProviderFactory<IProviderSocial, IPropsSocial>;
  readonly TaxingFactory: IProviderFactory<IProviderTaxing, IPropsTaxing>;

  constructor() {
    this.SalaryFactory = new FactorySalary();
    this.HealthFactory = new FactoryHealth();
    this.SocialFactory = new FactorySocial();
    this.TaxingFactory = new FactoryTaxing();
  }

  private static IsNullOrEmpty(props: IProps): boolean {
    return props == null || props.Version().value < this.MIN_VERSION;
  }

  private static IsValidBundle(salary: IProps, health: IProps, social: IProps, taxing: IProps): boolean {
    if (BundleBuilder.IsNullOrEmpty(salary)) {
      return false;
    }
    if (BundleBuilder.IsNullOrEmpty(health)) {
      return false;
    }
    if (BundleBuilder.IsNullOrEmpty(social)) {
      return false;
    }
    if (BundleBuilder.IsNullOrEmpty(taxing)) {
      return false;
    }
    return true;
  }

  GetBundle(period: IPeriod): IBundleProps {
    const salary = this.GetSalaryProps(period);
    const health = this.GetHealthProps(period);
    const social = this.GetSocialProps(period);
    const taxing = this.GetTaxingProps(period);

    if (BundleBuilder.IsValidBundle(salary, health, social, taxing)) {
      return new BundleProps(period, salary, health, social, taxing);
    }
    return null;
  }

  private GetSalaryProps(period: IPeriod): IPropsSalary {
    return this.SalaryFactory.GetProps(period);
  }
  private GetHealthProps(period: IPeriod): IPropsHealth {
    return this.HealthFactory.GetProps(period);
  }
  private GetSocialProps(period: IPeriod): IPropsSocial {
    return this.SocialFactory.GetProps(period);
  }
  private GetTaxingProps(period: IPeriod): IPropsTaxing {
    return this.TaxingFactory.GetProps(period);
  }
}
