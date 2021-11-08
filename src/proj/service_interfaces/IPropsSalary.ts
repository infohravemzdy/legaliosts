import { IProps } from './IProps';

export interface IPropsSalary extends IProps {
  WorkingShiftWeek(): number;
  WorkingShiftTime(): number;
  MinMonthlyWage(): number;
  MinHourlyWage(): number;
}
