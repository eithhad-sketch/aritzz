import { useState, useEffect, useRef } from 'react';
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  ChevronRight,
  Car,
  Crown,
  Clock,
  Shield,
  Star,
  Calendar,
  ArrowRight,
  CheckCircle,
  Sparkles,
} from 'lucide-react';
import { Fleet } from '@/components/Fleet';
import { Services } from '@/components/Services';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Hero } from '@/components/Hero';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      <Navbar scrolled={scrolled} />
      <Hero />
      <Fleet />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
