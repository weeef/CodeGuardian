
import React from 'react';
import { IssueSeverity, IssueCategory } from './types';

export const ShieldIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className || "w-6 h-6"}>
    <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd" />
  </svg>
);

export const BugIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className || "w-6 h-6"}>
        <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071 1.052A32.94 32.94 0 0112 11.593c-3.834 0-7.398-1.558-9.864-4.254a.75.75 0 00-1.052 1.07c3.15 3.243 7.37 5.184 11.956 5.184 4.586 0 8.806-1.94 11.956-5.184a.75.75 0 10-1.052-1.07c-2.466 2.696-6.03 4.254-9.864 4.254-.117 0-.235-.002-.352-.005a.75.75 0 00-.65-.742A42.41 42.41 0 0012.963 2.286z" clipRule="evenodd" />
        <path d="M12 21a9 9 0 100-18 9 9 0 000 18zM12 4.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" />
    </svg>
);

export const CodeBracketIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className || "w-6 h-6"}>
        <path fillRule="evenodd" d="M10.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h3a3 3 0 003-3v-9a3 3 0 00-3-3h-3zm-1.5 3a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5v9a1.5 1.5 0 01-1.5 1.5h-3a1.5 1.5 0 01-1.5-1.5v-9zM8.25 9.75a.75.75 0 01.75-.75h.01a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM15 9.75a.75.75 0 01.75-.75h.01a.75.75 0 010 1.5H15.75a.75.75 0 01-.75-.75zm.75 3a.75.75 0 00-.75.75v.01a.75.75 0 001.5 0V13.5a.75.75 0 00-.75-.75zm-6 0a.75.75 0 00-.75.75v.01a.75.75 0 001.5 0V13.5a.75.75 0 00-.75-.75z" clipRule="evenodd" />
    </svg>
);

export const BoltIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className || "w-6 h-6"}>
        <path fillRule="evenodd" d="M11.25 2.25c-.414 0-.75.336-.75.75v8.25h-3a.75.75 0 00-.638 1.183l5.25 7.5a.75.75 0 001.276 0l5.25-7.5a.75.75 0 00-.638-1.183h-3V3a.75.75 0 00-.75-.75h-1.5z" clipRule="evenodd" />
    </svg>
);

export const BookOpenIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className || "w-6 h-6"}>
        <path fillRule="evenodd" d="M12 3a.75.75 0 01.75.75v.516c0 .414.336.75.75.75h1.5a.75.75 0 010 1.5H13.5a.75.75 0 01-.75-.75V4.5a.75.75 0 01-.75-.75A.75.75 0 0112 3zm-2.25 2.25a.75.75 0 000 1.5h-.516a.75.75 0 00-.75.75v1.5a.75.75 0 001.5 0v-.75a.75.75 0 00-.75-.75h.516a.75.75 0 000-1.5zm-2.13-1.612a.75.75 0 00-1.06 0l-3.75 3.75a.75.75 0 000 1.06l1.888 1.888a.75.75 0 101.06-1.06L5.31 9.31l3.22-3.22a.75.75 0 000-1.06z" clipRule="evenodd" />
        <path d="M10.125 10.125a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v3a.75.75 0 01-.75.75h-3a.75.75 0 01-.75-.75v-3zM9 15.375c0-.828.672-1.5 1.5-1.5h3c.828 0 1.5.672 1.5 1.5v.75H9v-.75z" />
        <path fillRule="evenodd" d="M9 19.5a.75.75 0 00-.75-.75H3.75a.75.75 0 000 1.5h4.5a.75.75 0 00.75-.75zM12.75 18.75a.75.75 0 01.75.75v.01a.75.75 0 01-1.5 0V19.5a.75.75 0 01.75-.75zM15.75 15a.75.75 0 00-.75.75v1.5a.75.75 0 001.5 0v-1.5a.75.75 0 00-.75-.75zm3.75 1.5a.75.75 0 00-.75.75v1.5a.75.75 0 001.5 0v-1.5a.75.75 0 00-.75-.75zM15 21a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H15.75A.75.75 0 0115 21z" clipRule="evenodd" />
    </svg>
);


// FIX: Replaced JSX.Element with React.ReactElement to resolve namespace error.
export const SEVERITY_CONFIG: { [key in IssueSeverity]: { color: string; icon: React.ReactElement } } = {
  'Critical': { color: 'text-red-500', icon: <BugIcon className="w-5 h-5" /> },
  'High': { color: 'text-orange-500', icon: <BugIcon className="w-5 h-5" /> },
  'Medium': { color: 'text-yellow-500', icon: <BugIcon className="w-5 h-5" /> },
  'Low': { color: 'text-blue-400', icon: <BugIcon className="w-5 h-5" /> },
  'Info': { color: 'text-gray-400', icon: <BugIcon className="w-5 h-5" /> },
};

// FIX: Replaced JSX.Element with React.ReactElement to resolve namespace error.
export const CATEGORY_ICONS: { [key in IssueCategory]: React.ReactElement } = {
    'Security': <ShieldIcon className="w-5 h-5 text-red-400" />,
    'Dependencies': <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-purple-400"><path d="M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z" /><path d="M14.25 8.5c-.414 0-.75.336-.75.75v2.5a.75.75 0 00.75.75h2.5a.75.75 0 000-1.5h-1.75v-1.75a.75.75 0 00-.75-.75z" /></svg>,
    'Code Style': <CodeBracketIcon className="w-5 h-5 text-blue-400" />,
    'Performance': <BoltIcon className="w-5 h-5 text-yellow-400" />,
    'Documentation': <BookOpenIcon className="w-5 h-5 text-green-400" />,
    'Best Practices': <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-indigo-400"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
};
