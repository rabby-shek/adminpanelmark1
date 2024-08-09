import React, { useEffect, useState } from "react";
import NavBar from "../../components/website/NavBar";
import Footer from "../../components/website/Footer";
import HeroSection from "../../components/website/HeroSection";
import AboutSection from "../../components/website/AboutSection";
import FeaturesSection from "../../components/website/FeaturesSection";
import PricingSection from "../../components/website/PricingSection";
import ContactSection from "../../components/website/ContactSection";

const Home = () => {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setShowTopButton(true);
      } else {
        setShowTopButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const topButtonStyle = {
    position: "fixed",
    bottom: "10px",
    right: "10px",
    opacity: showTopButton ? 1 : 0,
    transform: showTopButton ? "translateY(0)" : "translateY(100px)",
    transition: "opacity 0.3s ease, transform 0.3s ease",
  };

  return (
    <>
      <NavBar />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <PricingSection />
      <ContactSection />
      <Footer />
      <a
        href="#home"
        style={topButtonStyle}
        type="button"
        data-mdb-button-init
        data-mdb-ripple-init
        className="btn btn-dark btn-floating btn-md"
        id="btn-back-to-top"
      >
        Top
      </a>
    </>
  );
};

export default Home;
