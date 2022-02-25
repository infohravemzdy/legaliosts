import * as fs from 'fs';
import bigDecimal = require('js-big-decimal');
import { Period } from '../../proj/service_types/period';
import { IFactorySalary } from '../../proj/factories/FactorySalary';
import { IPropsSalary } from '../../proj/service_interfaces/IPropsSalary';
import {
  createProtokolFile,
  closeProtokolFile,
  exportPropsStart,
  exportPropsYear,
  exportPropsEnd,
  exportPropsDecValue,
  exportPropsIntValue,
  __TEST_PROTOKOL_FILE__,
} from './protokol_base_test';

type propsSalaryIntFunc = (props: IPropsSalary) => number;
type propsSalaryDecFunc = (props: IPropsSalary) => bigDecimal;

export function exportSalaryPropsIntFile(
  baseName: string,
  fileName: string,
  minYear: number,
  maxYear: number,
  sut: IFactorySalary,
  func: propsSalaryIntFunc,
) {
  if (__TEST_PROTOKOL_FILE__) {
    const testProtokol = createProtokolFile(baseName, fileName);

    exportPropsStart(testProtokol);

    for (let testYear = minYear; testYear <= maxYear; testYear++) {
      exportSalaryPropsIntLine(testProtokol, testYear, sut, func);
    }
    closeProtokolFile(testProtokol);
  }
}

export function exportSalaryPropsDecFile(
  baseName: string,
  fileName: string,
  minYear: number,
  maxYear: number,
  sut: IFactorySalary,
  func: propsSalaryDecFunc,
) {
  if (__TEST_PROTOKOL_FILE__) {
    const testProtokol = createProtokolFile(baseName, fileName);

    exportPropsStart(testProtokol);

    for (let testYear = minYear; testYear <= maxYear; testYear++) {
      exportSalaryPropsDecLine(testProtokol, testYear, sut, func);
    }
    closeProtokolFile(testProtokol);
  }
}

function exportSalaryPropsIntLine(
  protokol: fs.WriteStream,
  year: number,
  sut: IFactorySalary,
  func: propsSalaryIntFunc,
) {
  exportPropsYear(protokol, year);

  for (let testMonth = 1; testMonth <= 12; testMonth++) {
    const testPeriod = Period.getWithYearMonth(year, testMonth);
    const testResult = sut.GetProps(testPeriod);
    let testValue: number = 0;
    if (testResult != null) {
      testValue = func(testResult);
    }
    exportPropsIntValue(protokol, testValue);
  }
  exportPropsEnd(protokol);
}

function exportSalaryPropsDecLine(
  protokol: fs.WriteStream,
  year: number,
  sut: IFactorySalary,
  func: propsSalaryDecFunc,
) {
  exportPropsYear(protokol, year);

  for (let testMonth = 1; testMonth <= 12; testMonth++) {
    const testPeriod = Period.getWithYearMonth(year, testMonth);
    const testResult = sut.GetProps(testPeriod);
    let testValue: bigDecimal = new bigDecimal(0);
    if (testResult != null) {
      testValue = func(testResult);
    }
    exportPropsDecValue(protokol, testValue);
  }
  exportPropsEnd(protokol);
}
