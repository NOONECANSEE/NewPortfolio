"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <div className="bg-gradient-to-b from-black via-gray-950 to-black text-white">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <TechStack />
        <Projects />
        <Services />
        <Contact />
        <CTA />
        <Footer />
      </div>
    </SmoothScroll>
  );
}
