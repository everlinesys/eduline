import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import CTA from './components/CTA';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Platform from './components/Platform';
import DemoVideo from './components/DemoVideo';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar />
      <Hero />
      <DemoVideo />
      <Features />
      <Platform />
      <CTA />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;