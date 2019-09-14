import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { WinAnalysis } from "./analyzers/WinAnalysis";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { Summary } from "./Summary";

const csvFileReader = new CsvFileReader("football.csv");

const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(
  new WinAnalysis("Man United"),
  new ConsoleReport()
);
summary.buildAndReport(matchReader.matches);