import { MatchData } from "./MatchData";
import { WinAnalysis } from "./analyzers/WinAnalysis";
import { HtmlReport } from "./reportTargets/HtmlReport";

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  static winAnalysisWithHtmlReport(team: string) {
    return new Summary(new WinAnalysis(team), new HtmlReport())
  }

  constructor(
    public analyzer: Analyzer,
    public outputTarget: OutputTarget
  ) {}

  buildAndReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}