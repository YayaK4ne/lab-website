export default function StatusWidget() {
  return (
    <div style={{ padding: '15px', background: '#1f1f1f', border: '1px solid #333', borderRadius: '10px', display: 'inline-block', marginTop: '20px', color: '#ffffff' }}>
      <span style={{ color: '#00ff00', fontWeight: 'bold' }}>● System Online</span>
      <p style={{ margin: '5px 0 0 0', fontSize: '0.9rem', color: '#aaa' }}>Last Sync: {new Date().toLocaleDateString()}</p>
    </div>
  );
}