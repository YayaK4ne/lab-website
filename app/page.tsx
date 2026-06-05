import Hero from '../components/Hero';
import Features from '../components/Features';
import StatusWidget from '../components/StatusWidget';
import ModelDemo from '../components/ModelDemo'; // Import it

export default function Home() {
  return (
    <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px' }}>
      <Hero />
      <StatusWidget />
      <Features />
      <ModelDemo />
    </main>
  );
}