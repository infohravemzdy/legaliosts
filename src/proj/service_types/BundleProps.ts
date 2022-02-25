import { IPeriod } from './period';
import { IBundleProps } from '../service_interfaces/IBundleProps';
import { IPropsSalary } from '../service_interfaces/IPropsSalary';
import { IPropsHealth } from '../service_interfaces/IPropsHealth';
import { IPropsSocial } from '../service_interfaces/IPropsSocial';
import { IPropsTaxing } from '../service_interfaces/IPropsTaxing';
import { PropsSalary } from '../props/PropsSalary';
import { PropsHealth } from '../props/PropsHealth';
import { PropsSocial } from '../props/PropsSocial';
import { PropsTaxing } from '../props/PropsTaxing';

export class BundleProps implements IBundleProps {
  constructor(
    readonly periodProps: IPeriod,
    readonly salaryProps: IPropsSalary,
    readonly healthProps: IPropsHealth,
    readonly socialProps: IPropsSocial,
    readonly taxingProps: IPropsTaxing,
  ) {}

  PeriodProps(): IPeriod {
    return this.periodProps;
  }

  PeriodYear(): number {
    return this.periodProps.year();
  }

  PeriodMonth(): number {
    return this.periodProps.month();
  }

  SalaryProps(): IPropsSalary {
    return this.salaryProps;
  }

  HealthProps(): IPropsHealth {
    return this.healthProps;
  }

  SocialProps(): IPropsSocial {
    return this.socialProps;
  }

  TaxingProps(): IPropsTaxing {
    return this.taxingProps;
  }

  public static empty(period: IPeriod): IBundleProps {
    return new BundleProps(period, PropsSalary.empty(), PropsHealth.empty(), PropsSocial.empty(), PropsTaxing.empty());
  }
}
