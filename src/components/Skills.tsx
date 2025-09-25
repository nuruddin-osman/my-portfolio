"use client";

import { Skill } from "@/types";
import { motion } from "framer-motion";
import React from "react";
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiGit,
  SiMysql,
  SiLaravel,
  SiFigma,
} from "react-icons/si";

const Skills = () => {
  const skills: Skill[] = [
    {
      name: "JavaScript",
      level: "Intermediate+",
      progress_bar: 70,
      category: "frontend",
      icon: "SiJavascript",
    },
    {
      name: "React.js",
      level: "Advanced",
      progress_bar: 90,
      category: "frontend",
      icon: "SiReact",
    },
    {
      name: "Next.js",
      level: "Intermediate",
      progress_bar: 60,
      category: "frontend",
      icon: "SiNextdotjs",
    },
    {
      name: "Node.js",
      level: "Intermediate",
      progress_bar: 50,
      category: "backend",
      icon: "SiNodedotjs",
    },
    {
      name: "Express.js",
      level: "Intermediate",
      progress_bar: 50,
      category: "backend",
      icon: "SiExpress",
    },
    {
      name: "MongoDB",
      level: "Intermediate",
      progress_bar: 40,
      category: "backend",
      icon: "SiMongodb",
    },
    {
      name: "Tailwind CSS",
      level: "Advanced",
      progress_bar: 90,
      category: "frontend",
      icon: "SiTailwindcss",
    },
    {
      name: "Git",
      level: "Intermediate",
      progress_bar: 65,
      category: "tools",
      icon: "SiGit",
    },
    {
      name: "Laravel",
      level: "Introductory",
      progress_bar: 35,
      category: "tools",
      icon: "SiLaravel",
    },
    {
      name: "MySQL",
      level: "Introductory",
      progress_bar: 38,
      category: "tools",
      icon: "SiMysql",
    },
    {
      name: "Figma",
      level: "Intermediate",
      progress_bar: 70,
      category: "tools",
      icon: "SiFigma",
    },
    {
      name: "TypeScript",
      level: "Intermediate",
      progress_bar: 45,
      category: "frontend",
      icon: "SiTypescript",
    },
  ];

  const iconMap: {
    [key: string]: React.ComponentType<{ className?: string }>;
  } = {
    SiTypescript,
    SiJavascript,
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiTailwindcss,
    SiGit,
    SiLaravel,
    SiMysql,
    SiFigma,
  };

  const categories = [
    { id: "frontend", name: "Frontend", color: "bg-blue-100 text-blue-800" },
    { id: "backend", name: "Backend", color: "bg-green-100 text-green-800" },
    {
      id: "tools",
      name: "Tools & Others",
      color: "bg-purple-100 text-purple-800",
    },
  ];

  return (
    <section id="skills" className="section bg-light-cream py-10 md:py-20">
      <div className="container mx-auto px-6">
        <motion.div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-blue mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-dark-blue/70 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to
            life
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex justify-center space-x-2 md:space-x-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-3 py-1.5 md:px-6 md:py-3 rounded-full font-medium transition-all duration-300 ${category.color}`}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const IconComponent = iconMap[skill.icon];
            return (
              <motion.div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  {IconComponent && (
                    <div className="text-3xl text-dark-blue group-hover:text-orange transition-colors">
                      {React.createElement(IconComponent)}
                    </div>
                  )}
                  <span className="text-2xl font-bold text-orange">
                    {skill.level}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-dark-blue mb-2">
                  {skill.name}
                </h3>

                <div className="w-full bg-light-cream rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.progress_bar}%` }}
                    transition={{ duration: 1.5, delay: index * 0.1 }}
                    className="h-full bg-gradient-to-r from-orange to-dark-blue rounded-full"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
