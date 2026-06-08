'use client'; // This is required because we are using React hooks
import { useState } from 'react';

export default function ModelDemo() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
const runAnalysis = async () => {
  setLoading(true);
  
  const response = await fetch('/api/analyze', {
    method: 'POST',
    body: JSON.stringify({ data: "input_data_here" }),
  });
  
  const data = await response.json();
  setResult(`Confidence: ${data.confidence} | Class: ${data.classification}`);
  setLoading(false);
};

  return (
    <div style={{ padding: '30px', background: '#1f1f1f', borderRadius: '15px', border: '1px solid #333', color: '#ffffff', marginTop: '20px' }}>
      <h3 style={{ marginBottom: '10px' }}>AI Model Interface</h3>
      <p style={{ marginBottom: '20px', color: '#aaa' }}>Simulate inference on clinical dental datasets.</p>
      
      <button 
        onClick={runAnalysis} 
        disabled={loading}
        style={{ background: loading ? '#555' : '#0070f3', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '8px', cursor: 'pointer' }}
      >
        {loading ? 'Processing...' : 'Run Analysis'}
      </button>

      {result && (
        <div style={{ marginTop: '20px', padding: '15px', background: '#121212', borderRadius: '8px', border: '1px solid #0070f3' }}>
          <strong>Output:</strong> {result}
        </div>
      )}
    </div>
  );
}