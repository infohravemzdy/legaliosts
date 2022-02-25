import * as fs from 'fs';
import bigDecimal = require('js-big-decimal');
import { Period } from '../../proj/service_types/period';
import { IFactorySocial } from '../../proj/factories/FactorySocial';
import { IPropsSocial } from '../../proj/service_interfaces/IPropsSocial';
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

type propsSocialIntFunc = (props: IPropsSocial) => number;
type propsSocialDecFunc = (props: IPropsSocial) => bigDecimal;

export function exportSocialPropsIntFile(
  baseName: string,
  fileName: string,
  minYear: number,
  maxYear: number,
  sut: IFactorySocial,
  func: propsSocialIntFunc,
) {
  if (__TEST_PROTOKOL_FILE__) {
    const testProtokol = createProtokolFile(baseName, fileName);

    exportPropsStart(testProtokol);

    for (let testYear = minYear; testYear <= maxYear; testYear++) {
      exportSocialPropsIntLine(testProtokol, testYear, sut, func);
    }
    closeProtokolFile(testProtokol);
  }
}

export function exportSocialPropsDecFile(
  baseName: string,
  fileName: string,
  minYear: number,
  maxYear: number,
  sut: IFactorySocial,
  func: propsSocialDecFunc,
) {
  if (__TEST_PROTOKOL_FILE__) {
    const testProtokol = createProtokolFile(baseName, fileName);

    exportPropsStart(testProtokol);

    for (let testYear = minYear; testYear <= maxYear; testYear++) {
      exportSocialPropsDecLine(testProtokol, testYear, sut, func);
    }
    closeProtokolFile(testProtokol);
  }
}

function exportSocialPropsIntLine(
  protokol: fs.WriteStream,
  year: number,
  sut: IFactorySocial,
  func: propsSocialIntFunc,
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

function exportSocialPropsDecLine(
  protokol: fs.WriteStream,
  year: number,
  sut: IFactorySocial,
  func: propsSocialDecFunc,
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
