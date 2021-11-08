import { IPropsTaxing } from '../service_interfaces/IPropsTaxing';
import { IProviderTaxing } from '../providers/IProviderTaxing';
import { PropsTaxing } from '../props/PropsTaxing';
import { ProviderFactory, IProviderFactory } from './ProviderFactory';
import { HistoryConstTaxing2011 } from '../providers_period2011/HistoryConstTaxing2011';
import { HistoryConstTaxing2012 } from '../providers_period2012/HistoryConstTaxing2012';
import { HistoryConstTaxing2013 } from '../providers_period2013/HistoryConstTaxing2013';
import { HistoryConstTaxing2014 } from '../providers_period2014/HistoryConstTaxing2014';
import { HistoryConstTaxing2015 } from '../providers_period2015/HistoryConstTaxing2015';
import { HistoryConstTaxing2016 } from '../providers_period2016/HistoryConstTaxing2016';
import { HistoryConstTaxing2017 } from '../providers_period2017/HistoryConstTaxing2017';
import { HistoryConstTaxing2018 } from '../providers_period2018/HistoryConstTaxing2018';
import { HistoryConstTaxing2019 } from '../providers_period2019/HistoryConstTaxing2019';
import { HistoryConstTaxing2020 } from '../providers_period2020/HistoryConstTaxing2020';
import { HistoryConstTaxing2021 } from '../providers_period2021/HistoryConstTaxing2021';
import { HistoryConstTaxing2022 } from '../providers_period2022/HistoryConstTaxing2022';
import { ProviderTaxing2011 } from '../providers_period2011/ProviderTaxing2011';
import { ProviderTaxing2012 } from '../providers_period2012/ProviderTaxing2012';
import { ProviderTaxing2013 } from '../providers_period2013/ProviderTaxing2013';
import { ProviderTaxing2014 } from '../providers_period2014/ProviderTaxing2014';
import { ProviderTaxing2015 } from '../providers_period2015/ProviderTaxing2015';
import { ProviderTaxing2016 } from '../providers_period2016/ProviderTaxing2016';
import { ProviderTaxing2017 } from '../providers_period2017/ProviderTaxing2017';
import { ProviderTaxing2018 } from '../providers_period2018/ProviderTaxing2018';
import { ProviderTaxing2019 } from '../providers_period2019/ProviderTaxing2019';
import { ProviderTaxing2020 } from '../providers_period2020/ProviderTaxing2020';
import { ProviderTaxing2021 } from '../providers_period2021/ProviderTaxing2021';
import { ProviderTaxing2022 } from '../providers_period2022/ProviderTaxing2022';

export interface IFactoryTaxing extends IProviderFactory<IProviderTaxing, IPropsTaxing> {}

type VERSION = number;

export class FactoryTaxing extends ProviderFactory<IProviderTaxing, IPropsTaxing> {
  constructor() {
    super(new ProviderTaxing2022(), PropsTaxing.empty());
    this.BuildFactory();
  }
  BuildFactory(): boolean {
    this.Versions = new Map<VERSION, IProviderTaxing>();
    this.Versions.set(HistoryConstTaxing2011.VERSION_CODE, new ProviderTaxing2011());
    this.Versions.set(HistoryConstTaxing2012.VERSION_CODE, new ProviderTaxing2012());
    this.Versions.set(HistoryConstTaxing2013.VERSION_CODE, new ProviderTaxing2013());
    this.Versions.set(HistoryConstTaxing2014.VERSION_CODE, new ProviderTaxing2014());
    this.Versions.set(HistoryConstTaxing2015.VERSION_CODE, new ProviderTaxing2015());
    this.Versions.set(HistoryConstTaxing2016.VERSION_CODE, new ProviderTaxing2016());
    this.Versions.set(HistoryConstTaxing2017.VERSION_CODE, new ProviderTaxing2017());
    this.Versions.set(HistoryConstTaxing2018.VERSION_CODE, new ProviderTaxing2018());
    this.Versions.set(HistoryConstTaxing2019.VERSION_CODE, new ProviderTaxing2019());
    this.Versions.set(HistoryConstTaxing2020.VERSION_CODE, new ProviderTaxing2020());
    this.Versions.set(HistoryConstTaxing2021.VERSION_CODE, new ProviderTaxing2021());
    this.Versions.set(HistoryConstTaxing2022.VERSION_CODE, new ProviderTaxing2022());
    return true;
  }
}
