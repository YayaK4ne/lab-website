// 1. Define the data here, outside or inside the component function
const features = [
  { title: "Real-time Inference", desc: "Low-latency processing of dental imagery." },
  { title: "Data Pipeline", desc: "Automated ingestion and pre-processing." },
  { title: "Clinical UI", desc: "Intuitive dashboards for practitioners." }
];

export default function Features() {
  // 2. Now 'features' is accessible here for the .map() function
  return (
    <section style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', padding: '40px 0' }}>
      {features.map((f, i) => (
        <div key={i} style={{ padding: '30px', border: '1px solid #333', borderRadius: '15px', background: '#121212', color: '#ffffff' }}>
          <h3 style={{ marginBottom: '10px' }}>{f.title}</h3>
          <p style={{ color: '#aaa' }}>{f.desc}</p>
        </div>
      ))}
    </section>
  );
}