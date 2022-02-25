import * as fs from 'fs';
import bigDecimal = require('js-big-decimal');
import { Period } from '../../proj/service_types/period';
import { IFactoryTaxing } from '../../proj/factories/FactoryTaxing';
import { IPropsTaxing } from '../../proj/service_interfaces/IPropsTaxing';
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

type propsTaxingIntFunc = (props: IPropsTaxing) => number;
type propsTaxingDecFunc = (props: IPropsTaxing) => bigDecimal;

export function exportTaxingPropsIntFile(
  baseName: string,
  fileName: string,
  minYear: number,
  maxYear: number,
  sut: IFactoryTaxing,
  func: propsTaxingIntFunc,
) {
  if (__TEST_PROTOKOL_FILE__) {
    const testProtokol = createProtokolFile(baseName, fileName);

    exportPropsStart(testProtokol);

    for (let testYear = minYear; testYear <= maxYear; testYear++) {
      exportTaxingPropsIntLine(testProtokol, testYear, sut, func);
    }
    closeProtokolFile(testProtokol);
  }
}

export function exportTaxingPropsDecFile(
  baseName: string,
  fileName: string,
  minYear: number,
  maxYear: number,
  sut: IFactoryTaxing,
  func: propsTaxingDecFunc,
) {
  if (__TEST_PROTOKOL_FILE__) {
    const testProtokol = createProtokolFile(baseName, fileName);

    exportPropsStart(testProtokol);

    for (let testYear = minYear; testYear <= maxYear; testYear++) {
      exportTaxingPropsDecLine(testProtokol, testYear, sut, func);
    }
    closeProtokolFile(testProtokol);
  }
}

function exportTaxingPropsIntLine(
  protokol: fs.WriteStream,
  year: number,
  sut: IFactoryTaxing,
  func: propsTaxingIntFunc,
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

function exportTaxingPropsDecLine(
  protokol: fs.WriteStream,
  year: number,
  sut: IFactoryTaxing,
  func: propsTaxingDecFunc,
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
