/**
 * @Author: Fred R. Zhen
 * @Date: 2022/4/4 16:59
 * @Email: fred.zhen@gmail.com
 */
import fs from 'fs';

export class CsvFileReader {
  public data: string[][] = [];
  constructor(public fileName: string) {}

  public read(): void {
    // split rows in the big strings
    this.data = fs.readFileSync(this.fileName, {
        encoding: 'utf-8'
      })
      .split('\n')
      .map((row: string ): string[] => {
        return row.split(',');
      });
    // console.log(this.data.length)
    this.data.pop()
    // console.log(this.data.length)
  }
}
