import { IPropsHealth } from '../service_interfaces/IPropsHealth';
import { IProviderHealth } from '../providers/IProviderHealth';
import { PropsHealth } from '../props/PropsHealth';
import { ProviderFactory, IProviderFactory } from './ProviderFactory';
import { HistoryConstHealth2010 } from '../providers_period2010/HistoryConstHealth2010';
import { HistoryConstHealth2011 } from '../providers_period2011/HistoryConstHealth2011';
import { HistoryConstHealth2012 } from '../providers_period2012/HistoryConstHealth2012';
import { HistoryConstHealth2013 } from '../providers_period2013/HistoryConstHealth2013';
import { HistoryConstHealth2014 } from '../providers_period2014/HistoryConstHealth2014';
import { HistoryConstHealth2015 } from '../providers_period2015/HistoryConstHealth2015';
import { HistoryConstHealth2016 } from '../providers_period2016/HistoryConstHealth2016';
import { HistoryConstHealth2017 } from '../providers_period2017/HistoryConstHealth2017';
import { HistoryConstHealth2018 } from '../providers_period2018/HistoryConstHealth2018';
import { HistoryConstHealth2019 } from '../providers_period2019/HistoryConstHealth2019';
import { HistoryConstHealth2020 } from '../providers_period2020/HistoryConstHealth2020';
import { HistoryConstHealth2021 } from '../providers_period2021/HistoryConstHealth2021';
import { HistoryConstHealth2022 } from '../providers_period2022/HistoryConstHealth2022';
import { ProviderHealth2010 } from '../providers_period2010/ProviderHealth2010';
import { ProviderHealth2011 } from '../providers_period2011/ProviderHealth2011';
import { ProviderHealth2012 } from '../providers_period2012/ProviderHealth2012';
import { ProviderHealth2013 } from '../providers_period2013/ProviderHealth2013';
import { ProviderHealth2014 } from '../providers_period2014/ProviderHealth2014';
import { ProviderHealth2015 } from '../providers_period2015/ProviderHealth2015';
import { ProviderHealth2016 } from '../providers_period2016/ProviderHealth2016';
import { ProviderHealth2017 } from '../providers_period2017/ProviderHealth2017';
import { ProviderHealth2018 } from '../providers_period2018/ProviderHealth2018';
import { ProviderHealth2019 } from '../providers_period2019/ProviderHealth2019';
import { ProviderHealth2020 } from '../providers_period2020/ProviderHealth2020';
import { ProviderHealth2021 } from '../providers_period2021/ProviderHealth2021';
import { ProviderHealth2022 } from '../providers_period2022/ProviderHealth2022';

export interface IFactoryHealth extends IProviderFactory<IProviderHealth, IPropsHealth> {}

export class FactoryHealth extends ProviderFactory<IProviderHealth, IPropsHealth> {
  constructor() {
    super(new ProviderHealth2022(), PropsHealth.empty());
    this.BuildFactory();
  }
  BuildFactory(): boolean {
    this.Versions = new Map<number, IProviderHealth>();
    this.Versions.set(HistoryConstHealth2010.VERSION_CODE, new ProviderHealth2010());
    this.Versions.set(HistoryConstHealth2011.VERSION_CODE, new ProviderHealth2011());
    this.Versions.set(HistoryConstHealth2012.VERSION_CODE, new ProviderHealth2012());
    this.Versions.set(HistoryConstHealth2013.VERSION_CODE, new ProviderHealth2013());
    this.Versions.set(HistoryConstHealth2014.VERSION_CODE, new ProviderHealth2014());
    this.Versions.set(HistoryConstHealth2015.VERSION_CODE, new ProviderHealth2015());
    this.Versions.set(HistoryConstHealth2016.VERSION_CODE, new ProviderHealth2016());
    this.Versions.set(HistoryConstHealth2017.VERSION_CODE, new ProviderHealth2017());
    this.Versions.set(HistoryConstHealth2018.VERSION_CODE, new ProviderHealth2018());
    this.Versions.set(HistoryConstHealth2019.VERSION_CODE, new ProviderHealth2019());
    this.Versions.set(HistoryConstHealth2020.VERSION_CODE, new ProviderHealth2020());
    this.Versions.set(HistoryConstHealth2021.VERSION_CODE, new ProviderHealth2021());
    this.Versions.set(HistoryConstHealth2022.VERSION_CODE, new ProviderHealth2022());
    return true;
  }
}
