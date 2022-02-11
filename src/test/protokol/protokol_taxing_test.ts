import bigDecimal = require('js-big-decimal');
import { FactoryTaxing } from '../../proj/factories/FactoryTaxing';
import { IPropsTaxing } from '../../proj/service_interfaces/IPropsTaxing';
import { PROTOKOL_TEST_FOLDER } from './protokol_base_test';
import { exportTaxingPropsDecFile, exportTaxingPropsIntFile } from './protokol_taxing_base_test';
import { TestYearScenario } from '../TestStructs';

describe('Protokol Taxing For Year 2010-2022', () => {
  const testExamples = [new TestYearScenario('2010-2022', 2010, 2022)];
  // 04_Taxing_01_AllowancePayer
  describe('AllowancePayer', () => {
    testExamples.forEach((tt) => {
      const factory = new FactoryTaxing();
      exportTaxingPropsIntFile(
        PROTOKOL_TEST_FOLDER,
        `04_Taxing_01_AllowancePayer.txt`,
        tt.minYear,
        tt.maxYear,
        factory,
        (prop: IPropsTaxing): number => {
          return prop.AllowancePayer();
        },
      );
    });
  });
  // 04_Taxing_02_AllowanceDisab1st
  describe('AllowanceDisab1st', () => {
    testExamples.forEach((tt) => {
      const factory = new FactoryTaxing();
      exportTaxingPropsIntFile(
        PROTOKOL_TEST_FOLDER,
        `04_Taxing_02_AllowanceDisab1st.txt`,
        tt.minYear,
        tt.maxYear,
        factory,
        (prop: IPropsTaxing): number => {
          return prop.AllowanceDisab1st();
        },
      );
    });
  });
  // 04_Taxing_03_AllowanceDisab2nd
  describe('AllowanceDisab2nd', () => {
    testExamples.forEach((tt) => {
      const factory = new FactoryTaxing();
      exportTaxingPropsIntFile(
        PROTOKOL_TEST_FOLDER,
        `04_Taxing_03_AllowanceDisab2nd.txt`,
        tt.minYear,
        tt.maxYear,
        factory,
        (prop: IPropsTaxing): number => {
          return prop.AllowanceDisab2nd();
        },
      );
    });
  });
  // 04_Taxing_04_AllowanceDisab3rd
  describe('AllowanceDisab3rd', () => {
    testExamples.forEach((tt) => {
      const factory = new FactoryTaxing();
      exportTaxingPropsIntFile(
        PROTOKOL_TEST_FOLDER,
        `04_Taxing_04_AllowanceDisab3rd.txt`,
        tt.minYear,
        tt.maxYear,
        factory,
        (prop: IPropsTaxing): number => {
          return prop.AllowanceDisab3rd();
        },
      );
    });
  });
  // 04_Taxing_05_AllowanceStudy
  describe('AllowanceStudy', () => {
    testExamples.forEach((tt) => {
      const factory = new FactoryTaxing();
      exportTaxingPropsIntFile(
        PROTOKOL_TEST_FOLDER,
        `04_Taxing_05_AllowanceStudy.txt`,
        tt.minYear,
        tt.maxYear,
        factory,
        (prop: IPropsTaxing): number => {
          return prop.AllowanceStudy();
        },
      );
    });
  });
  // 04_Taxing_06_AllowanceChild1st
  describe('AllowanceChild1st', () => {
    testExamples.forEach((tt) => {
      const factory = new FactoryTaxing();
      exportTaxingPropsIntFile(
        PROTOKOL_TEST_FOLDER,
        `04_Taxing_06_AllowanceChild1st.txt`,
        tt.minYear,
        tt.maxYear,
        factory,
        (prop: IPropsTaxing): number => {
          return prop.AllowanceChild1st();
        },
      );
    });
  });
  // 04_Taxing_07_AllowanceChild2nd
  describe('AllowanceChild2nd', () => {
    testExamples.forEach((tt) => {
      const factory = new FactoryTaxing();
      exportTaxingPropsIntFile(
        PROTOKOL_TEST_FOLDER,
        `04_Taxing_07_AllowanceChild2nd.txt`,
        tt.minYear,
        tt.maxYear,
        factory,
        (prop: IPropsTaxing): number => {
          return prop.AllowanceChild2nd();
        },
      );
    });
  });
  // 04_Taxing_08_AllowanceChild3rd
  describe('AllowanceChild3rd', () => {
    testExamples.forEach((tt) => {
      const factory = new FactoryTaxing();
      exportTaxingPropsIntFile(
        PROTOKOL_TEST_FOLDER,
        `04_Taxing_08_AllowanceChild3rd.txt`,
        tt.minYear,
        tt.maxYear,
        factory,
        (prop: IPropsTaxing): number => {
          return prop.AllowanceChild3rd();
        },
      );
    });
  });
  // 04_Taxing_09_FactorAdvances
  describe('FactorAdvances', () => {
    testExamples.forEach((tt) => {
      const factory = new FactoryTaxing();
      exportTaxingPropsDecFile(
        PROTOKOL_TEST_FOLDER,
        `04_Taxing_09_FactorAdvances.txt`,
        tt.minYear,
        tt.maxYear,
        factory,
        (prop: IPropsTaxing): bigDecimal => {
          return prop.FactorAdvances();
        },
      );
    });
  });
  // 04_Taxing_10_FactorWithhold
  describe('FactorWithhold', () => {
    testExamples.forEach((tt) => {
      const factory = new FactoryTaxing();
      exportTaxingPropsDecFile(
        PROTOKOL_TEST_FOLDER,
        `04_Taxing_10_FactorWithhold.txt`,
        tt.minYear,
        tt.maxYear,
        factory,
        (prop: IPropsTaxing): bigDecimal => {
          return prop.FactorWithhold();
        },
      );
    });
  });
  // 04_Taxing_11_FactorSolidary
  describe('FactorSolidary', () => {
    testExamples.forEach((tt) => {
      const factory = new FactoryTaxing();
      exportTaxingPropsDecFile(
        PROTOKOL_TEST_FOLDER,
        `04_Taxing_11_FactorSolidary.txt`,
        tt.minYear,
        tt.maxYear,
        factory,
        (prop: IPropsTaxing): bigDecimal => {
          return prop.FactorSolidary();
        },
      );
    });
  });
  // 04_Taxing_12_FactorTaxRate2
  describe('FactorTaxRate2', () => {
    testExamples.forEach((tt) => {
      const factory = new FactoryTaxing();
      exportTaxingPropsDecFile(
        PROTOKOL_TEST_FOLDER,
        `04_Taxing_12_FactorTaxRate2.txt`,
        tt.minYear,
        tt.maxYear,
        factory,
        (prop: IPropsTaxing): bigDecimal => {
          return prop.FactorTaxRate2();
        },
      );
    });
  });
  // 04_Taxing_13_MinAmountOfTaxBonus
  describe('MinAmountOfTaxBonus', () => {
    testExamples.forEach((tt) => {
      const factory = new FactoryTaxing();
      exportTaxingPropsIntFile(
        PROTOKOL_TEST_FOLDER,
        `04_Taxing_13_MinAmountOfTaxBonus.txt`,
        tt.minYear,
        tt.maxYear,
        factory,
        (prop: IPropsTaxing): number => {
          return prop.MinAmountOfTaxBonus();
        },
      );
    });
  });
  // 04_Taxing_14_MaxAmountOfTaxBonus
  describe('MaxAmountOfTaxBonus', () => {
    testExamples.forEach((tt) => {
      const factory = new FactoryTaxing();
      exportTaxingPropsIntFile(
        PROTOKOL_TEST_FOLDER,
        `04_Taxing_14_MaxAmountOfTaxBonus.txt`,
        tt.minYear,
        tt.maxYear,
        factory,
        (prop: IPropsTaxing): number => {
          return prop.MaxAmountOfTaxBonus();
        },
      );
    });
  });
  // 04_Taxing_15_MarginIncomeOfTaxBonus
  describe('MarginIncomeOfTaxBonus', () => {
    testExamples.forEach((tt) => {
      const factory = new FactoryTaxing();
      exportTaxingPropsIntFile(
        PROTOKOL_TEST_FOLDER,
        `04_Taxing_15_MarginIncomeOfTaxBonus.txt`,
        tt.minYear,
        tt.maxYear,
        factory,
        (prop: IPropsTaxing): number => {
          return prop.MarginIncomeOfTaxBonus();
        },
      );
    });
  });
  // 04_Taxing_16_MarginIncomeOfRounding
  describe('MarginIncomeOfRounding', () => {
    testExamples.forEach((tt) => {
      const factory = new FactoryTaxing();
      exportTaxingPropsIntFile(
        PROTOKOL_TEST_FOLDER,
        `04_Taxing_16_MarginIncomeOfRounding.txt`,
        tt.minYear,
        tt.maxYear,
        factory,
        (prop: IPropsTaxing): number => {
          return prop.MarginIncomeOfRounding();
        },
      );
    });
  });
  // 04_Taxing_17_MarginIncomeOfWithhold
  describe('MarginIncomeOfWithhold', () => {
    testExamples.forEach((tt) => {
      const factory = new FactoryTaxing();
      exportTaxingPropsIntFile(
        PROTOKOL_TEST_FOLDER,
        `04_Taxing_17_MarginIncomeOfWithhold.txt`,
        tt.minYear,
        tt.maxYear,
        factory,
        (prop: IPropsTaxing): number => {
          return prop.MarginIncomeOfWithhold();
        },
      );
    });
  });
  // 04_Taxing_18_MarginIncomeOfSolidary
  describe('MarginIncomeOfSolidary', () => {
    testExamples.forEach((tt) => {
      const factory = new FactoryTaxing();
      exportTaxingPropsIntFile(
        PROTOKOL_TEST_FOLDER,
        `04_Taxing_18_MarginIncomeOfSolidary.txt`,
        tt.minYear,
        tt.maxYear,
        factory,
        (prop: IPropsTaxing): number => {
          return prop.MarginIncomeOfSolidary();
        },
      );
    });
  });
  // 04_Taxing_19_MarginIncomeOfTaxRate2
  describe('MarginIncomeOfTaxRate2', () => {
    testExamples.forEach((tt) => {
      const factory = new FactoryTaxing();
      exportTaxingPropsIntFile(
        PROTOKOL_TEST_FOLDER,
        `04_Taxing_19_MarginIncomeOfTaxRate2.txt`,
        tt.minYear,
        tt.maxYear,
        factory,
        (prop: IPropsTaxing): number => {
          return prop.MarginIncomeOfTaxRate2();
        },
      );
    });
  });
  // 04_Taxing_20_MarginIncomeOfWthEmp
  describe('MarginIncomeOfWthEmp', () => {
    testExamples.forEach((tt) => {
      const factory = new FactoryTaxing();
      exportTaxingPropsIntFile(
        PROTOKOL_TEST_FOLDER,
        `04_Taxing_20_MarginIncomeOfWthEmp.txt`,
        tt.minYear,
        tt.maxYear,
        factory,
        (prop: IPropsTaxing): number => {
          return prop.MarginIncomeOfWthEmp();
        },
      );
    });
  });
  // 04_Taxing_21_MarginIncomeOfWthAgr
  describe('MarginIncomeOfWthAgr', () => {
    testExamples.forEach((tt) => {
      const factory = new FactoryTaxing();
      exportTaxingPropsIntFile(
        PROTOKOL_TEST_FOLDER,
        `04_Taxing_21_MarginIncomeOfWthAgr.txt`,
        tt.minYear,
        tt.maxYear,
        factory,
        (prop: IPropsTaxing): number => {
          return prop.MarginIncomeOfWthAgr();
        },
      );
    });
  });
});
