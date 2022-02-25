import * as fs from 'fs';
import bigDecimal = require('js-big-decimal');
import { Period } from '../../proj/service_types/period';
import { IFactoryHealth } from '../../proj/factories/FactoryHealth';
import { IPropsHealth } from '../../proj/service_interfaces/IPropsHealth';
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

type propsHealthIntFunc = (props: IPropsHealth) => number;
type propsHealthDecFunc = (props: IPropsHealth) => bigDecimal;

export function exportHealthPropsIntFile(
  baseName: string,
  fileName: string,
  minYear: number,
  maxYear: number,
  sut: IFactoryHealth,
  func: propsHealthIntFunc,
) {
  if (__TEST_PROTOKOL_FILE__) {
    const testProtokol = createProtokolFile(baseName, fileName);

    exportPropsStart(testProtokol);

    for (let testYear = minYear; testYear <= maxYear; testYear++) {
      exportHealthPropsIntLine(testProtokol, testYear, sut, func);
    }
    closeProtokolFile(testProtokol);
  }
}

export function exportHealthPropsDecFile(
  baseName: string,
  fileName: string,
  minYear: number,
  maxYear: number,
  sut: IFactoryHealth,
  func: propsHealthDecFunc,
) {
  if (__TEST_PROTOKOL_FILE__) {
    const testProtokol = createProtokolFile(baseName, fileName);

    exportPropsStart(testProtokol);

    for (let testYear = minYear; testYear <= maxYear; testYear++) {
      exportHealthPropsDecLine(testProtokol, testYear, sut, func);
    }
    closeProtokolFile(testProtokol);
  }
}

function exportHealthPropsIntLine(
  protokol: fs.WriteStream,
  year: number,
  sut: IFactoryHealth,
  func: propsHealthIntFunc,
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

function exportHealthPropsDecLine(
  protokol: fs.WriteStream,
  year: number,
  sut: IFactoryHealth,
  func: propsHealthDecFunc,
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
