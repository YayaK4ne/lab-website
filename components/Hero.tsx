export default function Hero() {
  return (
    <section style={{ padding: '80px 20px', display: 'flex', alignItems: 'center', gap: '40px', background: '#1f1f1f', borderRadius: '20px', color: '#ffffff' }}>
      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>AI-Driven Dental Analytics</h1>
        <p style={{ fontSize: '1.2rem', color: '#cccccc', marginBottom: '2rem' }}>
          Bridging the gap between computational intelligence and clinical diagnostics at McGill.
        </p>
        <button style={{ background: '#0070f3', color: 'white', padding: '12px 24px', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>View Research</button>
      </div>
      <div style={{ flex: 1, background: '#121212', height: '300px', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #333' }}>
        <code style={{ color: '#00ff00' }}>{"<System status='Active' />"}</code>
      </div>
    </section>
  );
}