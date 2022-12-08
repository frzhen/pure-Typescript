/**
 * @Author: Fred R. Zhen
 * @Date: 2022/4/4 23:40
 * @Email: fred.zhen@gmail.com
 */
import { DataReader } from "../interfaces/DataReader";
import { dateStringToDate } from "../utils/methods";
import { MatchResult } from "../dataTypes/MatchResult";
import { MatchData } from "../dataTypes/MatchData";
import { CsvFileReader } from "./CsvFileReader";


export class MatchReader {
  public matches: MatchData[] = [];
  constructor(public reader: DataReader) {}
  load(): void {
    this.reader.read();
    this.matches = this.reader.data
      .map((row: string[]): MatchData => {
        return [
          dateStringToDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          row[5] as MatchResult,
          row[6]
        ];
      }
    );
  }

  // A class method that shorten the assigment
  static fromCsv(fileName: string): MatchReader {
    return new MatchReader(new CsvFileReader(fileName));
  }
}
