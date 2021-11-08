import { IPropsSalary } from '../service_interfaces/IPropsSalary';
import { IProviderSalary } from '../providers/IProviderSalary';
import { PropsSalary } from '../props/PropsSalary';
import { ProviderFactory, IProviderFactory } from './ProviderFactory';
import { HistoryConstSalary2011 } from '../providers_period2011/HistoryConstSalary2011';
import { HistoryConstSalary2012 } from '../providers_period2012/HistoryConstSalary2012';
import { HistoryConstSalary2013 } from '../providers_period2013/HistoryConstSalary2013';
import { HistoryConstSalary2014 } from '../providers_period2014/HistoryConstSalary2014';
import { HistoryConstSalary2015 } from '../providers_period2015/HistoryConstSalary2015';
import { HistoryConstSalary2016 } from '../providers_period2016/HistoryConstSalary2016';
import { HistoryConstSalary2017 } from '../providers_period2017/HistoryConstSalary2017';
import { HistoryConstSalary2018 } from '../providers_period2018/HistoryConstSalary2018';
import { HistoryConstSalary2019 } from '../providers_period2019/HistoryConstSalary2019';
import { HistoryConstSalary2020 } from '../providers_period2020/HistoryConstSalary2020';
import { HistoryConstSalary2021 } from '../providers_period2021/HistoryConstSalary2021';
import { HistoryConstSalary2022 } from '../providers_period2022/HistoryConstSalary2022';
import { ProviderSalary2011 } from '../providers_period2011/ProviderSalary2011';
import { ProviderSalary2012 } from '../providers_period2012/ProviderSalary2012';
import { ProviderSalary2013 } from '../providers_period2013/ProviderSalary2013';
import { ProviderSalary2014 } from '../providers_period2014/ProviderSalary2014';
import { ProviderSalary2015 } from '../providers_period2015/ProviderSalary2015';
import { ProviderSalary2016 } from '../providers_period2016/ProviderSalary2016';
import { ProviderSalary2017 } from '../providers_period2017/ProviderSalary2017';
import { ProviderSalary2018 } from '../providers_period2018/ProviderSalary2018';
import { ProviderSalary2019 } from '../providers_period2019/ProviderSalary2019';
import { ProviderSalary2020 } from '../providers_period2020/ProviderSalary2020';
import { ProviderSalary2021 } from '../providers_period2021/ProviderSalary2021';
import { ProviderSalary2022 } from '../providers_period2022/ProviderSalary2022';

export interface IFactorySalary extends IProviderFactory<IProviderSalary, IPropsSalary> {}

export class FactorySalary extends ProviderFactory<IProviderSalary, IPropsSalary> {
  constructor() {
    super(new ProviderSalary2022(), PropsSalary.empty());
    this.BuildFactory();
  }
  BuildFactory(): boolean {
    this.Versions = new Map<number, IProviderSalary>();
    this.Versions.set(HistoryConstSalary2011.VERSION_CODE, new ProviderSalary2011());
    this.Versions.set(HistoryConstSalary2012.VERSION_CODE, new ProviderSalary2012());
    this.Versions.set(HistoryConstSalary2013.VERSION_CODE, new ProviderSalary2013());
    this.Versions.set(HistoryConstSalary2014.VERSION_CODE, new ProviderSalary2014());
    this.Versions.set(HistoryConstSalary2015.VERSION_CODE, new ProviderSalary2015());
    this.Versions.set(HistoryConstSalary2016.VERSION_CODE, new ProviderSalary2016());
    this.Versions.set(HistoryConstSalary2017.VERSION_CODE, new ProviderSalary2017());
    this.Versions.set(HistoryConstSalary2018.VERSION_CODE, new ProviderSalary2018());
    this.Versions.set(HistoryConstSalary2019.VERSION_CODE, new ProviderSalary2019());
    this.Versions.set(HistoryConstSalary2020.VERSION_CODE, new ProviderSalary2020());
    this.Versions.set(HistoryConstSalary2021.VERSION_CODE, new ProviderSalary2021());
    this.Versions.set(HistoryConstSalary2022.VERSION_CODE, new ProviderSalary2022());
    return true;
  }
}
