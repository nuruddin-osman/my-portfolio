"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import Logo from "@/assets/images/logo_nav_blue.png";
import Link from "next/link";

const Navbar = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    "Home",
    "About",
    "Experience",
    "Projects",
    "Skills",
    "Education",
    "Contact",
  ];

  const socialLinks = [
    { icon: FaGithub, link: "https://github.com/nuruddin-osman" },
    { icon: FaLinkedin, link: "https://www.linkedin.com/in/nuruddinos/" },
    { icon: FaTwitter, link: "https://x.com/NuruddinDev" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-0 bg-cream/90 backdrop-blur-md shadow-lg"
          : "py-1.5 bg-cream shadow-md"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} className="">
            <Link
              href="#hero"
              className="relative block w-[120px] h-[50px] md:w-[150px] md:h-[70px] overflow-hidden"
            >
              <Image
                src={Logo}
                alt="Logo Icon"
                fill
                className="object-contain"
              />
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4 xl:space-x-5">
            {navItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ scale: 1.1, color: "#F4991A" }}
                className="text-base font-medium text-dark-blue transition-colors duration-300"
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-3">
            {socialLinks.map(({ icon: Icon, link }, index) => (
              <motion.a
                key={index}
                href={link}
                target="_blank"
                whileHover={{ scale: 1.2, color: "#F4991A" }}
                className="text-dark-blue text-xl"
              >
                <Icon />
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-2xl text-dark-blue"
          >
            {mobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4"
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-2 text-dark-blue font-medium hover:text-orange transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
