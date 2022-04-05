/**
 * @Author: Fred R. Zhen
 * @Date: 2022/4/5 11:07
 * @Email: fred.zhen@gmail.com
 */
import { MatchData } from "../dataTypes/MatchData";
import { Analyzer } from "../interfaces/Analyzer";
import { OutputTarget } from "../interfaces/OutputTarget";
import { WinsAnalysis } from "../analyzers/WinsAnalysis";
import { HtmlReport } from "../reportTarget/HtmlReport";

export class Analytics {
  constructor(
    public analyzer:Analyzer,
    public outputTarget: OutputTarget) {}

  buildAndPrintReport( matches: MatchData[] ): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }

  static winsAnalysisWithHtmlReport( teamName: string): Analytics{
    return new Analytics(
      new WinsAnalysis(teamName),
      new HtmlReport()
    )
  }
}

