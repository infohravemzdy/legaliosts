import { initSut, getResults, TestParams, TestScenario } from './service_legalios_example_base_test';
import {assert, expect} from 'chai';

describe('TestBundleFailure_ForYear2010', () => {
  const scenarios = [
    new TestScenario('2010', [
      new TestParams('2010-1', 2010, 1),
      new TestParams('2010-2', 2010, 2),
      new TestParams('2010-3', 2010, 3),
      new TestParams('2010-4', 2010, 4),
      new TestParams('2010-5', 2010, 5),
      new TestParams('2010-6', 2010, 6),
      new TestParams('2010-7', 2010, 7),
      new TestParams('2010-8', 2010, 8),
      new TestParams('2010-9', 2010, 9),
      new TestParams('2010-10', 2010, 10),
      new TestParams('2010-11', 2010, 11),
      new TestParams('2010-12', 2010, 12),
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
