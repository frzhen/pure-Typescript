/**
 * @Author: Fred R. Zhen
 * @Date: 2022/4/4 13:10
 * @Email: fred.zhen@gmail.com
 */
import { CsvFileReader } from "./CsvFileReader";


// enum - enumeration
enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D'
}

const reader = new CsvFileReader('football.csv');
reader.read();

const teamName = 'Man United'
let manUnitedWins = 0;

reader.data.forEach((match: string[]):void =>{
 if ( (match[1] === teamName &&  match[5] === MatchResult.HomeWin) || (match[2] === teamName && match[5] === MatchResult.AwayWin )) {
   manUnitedWins++;
 }
})

console.log(`Man United won: ${manUnitedWins} games!!!`);
