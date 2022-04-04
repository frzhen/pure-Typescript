import { MatchResult } from "./MatchResult";
import { MatchReader } from "./MatchReader";


const reader = new MatchReader('football.csv');
reader.read();

console.log(reader.data[1]);

const teamName = 'Man United'
let manUnitedWins = 0;

reader.data.forEach((match):void =>{
 if ( (match[1] === teamName &&  match[5] === MatchResult.HomeWin) || (match[2] === teamName && match[5] === MatchResult.AwayWin )) {
   manUnitedWins++;
 }
})

console.log(`Man United won: ${manUnitedWins} games!!!`);
