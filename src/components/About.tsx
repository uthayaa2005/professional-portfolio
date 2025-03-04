import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import profileImage from '../assets/profile.jpg'; // Using local image

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2"
          >
            <div className="relative w-90 h-90"> {/* Reduced image size */}
              <div className="absolute inset-0 bg-indigo-600 rounded-lg transform translate-x-2 translate-y-2"></div>
              <img 
                src={profileImage} 
                alt="Profile" 
                className="relative z-10 rounded-lg shadow-xl w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:w-1/2"
          >
            <h3 className="text-2xl font-bold mb-4">Who I am?</h3>
            <p className="text-gray-700 mb-4">
              I'm a passionate Full Stack Developer with over 3 years of experience in building web applications.
              I specialize in JavaScript, React, Node.js, and modern web technologies.
            </p>
            <p className="text-gray-700 mb-6">
            My journey in web development began during my college years. As a pre-final year student, I have worked on various projects, gaining hands-on experience in building innovative digital solutions. I enjoy solving complex problems and bringing ideas to life.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <h4 className="font-bold text-indigo-600">Name:</h4>
                <p>Uthayaa M</p>
              </div>
              <div>
                <h4 className="font-bold text-indigo-600">Email:</h4>
                <p>uthayaa98428@gmail.com</p>
              </div>
              <div>
                <h4 className="font-bold text-indigo-600">Location:</h4>
                <p>Tamil Nadu, India</p>
              </div>
              <div>
                <h4 className="font-bold text-indigo-600">Availability:</h4>
                <p>Intern & Full-time</p>
              </div>
            </div>

            <a 
              href="#contact" 
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full font-medium hover:bg-indigo-700 transition-colors shadow-md"
            >
              Hire Me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
