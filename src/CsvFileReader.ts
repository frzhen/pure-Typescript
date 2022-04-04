/**
 * @Author: Fred R. Zhen
 * @Date: 2022/4/4 16:59
 * @Email: fred.zhen@gmail.com
 */
import fs from 'fs';


// define a tuple for Match data

export abstract class CsvFileReader<T> {
  data: T[] = [];

  constructor(public fileName: string) {}

  abstract mapRow(row: string[]): T;

  read(): void {
    this.data = fs.readFileSync(this.fileName, {
      encoding: 'utf-8'
    }).split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      })
      .map(this.mapRow);
  }
}
