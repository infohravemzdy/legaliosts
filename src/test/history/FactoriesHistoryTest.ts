import { FactorySalary } from '../../proj/factories/FactorySalary';
import { FactoryHealth } from '../../proj/factories/FactoryHealth';
import { FactorySocial } from '../../proj/factories/FactorySocial';
import { FactoryTaxing } from '../../proj/factories/FactoryTaxing';
import { IPropsHealth, IPropsSalary, IPropsSocial, IPropsTaxing, Period } from '../../proj';
import { IProviderFactory } from '../../proj/factories/ProviderFactory';
import fs from 'fs';
import path from 'path';
import bigDecimal = require('js-big-decimal');

export const __TEST_HISTORY_FILE__: boolean = true;

const HISTORY_TEST_FOLDER = "../../../test_history";
const HISTORY_FOLDER_NAME = "test_history";
const PARENT_HISTORY_FOLDER_NAME = "legalios";

describe('Factories History Test', () => {
  const _sutSalary : IProviderFactory<IPropsSalary> = FactorySalary();
  const _sutHealth : IProviderFactory<IPropsHealth> = FactoryHealth();
  const _sutSocial : IProviderFactory<IPropsSocial> = FactorySocial();
  const _sutTaxing : IProviderFactory<IPropsTaxing> = FactoryTaxing();

  describe("GetProps_ShouldExport_History", () => {
    const scenarios = [
      new TestYearsScenario(2010, 2022),
    ];

    scenarios.forEach((tt) => {
      it("GetProps should export values", () => {
        if (__TEST_HISTORY_FILE__) {
          const testProtokol = createHistoryFile(HISTORY_TEST_FOLDER,`history_${tt.minYear}_${tt.maxYear}.xls`);

          let headerData = Array<[number, boolean]>();
          for (let testYear = tt.minYear; testYear <= tt.maxYear; testYear++) {
            let yearWithChanges = false;

            const testPeriod = Period.getWithYearMonth(testYear, 1);

            let testSalaryProp = _sutSalary.getProps(testPeriod);
            let testHealthProp = _sutHealth.getProps(testPeriod);
            let testSocialProp = _sutSocial.getProps(testPeriod);
            let testTaxingProp = _sutTaxing.getProps(testPeriod);

            for (let testMonth = 2; testMonth <= 12; testMonth++) {
              const nextPeriod = Period.getWithYearMonth(testYear, testMonth);

              const testSalaryNext = _sutSalary.getProps(nextPeriod);
              const testHealthNext = _sutHealth.getProps(nextPeriod);
              const testSocialNext = _sutSocial.getProps(nextPeriod);
              const testTaxingNext = _sutTaxing.getProps(nextPeriod);

              if (testSalaryNext.valueEquals(testSalaryProp) === false) {
                yearWithChanges = true
              }
              if (testHealthNext.valueEquals(testHealthProp) === false) {
                yearWithChanges = true
              }
              if (testSocialNext.valueEquals(testSocialProp) === false) {
                yearWithChanges = true
              }
              if (testTaxingNext.valueEquals(testTaxingProp) === false) {
                yearWithChanges = true
              }
              testSalaryProp = testSalaryNext
              testHealthProp = testHealthNext
              testSocialProp = testSocialNext
              testTaxingProp = testTaxingNext
            }
            headerData = headerData.concat([testYear, yearWithChanges]);
          }

          exportHistoryStart(testProtokol, headerData);

          const VECT_HEALTH_MIN_MONTHLY_BASIS = Array<[number, number, string, string]>();
          const VECT_HEALTH_MAX_ANNUALS_BASIS = Array<[number, number, string, string]>();
          const VECT_HEALTH_LIM_MONTHLY_STATE = Array<[number, number, string, string]>();
          const VECT_HEALTH_LIM_MONTHLY_DIS50 = Array<[number, number, string, string]>();
          const VECT_HEALTH_FACTOR_COMPOUND = Array<[number, number, string, string]>();
          const VECT_HEALTH_FACTOR_EMPLOYEE = Array<[number, number, string, string]>();
          const VECT_HEALTH_MARGIN_INCOME_EMP = Array<[number, number, string, string]>();
          const VECT_HEALTH_MARGIN_INCOME_AGR = Array<[number, number, string, string]>();
          const VECT_SALARY_WORKING_SHIFT_WEEK = Array<[number, number, string, string]>();
          const VECT_SALARY_WORKING_SHIFT_TIME = Array<[number, number, string, string]>();
          const VECT_SALARY_MIN_MONTHLY_WAGE = Array<[number, number, string, string]>();
          const VECT_SALARY_MIN_HOURLY_WAGE = Array<[number, number, string, string]>();
          const VECT_SOCIAL_MAX_ANNUALS_BASIS = Array<[number, number, string, string]>();
          const VECT_SOCIAL_FACTOR_EMPLOYER = Array<[number, number, string, string]>();
          const VECT_SOCIAL_FACTOR_EMPLOYER_HIGHER = Array<[number, number, string, string]>();
          const VECT_SOCIAL_FACTOR_EMPLOYEE = Array<[number, number, string, string]>();
          const VECT_SOCIAL_FACTOR_EMPLOYEE_GARANT = Array<[number, number, string, string]>();
          const VECT_SOCIAL_FACTOR_EMPLOYEE_REDUCE = Array<[number, number, string, string]>();
          const VECT_SOCIAL_MARGIN_INCOME_EMP = Array<[number, number, string, string]>();
          const VECT_SOCIAL_MARGIN_INCOME_AGR = Array<[number, number, string, string]>();
          const VECT_TAXING_ALLOWANCE_PAYER = Array<[number, number, string, string]>();
          const VECT_TAXING_ALLOWANCE_DISAB_1ST = Array<[number, number, string, string]>();
          const VECT_TAXING_ALLOWANCE_DISAB_2ND = Array<[number, number, string, string]>();
          const VECT_TAXING_ALLOWANCE_DISAB_3RD = Array<[number, number, string, string]>();
          const VECT_TAXING_ALLOWANCE_STUDY = Array<[number, number, string, string]>();
          const VECT_TAXING_ALLOWANCE_CHILD_1ST = Array<[number, number, string, string]>();
          const VECT_TAXING_ALLOWANCE_CHILD_2ND = Array<[number, number, string, string]>();
          const VECT_TAXING_ALLOWANCE_CHILD_3RD = Array<[number, number, string, string]>();
          const VECT_TAXING_FACTOR_ADVANCES = Array<[number, number, string, string]>();
          const VECT_TAXING_FACTOR_WITHHOLD = Array<[number, number, string, string]>();
          const VECT_TAXING_FACTOR_SOLIDARY = Array<[number, number, string, string]>();
          const VECT_TAXING_FACTOR_TAXRATE2 = Array<[number, number, string, string]>();
          const VECT_TAXING_MIN_AMOUNT_OF_TAXBONUS = Array<[number, number, string, string]>();
          const VECT_TAXING_MAX_AMOUNT_OF_TAXBONUS = Array<[number, number, string, string]>();
          const VECT_TAXING_MARGIN_INCOME_OF_TAXBONUS = Array<[number, number, string, string]>();
          const VECT_TAXING_MARGIN_INCOME_OF_ROUNDING = Array<[number, number, string, string]>();
          const VECT_TAXING_MARGIN_INCOME_OF_WITHHOLD = Array<[number, number, string, string]>();
          const VECT_TAXING_MARGIN_INCOME_OF_SOLIDARY = Array<[number, number, string, string]>();
          const VECT_TAXING_MARGIN_INCOME_OF_TAXRATE2 = Array<[number, number, string, string]>();
          const VECT_TAXING_MARGIN_INCOME_OF_WHT_EMP = Array<[number, number, string, string]>();
          const VECT_TAXING_MARGIN_INCOME_OF_WHT_AGR = Array<[number, number, string, string]>();

          const tableData = [
            [HEALTH_MIN_MONTHLY_BASIS         , VECT_HEALTH_MIN_MONTHLY_BASIS],
            [HEALTH_MAX_ANNUALS_BASIS         , VECT_HEALTH_MAX_ANNUALS_BASIS],
            [HEALTH_LIM_MONTHLY_STATE         , VECT_HEALTH_LIM_MONTHLY_STATE],
            [HEALTH_LIM_MONTHLY_DIS50         , VECT_HEALTH_LIM_MONTHLY_DIS50],
            [HEALTH_FACTOR_COMPOUND           , VECT_HEALTH_FACTOR_COMPOUND],
            [HEALTH_FACTOR_EMPLOYEE           , VECT_HEALTH_FACTOR_EMPLOYEE],
            [HEALTH_MARGIN_INCOME_EMP         , VECT_HEALTH_MARGIN_INCOME_EMP],
            [HEALTH_MARGIN_INCOME_AGR         , VECT_HEALTH_MARGIN_INCOME_AGR],
            [SALARY_WORKING_SHIFT_WEEK        , VECT_SALARY_WORKING_SHIFT_WEEK],
            [SALARY_WORKING_SHIFT_TIME        , VECT_SALARY_WORKING_SHIFT_TIME],
            [SALARY_MIN_MONTHLY_WAGE          , VECT_SALARY_MIN_MONTHLY_WAGE],
            [SALARY_MIN_HOURLY_WAGE           , VECT_SALARY_MIN_HOURLY_WAGE],
            [SOCIAL_MAX_ANNUALS_BASIS         , VECT_SOCIAL_MAX_ANNUALS_BASIS],
            [SOCIAL_FACTOR_EMPLOYER           , VECT_SOCIAL_FACTOR_EMPLOYER],
            [SOCIAL_FACTOR_EMPLOYER_HIGHER    , VECT_SOCIAL_FACTOR_EMPLOYER_HIGHER],
            [SOCIAL_FACTOR_EMPLOYEE           , VECT_SOCIAL_FACTOR_EMPLOYEE],
            [SOCIAL_FACTOR_EMPLOYEE_GARANT    , VECT_SOCIAL_FACTOR_EMPLOYEE_GARANT],
            [SOCIAL_FACTOR_EMPLOYEE_REDUCE    , VECT_SOCIAL_FACTOR_EMPLOYEE_REDUCE],
            [SOCIAL_MARGIN_INCOME_EMP         , VECT_SOCIAL_MARGIN_INCOME_EMP],
            [SOCIAL_MARGIN_INCOME_AGR         , VECT_SOCIAL_MARGIN_INCOME_AGR],
            [TAXING_ALLOWANCE_PAYER           , VECT_TAXING_ALLOWANCE_PAYER],
            [TAXING_ALLOWANCE_DISAB_1ST       , VECT_TAXING_ALLOWANCE_DISAB_1ST],
            [TAXING_ALLOWANCE_DISAB_2ND       , VECT_TAXING_ALLOWANCE_DISAB_2ND],
            [TAXING_ALLOWANCE_DISAB_3RD       , VECT_TAXING_ALLOWANCE_DISAB_3RD],
            [TAXING_ALLOWANCE_STUDY           , VECT_TAXING_ALLOWANCE_STUDY],
            [TAXING_ALLOWANCE_CHILD_1ST       , VECT_TAXING_ALLOWANCE_CHILD_1ST],
            [TAXING_ALLOWANCE_CHILD_2ND       , VECT_TAXING_ALLOWANCE_CHILD_2ND],
            [TAXING_ALLOWANCE_CHILD_3RD       , VECT_TAXING_ALLOWANCE_CHILD_3RD],
            [TAXING_FACTOR_ADVANCES           , VECT_TAXING_FACTOR_ADVANCES],
            [TAXING_FACTOR_WITHHOLD           , VECT_TAXING_FACTOR_WITHHOLD],
            [TAXING_FACTOR_SOLIDARY           , VECT_TAXING_FACTOR_SOLIDARY],
            [TAXING_FACTOR_TAXRATE2           , VECT_TAXING_FACTOR_TAXRATE2],
            [TAXING_MIN_AMOUNT_OF_TAXBONUS    , VECT_TAXING_MIN_AMOUNT_OF_TAXBONUS],
            [TAXING_MAX_AMOUNT_OF_TAXBONUS    , VECT_TAXING_MAX_AMOUNT_OF_TAXBONUS],
            [TAXING_MARGIN_INCOME_OF_TAXBONUS , VECT_TAXING_MARGIN_INCOME_OF_TAXBONUS],
            [TAXING_MARGIN_INCOME_OF_ROUNDING , VECT_TAXING_MARGIN_INCOME_OF_ROUNDING],
            [TAXING_MARGIN_INCOME_OF_WITHHOLD , VECT_TAXING_MARGIN_INCOME_OF_WITHHOLD],
            [TAXING_MARGIN_INCOME_OF_SOLIDARY , VECT_TAXING_MARGIN_INCOME_OF_SOLIDARY],
            [TAXING_MARGIN_INCOME_OF_TAXRATE2 , VECT_TAXING_MARGIN_INCOME_OF_TAXRATE2],
            [TAXING_MARGIN_INCOME_OF_WHT_EMP  , VECT_TAXING_MARGIN_INCOME_OF_WHT_EMP],
            [TAXING_MARGIN_INCOME_OF_WHT_AGR  , VECT_TAXING_MARGIN_INCOME_OF_WHT_AGR],
          ];

          for (let testYear = minYear; testYear <= maxYear; testYear++) {
            let MES_HEALTH_MIN_MONTHLY_BASIS         = 0;
            let MES_HEALTH_MAX_ANNUALS_BASIS         = 0;
            let MES_HEALTH_LIM_MONTHLY_STATE         = 0;
            let MES_HEALTH_LIM_MONTHLY_DIS50         = 0;
            let MES_HEALTH_FACTOR_COMPOUND           = 0;
            let MES_HEALTH_FACTOR_EMPLOYEE           = 0;
            let MES_HEALTH_MARGIN_INCOME_EMP         = 0;
            let MES_HEALTH_MARGIN_INCOME_AGR         = 0;
            let MES_SALARY_WORKING_SHIFT_WEEK        = 0;
            let MES_SALARY_WORKING_SHIFT_TIME        = 0;
            let MES_SALARY_MIN_MONTHLY_WAGE          = 0;
            let MES_SALARY_MIN_HOURLY_WAGE           = 0;
            let MES_SOCIAL_MAX_ANNUALS_BASIS         = 0;
            let MES_SOCIAL_FACTOR_EMPLOYER           = 0;
            let MES_SOCIAL_FACTOR_EMPLOYER_HIGHER    = 0;
            let MES_SOCIAL_FACTOR_EMPLOYEE           = 0;
            let MES_SOCIAL_FACTOR_EMPLOYEE_GARANT    = 0;
            let MES_SOCIAL_FACTOR_EMPLOYEE_REDUCE    = 0;
            let MES_SOCIAL_MARGIN_INCOME_EMP         = 0;
            let MES_SOCIAL_MARGIN_INCOME_AGR         = 0;
            let MES_TAXING_ALLOWANCE_PAYER           = 0;
            let MES_TAXING_ALLOWANCE_DISAB_1ST       = 0;
            let MES_TAXING_ALLOWANCE_DISAB_2ND       = 0;
            let MES_TAXING_ALLOWANCE_DISAB_3RD       = 0;
            let MES_TAXING_ALLOWANCE_STUDY           = 0;
            let MES_TAXING_ALLOWANCE_CHILD_1ST       = 0;
            let MES_TAXING_ALLOWANCE_CHILD_2ND       = 0;
            let MES_TAXING_ALLOWANCE_CHILD_3RD       = 0;
            let MES_TAXING_FACTOR_ADVANCES           = 0;
            let MES_TAXING_FACTOR_WITHHOLD           = 0;
            let MES_TAXING_FACTOR_SOLIDARY           = 0;
            let MES_TAXING_FACTOR_TAXRATE2           = 0;
            let MES_TAXING_MIN_AMOUNT_OF_TAXBONUS    = 0;
            let MES_TAXING_MAX_AMOUNT_OF_TAXBONUS    = 0;
            let MES_TAXING_MARGIN_INCOME_OF_TAXBONUS = 0;
            let MES_TAXING_MARGIN_INCOME_OF_ROUNDING = 0;
            let MES_TAXING_MARGIN_INCOME_OF_WITHHOLD = 0;
            let MES_TAXING_MARGIN_INCOME_OF_SOLIDARY = 0;
            let MES_TAXING_MARGIN_INCOME_OF_TAXRATE2 = 0;
            let MES_TAXING_MARGIN_INCOME_OF_WHT_EMP  = 0;
            let MES_TAXING_MARGIN_INCOME_OF_WHT_AGR  = 0;

            const testPeriod = Period.getWithYearMonth(testYear, 1);

            let testSalaryProp = _sutSalary.getProps(testPeriod);
            let testHealthProp = _sutHealth.getProps(testPeriod);
            let testSocialProp = _sutSocial.getProps(testPeriod);
            let testTaxingProp = _sutTaxing.getProps(testPeriod);

            const JAN_HEALTH_MIN_MONTHLY_BASIS         = propsValueToString(testHealthProp.minMonthlyBasis);
            const JAN_HEALTH_MAX_ANNUALS_BASIS         = propsValueToString(testHealthProp.maxAnnualsBasis);
            const JAN_HEALTH_LIM_MONTHLY_STATE         = propsValueToString(testHealthProp.limMonthlyState);
            const JAN_HEALTH_LIM_MONTHLY_DIS50         = propsValueToString(testHealthProp.limMonthlyDis50);
            const JAN_HEALTH_FACTOR_COMPOUND           = propsValueToString(testHealthProp.factorCompound );
            const JAN_HEALTH_FACTOR_EMPLOYEE           = propsValueToString(testHealthProp.factorEmployee );
            const JAN_HEALTH_MARGIN_INCOME_EMP         = propsValueToString(testHealthProp.marginIncomeEmp);
            const JAN_HEALTH_MARGIN_INCOME_AGR         = propsValueToString(testHealthProp.marginIncomeAgr);
            const JAN_SALARY_WORKING_SHIFT_WEEK        = propsValueToString(testSalaryProp.workingShiftWeek);
            const JAN_SALARY_WORKING_SHIFT_TIME        = propsValueToString(testSalaryProp.workingShiftTime);
            const JAN_SALARY_MIN_MONTHLY_WAGE          = propsValueToString(testSalaryProp.minMonthlyWage);
            const JAN_SALARY_MIN_HOURLY_WAGE           = propsValueToString(testSalaryProp.minHourlyWage  );
            const JAN_SOCIAL_MAX_ANNUALS_BASIS         = propsValueToString(testSocialProp.maxAnnualsBasis);
            const JAN_SOCIAL_FACTOR_EMPLOYER           = propsValueToString(testSocialProp.factorEmployer);
            const JAN_SOCIAL_FACTOR_EMPLOYER_HIGHER    = propsValueToString(testSocialProp.factorEmployerHigher);
            const JAN_SOCIAL_FACTOR_EMPLOYEE           = propsValueToString(testSocialProp.factorEmployee);
            const JAN_SOCIAL_FACTOR_EMPLOYEE_GARANT    = propsValueToString(testSocialProp.factorEmployeeGarant);
            const JAN_SOCIAL_FACTOR_EMPLOYEE_REDUCE    = propsValueToString(testSocialProp.factorEmployeeReduce);
            const JAN_SOCIAL_MARGIN_INCOME_EMP         = propsValueToString(testSocialProp.marginIncomeEmp);
            const JAN_SOCIAL_MARGIN_INCOME_AGR         = propsValueToString(testSocialProp.marginIncomeAgr);
            const JAN_TAXING_ALLOWANCE_PAYER           = propsValueToString(testTaxingProp.allowancePayer);
            const JAN_TAXING_ALLOWANCE_DISAB_1ST       = propsValueToString(testTaxingProp.allowanceDisab1st );
            const JAN_TAXING_ALLOWANCE_DISAB_2ND       = propsValueToString(testTaxingProp.allowanceDisab2nd );
            const JAN_TAXING_ALLOWANCE_DISAB_3RD       = propsValueToString(testTaxingProp.allowanceDisab3rd );
            const JAN_TAXING_ALLOWANCE_STUDY           = propsValueToString(testTaxingProp.allowanceStudy );
            const JAN_TAXING_ALLOWANCE_CHILD_1ST       = propsValueToString(testTaxingProp.allowanceChild1st );
            const JAN_TAXING_ALLOWANCE_CHILD_2ND       = propsValueToString(testTaxingProp.allowanceChild2nd );
            const JAN_TAXING_ALLOWANCE_CHILD_3RD       = propsValueToString(testTaxingProp.allowanceChild3rd );
            const JAN_TAXING_FACTOR_ADVANCES           = propsValueToString(testTaxingProp.factorAdvances );
            const JAN_TAXING_FACTOR_WITHHOLD           = propsValueToString(testTaxingProp.factorWithhold );
            const JAN_TAXING_FACTOR_SOLIDARY           = propsValueToString(testTaxingProp.factorSolidary );
            const JAN_TAXING_FACTOR_TAXRATE2           = propsValueToString(testTaxingProp.factorTaxRate2 );
            const JAN_TAXING_MIN_AMOUNT_OF_TAXBONUS    = propsValueToString(testTaxingProp.minAmountOfTaxBonus );
            const JAN_TAXING_MAX_AMOUNT_OF_TAXBONUS    = propsValueToString(testTaxingProp.maxAmountOfTaxBonus );
            const JAN_TAXING_MARGIN_INCOME_OF_TAXBONUS = propsValueToString(testTaxingProp.marginIncomeOfTaxBonus );
            const JAN_TAXING_MARGIN_INCOME_OF_ROUNDING = propsValueToString(testTaxingProp.marginIncomeOfRounding );
            const JAN_TAXING_MARGIN_INCOME_OF_WITHHOLD = propsValueToString(testTaxingProp.marginIncomeOfWithhold );
            const JAN_TAXING_MARGIN_INCOME_OF_SOLIDARY = propsValueToString(testTaxingProp.marginIncomeOfSolidary );
            const JAN_TAXING_MARGIN_INCOME_OF_TAXRATE2 = propsValueToString(testTaxingProp.marginIncomeOfTaxRate2 );
            const JAN_TAXING_MARGIN_INCOME_OF_WHT_EMP  = propsValueToString(testTaxingProp.marginIncomeOfWthEmp );
            const JAN_TAXING_MARGIN_INCOME_OF_WHT_AGR  = propsValueToString(testTaxingProp.marginIncomeOfWthAgr );

            for (let testMonth = 2; testMonth <= 12; testMonth++) {
              const nextPeriod = Period.getWithYearMonth(testYear, testMonth);

              const testSalaryNext = _sutSalary.getProps(nextPeriod);
              const testHealthNext = _sutHealth.getProps(nextPeriod);
              const testSocialNext = _sutSocial.getProps(nextPeriod);
              const testTaxingNext = _sutTaxing.getProps(nextPeriod);

              if (testHealthNext.minMonthlyBasis.equals(testHealthProp.minMonthlyBasis)===false) { MES_HEALTH_MIN_MONTHLY_BASIS = testMonth }
              if (testHealthNext.maxAnnualsBasis.equals(testHealthProp.maxAnnualsBasis)===false) { MES_HEALTH_MAX_ANNUALS_BASIS = testMonth }
              if (testHealthNext.limMonthlyState.equals(testHealthProp.limMonthlyState)===false) { MES_HEALTH_LIM_MONTHLY_STATE = testMonth }
              if (testHealthNext.limMonthlyDis50.equals(testHealthProp.limMonthlyDis50)===false) { MES_HEALTH_LIM_MONTHLY_DIS50 = testMonth }
              if (testHealthNext.factorCompound.equals(testHealthProp.factorCompound)===false) { MES_HEALTH_FACTOR_COMPOUND = testMonth }
              if (testHealthNext.factorEmployee.equals(testHealthProp.factorEmployee)===false) { MES_HEALTH_FACTOR_EMPLOYEE = testMonth }
              if (testHealthNext.marginIncomeEmp.equals(testHealthProp.marginIncomeEmp)===false) { MES_HEALTH_MARGIN_INCOME_EMP = testMonth }
              if (testHealthNext.marginIncomeAgr.equals(testHealthProp.marginIncomeAgr)===false) { MES_HEALTH_MARGIN_INCOME_AGR = testMonth }
              if (testSalaryNext.workingShiftWeek.equals(testSalaryProp.workingShiftWeek)===false) { MES_SALARY_WORKING_SHIFT_WEEK = testMonth }
              if (testSalaryNext.workingShiftTime.equals(testSalaryProp.workingShiftTime)===false) { MES_SALARY_WORKING_SHIFT_TIME = testMonth }
              if (testSalaryNext.minMonthlyWage.equals(testSalaryProp.minMonthlyWage)===false) { MES_SALARY_MIN_MONTHLY_WAGE = testMonth }
              if (testSalaryNext.minHourlyWage .equals(testSalaryProp.minHourlyWage)===false) { MES_SALARY_MIN_HOURLY_WAGE = testMonth }
              if (testSocialNext.maxAnnualsBasis.equals(testSocialProp.maxAnnualsBasis)===false) { MES_SOCIAL_MAX_ANNUALS_BASIS = testMonth }
              if (testSocialNext.factorEmployer.equals(testSocialProp.factorEmployer)===false) { MES_SOCIAL_FACTOR_EMPLOYER = testMonth }
              if (testSocialNext.factorEmployerHigher.equals(testSocialProp.factorEmployerHigher)===false) { MES_SOCIAL_FACTOR_EMPLOYER_HIGHER = testMonth }
              if (testSocialNext.factorEmployee.equals(testSocialProp.factorEmployee)===false) { MES_SOCIAL_FACTOR_EMPLOYEE = testMonth }
              if (testSocialNext.factorEmployeeReduce.equals(testSocialProp.factorEmployeeReduce)===false) { MES_SOCIAL_FACTOR_EMPLOYEE_REDUCE = testMonth }
              if (testSocialNext.factorEmployeeGarant.equals(testSocialProp.factorEmployeeGarant)===false) { MES_SOCIAL_FACTOR_EMPLOYEE_GARANT = testMonth }
              if (testSocialNext.marginIncomeEmp.equals(testSocialProp.marginIncomeEmp)===false) { MES_SOCIAL_MARGIN_INCOME_EMP = testMonth }
              if (testSocialNext.marginIncomeAgr.equals(testSocialProp.marginIncomeAgr)===false) { MES_SOCIAL_MARGIN_INCOME_AGR = testMonth }
              if (testTaxingNext.allowancePayer.equals(testTaxingProp.allowancePayer)===false) { MES_TAXING_ALLOWANCE_PAYER = testMonth }
              if (testTaxingNext.allowanceDisab1st.equals(testTaxingProp.allowanceDisab1st)===false) { MES_TAXING_ALLOWANCE_DISAB_1ST = testMonth }
              if (testTaxingNext.allowanceDisab2nd.equals(testTaxingProp.allowanceDisab2nd)===false) { MES_TAXING_ALLOWANCE_DISAB_2ND = testMonth }
              if (testTaxingNext.allowanceDisab3rd.equals(testTaxingProp.allowanceDisab3rd)===false) { MES_TAXING_ALLOWANCE_DISAB_3RD = testMonth }
              if (testTaxingNext.allowanceStudy.equals(testTaxingProp.allowanceStudy)===false) { MES_TAXING_ALLOWANCE_STUDY = testMonth }
              if (testTaxingNext.allowanceChild1st.equals(testTaxingProp.allowanceChild1st)===false) { MES_TAXING_ALLOWANCE_CHILD_1ST = testMonth }
              if (testTaxingNext.allowanceChild2nd.equals(testTaxingProp.allowanceChild2nd)===false) { MES_TAXING_ALLOWANCE_CHILD_2ND = testMonth }
              if (testTaxingNext.allowanceChild3rd.equals(testTaxingProp.allowanceChild3rd)===false) { MES_TAXING_ALLOWANCE_CHILD_3RD = testMonth }
              if (testTaxingNext.factorAdvances.equals(testTaxingProp.factorAdvances)===false) { MES_TAXING_FACTOR_ADVANCES = testMonth }
              if (testTaxingNext.factorWithhold.equals(testTaxingProp.factorWithhold)===false) { MES_TAXING_FACTOR_WITHHOLD = testMonth }
              if (testTaxingNext.factorSolidary.equals(testTaxingProp.factorSolidary)===false) { MES_TAXING_FACTOR_SOLIDARY = testMonth }
              if (testTaxingNext.factorTaxRate2.equals(testTaxingProp.factorTaxRate2)===false) { MES_TAXING_FACTOR_TAXRATE2 = testMonth }
              if (testTaxingNext.minAmountOfTaxBonus.equals(testTaxingProp.minAmountOfTaxBonus)===false) { MES_TAXING_MIN_AMOUNT_OF_TAXBONUS = testMonth }
              if (testTaxingNext.maxAmountOfTaxBonus.equals(testTaxingProp.maxAmountOfTaxBonus)===false) { MES_TAXING_MAX_AMOUNT_OF_TAXBONUS = testMonth }
              if (testTaxingNext.marginIncomeOfTaxBonus.equals(testTaxingProp.marginIncomeOfTaxBonus)===false) { MES_TAXING_MARGIN_INCOME_OF_TAXBONUS = testMonth }
              if (testTaxingNext.marginIncomeOfRounding.equals(testTaxingProp.marginIncomeOfRounding)===false) { MES_TAXING_MARGIN_INCOME_OF_ROUNDING = testMonth }
              if (testTaxingNext.marginIncomeOfWithhold.equals(testTaxingProp.marginIncomeOfWithhold)===false) { MES_TAXING_MARGIN_INCOME_OF_WITHHOLD = testMonth }
              if (testTaxingNext.marginIncomeOfSolidary.equals(testTaxingProp.marginIncomeOfSolidary)===false) { MES_TAXING_MARGIN_INCOME_OF_SOLIDARY = testMonth }
              if (testTaxingNext.marginIncomeOfTaxRate2.equals(testTaxingProp.marginIncomeOfTaxRate2)===false) { MES_TAXING_MARGIN_INCOME_OF_TAXRATE2 = testMonth }
              if (testTaxingNext.marginIncomeOfWthEmp.equals(testTaxingProp.marginIncomeOfWthEmp)===false) { MES_TAXING_MARGIN_INCOME_OF_WHT_EMP = testMonth }
              if (testTaxingNext.marginIncomeOfWthAgr.equals(testTaxingProp.marginIncomeOfWthAgr)===false) { MES_TAXING_MARGIN_INCOME_OF_WHT_AGR = testMonth }

              testSalaryProp = testSalaryNext;
              testHealthProp = testHealthNext;
              testSocialProp = testSocialNext;
              testTaxingProp = testTaxingNext;
            }
            VECT_HEALTH_MIN_MONTHLY_BASIS.push([testYear, MES_HEALTH_MIN_MONTHLY_BASIS, JAN_HEALTH_MIN_MONTHLY_BASIS, propsValueToString(testHealthProp.minMonthlyBasis)]);
            VECT_HEALTH_MAX_ANNUALS_BASIS.push([testYear, MES_HEALTH_MAX_ANNUALS_BASIS,JAN_HEALTH_MAX_ANNUALS_BASIS, propsValueToString(testHealthProp.maxAnnualsBasis)]);
            VECT_HEALTH_LIM_MONTHLY_STATE.push([testYear, MES_HEALTH_LIM_MONTHLY_STATE,JAN_HEALTH_LIM_MONTHLY_STATE, propsValueToString(testHealthProp.limMonthlyState)]);
            VECT_HEALTH_LIM_MONTHLY_DIS50.push([testYear, MES_HEALTH_LIM_MONTHLY_DIS50,JAN_HEALTH_LIM_MONTHLY_DIS50, propsValueToString(testHealthProp.limMonthlyDis50)]);
            VECT_HEALTH_FACTOR_COMPOUND.push([testYear, MES_HEALTH_FACTOR_COMPOUND,JAN_HEALTH_FACTOR_COMPOUND, propsValueToString(testHealthProp.factorCompound)]);
            VECT_HEALTH_FACTOR_EMPLOYEE.push([testYear, MES_HEALTH_FACTOR_EMPLOYEE,JAN_HEALTH_FACTOR_EMPLOYEE, propsValueToString(testHealthProp.factorEmployee)]);
            VECT_HEALTH_MARGIN_INCOME_EMP.push([testYear, MES_HEALTH_MARGIN_INCOME_EMP,JAN_HEALTH_MARGIN_INCOME_EMP, propsValueToString(testHealthProp.marginIncomeEmp)]);
            VECT_HEALTH_MARGIN_INCOME_AGR.push([testYear, MES_HEALTH_MARGIN_INCOME_AGR,JAN_HEALTH_MARGIN_INCOME_AGR, propsValueToString(testHealthProp.marginIncomeAgr)]);
            VECT_SALARY_WORKING_SHIFT_WEEK.push([testYear, MES_SALARY_WORKING_SHIFT_WEEK,JAN_SALARY_WORKING_SHIFT_WEEK, propsValueToString(testSalaryProp.workingShiftWeek)]);
            VECT_SALARY_WORKING_SHIFT_TIME.push([testYear, MES_SALARY_WORKING_SHIFT_TIME,JAN_SALARY_WORKING_SHIFT_TIME, propsValueToString(testSalaryProp.workingShiftTime)]);
            VECT_SALARY_MIN_MONTHLY_WAGE.push([testYear, MES_SALARY_MIN_MONTHLY_WAGE,JAN_SALARY_MIN_MONTHLY_WAGE, propsValueToString(testSalaryProp.minMonthlyWage)]);
            VECT_SALARY_MIN_HOURLY_WAGE.push([testYear, MES_SALARY_MIN_HOURLY_WAGE,JAN_SALARY_MIN_HOURLY_WAGE, propsValueToString(testSalaryProp.minHourlyWage)]);
            VECT_SOCIAL_MAX_ANNUALS_BASIS.push([testYear, MES_SOCIAL_MAX_ANNUALS_BASIS,JAN_SOCIAL_MAX_ANNUALS_BASIS, propsValueToString(testSocialProp.maxAnnualsBasis)]);
            VECT_SOCIAL_FACTOR_EMPLOYER.push([testYear, MES_SOCIAL_FACTOR_EMPLOYER,JAN_SOCIAL_FACTOR_EMPLOYER, propsValueToString(testSocialProp.factorEmployer)]);
            VECT_SOCIAL_FACTOR_EMPLOYER_HIGHER.push([testYear, MES_SOCIAL_FACTOR_EMPLOYER_HIGHER,JAN_SOCIAL_FACTOR_EMPLOYER_HIGHER, propsValueToString(testSocialProp.factorEmployerHigher)]);
            VECT_SOCIAL_FACTOR_EMPLOYEE.push([testYear, MES_SOCIAL_FACTOR_EMPLOYEE,JAN_SOCIAL_FACTOR_EMPLOYEE, propsValueToString(testSocialProp.factorEmployee)]);
            VECT_SOCIAL_FACTOR_EMPLOYEE_GARANT.push([testYear, MES_SOCIAL_FACTOR_EMPLOYEE_GARANT,JAN_SOCIAL_FACTOR_EMPLOYEE_GARANT, propsValueToString(testSocialProp.factorEmployeeGarant)]);
            VECT_SOCIAL_FACTOR_EMPLOYEE_REDUCE.push([testYear, MES_SOCIAL_FACTOR_EMPLOYEE_REDUCE,JAN_SOCIAL_FACTOR_EMPLOYEE_REDUCE, propsValueToString(testSocialProp.factorEmployeeReduce)]);
            VECT_SOCIAL_MARGIN_INCOME_EMP.push([testYear, MES_SOCIAL_MARGIN_INCOME_EMP,JAN_SOCIAL_MARGIN_INCOME_EMP, propsValueToString(testSocialProp.marginIncomeEmp)]);
            VECT_SOCIAL_MARGIN_INCOME_AGR.push([testYear, MES_SOCIAL_MARGIN_INCOME_AGR,JAN_SOCIAL_MARGIN_INCOME_AGR, propsValueToString(testSocialProp.marginIncomeAgr)]);
            VECT_TAXING_ALLOWANCE_PAYER.push([testYear, MES_TAXING_ALLOWANCE_PAYER,JAN_TAXING_ALLOWANCE_PAYER, propsValueToString(testTaxingProp.allowancePayer)]);
            VECT_TAXING_ALLOWANCE_DISAB_1ST.push([testYear, MES_TAXING_ALLOWANCE_DISAB_1ST,JAN_TAXING_ALLOWANCE_DISAB_1ST, propsValueToString(testTaxingProp.allowanceDisab1st)]);
            VECT_TAXING_ALLOWANCE_DISAB_2ND.push([testYear, MES_TAXING_ALLOWANCE_DISAB_2ND,JAN_TAXING_ALLOWANCE_DISAB_2ND, propsValueToString(testTaxingProp.allowanceDisab2nd)]);
            VECT_TAXING_ALLOWANCE_DISAB_3RD.push([testYear, MES_TAXING_ALLOWANCE_DISAB_3RD,JAN_TAXING_ALLOWANCE_DISAB_3RD, propsValueToString(testTaxingProp.allowanceDisab3rd)]);
            VECT_TAXING_ALLOWANCE_STUDY.push([testYear, MES_TAXING_ALLOWANCE_STUDY,JAN_TAXING_ALLOWANCE_STUDY, propsValueToString(testTaxingProp.allowanceStudy)]);
            VECT_TAXING_ALLOWANCE_CHILD_1ST.push([testYear, MES_TAXING_ALLOWANCE_CHILD_1ST,JAN_TAXING_ALLOWANCE_CHILD_1ST, propsValueToString(testTaxingProp.allowanceChild1st)]);
            VECT_TAXING_ALLOWANCE_CHILD_2ND.push([testYear, MES_TAXING_ALLOWANCE_CHILD_2ND,JAN_TAXING_ALLOWANCE_CHILD_2ND, propsValueToString(testTaxingProp.allowanceChild2nd)]);
            VECT_TAXING_ALLOWANCE_CHILD_3RD.push([testYear, MES_TAXING_ALLOWANCE_CHILD_3RD,JAN_TAXING_ALLOWANCE_CHILD_3RD, propsValueToString(testTaxingProp.allowanceChild3rd)]);
            VECT_TAXING_FACTOR_ADVANCES.push([testYear, MES_TAXING_FACTOR_ADVANCES,JAN_TAXING_FACTOR_ADVANCES, propsValueToString(testTaxingProp.factorAdvances)]);
            VECT_TAXING_FACTOR_WITHHOLD.push([testYear, MES_TAXING_FACTOR_WITHHOLD,JAN_TAXING_FACTOR_WITHHOLD, propsValueToString(testTaxingProp.factorWithhold)]);
            VECT_TAXING_FACTOR_SOLIDARY.push([testYear, MES_TAXING_FACTOR_SOLIDARY,JAN_TAXING_FACTOR_SOLIDARY, propsValueToString(testTaxingProp.factorSolidary)]);
            VECT_TAXING_FACTOR_TAXRATE2.push([testYear, MES_TAXING_FACTOR_TAXRATE2,JAN_TAXING_FACTOR_TAXRATE2, propsValueToString(testTaxingProp.factorTaxRate2)]);
            VECT_TAXING_MIN_AMOUNT_OF_TAXBONUS.push([testYear, MES_TAXING_MIN_AMOUNT_OF_TAXBONUS,JAN_TAXING_MIN_AMOUNT_OF_TAXBONUS, propsValueToString(testTaxingProp.minAmountOfTaxBonus)]);
            VECT_TAXING_MAX_AMOUNT_OF_TAXBONUS.push([testYear, MES_TAXING_MAX_AMOUNT_OF_TAXBONUS,JAN_TAXING_MAX_AMOUNT_OF_TAXBONUS, propsValueToString(testTaxingProp.maxAmountOfTaxBonus)]);
            VECT_TAXING_MARGIN_INCOME_OF_TAXBONUS.push([testYear, MES_TAXING_MARGIN_INCOME_OF_TAXBONUS,JAN_TAXING_MARGIN_INCOME_OF_TAXBONUS, propsValueToString(testTaxingProp.marginIncomeOfTaxBonus)]);
            VECT_TAXING_MARGIN_INCOME_OF_ROUNDING.push([testYear, MES_TAXING_MARGIN_INCOME_OF_ROUNDING,JAN_TAXING_MARGIN_INCOME_OF_ROUNDING, propsValueToString(testTaxingProp.marginIncomeOfRounding)]);
            VECT_TAXING_MARGIN_INCOME_OF_WITHHOLD.push([testYear, MES_TAXING_MARGIN_INCOME_OF_WITHHOLD,JAN_TAXING_MARGIN_INCOME_OF_WITHHOLD, propsValueToString(testTaxingProp.marginIncomeOfWithhold)]);
            VECT_TAXING_MARGIN_INCOME_OF_SOLIDARY.push([testYear, MES_TAXING_MARGIN_INCOME_OF_SOLIDARY,JAN_TAXING_MARGIN_INCOME_OF_SOLIDARY, propsValueToString(testTaxingProp.marginIncomeOfSolidary)]);
            VECT_TAXING_MARGIN_INCOME_OF_TAXRATE2.push([testYear, MES_TAXING_MARGIN_INCOME_OF_TAXRATE2,JAN_TAXING_MARGIN_INCOME_OF_TAXRATE2, propsValueToString(testTaxingProp.marginIncomeOfTaxRate2)]);
            VECT_TAXING_MARGIN_INCOME_OF_WHT_EMP.push([testYear, MES_TAXING_MARGIN_INCOME_OF_WHT_EMP,JAN_TAXING_MARGIN_INCOME_OF_WHT_EMP, propsValueToString(testTaxingProp.marginIncomeOfWthEmp)]);
            VECT_TAXING_MARGIN_INCOME_OF_WHT_AGR.push([testYear, MES_TAXING_MARGIN_INCOME_OF_WHT_AGR,JAN_TAXING_MARGIN_INCOME_OF_WHT_AGR, propsValueToString(testTaxingProp.marginIncomeOfWthAgr)]);
          }

          tableData.forEach((data) => {
            exportHistoryTerm(testProtokol, headerData, data);
          });
        }
      });
    });
  });
});

const HEALTH_MIN_MONTHLY_BASIS        :number = 101;
const HEALTH_MAX_ANNUALS_BASIS        :number = 102;
const HEALTH_LIM_MONTHLY_STATE        :number = 103;
const HEALTH_LIM_MONTHLY_DIS50        :number = 104;
const HEALTH_FACTOR_COMPOUND          :number = 105;
const HEALTH_FACTOR_EMPLOYEE          :number = 106;
const HEALTH_MARGIN_INCOME_EMP        :number = 107;
const HEALTH_MARGIN_INCOME_AGR        :number = 108;

const SALARY_WORKING_SHIFT_WEEK       :number = 201;
const SALARY_WORKING_SHIFT_TIME       :number = 202;
const SALARY_MIN_MONTHLY_WAGE         :number = 203;
const SALARY_MIN_HOURLY_WAGE          :number = 204;

const SOCIAL_MAX_ANNUALS_BASIS        :number = 301;
const SOCIAL_FACTOR_EMPLOYER          :number = 302;
const SOCIAL_FACTOR_EMPLOYER_HIGHER   :number = 303;
const SOCIAL_FACTOR_EMPLOYEE          :number = 304;
const SOCIAL_FACTOR_EMPLOYEE_GARANT   :number = 305;
const SOCIAL_FACTOR_EMPLOYEE_REDUCE   :number = 306;
const SOCIAL_MARGIN_INCOME_EMP        :number = 307;
const SOCIAL_MARGIN_INCOME_AGR        :number = 308;

const TAXING_ALLOWANCE_PAYER          :number = 401;
const TAXING_ALLOWANCE_DISAB_1ST      :number = 402;
const TAXING_ALLOWANCE_DISAB_2ND      :number = 403;
const TAXING_ALLOWANCE_DISAB_3RD      :number = 404;
const TAXING_ALLOWANCE_STUDY          :number = 405;
const TAXING_ALLOWANCE_CHILD_1ST      :number = 406;
const TAXING_ALLOWANCE_CHILD_2ND      :number = 407;
const TAXING_ALLOWANCE_CHILD_3RD      :number = 408;
const TAXING_FACTOR_ADVANCES          :number = 409;
const TAXING_FACTOR_WITHHOLD          :number = 410;
const TAXING_FACTOR_SOLIDARY          :number = 411;
const TAXING_FACTOR_TAXRATE2          :number = 412;
const TAXING_MIN_AMOUNT_OF_TAXBONUS   :number = 413;
const TAXING_MAX_AMOUNT_OF_TAXBONUS   :number = 414;
const TAXING_MARGIN_INCOME_OF_TAXBONUS:number = 415;
const TAXING_MARGIN_INCOME_OF_ROUNDING:number = 416;
const TAXING_MARGIN_INCOME_OF_WITHHOLD:number = 417;
const TAXING_MARGIN_INCOME_OF_SOLIDARY:number = 418;
const TAXING_MARGIN_INCOME_OF_TAXRATE2:number = 419;
const TAXING_MARGIN_INCOME_OF_WHT_EMP :number = 420;
const TAXING_MARGIN_INCOME_OF_WHT_AGR :number = 421;

function createHistoryFile(baseName: string, fileName: string): fs.WriteStream {
  const filePath = path.join(baseName, fileName);
  const fullPath = path.resolve(filePath);
  return fs.createWriteStream(fullPath, 'utf-8');
}

function exportHistoryStart(protokol: fs.WriteStream, data: [number, boolean][]) {
  protokol.write("History Term");
  data.forEach((col) => {
    if (col[1])
    {
      protokol.write(`\t${col[0]} Begin Value`)
      protokol.write(`\t${col[0]} Change Month`)
      protokol.write(`\t${col[0]} End Value`)
    }
    else
    {
      protokol.write(`\t${col[0]} Value`)
    }
  });
  protokol.write("\n")
}

function exportHistoryTerm(protokol: fs.WriteStream, head: [number, boolean][], data: [number, [number, number, string, string][]]) {
  protokol.write(historyTermName(data[0]));

  data[1].forEach((col) => {
    const header = head.find(x => (x[0] === col[0]));
    let yearOfChange: boolean = false;
    if (header != null) {
      yearOfChange = header[1];
    }
    protokol.write(`\t${col[2]}`)
    if (yearOfChange)
    {
      if (col[1] === 0)
      {
        protokol.write("\t")
      }
      else
      {
        protokol.write(`\t${col[1]}`)
      }
      protokol.write(`\t${col[3]}`)
    }
  });
  protokol.write("\n")
}

function historyTermName(termId: number): string {
  switch (termId) {
    case HEALTH_MIN_MONTHLY_BASIS : return "01_Health_01_MinMonthlyBasis";
    case HEALTH_MAX_ANNUALS_BASIS : return "01_Health_02_MaxAnnualsBasis";
    case HEALTH_LIM_MONTHLY_STATE : return "01_Health_03_LimMonthlyState";
    case HEALTH_LIM_MONTHLY_DIS50 : return "01_Health_04_LimMonthlyDis50";
    case HEALTH_FACTOR_COMPOUND : return "01_Health_05_FactorCompound";
    case HEALTH_FACTOR_EMPLOYEE : return "01_Health_06_FactorEmployee";
    case HEALTH_MARGIN_INCOME_EMP : return "01_Health_07_MarginIncomeEmp";
    case HEALTH_MARGIN_INCOME_AGR : return "01_Health_08_MarginIncomeAgr";
    case SALARY_WORKING_SHIFT_WEEK : return "02_Salary_01_WorkingShiftWeek";
    case SALARY_WORKING_SHIFT_TIME : return "02_Salary_02_WorkingShiftTime";
    case SALARY_MIN_MONTHLY_WAGE : return "02_Salary_03_MinMonthlyWage";
    case SALARY_MIN_HOURLY_WAGE : return "02_Salary_04_MinHourlyWage";
    case SOCIAL_MAX_ANNUALS_BASIS : return "03_Social_01_MaxAnnualsBasis";
    case SOCIAL_FACTOR_EMPLOYER : return "03_Social_02_FactorEmployer";
    case SOCIAL_FACTOR_EMPLOYER_HIGHER : return "03_Social_03_FactorEmployerHigher";
    case SOCIAL_FACTOR_EMPLOYEE : return "03_Social_04_FactorEmployee";
    case SOCIAL_FACTOR_EMPLOYEE_GARANT : return "03_Social_05_FactorEmployeeGarant";
    case SOCIAL_FACTOR_EMPLOYEE_REDUCE : return "03_Social_06_FactorEmployeeReduce";
    case SOCIAL_MARGIN_INCOME_EMP : return "03_Social_07_MarginIncomeEmp";
    case SOCIAL_MARGIN_INCOME_AGR : return "03_Social_08_MarginIncomeAgr";
    case TAXING_ALLOWANCE_PAYER : return "04_Taxing_01_AllowancePayer";
    case TAXING_ALLOWANCE_DISAB_1ST : return "04_Taxing_02_AllowanceDisab1st";
    case TAXING_ALLOWANCE_DISAB_2ND : return "04_Taxing_03_AllowanceDisab2nd";
    case TAXING_ALLOWANCE_DISAB_3RD : return "04_Taxing_04_AllowanceDisab3rd";
    case TAXING_ALLOWANCE_STUDY : return "04_Taxing_05_AllowanceStudy";
    case TAXING_ALLOWANCE_CHILD_1ST : return "04_Taxing_06_AllowanceChild1st";
    case TAXING_ALLOWANCE_CHILD_2ND : return "04_Taxing_07_AllowanceChild2nd";
    case TAXING_ALLOWANCE_CHILD_3RD : return "04_Taxing_08_AllowanceChild3rd";
    case TAXING_FACTOR_ADVANCES : return "04_Taxing_09_FactorAdvances";
    case TAXING_FACTOR_WITHHOLD : return "04_Taxing_10_FactorWithhold";
    case TAXING_FACTOR_SOLIDARY : return "04_Taxing_11_FactorSolidary";
    case TAXING_FACTOR_TAXRATE2 : return "04_Taxing_12_FactorTaxRate2";
    case TAXING_MIN_AMOUNT_OF_TAXBONUS : return "04_Taxing_13_MinAmountOfTaxBonus";
    case TAXING_MAX_AMOUNT_OF_TAXBONUS : return "04_Taxing_14_MaxAmountOfTaxBonus";
    case TAXING_MARGIN_INCOME_OF_TAXBONUS : return "04_Taxing_15_MarginIncomeOfTaxBonus";
    case TAXING_MARGIN_INCOME_OF_ROUNDING : return "04_Taxing_16_MarginIncomeOfRounding";
    case TAXING_MARGIN_INCOME_OF_WITHHOLD : return "04_Taxing_17_MarginIncomeOfWithhold";
    case TAXING_MARGIN_INCOME_OF_SOLIDARY : return "04_Taxing_18_MarginIncomeOfSolidary";
    case TAXING_MARGIN_INCOME_OF_TAXRATE2 : return "04_Taxing_18_MarginIncomeOfTaxRate2";
    case TAXING_MARGIN_INCOME_OF_WHT_EMP : return "04_Taxing_20_MarginIncomeOfWthEmp";
    case TAXING_MARGIN_INCOME_OF_WHT_AGR : return "04_Taxing_21_MarginIncomeOfWthAgr";
    default:
      return "Unknown Term";
  }
}

function historyTermNameCZ(termId: number): string {
  switch (termId) {
    case HEALTH_MIN_MONTHLY_BASIS : return "01_Health_01 Minimální základ zdravotního pojištění na jednoho pracovníka";
    case HEALTH_MAX_ANNUALS_BASIS : return "01_Health_02 Maximální roční vyměřovací základ na jednoho pracovníka (tzv.strop)";
    case HEALTH_LIM_MONTHLY_STATE : return "01_Health_03 Vyměřovací základ ze kterého platí pojistné stát za státní pojištěnce (mateřská, studenti, důchodci)";
    case HEALTH_LIM_MONTHLY_DIS50 : return "01_Health_04 Vyměřovací základ ze kterého platí pojistné stát za státní pojištěnce (mateřská, studenti, důchodci) u zaměstnavatele zaměstnávajícího více než 50% osob OZP";
    case HEALTH_FACTOR_COMPOUND : return "01_Health_05 složená sazba zdravotního pojištění (zaměstnace + zaměstnavatele)";
    case HEALTH_FACTOR_EMPLOYEE : return "01_Health_06 podíl sazby zdravotního pojištění připadajícího na zaměstnace (1/FACTOR_EMPLOYEE)";
    case HEALTH_MARGIN_INCOME_EMP : return "01_Health_07 hranice příjmu pro vznik účasti na pojištění pro zaměstnace v pracovním poměru";
    case HEALTH_MARGIN_INCOME_AGR : return "01_Health_08 hranice příjmu pro vznik účasti na pojištění pro zaměstnace na dohodu";
    case SALARY_WORKING_SHIFT_WEEK : return "02_Salary_01 Počet pracovních dnů v týdnu";
    case SALARY_WORKING_SHIFT_TIME : return "02_Salary_02 Počet pracovních hodin denně";
    case SALARY_MIN_MONTHLY_WAGE : return "02_Salary_03 Minimální mzda měsíční";
    case SALARY_MIN_HOURLY_WAGE : return "02_Salary_04 Minimální mzda hodinová (100*Kč)";
    case SOCIAL_MAX_ANNUALS_BASIS : return "03_Social_01 Maximální roční vyměřovací základ na jednoho pracovníka (tzv.strop)";
    case SOCIAL_FACTOR_EMPLOYER : return "03_Social_02 Sazba - standardní sociálního pojištění - zaměstnavatele";
    case SOCIAL_FACTOR_EMPLOYER_HIGHER : return "03_Social_03 Sazba - vyší sociálního pojištění - zaměstnavatele";
    case SOCIAL_FACTOR_EMPLOYEE : return "03_Social_04 Sazba sociálního pojištění - zaměstnance";
    case SOCIAL_FACTOR_EMPLOYEE_GARANT : return "03_Social_05 Sazba důchodového spoření - zaměstnance - s důchodovým spořením";
    case SOCIAL_FACTOR_EMPLOYEE_REDUCE : return "03_Social_06 Snížení sazby sociálního pojištění - zaměstnance - s důchodovým spořením";
    case SOCIAL_MARGIN_INCOME_EMP : return "03_Social_07 hranice příjmu pro vznik účasti na pojištění pro zaměstnace v pracovním poměru";
    case SOCIAL_MARGIN_INCOME_AGR : return "03_Social_08 hranice příjmu pro vznik účasti na pojištění pro zaměstnace na dohodu";
    case TAXING_ALLOWANCE_PAYER : return "04_Taxing_01 Částka slevy na poplatníka";
    case TAXING_ALLOWANCE_DISAB_1ST : return "04_Taxing_02 Částka slevy na invaliditu 1.stupně poplatníka";
    case TAXING_ALLOWANCE_DISAB_2ND : return "04_Taxing_03 Částka slevy na invaliditu 2.stupně poplatníka";
    case TAXING_ALLOWANCE_DISAB_3RD : return "04_Taxing_04 Částka slevy na invaliditu 3.stupně poplatníka";
    case TAXING_ALLOWANCE_STUDY : return "04_Taxing_05 Částka slevy na poplatníka studenta";
    case TAXING_ALLOWANCE_CHILD_1ST : return "04_Taxing_06 Částka slevy na dítě 1.pořadí";
    case TAXING_ALLOWANCE_CHILD_2ND : return "04_Taxing_07 Částka slevy na dítě 2.pořadí";
    case TAXING_ALLOWANCE_CHILD_3RD : return "04_Taxing_08 Částka slevy na dítě 3.pořadí";
    case TAXING_FACTOR_ADVANCES : return "04_Taxing_09 Sazba daně na zálohový příjem";
    case TAXING_FACTOR_WITHHOLD : return "04_Taxing_10 Sazba daně na srážkový příjem";
    case TAXING_FACTOR_SOLIDARY : return "04_Taxing_11 Sazba daně na solidární zvýšení";
    case TAXING_FACTOR_TAXRATE2 : return "04_Taxing_12 Sazba daně pro druhé pásmo daně";
    case TAXING_MIN_AMOUNT_OF_TAXBONUS : return "04_Taxing_13 Minimální částka pro daňový bonus";
    case TAXING_MAX_AMOUNT_OF_TAXBONUS : return "04_Taxing_14 Maximální částka pro daňový bonus";
    case TAXING_MARGIN_INCOME_OF_TAXBONUS : return "04_Taxing_15 Minimální výše příjmu pro nároku na daňový bonus";
    case TAXING_MARGIN_INCOME_OF_ROUNDING : return "04_Taxing_16 Maximální výše příjmu pro zaokrouhlování";
    case TAXING_MARGIN_INCOME_OF_WITHHOLD : return "04_Taxing_17 Maximální výše příjmu pro srážkový příjem";
    case TAXING_MARGIN_INCOME_OF_SOLIDARY : return "04_Taxing_18 Minimální výše příjmu pro solidární zvýšení daně";
    case TAXING_MARGIN_INCOME_OF_TAXRATE2 : return "04_Taxing_18 Minimální výše příjmu pro druhé pásmo daně";
    case TAXING_MARGIN_INCOME_OF_WHT_EMP : return "04_Taxing_20 hranice příjmu pro srážkovou daň pro zaměstnace v pracovním poměru (nepodepsal prohlášení)";
    case TAXING_MARGIN_INCOME_OF_WHT_AGR : return "04_Taxing_21 hranice příjmu pro srážkovou daň pro zaměstnace na dohodu (nepodepsal prohlášení)";
  default :
    return "Neznámý Termín";
  }
}

function propsValueToString(value: number): string {
  return `${value}`;
}

function propsValueToString(value: bigDecimal): string {
  const intValue: number = (value.multiply(100)).floor(0, RoundingModes.FLOOR);
  return `${intValue}`;
}


export function closeHistoryFile(protokol: fs.WriteStream) {
  protokol.close();
}

