/**
 * @Author: Fred R. Zhen
 * @Date: 2022/4/4 13:10
 * @Email: fred.zhen@gmail.com
 */
import { CsvFileReader } from './readers/CsvFileReader';
import { MatchReader } from "./readers/MatchReader";
import { Analytics } from "./utils/Analytics";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { ConsoleReport } from "./reportTargets/ConoleReport";
import { AverageGoalsAnalysis } from "./analyzers/AverageGoalsAnalysis";
import { HtmlReport } from "./reportTargets/HtmlReport";
import { TeamAverageGoals } from './analyzers/TeamAverageGoals';


// Read Data from csv
const matchReader = new MatchReader(new CsvFileReader('./src/data/football.csv'));
// Load matches in match format
matchReader.load();

// console.log(matchReader.matches.slice(323, 325));

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

// Generate HTML report
const averageGoalsHtml = new Analytics(
  new AverageGoalsAnalysis(),
  new HtmlReport()
);

averageGoalsHtml.buildAndPrintReport(matchReader.matches);

// Find Newcastle wins
const newCastleWins = new Analytics(
  new WinsAnalysis('Newcastle'),
  new ConsoleReport()
);
newCastleWins.buildAndPrintReport(matchReader.matches);

// Find NewCastle average goals
const averageGoalsNewCastle = new Analytics(
  new TeamAverageGoals('Newcastle'),
  new ConsoleReport()
);
averageGoalsNewCastle.buildAndPrintReport(matchReader.matches);


// These are something about class method shortcuts
// using class instances instead of class objects
// Downside: not obvious about what you get, less readability
//
// Use static to shorten MatchReader declaration
const newMatches = MatchReader.fromCsv('./src/data/football.csv');
newMatches.load();
averageGoals.buildAndPrintReport(newMatches.matches);

// Use static to shorten declaration of Analytics combination
const manUnitedWinsHtml = Analytics.winsAnalysisWithHtmlReport('Man United');
manUnitedWinsHtml.buildAndPrintReport(matchReader.matches);


