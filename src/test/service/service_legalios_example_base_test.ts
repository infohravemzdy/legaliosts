import bigDecimal = require('js-big-decimal');
import { Result } from '@badrap/result';
import { IPeriod, Period } from '../../proj/service_types/period';
import { HistoryResultError } from '../../proj/service_errors/HistoryResultError';
import { IServiceLegalios, ServiceLegalios } from '../../proj/service/ServiceLegalios';
import { IPropsHealth } from '../../proj/service_interfaces/IPropsHealth';
import { IPropsSalary } from '../../proj/service_interfaces/IPropsSalary';
import { IPropsSocial } from '../../proj/service_interfaces/IPropsSocial';
import { IPropsTaxing } from '../../proj/service_interfaces/IPropsTaxing';
import { IBundleProps } from '../../proj/service_interfaces/IBundleProps';
import { IProps } from '../../proj/service_interfaces/IProps';
import * as path from 'path';
import * as fs from 'fs';
import {assert, expect} from 'chai';
import {__TEST_PROTOKOL_FILE__} from "../protokol/protokol_base_test";

export const EXAMPLE_TEST_FOLDER = './test_expected';

export class TestIntParams {
  constructor(
    readonly title: string,
    readonly year: number,
    readonly month: number,
    readonly expYear: number,
    readonly expMonth: number,
    readonly expected: number,
  ) {}
  testBasicResult(
    result: Result<IBundleProps, HistoryResultError>,
    bundle: IBundleProps,
    props: IProps,
    error: HistoryResultError,
  ) {
    it('Result should be OK', () => {
      assert.equal(result.isOk, true);
    });
    it('GetProps should return error = null', () => {
      assert.equal(error, null);
    });
    it('GetProps should return props not be nil', () => {
      assert.notEqual(bundle, null);
    });
    it(`GetProps should return getPeriodYear = ${this.expYear} and getPeriodMonth = ${this.expMonth}`, () => {
      expect(bundle.PeriodYear()).to.equal(this.expYear);
      expect(bundle.PeriodMonth()).to.equal(this.expMonth);
    });
    it('GetProps should return healthProps not to be nil', () => {
      assert.notEqual(props, null);
    });
  }
}

export class TestIntScenario {
  constructor(readonly title: string, readonly tests: TestIntParams[]) {}
}

export class TestParams {
  constructor(readonly title: string, readonly year: number, readonly month: number) {}
}

export class TestScenario {
  constructor(readonly title: string, readonly tests: TestParams[]) {}
}

export class TestDecParams {
  constructor(
    readonly title: string,
    readonly year: number,
    readonly month: number,
    readonly expYear: number,
    readonly expMonth: number,
    readonly expected: bigDecimal,
  ) {}
  testBasicResult(
    result: Result<IBundleProps, HistoryResultError>,
    bundle: IBundleProps,
    props: IProps,
    error: HistoryResultError,
  ) {
    it('Result should be OK', () => {
      assert.equal(result.isOk, true);
    });
    it('GetProps should return error = null', () => {
      assert.equal(error, null);
    });
    it('GetProps should return props not be nil', () => {
      assert.notEqual(bundle, null);
    });
    it(`GetProps should return getPeriodYear = ${this.expYear} and getPeriodMonth = ${this.expMonth}`, () => {
      expect(bundle.PeriodYear()).to.equal(this.expYear);
      expect(bundle.PeriodMonth()).to.equal(this.expMonth);
    });
    it('GetProps should return healthProps not to be nil', () => {
      assert.notEqual(props, null);
    });
  }
}
export class TestDecScenario {
  constructor(readonly title: string, readonly tests: TestDecParams[]) {}
}

export function initSut(year: number, month: number): [IPeriod, IServiceLegalios] {
  return [Period.getWithYearMonth(year, month), new ServiceLegalios()];
}

export function getResults(
  period: IPeriod,
  service: IServiceLegalios,
): [Result<IBundleProps, HistoryResultError>, IBundleProps, HistoryResultError] {
  const result: Result<IBundleProps, HistoryResultError> = service.GetBundle(period);

  let bundle: IBundleProps = null;
  let error: HistoryResultError = null;

  if (result.isOk) {
    bundle = result.value;
  }
  if (result.isErr) {
    error = result.error;
  }
  return [result, bundle, error];
}

export function getHealthResults(
  period: IPeriod,
  service: IServiceLegalios,
): [Result<IBundleProps, HistoryResultError>, IBundleProps, IPropsHealth, HistoryResultError] {
  const result: Result<IBundleProps, HistoryResultError> = service.GetBundle(period);

  let bundle: IBundleProps = null;
  let error: HistoryResultError = null;
  let props: IPropsHealth = null;

  if (result.isOk) {
    bundle = result.value;
    props = bundle.HealthProps();
  }
  if (result.isErr) {
    error = result.error;
  }
  return [result, bundle, props, error];
}

export function getSalaryResults(
  period: IPeriod,
  service: IServiceLegalios,
): [Result<IBundleProps, HistoryResultError>, IBundleProps, IPropsSalary, HistoryResultError] {
  const result: Result<IBundleProps, HistoryResultError> = service.GetBundle(period);

  let bundle: IBundleProps = null;
  let error: HistoryResultError = null;
  let props: IPropsSalary = null;

  if (result.isOk) {
    bundle = result.value;
    props = bundle.SalaryProps();
  }
  if (result.isErr) {
    error = result.error;
  }
  return [result, bundle, props, error];
}

export function getSocialResults(
  period: IPeriod,
  service: IServiceLegalios,
): [Result<IBundleProps, HistoryResultError>, IBundleProps, IPropsSocial, HistoryResultError] {
  const result: Result<IBundleProps, HistoryResultError> = service.GetBundle(period);

  let bundle: IBundleProps = null;
  let error: HistoryResultError = null;
  let props: IPropsSocial = null;

  if (result.isOk) {
    bundle = result.value;
    props = bundle.SocialProps();
  }
  if (result.isErr) {
    error = result.error;
  }
  return [result, bundle, props, error];
}

export function getTaxingResults(
  period: IPeriod,
  service: IServiceLegalios,
): [Result<IBundleProps, HistoryResultError>, IBundleProps, IPropsTaxing, HistoryResultError] {
  const result: Result<IBundleProps, HistoryResultError> = service.GetBundle(period);

  let bundle: IBundleProps = null;
  let error: HistoryResultError = null;
  let props: IPropsTaxing = null;

  if (result.isOk) {
    bundle = result.value;
    props = bundle.TaxingProps();
  }
  if (result.isErr) {
    error = result.error;
  }
  return [result, bundle, props, error];
}

export function createLoggerFile(baseName: string, fileName: string): fs.WriteStream {
  const filePath = path.join(baseName, fileName);
  const fullPath = path.resolve(filePath);
  return fs.createWriteStream(fullPath, 'utf-8');
}

function closeLoggerFile(protokol: fs.WriteStream) {
  protokol.close();
}

function logTestStart(protokol: fs.WriteStream) {
  protokol.write('');
  protokol.write('YEAR');
  for (let testMonth = 1; testMonth <= 12; testMonth++) {
    protokol.write(`\t${testMonth}`);
  }
  protokol.write('\n');
}

function logTestYear(protokol: fs.WriteStream, testYear: string) {
  protokol.write(`${testYear}`);
}

function logTestEnd(protokol: fs.WriteStream) {
  protokol.write('\n');
}

function logExampleIntValue(protokol: fs.WriteStream, value: number) {
  protokol.write(`\t${value}`);
}

export function logTestNumExamples(fileName: string, examples: TestIntScenario[]) {
  if (__TEST_PROTOKOL_FILE__ === true) {
    const testLogger = createLoggerFile(EXAMPLE_TEST_FOLDER, fileName);

    logTestStart(testLogger);
    examples.forEach((tx) => {
      logTestYear(testLogger, tx.title);
      tx.tests.forEach((tt) => {
        logExampleIntValue(testLogger, tt.expected);
      });
      logTestEnd(testLogger);
    });
    closeLoggerFile(testLogger);
  }
}

function logExampleDecValue(protokol: fs.WriteStream, value: bigDecimal) {
  const intValue = Number(value.multiply(new bigDecimal(100)).getValue());
  protokol.write(`\t${intValue}`);
}

export function logTestDecExamples(fileName: string, examples: TestDecScenario[]) {
  if (__TEST_PROTOKOL_FILE__ === true) {
    const testLogger = createLoggerFile(EXAMPLE_TEST_FOLDER, fileName);

    logTestStart(testLogger);
    examples.forEach((tx) => {
      logTestYear(testLogger, tx.title);
      tx.tests.forEach((tt) => {
        logExampleDecValue(testLogger, tt.expected);
      });
      logTestEnd(testLogger);
    });
    closeLoggerFile(testLogger);
  }
}
