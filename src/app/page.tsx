"use client";

import { useEffect } from "react";
import "aos/dist/aos.css";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";

export default function Home() {
  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
      });
    });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />

      {/* Footer */}
      <footer className="bg-dark-blue text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2025 Md Nuruddin Osman. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
