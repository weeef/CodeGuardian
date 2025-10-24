
import React, { useMemo } from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';
import { ScanReport, Issue, IssueSeverity, IssueCategory } from '../types';
import { SEVERITY_CONFIG, CATEGORY_ICONS } from '../constants';

interface ReportDisplayProps {
  report: ScanReport;
  repoUrl: string;
  onNewScan: () => void;
}

const severityOrder: IssueSeverity[] = ['Critical', 'High', 'Medium', 'Low', 'Info'];

const COLORS: { [key in IssueSeverity]: string } = {
  'Critical': '#ef4444',
  'High': '#f97316',
  'Medium': '#eab308',
  'Low': '#3b82f6',
  'Info': '#6b7280',
};

const IssueItem: React.FC<{ issue: Issue }> = ({ issue }) => (
  <div className="bg-base-300/50 p-4 rounded-lg border border-slate-700 transition-all duration-300 hover:bg-base-300 hover:border-brand-secondary">
    <div className="flex items-start justify-between">
      <div>
        <div className="flex items-center gap-2">
            <span className={`font-bold ${SEVERITY_CONFIG[issue.severity].color}`}>{issue.severity}</span>
            <span className="text-sm text-slate-400 font-mono flex items-center gap-2">
                {CATEGORY_ICONS[issue.category]}
                {issue.category}
            </span>
        </div>
        <p className="mt-2 text-base-content">{issue.description}</p>
      </div>
      <div className="text-right flex-shrink-0 ml-4">
        <p className="font-mono text-sm text-brand-light truncate">{issue.file}:{issue.line}</p>
      </div>
    </div>
    <div className="mt-3 pt-3 border-t border-slate-700">
        <p className="text-sm text-slate-400"><span className="font-semibold text-slate-300">Recommendation:</span> {issue.recommendation}</p>
    </div>
  </div>
);


const ReportDisplay: React.FC<ReportDisplayProps> = ({ report, repoUrl, onNewScan }) => {
  const sortedIssues = useMemo(() => {
    return [...report.issues].sort((a, b) => {
      return severityOrder.indexOf(a.severity) - severityOrder.indexOf(b.severity);
    });
  }, [report.issues]);
  
  const scoreColor = report.overallScore > 85 ? 'text-success' : report.overallScore > 60 ? 'text-warning' : 'text-error';

  const chartData = severityOrder
    .map(key => ({ name: key, value: report.issueCounts[key] }))
    .filter(d => d.value > 0);

  return (
    <div className="space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
            <div>
                <h2 className="text-2xl font-bold text-white">Analysis Report</h2>
                <p className="text-brand-light font-mono truncate max-w-sm">{repoUrl}</p>
            </div>
            <button onClick={onNewScan} className="px-4 py-2 bg-brand-secondary text-white font-semibold rounded-md hover:bg-brand-primary transition duration-200">
                Start New Scan
            </button>
        </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 bg-base-200 p-6 rounded-lg shadow-lg border border-base-300 flex flex-col items-center justify-center">
          <h3 className="text-lg font-semibold text-slate-300">Overall Score</h3>
          <p className={`text-7xl font-bold mt-2 ${scoreColor}`}>{report.overallScore}</p>
          <p className="mt-4 text-center text-slate-400">{report.summary}</p>
        </div>
        <div className="lg:col-span-2 bg-base-200 p-6 rounded-lg shadow-lg border border-base-300">
            <h3 className="text-lg font-semibold text-slate-300 mb-4">Issue Breakdown</h3>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={chartData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" label>
                      {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[entry.name as IssueSeverity]} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '0.5rem' }} />
                  </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center flex-wrap gap-4 mt-4">
                {chartData.map(item => (
                    <div key={item.name} className="flex items-center space-x-2 text-sm">
                        <span className="w-3 h-3 rounded-full" style={{backgroundColor: COLORS[item.name as IssueSeverity]}}></span>
                        <span className="text-slate-300">{item.name}</span>
                        <span className="font-bold text-white">{item.value}</span>
                    </div>
                ))}
            </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-xl font-bold text-white mb-4">Identified Issues ({report.issues.length})</h3>
        <div className="space-y-4">
          {sortedIssues.length > 0 ? (
            sortedIssues.map((issue, index) => <IssueItem key={index} issue={issue} />)
          ) : (
            <div className="text-center py-10 bg-base-200 rounded-lg">
                <p className="text-lg text-success">Congratulations! No issues found.</p>
                <p className="text-slate-400">Your codebase looks clean and healthy.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReportDisplay;
