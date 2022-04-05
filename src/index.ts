/**
 * @Author: Fred R. Zhen
 * @Date: 2022/4/4 13:10
 * @Email: fred.zhen@gmail.com
 */
import { CsvFileReader } from './readers/CsvFileReader';
import { MatchReader } from "./readers/MatchReader";
import { Analytics } from "./utils/Analytics";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { ConsoleReport } from "./reportTarget/ConoleReport";
import { AverageGoalsAnalysis } from "./analyzers/AverageGoalsAnalysis";


// Read Data from csv
const matchReader = new MatchReader(new CsvFileReader('./src/data/football.csv'));
matchReader.load();

console.log(matchReader.matches.slice(230, 233));

// Find Man United wins
const manUnitedWins = new Analytics(
  new WinsAnalysis('Man United'),
  new ConsoleReport()
);

manUnitedWins.buildAndPrintReport(matchReader.matches);

// Find Average goals in this season
const averageGoals = new Analytics(
  new AverageGoalsAnalysis(),
  new ConsoleReport()
);

averageGoals.buildAndPrintReport(matchReader.matches);
