/**
 * @Author: Fred R. Zhen
 * @Date: 2022/4/5 11:07
 * @Email: fred.zhen@gmail.com
 */
import { MatchData } from "../dataTypes/MatchData";
import { Analyzer } from "../interfaces/Analyzer";
import { OutputTarget } from "../interfaces/OutputTarget";

export class Analytics {
  constructor(
    public analyzer:Analyzer,
    public outputTarget: OutputTarget) {}
  buildAndPrintReport( matches: MatchData[] ): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}

