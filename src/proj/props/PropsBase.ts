import { VersionId } from '../service_types/versionid';
import { IProps } from '../service_interfaces/IProps';
import { IParticyResult } from '../service_interfaces/IParticyResult';

export class PropsBase implements IProps {
  private static VERSION_ZERO: number = 0;

  readonly version: VersionId;

  constructor(versionId: VersionId) {
    this.version = versionId;
  }
  public Version(): VersionId {
    return this.version;
  }

  public isValid(): boolean { return this.version.value !== PropsBase.VERSION_ZERO; }

  public maximResultCut<T extends IParticyResult>(particyList: Iterable<T>, incomeList: Iterable<T>, annuityBasis: number, annualyMaxim: number): [number, number, Iterable<T>] {
    const annualsBasis = Math.max(0, annualyMaxim - annuityBasis);
    const resultInit: [number, number, Iterable<T>] = [annualyMaxim, annualsBasis, particyList];

    const resultList = Array.from<T>(incomeList).reduce<[number, number, Iterable<T>]>((agr, x) => {
      let cutAnnualsBasis: number = 0;
      const rawAnnualsBasis: number = x.resultBasis();
      let remAnnualsBasis: number = agr[1];

      if (x.particyCode() !== 0) {
        cutAnnualsBasis = rawAnnualsBasis;
        if (agr[0] > 0) {
          const ovrAnnualsBasis = Math.max(0, rawAnnualsBasis - agr[1]);
          cutAnnualsBasis = (rawAnnualsBasis - ovrAnnualsBasis)
        }
        remAnnualsBasis = Math.max(0, (agr[1] - cutAnnualsBasis));
      }

      x.setResultValue(Math.max(0, cutAnnualsBasis));
      const result: Iterable<T> = Array.from(agr[2]).concat(x);
      return [agr[0], remAnnualsBasis, result];
    }, resultInit);

    return resultList;
  }
}
