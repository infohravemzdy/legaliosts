import bigDecimal = require('js-big-decimal');
import { FactoryHealth } from '../../proj/factories/FactoryHealth';
import { IPropsHealth } from '../../proj/service_interfaces/IPropsHealth';
import { PROTOKOL_TEST_FOLDER } from './protokol_base_test';
import { exportHealthPropsDecFile, exportHealthPropsIntFile } from './protokol_health_base_test';
import { TestYearScenario } from '../test_structs';

describe('Protokol Health For Year 2010-2022', () => {
  const testExamples = [new TestYearScenario('2010-2022', 2010, 2022)];
  // 01_Health_01_MinMonthlyBasis
  describe('MinMonthlyBasis', () => {
    testExamples.forEach((tt) => {
      const factory = new FactoryHealth();
      exportHealthPropsIntFile(
        PROTOKOL_TEST_FOLDER,
        `01_Health_01_MinMonthlyBasis.txt`,
        tt.minYear,
        tt.maxYear,
        factory,
        (prop: IPropsHealth): number => {
          return prop.MinMonthlyBasis();
        },
      );
    });
  });
  // 01_Health_02_MaxAnnualsBasis
  describe('MaxAnnualsBasis', () => {
    testExamples.forEach((tt) => {
      const factory = new FactoryHealth();
      exportHealthPropsIntFile(
        PROTOKOL_TEST_FOLDER,
        `01_Health_02_MaxAnnualsBasis.txt`,
        tt.minYear,
        tt.maxYear,
        factory,
        (prop: IPropsHealth): number => {
          return prop.MaxAnnualsBasis();
        },
      );
    });
  });
  // 01_Health_03_LimMonthlyState
  describe('LimMonthlyState', () => {
    testExamples.forEach((tt) => {
      const factory = new FactoryHealth();
      exportHealthPropsIntFile(
        PROTOKOL_TEST_FOLDER,
        `01_Health_03_LimMonthlyState.txt`,
        tt.minYear,
        tt.maxYear,
        factory,
        (prop: IPropsHealth): number => {
          return prop.LimMonthlyState();
        },
      );
    });
  });
  // 01_Health_04_LimMonthlyDis50
  describe('LimMonthlyDis50', () => {
    testExamples.forEach((tt) => {
      const factory = new FactoryHealth();
      exportHealthPropsIntFile(
        PROTOKOL_TEST_FOLDER,
        `01_Health_04_LimMonthlyDis50.txt`,
        tt.minYear,
        tt.maxYear,
        factory,
        (prop: IPropsHealth): number => {
          return prop.LimMonthlyDis50();
        },
      );
    });
  });
  // 01_Health_05_FactorCompound
  describe('FactorCompound', () => {
    testExamples.forEach((tt) => {
      const factory = new FactoryHealth();
      exportHealthPropsDecFile(
        PROTOKOL_TEST_FOLDER,
        `01_Health_05_FactorCompound.txt`,
        tt.minYear,
        tt.maxYear,
        factory,
        (prop: IPropsHealth): bigDecimal => {
          return prop.FactorCompound();
        },
      );
    });
  });
  // 01_Health_06_FactorEmployee
  describe('FactorEmployee', () => {
    testExamples.forEach((tt) => {
      const factory = new FactoryHealth();
      exportHealthPropsDecFile(
        PROTOKOL_TEST_FOLDER,
        `01_Health_06_FactorEmployee.txt`,
        tt.minYear,
        tt.maxYear,
        factory,
        (prop: IPropsHealth): bigDecimal => {
          return prop.FactorEmployee();
        },
      );
    });
  });
  // 01_Health_07_MarginIncomeEmp
  describe('MarginIncomeEmp', () => {
    testExamples.forEach((tt) => {
      const factory = new FactoryHealth();
      exportHealthPropsIntFile(
        PROTOKOL_TEST_FOLDER,
        `01_Health_07_MarginIncomeEmp.txt`,
        tt.minYear,
        tt.maxYear,
        factory,
        (prop: IPropsHealth): number => {
          return prop.MarginIncomeEmp();
        },
      );
    });
  });
  // 01_Health_08_MarginIncomeAgr
  describe('MarginIncomeAgr', () => {
    testExamples.forEach((tt) => {
      const factory = new FactoryHealth();
      exportHealthPropsIntFile(
        PROTOKOL_TEST_FOLDER,
        `01_Health_08_MarginIncomeAgr.txt`,
        tt.minYear,
        tt.maxYear,
        factory,
        (prop: IPropsHealth): number => {
          return prop.MarginIncomeAgr();
        },
      );
    });
  });
});
