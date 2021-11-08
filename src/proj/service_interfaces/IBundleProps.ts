import { IPeriod } from '../service_types/period';
import { IPropsSalary } from './IPropsSalary';
import { IPropsHealth } from './IPropsHealth';
import { IPropsSocial } from './IPropsSocial';
import { IPropsTaxing } from './IPropsTaxing';

export interface IBundleProps {
  PeriodProps(): IPeriod;
  PeriodYear(): number;
  PeriodMonth(): number;
  SalaryProps(): IPropsSalary;
  HealthProps(): IPropsHealth;
  SocialProps(): IPropsSocial;
  TaxingProps(): IPropsTaxing;
}
