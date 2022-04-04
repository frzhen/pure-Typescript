/**
 * @Author: Fred R. Zhen
 * @Date: 2022/4/4 13:10
 * @Email: fred.zhen@gmail.com
 */
import fs from 'fs';

const matches = fs.readFileSync('football.csv', {
  encoding: 'utf-8'
}).split('\n')
  .map((row: string ): string[] => {
    return row.split(',');
  });

// enum - enumeration
enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D'
};

const homeWin = 'H';
const awayWin = 'A';
const draw = 'D';

let manUnitedWins = 0;

matches.forEach((match: string[]):void =>{
 if ( match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
   manUnitedWins++;
 } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
   manUnitedWins++;
 }
})

console.log(`Man United won: ${manUnitedWins} games!!!`);
