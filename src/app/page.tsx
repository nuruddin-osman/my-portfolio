"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import About from "@/components/About";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <About />

      {/* Footer */}
      <footer className="bg-dark-blue text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 John Doe. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
