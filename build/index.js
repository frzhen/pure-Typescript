"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @Author: Fred R. Zhen
 * @Date: 2022/4/4 13:10
 * @Email: fred.zhen@gmail.com
 */
const CsvFileReader_1 = require("./CsvFileReader");
// enum - enumeration
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult || (MatchResult = {}));
const reader = new CsvFileReader_1.CsvFileReader('football.csv');
reader.read();
const teamName = 'Man United';
let manUnitedWins = 0;
reader.data.forEach((match) => {
    if ((match[1] === teamName && match[5] === MatchResult.HomeWin) || (match[2] === teamName && match[5] === MatchResult.AwayWin)) {
        manUnitedWins++;
    }
});
console.log(`Man United won: ${manUnitedWins} games!!!`);
