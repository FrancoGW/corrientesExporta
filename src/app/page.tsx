import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ObjectiveSection from '@/components/ObjectiveSection';
import CollaborationSection from '@/components/CollaborationSection';
import ServicesCarousel from '@/components/ServicesCarousel';
import VideosSection from '@/components/VideosSection';
import TeamSection from '@/components/TeamSection';
import StrategicAlliesSection from '@/components/StrategicAlliesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AboutSection />
      <ObjectiveSection />
      <CollaborationSection />
      <ServicesCarousel />
      <VideosSection />
      <TeamSection />
      <StrategicAlliesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
