import { Certification, Educations } from "@/types";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaCertificate,
  FaBook,
  FaAward,
} from "react-icons/fa";

const Education = () => {
  const educationData: Educations[] = [
    {
      icon: FaGraduationCap,
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      duration: "2018 - 2022",
      grade: "3.8/4.0 GPA",
      achievements: ["Dean's List", "Best Final Year Project"],
    },
    {
      icon: FaCertificate,
      degree: "Full Stack Web Development",
      institution: "Coding Bootcamp",
      duration: "2022 - 2023",
      grade: "Certification",
      achievements: ["Top 5% of Class", "3 Real-world Projects"],
    },
    {
      icon: FaBook,
      degree: "Advanced JavaScript & React",
      institution: "Online Specialization",
      duration: "2023",
      grade: "Specialization",
      achievements: ["Advanced Concepts", "Performance Optimization"],
    },
  ];

  const certifications: Certification[] = [
    {
      name: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      year: "2023",
      icon: FaAward,
    },
    {
      name: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      year: "2023",
      icon: FaAward,
    },
    {
      name: "React Professional Certificate",
      issuer: "Meta",
      year: "2022",
      icon: FaAward,
    },
  ];

  return (
    <section id="education" className="section py-10 md:py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-blue mb-4">
            Education & <span className="text-orange">Certifications</span>
          </h2>
          <p className="text-lg text-dark-blue/70 max-w-3xl mx-auto">
            My academic journey and professional certifications that shape my
            expertise
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <motion.div data-aos="fade-right">
            <h3 className="font-bold text-dark-blue mb-8 flex items-center text-lg md:text-2xl">
              <FaGraduationCap className="mr-2 md:mr-3 text-orange text-lg md:text-2xl" />
              Academic Background
            </h3>

            <div className="space-y-8 relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-orange/20"></div>

              {educationData.map((edu, index) => {
                const IconComponent = edu.icon as React.ComponentType<{
                  className?: string;
                }>;
                return (
                  <motion.div
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={index * 200}
                    className="relative pl-8 md:pl-16"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 w-6 h-6 md:w-12 md:h-12 rounded-full bg-white border-2 md:border-2 border-orange flex items-center justify-center">
                      <IconComponent className="text-orange text-base md:text-lg" />
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-light-cream/50 p-3 md:p-6 rounded-xl hover:bg-light-cream transition-colors duration-300"
                    >
                      <div className="flex flex-col md:flex-row justify-between gap-2">
                        <h4 className="text-base md:text-xl font-semibold text-dark-blue leading-[18px]">
                          {edu.degree}
                        </h4>
                        <span className="px-2 py-1 bg-orange text-white text-[10px] rounded-lg w-20 h-fit">
                          {edu.duration}
                        </span>
                      </div>

                      <p className="text-base md:text-lg text-dark-blue/80 font-medium my-2">
                        {edu.institution}
                      </p>
                      <p className="text-orange font-semibold mb-3">
                        {edu.grade}
                      </p>

                      <div className="space-y-1">
                        {edu.achievements.map((achievement, idx) => (
                          <div
                            key={idx}
                            className="flex items-center space-x-2 text-dark-blue/70"
                          >
                            <div className="w-1.5 h-1.5 bg-orange rounded-full"></div>
                            <span className="text-sm">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div data-aos="fade-left">
            <h3 className="font-bold text-dark-blue mb-8 flex items-center text-lg md:text-2xl">
              <FaAward className="mr-3 text-orange" />
              Professional Certifications
            </h3>

            <div className="space-y-6">
              {certifications.map((cert, index) => {
                const CartIconComponent = cert.icon as React.ComponentType<{
                  className?: string;
                }>;
                return (
                  <motion.div
                    key={index}
                    data-aos="zoom-in"
                    data-aos-delay={index * 200}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-gradient-to-r from-light-cream to-cream p-3 md:p-6 rounded-xl border-l-4 border-orange shadow-lg"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-orange/10 rounded-full">
                        <CartIconComponent className="text:xl md:text-2xl text-orange" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-base md:text-lg font-semibold text-dark-blue mb-1">
                          {cert.name}
                        </h4>
                        <p className="text-dark-blue/70 mb-2 text-sm md:text-base">
                          {cert.issuer}
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="px-2 py-1 bg-dark-blue text-white text-sm rounded-full">
                            {cert.year}
                          </span>
                          <span className="text-orange font-semibold">
                            Verified
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Skills Summary */}
            <motion.div
              data-aos="fade-up"
              data-aos-delay="600"
              className="mt-8 bg-dark-blue rounded-xl p-6 text-white"
            >
              <h4 className="text-lg md:text-xl font-semibold mb-4 text-orange">
                Continuous Learning
              </h4>
              <div className="space-y-3">
                {[
                  "Weekly code challenges",
                  "Open source contributions",
                  "Tech community participation",
                  "Regular skill updates",
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange rounded-full"></div>
                    <span className="text-light-cream">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
