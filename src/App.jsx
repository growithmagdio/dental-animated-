import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import HeroCanvas from './components/HeroCanvas';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Doctors from './components/Doctors';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import Reviews from './components/Reviews';
import AppointmentForm from './components/AppointmentForm';
import ContactLocation from './components/ContactLocation';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isPastHero, setIsPastHero] = useState(false);

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen relative text-[#4A5568] bg-[#F4F9FB] selection:bg-[#4FB8C9] selection:text-white">
      {/* Preloader */}
      <Loader progress={progress} isLoading={isLoading} />

      {/* Sticky / Fixed Navigation */}
      <Navbar isPastHero={isPastHero} />

      {/* Main Single-Page App Content */}
      <main>
        <HeroCanvas 
          onLoadingComplete={() => setIsLoading(false)} 
          setIsPastHero={setIsPastHero} 
        />
        <WhyChooseUs />
        <Services />
        <AboutUs />
        <Doctors />
        <BeforeAfterSlider />
        <Reviews />
        <AppointmentForm />
        <ContactLocation />
      </main>

      {/* Footer & Floating CTAs */}
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
