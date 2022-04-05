# Pure TypeScript Example

### Setup
1. `npm install`
2. `npm run dev`

### Branch description
  - **main & TS-reusable-2-interface**: utilizing object composition design pattern to resolve reusable code issue;
  - **JS-reg-solution**: solution without reusable code
  - **TS-enum**: use enum to simplify match results
  - **TS-refactor**: refactor into class and methods
  - **TS-reusable-1-abs-Gen**: implement inheritance design pattern with abstract class and generic feature to resolve code re-usability issue

## Composition Design Pattern
```mermaid
   classDiagram
   index <|-- MatchReader
   index <|-- Analytics
   class MatchReader{
   reader: DataReader 
   matches: MatchData[] 
   +load() void
   }
   MatchReader *-- DataReader: composition
   class DataReader{
   <<interface>> 
   data: string[]
   +read() void
   }
   DataReader o-- CsvFileReader: association
   class CsvFileReader{
   fileName: string
   data: string[][]
   +read() void
   }
   MatchReader o-- MatchData
   class MatchResult{
   <<enum>> 
   HomeWin = 'H',
   AwayWin = 'A',
   Draw = 'D'
   }
   class MatchData{
   <<type>>
   <<tuple>
   Date
   string
   string
   number
   number
   MatchResult
   string
   }
   MatchData o-- MatchResult
   
   class Analytics{
   analyzer: Analyzer
   outputTarget: OutputTarget
   +buildAndPrintRepor() void
   +static winsAnalysisWithHtmlReport( teamName: string) Analytics
   }
   Analytics *--Analyzer: composition
   Analytics *--OutputTarget: composition
   class Analyzer{
   <<interface>>
   +run(matches: MatchData[]) string
   }
   class OutputTarget{
   <<interface>>
   +print(report: string) void
   }
   class WinsAnalysis{
   teamName: string
   +run(matches: MatchData[]) string
   }
   Analyzer <|--WinsAnalysis: implementation
   class AverageGoalsAnalysis{
   +run(matches: MatchData[]) string
   }
   Analyzer <|--AverageGoalsAnalysis: implementation
   class ConsoleReport{
   +print(report: string) void
   }
   OutputTarget <|-- ConsoleReport: implementation
   MatchReader <|-- dateStringToDate: implementation
   class HtmlReport{
   +print(report: string) void
   }
   OutputTarget <|-- HtmlReport: implementation
```


## Inheritance Design Pattern

```mermaid
   classDiagram
   index --|> MatchReader
   CsvFileReader <|--MatchReader: inheritance
   class CsvFileReader {
   <<Generic Type>>
   fileName: string
   data: ~T~[]
   +abstract mapRow(row: string[]) ~T~
   +read() void
   }
   class MatchReader{
   +mapRow(row: string[]) MatchData
   }
   MatchReader o-- MatchData: association
   class MatchData{
   <<type>>
   Date,
   string,
   string,
   number,
   number,
   MatchResult,
   string
   }
   class MatchResult{
   <<enum>>
   HomeWin = 'H',
   AwayWin = 'A',
   Draw = 'D'
   }
   MatchData o-- MatchResult: association
   MatchReader o-- dateStringToDate: implementation
```
