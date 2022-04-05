/**
 * @Author: Fred R. Zhen
 * @Date: 2022/4/5 12:02
 * @Email: fred.zhen@gmail.com
 */
import {MatchData} from "../dataTypes/MatchData";

export interface Analyzer {
  run(matches: MatchData[]):string;
}
