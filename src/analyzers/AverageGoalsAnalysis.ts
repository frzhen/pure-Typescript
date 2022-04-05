/**
 * @Author: Fred R. Zhen
 * @Date: 2022/4/5 12:00
 * @Email: fred.zhen@gmail.com
 */
import { MatchData } from "../dataTypes/MatchData";
import { Analyzer } from "../interfaces/Analyzer";

export class AverageGoalsAnalysis implements Analyzer {


  run(matches: MatchData[]): string {
    let totalGoals: number = 0;
    matches.forEach((match: MatchData) => {
      if ( match[3] !== 0 || match[4] !==0 ) {
        totalGoals += match[3] + match[4];
      }
    });
    let averageGoals = (totalGoals / matches.length).toFixed(2);
    return `The average goals of this season is ${averageGoals}.`;
}
}
