/**
 * @Author: Fred R. Zhen
 * @Date: 2022/4/4 13:10
 * @Email: fred.zhen@gmail.com
 */
import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "./MatchResult";
import {MatchReader} from "./MatchReader";


const matchReader = new MatchReader(new CsvFileReader('football.csv'));
matchReader.load();

console.log(matchReader.matches[2]);

const teamName = 'Man United'
let manUnitedWins = 0;

matchReader.matches.forEach((match ):void =>{
 if ( (match[1] === teamName &&  match[5] === MatchResult.HomeWin) || (match[2] === teamName && match[5] === MatchResult.AwayWin )) {
   manUnitedWins++;
 }
});

console.log(`Man United won: ${manUnitedWins} games!!!`);
