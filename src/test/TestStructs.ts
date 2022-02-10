import bigDecimal = require('js-big-decimal');
import { Result } from '@badrap/result';
import { HistoryResultError, IBundleProps, IProps } from '../proj';
import { assert, expect } from 'chai';

export class TestYearScenario {
  constructor(readonly title: string, readonly minYear: number, readonly maxYear: number) {}
}

export class TestYearExpParams {
  constructor(readonly title: string, readonly year: number, readonly month: number, readonly expected: number) {}
}

export class TestYearExpScenario {
  constructor(readonly title: string, readonly tests: TestYearExpParams[]) {}
}

export class TestPeriodParams {
  constructor(readonly title: string, readonly year: number, readonly month: number) {}
}

export class TestPeriodScenario {
  constructor(readonly title: string, readonly tests: TestPeriodParams[]) {}
}

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

