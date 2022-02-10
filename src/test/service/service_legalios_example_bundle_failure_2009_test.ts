import { initSut, getResults } from './service_legalios_example_base_test';
import {assert, expect} from 'chai';
import { TestPeriodParams, TestPeriodScenario } from '../TestStructs';

describe('TestBundleFailure_ForYear2009', () => {
  const scenarios = [
      new TestPeriodScenario('2009', [
      new TestPeriodParams('2009-1', 2009, 1),
      new TestPeriodParams('2009-2', 2009, 2),
      new TestPeriodParams('2009-3', 2009, 3),
      new TestPeriodParams('2009-4', 2009, 4),
      new TestPeriodParams('2009-5', 2009, 5),
      new TestPeriodParams('2009-6', 2009, 6),
      new TestPeriodParams('2009-7', 2009, 7),
      new TestPeriodParams('2009-8', 2009, 8),
      new TestPeriodParams('2009-9', 2009, 9),
      new TestPeriodParams('2009-10', 2009, 10),
      new TestPeriodParams('2009-11', 2009, 11),
      new TestPeriodParams('2009-12', 2009, 12),
    ]),
  ];
  scenarios.forEach((tx) => {
    describe(`year ${tx.title}`, () => {
      tx.tests.forEach((tt) => {
        const [period, service] = initSut(tt.year, tt.month);
        const [result, bundle, error] = getResults(period, service);

        it('Result should be Failure', () => {
          assert.equal(result.isErr, true);
        });
        it('GetProps should return error', () => {
          assert.notEqual(error, null);
        });
        it('GetProps should return props be nil', () => {
          assert.equal(bundle, null);
        });
      });
    });
  });
});
