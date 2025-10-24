
import React, { useState, useCallback, useEffect } from 'react';
import { ScanOptions as ScanOptionsType, ScanReport } from './types';
import { generateCodeReport } from './services/geminiService';
import Header from './components/Header';
import RepoInput from './components/RepoInput';
import ScanOptions from './components/ScanOptions';
import ReportDisplay from './components/ReportDisplay';
import LoadingSpinner from './components/LoadingSpinner';
import { ShieldIcon } from './constants';

const App: React.FC = () => {
  const [repoUrl, setRepoUrl] = useState<string>('');
  const [options, setOptions] = useState<ScanOptionsType>({
    security: true,
    dependencies: true,
    codeStyle: true,
    performance: false, // Pro feature
    documentation: false, // Pro feature
  });
  const [report, setReport] = useState<ScanReport | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [loadingMessage, setLoadingMessage] = useState<string>('Initializing scan...');
  
  const loadingMessages = [
    "Warming up the AI code analyzer...",
    "Connecting to repository...",
    "Cloning repository into virtual environment...",
    "Analyzing dependency tree...",
    "Linting files for style consistency...",
    "Running advanced security audit...",
    "Compiling performance metrics...",
    "Generating final report...",
  ];

  useEffect(() => {
    // FIX: Replaced NodeJS.Timeout with ReturnType<typeof setInterval> for browser compatibility.
    let messageInterval: ReturnType<typeof setInterval>;
    if (isLoading) {
      let i = 0;
      setLoadingMessage(loadingMessages[i]);
      messageInterval = setInterval(() => {
        i = (i + 1) % loadingMessages.length;
        setLoadingMessage(loadingMessages[i]);
      }, 2500);
    }
    return () => clearInterval(messageInterval);
  }, [isLoading]);

  const handleScan = useCallback(async () => {
    if (!repoUrl) {
      setError('Please enter a valid GitHub repository URL.');
      return;
    }
    setIsLoading(true);
    setError(null);
    setReport(null);
    try {
      const generatedReport = await generateCodeReport(repoUrl, options);
      setReport(generatedReport);
    } catch (err) {
      setError(
        err instanceof Error ? `An error occurred: ${err.message}` : 'An unknown error occurred.'
      );
    } finally {
      setIsLoading(false);
    }
  }, [repoUrl, options]);

  const resetScan = () => {
    setRepoUrl('');
    setReport(null);
    setError(null);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-base-100 font-sans p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <Header />
        <main className="mt-8">
          {!report && !isLoading && (
            <div className="animate-fade-in space-y-8">
              <div className="text-center">
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Instant Code Quality Reports</h2>
                  <p className="mt-4 text-lg leading-8 text-slate-400">
                    Turn complex code analysis into a simple, one-click process.
                  </p>
              </div>
              <RepoInput repoUrl={repoUrl} setRepoUrl={setRepoUrl} onScan={handleScan} disabled={isLoading} />
              <ScanOptions options={options} setOptions={setOptions} />
            </div>
          )}
          
          {error && (
            <div className="mt-6 p-4 bg-red-900/50 border border-error rounded-lg text-center animate-fade-in">
              <p className="text-red-300">{error}</p>
              <button onClick={() => setError(null)} className="mt-2 text-sm font-semibold text-white hover:underline">
                Try again
              </button>
            </div>
          )}

          {isLoading && <LoadingSpinner message={loadingMessage} />}
          
          {report && !isLoading && (
            <div className="animate-slide-in-up">
              <ReportDisplay report={report} repoUrl={repoUrl} onNewScan={resetScan} />
            </div>
          )}
        </main>
        <footer className="text-center mt-12 text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Code Guardian AI. Powered by Gemini.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
