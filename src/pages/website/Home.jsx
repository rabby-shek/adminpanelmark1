import React from 'react'
import NavBar from '../../components/website/NavBar';
import Footer from '../../components/website/Footer';
import HeroSection from '../../components/website/HeroSection';
import AboutSection from '../../components/website/AboutSection';
import FeaturesSection from '../../components/website/FeaturesSection';
import PricingSection from '../../components/website/PricingSection';
import ContactSection from '../../components/website/ContactSection';

const Home = () => {
  return (
    <>
    <NavBar />
    <HeroSection />
    <AboutSection />
    <FeaturesSection />
    <PricingSection />
    <ContactSection />
    <Footer />
      
    </>
  )
}

export default Home;
