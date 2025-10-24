
import { GoogleGenAI, Type } from "@google/genai";
import { ScanOptions, ScanReport } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // In a real app, you'd want to handle this more gracefully.
  // For this context, we'll throw an error if the key is missing.
  // The environment is expected to provide this key.
  throw new Error("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const reportSchema = {
  type: Type.OBJECT,
  properties: {
    overallScore: { 
      type: Type.NUMBER, 
      description: "A score from 0 to 100 representing the overall health of the codebase. 100 is a perfect score." 
    },
    summary: { 
      type: Type.STRING, 
      description: "A brief, two to three-sentence summary of the code quality, highlighting the main findings." 
    },
    issueCounts: {
        type: Type.OBJECT,
        properties: {
            'Critical': { type: Type.NUMBER },
            'High': { type: Type.NUMBER },
            'Medium': { type: Type.NUMBER },
            'Low': { type: Type.NUMBER },
            'Info': { type: Type.NUMBER },
        },
        required: ['Critical', 'High', 'Medium', 'Low', 'Info'],
    },
    issues: {
      type: Type.ARRAY,
      description: "A list of identified issues in the codebase.",
      items: {
        type: Type.OBJECT,
        properties: {
          file: { type: Type.STRING, description: "The path to the file where the issue was found." },
          line: { type: Type.NUMBER, description: "The line number of the issue." },
          description: { type: Type.STRING, description: "A clear, concise description of the issue." },
          severity: {
            type: Type.STRING,
            enum: ['Critical', 'High', 'Medium', 'Low', 'Info'],
            description: "The severity level of the issue."
          },
          category: {
            type: Type.STRING,
            enum: ['Security', 'Dependencies', 'Code Style', 'Performance', 'Documentation', 'Best Practices'],
            description: "The category of the issue."
          },
          recommendation: { type: Type.STRING, description: "A detailed recommendation on how to fix the issue." }
        },
        required: ['file', 'line', 'description', 'severity', 'category', 'recommendation']
      }
    }
  },
  required: ['overallScore', 'summary', 'issues', 'issueCounts']
};


export const generateCodeReport = async (repoUrl: string, options: ScanOptions): Promise<ScanReport> => {
  const selectedOptions = Object.entries(options)
    .filter(([, value]) => value)
    .map(([key]) => key)
    .join(', ');

  const prompt = `
    Act as an expert code quality and security analysis tool.
    I will provide you with a GitHub repository URL and a list of analysis categories.
    Your task is to generate a comprehensive code quality report in JSON format.
    Do not include any explanatory text before or after the JSON object. The output must be only the JSON.

    Repository URL: ${repoUrl}
    Analysis Categories: ${selectedOptions}

    Please analyze the conceptual structure and potential issues of a typical repository of this nature.
    For example, if it's a React project, consider common pitfalls like missing keys in lists, large component sizes, or dependency vulnerabilities in packages like 'react-scripts'.
    If it's a Python/Django project, consider potential SQL injection vulnerabilities, missing environment variable protection, or inefficient database queries.
    
    Generate a realistic and detailed list of 10 to 15 issues across the requested categories.
    The 'file' paths should be plausible for the given repository type.
    The descriptions and recommendations should be specific and actionable.
    The 'overallScore' should reflect the number and severity of the generated issues.
    The 'issueCounts' must sum up the total number of issues for each severity level.
    The JSON output must strictly adhere to the provided schema.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: reportSchema,
        temperature: 0.2,
      },
    });

    const reportJson = response.text;
    const report = JSON.parse(reportJson);

    // Validate the received structure, though the schema should enforce it.
    if (!report.overallScore || !report.summary || !Array.isArray(report.issues)) {
        throw new Error("Invalid report format received from API.");
    }

    return report as ScanReport;
  } catch (error) {
    console.error("Error generating code report:", error);
    throw new Error("Failed to generate code report. Please check the repository URL and try again.");
  }
};
