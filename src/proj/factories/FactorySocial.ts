import { IPropsSocial } from '../service_interfaces/IPropsSocial';
import { IProviderSocial } from '../providers/IProviderSocial';
import { PropsSocial } from '../props/PropsSocial';
import { ProviderFactory, IProviderFactory } from './ProviderFactory';
import { HistoryConstSocial2011 } from '../providers_period2011/HistoryConstSocial2011';
import { HistoryConstSocial2012 } from '../providers_period2012/HistoryConstSocial2012';
import { HistoryConstSocial2013 } from '../providers_period2013/HistoryConstSocial2013';
import { HistoryConstSocial2014 } from '../providers_period2014/HistoryConstSocial2014';
import { HistoryConstSocial2015 } from '../providers_period2015/HistoryConstSocial2015';
import { HistoryConstSocial2016 } from '../providers_period2016/HistoryConstSocial2016';
import { HistoryConstSocial2017 } from '../providers_period2017/HistoryConstSocial2017';
import { HistoryConstSocial2018 } from '../providers_period2018/HistoryConstSocial2018';
import { HistoryConstSocial2019 } from '../providers_period2019/HistoryConstSocial2019';
import { HistoryConstSocial2020 } from '../providers_period2020/HistoryConstSocial2020';
import { HistoryConstSocial2021 } from '../providers_period2021/HistoryConstSocial2021';
import { HistoryConstSocial2022 } from '../providers_period2022/HistoryConstSocial2022';
import { ProviderSocial2011 } from '../providers_period2011/ProviderSocial2011';
import { ProviderSocial2012 } from '../providers_period2012/ProviderSocial2012';
import { ProviderSocial2013 } from '../providers_period2013/ProviderSocial2013';
import { ProviderSocial2014 } from '../providers_period2014/ProviderSocial2014';
import { ProviderSocial2015 } from '../providers_period2015/ProviderSocial2015';
import { ProviderSocial2016 } from '../providers_period2016/ProviderSocial2016';
import { ProviderSocial2017 } from '../providers_period2017/ProviderSocial2017';
import { ProviderSocial2018 } from '../providers_period2018/ProviderSocial2018';
import { ProviderSocial2019 } from '../providers_period2019/ProviderSocial2019';
import { ProviderSocial2020 } from '../providers_period2020/ProviderSocial2020';
import { ProviderSocial2021 } from '../providers_period2021/ProviderSocial2021';
import { ProviderSocial2022 } from '../providers_period2022/ProviderSocial2022';

export interface IFactorySocial extends IProviderFactory<IProviderSocial, IPropsSocial> {}

export class FactorySocial extends ProviderFactory<IProviderSocial, IPropsSocial> {
  constructor() {
    super(new ProviderSocial2022(), PropsSocial.empty());
    this.BuildFactory();
  }
  BuildFactory(): boolean {
    this.Versions = new Map<number, IProviderSocial>();
    this.Versions.set(HistoryConstSocial2011.VERSION_CODE, new ProviderSocial2011());
    this.Versions.set(HistoryConstSocial2012.VERSION_CODE, new ProviderSocial2012());
    this.Versions.set(HistoryConstSocial2013.VERSION_CODE, new ProviderSocial2013());
    this.Versions.set(HistoryConstSocial2014.VERSION_CODE, new ProviderSocial2014());
    this.Versions.set(HistoryConstSocial2015.VERSION_CODE, new ProviderSocial2015());
    this.Versions.set(HistoryConstSocial2016.VERSION_CODE, new ProviderSocial2016());
    this.Versions.set(HistoryConstSocial2017.VERSION_CODE, new ProviderSocial2017());
    this.Versions.set(HistoryConstSocial2018.VERSION_CODE, new ProviderSocial2018());
    this.Versions.set(HistoryConstSocial2019.VERSION_CODE, new ProviderSocial2019());
    this.Versions.set(HistoryConstSocial2020.VERSION_CODE, new ProviderSocial2020());
    this.Versions.set(HistoryConstSocial2021.VERSION_CODE, new ProviderSocial2021());
    this.Versions.set(HistoryConstSocial2022.VERSION_CODE, new ProviderSocial2022());
    return true;
  }
}
