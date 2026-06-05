import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ padding: '20px', display: 'flex', gap: '20px', borderBottom: '1px solid #333' }}>
      <Link href="/" style={{ color: '#fff', fontWeight: 'bold' }}>CTru AI</Link>
      <Link href="/about" style={{ color: '#aaa' }}>About</Link>
      <Link href="/overview" style={{ color: '#aaa' }}>Overview</Link>
    </nav>
  );
}