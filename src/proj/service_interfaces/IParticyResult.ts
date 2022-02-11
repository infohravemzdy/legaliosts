export interface IParticyResult {
  particyCode(): number;
  resultBasis(): number;
  resultValue(): number;
  setResultValue(value: number): number;
}