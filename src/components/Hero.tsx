"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaDownload, FaArrowRight } from "react-icons/fa";
import { SiTypescript, SiReact, SiNodedotjs, SiMongodb } from "react-icons/si";

const Hero = () => {
  const techIcons = [SiTypescript, SiReact, SiNodedotjs, SiMongodb];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-dark-blue/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative px-4 md:px-6 z-10 pt-10 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            data-aos="fade-right"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-light-cream px-4 py-2 rounded-full"
            >
              <div className="w-2 h-2 bg-orange rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">
                Available for new projects
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl font-bold text-dark-blue leading-tight"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Hi, I&apos;m
              <span className="text-orange relative">
                John Doe
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-1 bg-orange"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                />
              </span>
            </motion.h1>

            <div className="text-xl md:text-2xl text-dark-blue/80 font-medium">
              <TypeAnimation
                sequence={[
                  "MERN Stack Developer",
                  2000,
                  "TypeScript Expert",
                  2000,
                  "Full-Stack Specialist",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </div>

            <p className="text-base md:text-lg text-dark-blue/70 leading-relaxed">
              I craft scalable, performant web applications using cutting-edge
              technologies. Passionate about clean code, user experience, and
              innovative solutions.
            </p>

            {/* Tech Stack Icons */}
            <div className="flex items-center space-x-4">
              <span className="text-dark-blue/60 font-medium">Tech Stack:</span>
              <div className="flex space-x-3">
                {techIcons.map((Icon, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.2, y: -5 }}
                    className="text-2xl text-dark-blue/70 hover:text-orange transition-colors"
                  >
                    <Icon />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.a
                href="#projects"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(244, 153, 26, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange text-white px-4 md:px-8 py-3 md:py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300 text-base"
              >
                <span>View My Work</span>
                <FaArrowRight />
              </motion.a>

              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-dark-blue text-dark-blue px-4 md:px-8 py-3 md:py-4 text-base rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300 hover:bg-dark-blue hover:text-white"
              >
                <FaDownload />
                <span>Download CV</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Hero Image/Graphic */}
          <motion.div
            data-aos="fade-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto">
              {/* Main Avatar */}
              <motion.div className="w-full h-full bg-gradient-to-br from-orange to-dark-blue rounded-2xl flex items-center justify-center shadow-2xl animate-float">
                <div className="text-6xl text-white">👨‍💻</div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -left-4 bg-light-cream p-4 rounded-xl shadow-lg"
              >
                <SiReact className="text-3xl text-orange" />
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg"
              >
                <SiTypescript className="text-3xl text-dark-blue" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
