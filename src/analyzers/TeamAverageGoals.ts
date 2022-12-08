import { Analyzer } from "../interfaces/Analyzer";
import { MatchData } from "../dataTypes/MatchData";

export class TeamAverageGoals implements Analyzer {
  constructor(public teamName: string) {}

  run(matches: MatchData[]): string {
    let goals: number = 0;
    let games: number = 0;

    matches.forEach((match: MatchData): void => {
      if (match[1] === this.teamName){
        goals = goals + match[3];
        games++;
      } else if (match[2] === this.teamName) {
        goals = goals + match[4];
        games++;
      }
    })
    const game_average_goals: number = goals / games;
    console.log(`${goals}: ${games}`);
    return `Team ${this.teamName} average goals per games: ${game_average_goals}`;
  }
}
