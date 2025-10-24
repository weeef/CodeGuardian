
import React from 'react';
import { ScanOptions as ScanOptionsType } from '../types';

interface ScanOptionsProps {
  options: ScanOptionsType;
  setOptions: (options: ScanOptionsType) => void;
}

interface OptionConfig {
  key: keyof ScanOptionsType;
  label: string;
  description: string;
  isPro?: boolean;
}

const optionConfigs: OptionConfig[] = [
  { key: 'security', label: 'Security Vulnerabilities', description: 'Scan for common security risks like XSS and injection.' },
  { key: 'dependencies', label: 'Outdated Dependencies', description: 'Check for packages with known vulnerabilities.' },
  { key: 'codeStyle', label: 'Code Style & Best Practices', description: 'Analyze code for consistency and maintainability.' },
  { key: 'performance', label: 'Performance Bottlenecks', description: 'Identify inefficient code and memory leaks.', isPro: true },
  { key: 'documentation', label: 'Documentation Quality', description: 'Check for missing or incomplete code comments.', isPro: true },
];

const ScanOptions: React.FC<ScanOptionsProps> = ({ options, setOptions }) => {
  const handleToggle = (key: keyof ScanOptionsType) => {
    setOptions({ ...options, [key]: !options[key] });
  };

  return (
    <div className="bg-base-200 p-6 rounded-lg shadow-lg border border-base-300">
        <h3 className="text-lg font-semibold text-white mb-4">Analysis Options</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {optionConfigs.map((config) => (
            <label
                key={config.key}
                className={`flex items-start p-4 rounded-lg cursor-pointer transition-colors duration-200 ${
                options[config.key] ? 'bg-brand-primary/20 border-brand-secondary' : 'bg-base-300 border-slate-600'
                } border`}
            >
                <input
                type="checkbox"
                checked={options[config.key]}
                onChange={() => handleToggle(config.key)}
                className="h-5 w-5 rounded border-gray-300 text-brand-secondary focus:ring-brand-secondary mt-1"
                />
                <div className="ml-4 flex-grow">
                    <div className="flex items-center justify-between">
                        <span className="font-medium text-white">{config.label}</span>
                        {config.isPro && (
                            <span className="text-xs font-semibold bg-yellow-500 text-yellow-900 px-2 py-0.5 rounded-full">
                            PRO
                            </span>
                        )}
                    </div>
                    <p className="text-sm text-slate-400 mt-1">{config.description}</p>
                </div>
            </label>
            ))}
      </div>
    </div>
  );
};

export default ScanOptions;
