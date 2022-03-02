import bigDecimal = require('js-big-decimal');
import { FactorySocial } from '../../proj/factories/FactorySocial';
import { IPropsSocial } from '../../proj/service_interfaces/IPropsSocial';
import { PROTOKOL_TEST_FOLDER } from './protokol_base_test';
import { exportSocialPropsDecFile, exportSocialPropsIntFile } from './protokol_social_base_test';
import { TestYearScenario } from '../test_structs';

describe('Protokol Social For Year 2010-2022', () => {
  const testExamples = [new TestYearScenario('2010-2022', 2010, 2022)];
  // 03_Social_01_MaxAnnualsBasis
  describe('MaxAnnualsBasis', () => {
    testExamples.forEach((tt) => {
      const factory = new FactorySocial();
      exportSocialPropsIntFile(
        PROTOKOL_TEST_FOLDER,
        `03_Social_01_MaxAnnualsBasis.txt`,
        tt.minYear,
        tt.maxYear,
        factory,
        (prop: IPropsSocial): number => {
          return prop.MaxAnnualsBasis();
        },
      );
    });
  });
  // 03_Social_02_FactorEmployer
  describe('FactorEmployer', () => {
    testExamples.forEach((tt) => {
      const factory = new FactorySocial();
      exportSocialPropsDecFile(
        PROTOKOL_TEST_FOLDER,
        `03_Social_02_FactorEmployer.txt`,
        tt.minYear,
        tt.maxYear,
        factory,
        (prop: IPropsSocial): bigDecimal => {
          return prop.FactorEmployer();
        },
      );
    });
  });
  // 03_Social_03_FactorEmployerHigher
  describe('FactorEmployerHigher', () => {
    testExamples.forEach((tt) => {
      const factory = new FactorySocial();
      exportSocialPropsDecFile(
        PROTOKOL_TEST_FOLDER,
        `03_Social_03_FactorEmployerHigher.txt`,
        tt.minYear,
        tt.maxYear,
        factory,
        (prop: IPropsSocial): bigDecimal => {
          return prop.FactorEmployerHigher();
        },
      );
    });
  });
  // 03_Social_04_FactorEmployee
  describe('FactorEmployee', () => {
    testExamples.forEach((tt) => {
      const factory = new FactorySocial();
      exportSocialPropsDecFile(
        PROTOKOL_TEST_FOLDER,
        `03_Social_04_FactorEmployee.txt`,
        tt.minYear,
        tt.maxYear,
        factory,
        (prop: IPropsSocial): bigDecimal => {
          return prop.FactorEmployee();
        },
      );
    });
  });
  // 03_Social_05_FactorEmployeeGarant
  describe('FactorEmployeeGarant', () => {
    testExamples.forEach((tt) => {
      const factory = new FactorySocial();
      exportSocialPropsDecFile(
        PROTOKOL_TEST_FOLDER,
        `03_Social_05_FactorEmployeeGarant.txt`,
        tt.minYear,
        tt.maxYear,
        factory,
        (prop: IPropsSocial): bigDecimal => {
          return prop.FactorEmployeeGarant();
        },
      );
    });
  });
  // 03_Social_06_FactorEmployeeReduce
  describe('FactorEmployeeReduce', () => {
    testExamples.forEach((tt) => {
      const factory = new FactorySocial();
      exportSocialPropsDecFile(
        PROTOKOL_TEST_FOLDER,
        `03_Social_06_FactorEmployeeReduce.txt`,
        tt.minYear,
        tt.maxYear,
        factory,
        (prop: IPropsSocial): bigDecimal => {
          return prop.FactorEmployeeReduce();
        },
      );
    });
  });
  // 03_Social_07_MarginIncomeEmp
  describe('MarginIncomeEmp', () => {
    testExamples.forEach((tt) => {
      const factory = new FactorySocial();
      exportSocialPropsIntFile(
        PROTOKOL_TEST_FOLDER,
        `03_Social_07_MarginIncomeEmp.txt`,
        tt.minYear,
        tt.maxYear,
        factory,
        (prop: IPropsSocial): number => {
          return prop.MarginIncomeEmp();
        },
      );
    });
  });
  // 03_Social_08_MarginIncomeAgr
  describe('MarginIncomeAgr', () => {
    testExamples.forEach((tt) => {
      const factory = new FactorySocial();
      exportSocialPropsIntFile(
        PROTOKOL_TEST_FOLDER,
        `03_Social_08_MarginIncomeAgr.txt`,
        tt.minYear,
        tt.maxYear,
        factory,
        (prop: IPropsSocial): number => {
          return prop.MarginIncomeAgr();
        },
      );
    });
  });
});
