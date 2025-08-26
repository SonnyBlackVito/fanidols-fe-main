"use client";
import { Box } from "@chakra-ui/react";
import HeroSection from "./components/HeroSection";
import Section2LandingPage from "./components/Section2LandingPage";
import Section3LandingPage from "./components/Section3LandingPage";
import Section4LandingPage from "./components/Section4LandingPage";
import Section5LandingPage from "./components/Section5LandingPage";
import Section6LandingPage from "./components/Section6LandingPage";
import Section7LandingPage from "./components/Section7LandingPage";
import Section8OurWebsite from "./components/Section8LandingPage";
import Section9LandingPage from "./components/Section9LandingPage";
import Section10LandingPage from "./components/Section10LandingPage";

// Import the precise animation component
import PreciseScrollAnimation from "./components/PreciseScrollAnimation";

export default function Home() {
  return (
    <Box bg="black"  overflowY="hidden">
      <HeroSection />
      
      <PreciseScrollAnimation 
        animation="fadeInUp" 
        threshold={0.25} // 25% element visible
        delay={0.1}
      >
        <Box id="about">
          <Section2LandingPage />
        </Box>
      </PreciseScrollAnimation>
      
      <PreciseScrollAnimation 
        animation="fadeInLeft" 
        threshold={0.3} // 30% element visible 
        delay={0.05}
      >
        <Box id="services">
          <Section3LandingPage />
        </Box>
      </PreciseScrollAnimation>
      
      <PreciseScrollAnimation 
        animation="fadeInRight" 
        threshold={0.3}
        delay={0.1}
      >
        <Box id="features">
          <Section4LandingPage />
        </Box>
      </PreciseScrollAnimation>
      
      <PreciseScrollAnimation 
        animation="scaleIn" 
        threshold={0.4} // Trigger muộn hơn cho effect đẹp
        delay={0.2}
      >
        <Box id="team">
          <Section5LandingPage />
        </Box>
      </PreciseScrollAnimation>
      
      <PreciseScrollAnimation 
        animation="slideInUp" 
        threshold={0.3}
        delay={0.15}
      >
        <Box id="portfolio">
          <Section6LandingPage />
        </Box>
      </PreciseScrollAnimation>
      
      <PreciseScrollAnimation 
        animation="fadeInUp" 
        threshold={0.3}
        delay={0.1}
      >
        <Box id="testimonials">
          <Section7LandingPage />
        </Box>
      </PreciseScrollAnimation>
      
      <PreciseScrollAnimation 
        animation="fadeIn" 
        threshold={0.35}
        delay={0.2}
      >
        <Box id="contact">
          <Section8OurWebsite />
        </Box>
      </PreciseScrollAnimation>
      
      <PreciseScrollAnimation 
        animation="fadeInUp" 
        threshold={0.3}
        delay={0.1}
      >
        <Section9LandingPage />
      </PreciseScrollAnimation>
      
      <PreciseScrollAnimation 
        animation="fadeInUp" 
        threshold={0.3}
        delay={0.15}
      >
        <Section10LandingPage />
      </PreciseScrollAnimation>
    </Box>
  );
}