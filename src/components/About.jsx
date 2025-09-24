import { Skill } from "@/types";
import { motion } from "framer-motion";
import { FaCode, FaUsers, FaCoffee, FaRocket } from "react-icons/fa";

const About = () => {
  const stats = [
    { icon: FaCode, number: "50+", text: "Projects Completed" },
    { icon: FaUsers, number: "30+", text: "Happy Clients" },
    { icon: FaCoffee, number: "500+", text: "Cups of Coffee" },
    { icon: FaRocket, number: "3+", text: "Years Experience" },
  ];

  const personalSkills = [
    { name: "Frontend Development", level: 95 },
    { name: "Backend Development", level: 88 },
    { name: "UI/UX Design", level: 82 },
    { name: "Problem Solving", level: 90 },
  ];

  return (
    <section id="about" className="section bg-light-cream py-10 md:py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-blue mb-4">
            About <span className="text-orange">Me</span>
          </h2>
          <p className="text-lg text-dark-blue/70 max-w-3xl mx-auto">
            Passionate MERN Stack Developer with a love for creating innovative
            digital solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div data-aos="fade-right" className="space-y-6">
            <h3 className="text-3xl font-bold text-dark-blue">
              Crafting Digital Experiences That Matter
            </h3>

            <div className="space-y-4 text-dark-blue/80">
              <p className="text-lg leading-relaxed">
                Hello! I'm{" "}
                <span className="text-orange font-semibold">John Doe</span>, a
                dedicated MERN Stack Developer with over 3 years of experience
                in creating web applications that solve real-world problems.
              </p>

              <p className="text-lg leading-relaxed">
                My journey in web development started with a curiosity about how
                websites work, and it has evolved into a passion for building
                scalable, efficient, and user-friendly applications using modern
                technologies.
              </p>

              <p className="text-lg leading-relaxed">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
              </p>
            </div>

            {/* Personal Skills */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-dark-blue">
                What I Do
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {personalSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-orange rounded-full"></div>
                    <span className="text-dark-blue/80">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div data-aos="fade-left" className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.text}
                data-aos="zoom-in"
                data-aos-delay={index * 200}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white p-6 rounded-xl shadow-lg text-center group cursor-pointer"
              >
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-orange/10 rounded-full group-hover:bg-orange/20 transition-colors">
                    <stat.icon className="text-2xl text-orange" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-dark-blue mb-1">
                  {stat.number}
                </h3>
                <p className="text-dark-blue/70 font-medium">{stat.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Fun Facts */}
        <motion.div
          data-aos="fade-up"
          data-aos-delay="400"
          className="mt-16 bg-dark-blue rounded-2xl p-8 text-white"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange mb-2">100%</div>
              <p className="text-light-cream">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange mb-2">24/7</div>
              <p className="text-light-cream">Support Available</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange mb-2">50+</div>
              <p className="text-light-cream">Technologies Mastered</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
