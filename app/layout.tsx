import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav className="p-5 bg-gray-800 text-white flex gap-5">
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/team">Team</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/publications">Publications</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}