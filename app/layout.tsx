import './globals.css';
import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
        {/* Navigation Bar */}
        <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            {/* Logo / Name */}
            <Link href="/" className="font-bold text-2xl tracking-tight text-blue-900">
              CTru AI
            </Link>
            
            {/* Links Container - explicitly set to flex */}
            <div className="flex items-center gap-8 font-medium">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">Overview</Link>
              <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors">Blog</Link>
              <Link href="/team" className="text-gray-700 hover:text-blue-600 transition-colors">Team</Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-grow max-w-7xl mx-auto w-full px-6 py-8">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-gray-200 bg-white">
          <div className="max-w-7xl mx-auto px-6 py-8 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} CTru AI | McGill University
          </div>
        </footer>
      </body>
    </html>
  );
}