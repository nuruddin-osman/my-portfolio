"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaFacebook,
  FaPaperPlane,
  FaCheckCircle,
} from "react-icons/fa";

const Contact = () => {
  const [aosAnimation, setAosAnimation] = useState("fade-left");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });

    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactMethods = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "mdnuruddinosman@gmail.com",
      link: "mailto:mdnuruddinosman@gmail.com",
    },
    {
      icon: FaPhone,
      label: "Phone",
      value: "+8801641657427",
      link: "",
    },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: "Mohakhali, Dhaka, Bangladesh",
      link: "#",
    },
  ];

  useEffect(() => {
    if (window.innerWidth < 768) {
      setAosAnimation("fade-up");
    } else {
      setAosAnimation("fade-left");
    }
  }, []);

  const socialLinks = [
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/nuruddinos/",
    },
    {
      icon: FaGithub,
      label: "GitHub",
      link: "https://github.com/nuruddin-osman",
    },
    { icon: FaTwitter, label: "Twitter", link: "https://x.com/NuruddinDev" },
    {
      icon: FaFacebook,
      label: "Facebook",
      link: "https://www.facebook.com/mnos365",
    },
  ];

  return (
    <section id="contact" className="section py-10 md:py-20 bg-light-cream">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-blue mb-4">
            Get In <span className="text-orange">Touch</span>
          </h2>
          <p className="text-sm md:text-lg text-dark-blue/70 max-w-3xl mx-auto">
            Let&apos;s discuss your project and bring your ideas to life.
            I&apos;m always open to new opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div data-aos="fade-right" className="space-y-8">
            <div>
              <h3 className="text-lg md:text-2xl font-bold text-dark-blue mb-6">
                Let&apos;s Talk
              </h3>
              <p className="text-dark-blue/80 text-base md:text-lg leading-relaxed mb-8">
                I&apos;m currently available for full-time opportunities.
                Whether you have a project in mind or just want to say hello,
                I&apos;d love to hear from you.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.link}
                  data-aos="fade-right"
                  data-aos-delay={index * 100}
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-2 p-2 md:space-x-4 md:p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="p-1.5 md:p-3 bg-orange/10 rounded-full group-hover:bg-orange/20 transition-colors">
                    <method.icon className="text-base md:text-2xl text-orange" />
                  </div>
                  <div>
                    <div className="text-sm text-dark-blue/60">
                      {method.label}
                    </div>
                    <div className="text-base md:text-2xl font-semibold text-dark-blue">
                      {method.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg md:text-2xl font-semibold text-dark-blue mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    data-aos="zoom-in"
                    data-aos-delay={index * 100 + 300}
                    whileHover={{ scale: 1.2, y: -5 }}
                    className="p-2 md:p-3 bg-white rounded-full shadow-lg text-dark-blue text-xl transition-colors duration-300 hover:text-orange"
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div data-aos={aosAnimation}>
            <form
              onSubmit={handleSubmit}
              className="bg-white p-5 md:p-8 rounded-2xl shadow-xl"
            >
              <h3 className="text-lg md:text-2xl font-bold text-dark-blue mb-6">
                Send Message
              </h3>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg flex items-center space-x-2"
                >
                  <FaCheckCircle />
                  <span>
                    Message sent successfully! I&apos;ll get back to you soon.
                  </span>
                </motion.div>
              )}

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-dark-blue font-semibold mb-2 text-sm md:text-base">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full  px-2.5 py-1.5 md:px-4 md:py-3 text-xs md:text-sm border border-light-cream rounded-lg focus:outline-none focus:border-orange transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="text-sm md:text-base block text-dark-blue font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full  px-2.5 py-1.5 md:px-4 md:py-3 text-xs md:text-sm border border-light-cream rounded-lg focus:outline-none focus:border-orange transition-colors"
                    placeholder="your.email@domain.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="text-sm md:text-base block text-dark-blue font-semibold mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full  px-2.5 py-1.5 md:px-4 md:py-3 text-xs md:text-sm border border-light-cream rounded-lg focus:outline-none focus:border-orange transition-colors"
                  placeholder="Project Discussion"
                />
              </div>

              <div className="mb-6">
                <label className="text-sm md:text-base block text-dark-blue font-semibold mb-2">
                  Message *
                </label>
                <textarea
                  rows={6}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full  px-2.5 py-1.5 md:px-4 md:py-3 text-xs md:text-sm border border-light-cream rounded-lg focus:outline-none focus:border-orange transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                className="w-full bg-orange text-white py-2 md:py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
