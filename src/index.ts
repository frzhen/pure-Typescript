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

let manUnitedWins = 0;

matches.forEach((match: string[]):void =>{
 if ( match[1] === 'Man United' && match[5] === 'H') {
   manUnitedWins++;
 } else if (match[2] === 'Man United' && match[5] === 'A') {
   manUnitedWins++;
 }
})

console.log(`Man United won: ${manUnitedWins} games!!!`);
