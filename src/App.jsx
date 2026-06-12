import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import CTA from './components/CTA';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Platform from './components/Platform';
import DemoVideo from './components/DemoVideo';
import WhyEduline from './components/WhyEduline';
import Demo from './components/Demo';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 w-100vw overflow-x-hidden poppins">
      {/* <Navbar /> */}
      <Hero />
      {/* <DemoVideo />
      <Demo />
      <Features />
      <WhyEduline />
      <Platform /> */}
      <CTA />
      <Pricing />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
}
export default App;