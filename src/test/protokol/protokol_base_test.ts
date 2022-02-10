import * as path from 'path';
import * as fs from 'fs';
import bigDecimal = require('js-big-decimal');

export const __TEST_PROTOKOL_FILE__: boolean = true;

export const PROTOKOL_TEST_FOLDER = './test_values';

export function createProtokolFile(baseName: string, fileName: string): fs.WriteStream {
  const filePath = path.join(baseName, fileName);
  const fullPath = path.resolve(filePath);
  return fs.createWriteStream(fullPath, 'utf-8');
}

export function closeProtokolFile(protokol: fs.WriteStream) {
  protokol.close();
}

export function exportPropsStart(protokol: fs.WriteStream) {
  protokol.write('');
  protokol.write('YEAR');
  for (let testMonth = 1; testMonth <= 12; testMonth++) {
    protokol.write(`\t${testMonth}`);
  }
  protokol.write('\n');
}

export function exportPropsYear(protokol: fs.WriteStream, testYear: number) {
  protokol.write(`${testYear}`);
}

export function exportPropsEnd(protokol: fs.WriteStream) {
  protokol.write('\n');
}

export function exportPropsIntValue(protokol: fs.WriteStream, value: number) {
  protokol.write(`\t${value}`);
}

export function exportPropsDecValue(protokol: fs.WriteStream, value: bigDecimal) {
  const intValue = Number(value.multiply(new bigDecimal(100)).getValue());
  // valueFloat, _ := value.Float64()
  protokol.write(`\t${intValue}`);
}
