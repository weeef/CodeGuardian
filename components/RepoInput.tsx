
import React from 'react';

interface RepoInputProps {
  repoUrl: string;
  setRepoUrl: (url: string) => void;
  onScan: () => void;
  disabled: boolean;
}

const RepoInput: React.FC<RepoInputProps> = ({ repoUrl, setRepoUrl, onScan, disabled }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onScan();
  };

  return (
    <div className="bg-base-200 p-6 rounded-lg shadow-lg border border-base-300">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-4">
        <div className="relative flex-grow w-full">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-slate-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                </svg>
            </div>
            <input
            type="text"
            value={repoUrl}
            onChange={(e) => setRepoUrl(e.target.value)}
            placeholder="https://github.com/user/repository"
            className="w-full pl-10 pr-4 py-3 bg-base-300 text-base-content rounded-md border border-slate-600 focus:ring-2 focus:ring-brand-secondary focus:border-brand-secondary transition duration-200"
            disabled={disabled}
            />
        </div>
        <button
          type="submit"
          disabled={disabled || !repoUrl}
          className="w-full sm:w-auto px-6 py-3 bg-brand-secondary text-white font-semibold rounded-md shadow-md hover:bg-brand-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-base-100 focus:ring-brand-secondary transition duration-200 disabled:bg-base-300 disabled:text-slate-500 disabled:cursor-not-allowed"
        >
          Scan Repository
        </button>
      </form>
    </div>
  );
};

export default RepoInput;
