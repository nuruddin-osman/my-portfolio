"use client";

import { Project } from "@/types";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaStar } from "react-icons/fa";

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Modern E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with advanced features like real-time inventory, payment processing, and admin dashboard.",
      technologies: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Stripe"],
      image: "/projects/ecommerce.jpg",
      liveLink: "#",
      githubLink: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "Collaborative task management application with real-time updates, drag & drop, and team collaboration features.",
      technologies: ["React", "Socket.io", "Express.js", "MongoDB", "JWT"],
      image: "/projects/taskapp.jpg",
      liveLink: "#",
      githubLink: "#",
      featured: true,
    },
    {
      id: 3,
      title: "Social Media Analytics",
      description:
        "Comprehensive analytics dashboard for social media management with data visualization and reporting.",
      technologies: ["TypeScript", "Chart.js", "Node.js", "MySQL", "D3.js"],
      image: "/projects/analytics.jpg",
      liveLink: "#",
      githubLink: "#",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="section py-10 md:py-20">
      <div className="container mx-auto px-6">
        <motion.div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-blue mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-dark-blue/70 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            experience
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={index * 200}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group ${
                project.featured ? "border-2 border-orange" : ""
              }`}
            >
              <div className="lg:flex">
                {/* Project Image */}
                <div className="lg:w-1/2 relative overflow-hidden">
                  <div className="h-64 lg:h-full bg-gradient-to-br from-dark-blue to-orange flex items-center justify-center">
                    <div className="text-6xl text-white">📱</div>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-orange text-white px-3 py-1 rounded-full flex items-center space-x-1">
                      <FaStar />
                      <span className="text-sm font-medium">Featured</span>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="lg:w-1/2 p-8">
                  <h3 className="text-lg md:text-2xl font-bold text-dark-blue mb-3 group-hover:text-orange transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-dark-blue/70 mb-6 leading-relaxed text-sm md:text-base">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-light-cream text-dark-blue rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.liveLink}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 bg-orange text-white md:px-6 md:py-3 px-3 py-1.5 rounded-lg font-semibold transition-all duration-300 hover:bg-orange/90"
                    >
                      <FaExternalLinkAlt />
                      <span>Live Demo</span>
                    </motion.a>

                    <motion.a
                      href={project.githubLink}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 border-2 md:px-6 md:py-3 px-3 py-1.5border-dark-blue text-dark-blue rounded-lg font-semibold transition-all duration-300 hover:bg-dark-blue hover:text-white"
                    >
                      <FaGithub />
                      <span>Code</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
