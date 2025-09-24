import { Experienc } from "@/types";
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
} from "react-icons/fa";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTypescript,
  SiAmazon,
  SiDocker,
} from "react-icons/si";

const Experience = () => {
  const experiences: Experienc[] = [
    {
      id: 1,
      title: "Senior MERN Stack Developer",
      company: "TechInnovate Solutions",
      type: "Full-time",
      duration: "2022 - Present",
      location: "Remote",
      description:
        "Leading a team of developers to build scalable web applications for enterprise clients. Specializing in microservices architecture and cloud deployment.",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "TypeScript",
        "AWS",
        "Docker",
      ],
      achievements: [
        "Reduced application load time by 40% through optimization",
        "Led a team of 5 developers on 3 major projects",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
      ],
      icon: SiReact,
      link: "#",
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "DigitalCraft Inc.",
      type: "Full-time",
      duration: "2021 - 2022",
      location: "San Francisco, CA",
      description:
        "Developed and maintained multiple client projects using MERN stack. Focused on creating responsive and performant web applications.",
      technologies: [
        "React",
        "Express.js",
        "MongoDB",
        "JavaScript",
        "Firebase",
      ],
      achievements: [
        "Delivered 15+ projects with 100% client satisfaction",
        "Improved code quality by implementing testing practices",
        "Mentored 2 junior developers",
      ],
      icon: SiNodedotjs,
      link: "#",
    },
  ];

  const techIcons: { [key: string]: React.ComponentType } = {
    React: SiReact,
    "Node.js": SiNodedotjs,
    MongoDB: SiMongodb,
    TypeScript: SiTypescript,
    AWS: SiAmazon,
    Docker: SiDocker,
    "Express.js": SiNodedotjs,
    JavaScript: SiTypescript,
    Firebase: SiAmazon,
    CSS3: SiReact,
    Redux: SiReact,
    "Material-UI": SiReact,
  };

  return (
    <section id="experience" className="section py-10 md:py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-blue mb-4">
            Work <span className="text-orange">Experience</span>
          </h2>
          <p className="text-sm md:text-lg text-dark-blue/70 max-w-2xl mx-auto">
            My professional journey and the projects I've contributed to over
            the years
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange to-dark-blue hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const IconComponent = exp.icon as React.ComponentType<{
                className?: string;
              }>;
              return (
                <motion.div
                  key={exp.id}
                  data-aos="fade-up"
                  data-aos-delay={index * 200}
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-orange rounded-full border-4 border-white z-10"></div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className={`bg-white p-3 md:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-orange ml-6 md:ml-0 md:w-5/12 ${
                      index % 2 === 0
                        ? "md:mr-auto md:ml-0"
                        : "md:ml-auto md:mr-0"
                    }`}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center md:space-x-3">
                        <div className="hidden md:block p-2 bg-orange/10 rounded-lg">
                          {IconComponent && (
                            <IconComponent className="hidden md:block text-2xl text-orange" />
                          )}
                        </div>
                        <div>
                          <h3 className="text-base md:text-xl font-bold text-dark-blue">
                            {exp.title}
                          </h3>
                          <p className="text-sm md:text-base text-orange font-semibold">
                            {exp.company}
                          </p>
                        </div>
                      </div>
                      <motion.a
                        href={exp.link}
                        whileHover={{ scale: 1.1 }}
                        className="text-dark-blue/60 hover:text-orange transition-colors"
                      >
                        <FaExternalLinkAlt />
                      </motion.a>
                    </div>

                    {/* Meta Info */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center md:space-x-2 text-dark-blue/70">
                        <FaCalendarAlt className="hidden md:block text-orange" />
                        <span className="text-[10px] md:text-sm">
                          {exp.duration}
                        </span>
                      </div>
                      <div className="flex items-center md:space-x-2 text-dark-blue/70">
                        <FaMapMarkerAlt className="hidden md:block text-orange" />
                        <span className="text-[10px] md:text-sm">
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm md:text-base text-dark-blue/80 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-dark-blue mb-2">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => {
                          const TechIcon = techIcons[
                            tech
                          ] as React.ComponentType<{ className?: string }>;
                          return (
                            <span
                              key={tech}
                              className="flex items-center space-x-1 px-3 py-1 bg-light-cream text-dark-blue rounded-full text-sm"
                            >
                              {TechIcon && <TechIcon className="text-orange" />}
                              <span className="text-[10px] md:text-sm">
                                {tech}
                              </span>
                            </span>
                          );
                        })}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="text-sm font-semibold text-dark-blue mb-2">
                        Key Achievements
                      </h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, idx) => (
                          <li
                            key={idx}
                            className="flex items-start space-x-2 text-dark-blue/70 text-sm"
                          >
                            <div className="w-1.5 h-1.5 bg-orange rounded-full mt-1.5 flex-shrink-0"></div>
                            <span className="text-[10px] md:text-sm leading-4">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Career Stats */}
        <motion.div
          data-aos="fade-up"
          data-aos-delay="600"
          className="mt-16 grid md:grid-cols-4 gap-6"
        >
          {[
            { number: "3+", label: "Years Experience" },
            { number: "50+", label: "Projects Completed" },
            { number: "30+", label: "Happy Clients" },
            { number: "15+", label: "Technologies" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-orange to-dark-blue p-3 md:p-6 rounded-xl text-white text-center"
            >
              <div className="text-xl md:text-3xl font-bold mb-2">
                {stat.number}
              </div>
              <div className="text-base md:text-lg text-light-cream/90">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
