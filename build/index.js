"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @Author: Fred R. Zhen
 * @Date: 2022/4/4 13:10
 * @Email: fred.zhen@gmail.com
 */
const CsvFileReader_1 = require("./CsvFileReader");
const MatchResult_1 = require("./MatchResult");
const reader = new CsvFileReader_1.CsvFileReader('football.csv');
reader.read();
console.log(reader.data);
const teamName = 'Man United';
let manUnitedWins = 0;
reader.data.forEach((match) => {
    if ((match[1] === teamName && match[5] === MatchResult_1.MatchResult.HomeWin) || (match[2] === teamName && match[5] === MatchResult_1.MatchResult.AwayWin)) {
        manUnitedWins++;
    }
});
console.log(`Man United won: ${manUnitedWins} games!!!`);
