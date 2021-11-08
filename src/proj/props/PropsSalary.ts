import { VersionId } from '../service_types/versionid';
import { PropsBase } from './PropsBase';
import { IPropsSalary } from '../service_interfaces/IPropsSalary';

export class PropsSalary extends PropsBase implements IPropsSalary {
  constructor(
    version: VersionId,
    workingShiftWeek: number,
    workingShiftTime: number,
    minMonthlyWage: number,
    minHourlyWage: number,
  ) {
    super(version);
    this.workingShiftWeek = workingShiftWeek;
    this.workingShiftTime = workingShiftTime;
    this.minMonthlyWage = minMonthlyWage;
    this.minHourlyWage = minHourlyWage;
  }
  workingShiftWeek: number;
  workingShiftTime: number;
  minMonthlyWage: number;
  minHourlyWage: number;

  WorkingShiftWeek(): number {
    return this.workingShiftWeek;
  }

  WorkingShiftTime(): number {
    return this.workingShiftTime;
  }

  MinMonthlyWage(): number {
    return this.minMonthlyWage;
  }

  MinHourlyWage(): number {
    return this.minHourlyWage;
  }

  public static empty(): IPropsSalary {
    return new PropsSalary(VersionId.new(), 0, 0, 0, 0);
  }
}
