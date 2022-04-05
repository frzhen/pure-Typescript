/**
 * @Author: Fred R. Zhen
 * @Date: 2022/4/4 16:59
 * @Email: fred.zhen@gmail.com
 */
import fs from 'fs';

export class CsvFileReader {
  data: string[][] = [];
  constructor(public fileName: string) {}

  read(): void {
    this.data = fs.readFileSync(this.fileName, {
      encoding: 'utf-8'
    }).split('\n')
      .map((row: string ): string[] => {
        return row.split(',');
      });
    // Delete the last empty data row
    this.data.pop();
  }
}
