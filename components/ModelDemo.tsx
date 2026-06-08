'use client';
import { useState, ChangeEvent } from 'react';

export default function ModelDemo() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setFile(e.target.files[0]);
  };

  const runAnalysis = async () => {
    if (!file) return;

    setLoading(true);
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('/api/analyze', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    setResult(data);
    setLoading(false);
  };

  return (
    // Applied dark theme styles: bg-[#1f1f1f], border-[#333], text-white
    <div className="p-8 bg-[#1f1f1f] border border-[#333] rounded-xl shadow-lg space-y-6 text-white">
      <h2 className="text-xl font-bold">AI Diagnostic Tool</h2>
      
      <input 
        type="file" 
        onChange={handleFileChange} 
        className="block w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-[#333] file:text-white hover:file:bg-[#444] cursor-pointer" 
      />

      <button 
        onClick={runAnalysis} 
        disabled={loading || !file}
        className="w-full bg-[#0070f3] text-white py-2 rounded-lg font-medium hover:bg-[#005bb5] disabled:bg-[#333] disabled:text-gray-500 transition-all"
      >
        {loading ? 'Processing...' : 'Run Analysis'}
      </button>

      {result && (
        <div className="p-4 bg-[#121212] rounded-lg border border-[#333] text-sm space-y-1">
          <p className="text-gray-300"><strong>Result:</strong> {result.classification}</p>
          <p className="text-gray-300"><strong>Confidence:</strong> {result.confidence}%</p>
          <p className="text-gray-500 text-xs mt-2">Processed: {result.processedAt}</p>
        </div>
      )}
    </div>
  );
}