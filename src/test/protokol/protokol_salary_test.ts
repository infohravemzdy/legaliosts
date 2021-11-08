import bigDecimal = require('js-big-decimal');
import { FactorySalary } from '../../proj/factories/FactorySalary';
import { IPropsSalary } from '../../proj/service_interfaces/IPropsSalary';
import { PROTOKOL_TEST_FOLDER } from './protokol_base_test';
import { exportSalaryPropsDecFile, exportSalaryPropsIntFile } from './protokol_salary_base_test';

describe('Protokol Salary For Year 2011-2022', () => {
  class TestIntScenario {
    constructor(readonly title: string, readonly minYear: number, readonly maxYear: number) {}
  }
  const testExamples = [new TestIntScenario('2011-2022', 2011, 2022)];
  // 02_Salary_01_WorkingShiftWeek
  describe('WorkingShiftWeek', () => {
    testExamples.forEach((tt) => {
      const factory = new FactorySalary();
      exportSalaryPropsIntFile(
        PROTOKOL_TEST_FOLDER,
        `02_Salary_01_WorkingShiftWeek.txt`,
        tt.minYear,
        tt.maxYear,
        factory,
        (prop: IPropsSalary): number => {
          return prop.WorkingShiftWeek();
        },
      );
    });
  });
  // 02_Salary_02_WorkingShiftTime
  describe('WorkingShiftTime', () => {
    testExamples.forEach((tt) => {
      const factory = new FactorySalary();
      exportSalaryPropsIntFile(
        PROTOKOL_TEST_FOLDER,
        `02_Salary_02_WorkingShiftTime.txt`,
        tt.minYear,
        tt.maxYear,
        factory,
        (prop: IPropsSalary): number => {
          return prop.WorkingShiftTime();
        },
      );
    });
  });
  // 02_Salary_03_MinMonthlyWage
  describe('MinMonthlyWage', () => {
    testExamples.forEach((tt) => {
      const factory = new FactorySalary();
      exportSalaryPropsIntFile(
        PROTOKOL_TEST_FOLDER,
        `02_Salary_03_MinMonthlyWage.txt`,
        tt.minYear,
        tt.maxYear,
        factory,
        (prop: IPropsSalary): number => {
          return prop.MinMonthlyWage();
        },
      );
    });
  });
  // 02_Salary_04_MinHourlyWage
  describe('MinHourlyWage', () => {
    testExamples.forEach((tt) => {
      const factory = new FactorySalary();
      exportSalaryPropsIntFile(
        PROTOKOL_TEST_FOLDER,
        `02_Salary_04_MinHourlyWage.txt`,
        tt.minYear,
        tt.maxYear,
        factory,
        (prop: IPropsSalary): number => {
          return prop.MinHourlyWage();
        },
      );
    });
  });
});
