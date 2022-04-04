/**
 * @Author: Fred R. Zhen
 * @Date: 2022/4/4 13:10
 * @Email: fred.zhen@gmail.com
 */
import { CsvFileReader, MatchData } from "./CsvFileReader";
import { MatchResult } from "./MatchResult";


const reader = new CsvFileReader('football.csv');
reader.read();

console.log(reader.data[0]);

const teamName = 'Man United'
let manUnitedWins = 0;

reader.data.forEach((match: MatchData ):void =>{
 if ( (match[1] === teamName &&  match[5] === MatchResult.HomeWin) || (match[2] === teamName && match[5] === MatchResult.AwayWin )) {
   manUnitedWins++;
 }
})

console.log(`Man United won: ${manUnitedWins} games!!!`);
