
export interface ScanOptions {
  security: boolean;
  dependencies: boolean;
  codeStyle: boolean;
  performance: boolean;
  documentation: boolean;
}

export type IssueSeverity = 'Critical' | 'High' | 'Medium' | 'Low' | 'Info';
export type IssueCategory = 'Security' | 'Dependencies' | 'Code Style' | 'Performance' | 'Documentation' | 'Best Practices';

export interface Issue {
  file: string;
  line: number;
  description: string;
  severity: IssueSeverity;
  category: IssueCategory;
  recommendation: string;
}

export interface ScanReport {
  overallScore: number;
  summary: string;
  issues: Issue[];
  issueCounts: {
    [key in IssueSeverity]: number;
  };
}
