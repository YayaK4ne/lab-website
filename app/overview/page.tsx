export default function OverviewPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-gray-900">Research Overview</h1>
      
      <section className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">Methodology</h2>
        <p className="text-gray-600 leading-relaxed">
          Our research focuses on automating dental diagnostics through high-performance AI models. 
          We leverage modular architectures to process clinical imaging with minimal latency.
        </p>
      </section>

      <section className="bg-blue-900 p-8 rounded-xl text-white">
        <h3 className="text-xl font-semibold mb-4">The Pipeline</h3>
        <ul className="space-y-2">
          <li>✓ Data Ingestion & Normalization</li>
          <li>✓ Feature Extraction via Neural Networks</li>
          <li>✓ Clinical Inference Output</li>
        </ul>
      </section>
    </div>
  );
}