/**
 * @Author: Fred R. Zhen
 * @Date: 2022/4/5 11:25
 * @Email: fred.zhen@gmail.com
 */
import { MatchData } from "../dataTypes/MatchData";
import { MatchResult } from "../dataTypes/MatchResult";
import { Analyzer } from "../interfaces/Analyzer";

export class WinsAnalysis implements Analyzer{
  constructor( public teamName: string ) {}

  run( matches: MatchData[] ): string {
    let wins = 0;

    matches.forEach(( match: MatchData ): void =>{
      if ( (match[1] === this.teamName &&  match[5] === MatchResult.HomeWin)
        || (match[2] === this.teamName && match[5] === MatchResult.AwayWin )) {
        wins++;
      }
    });

    return `Team ${this.teamName} won ${wins} games!`;
}
}
