import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Layout, Server, Database, Figma, Smartphone } from 'lucide-react';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend Development',
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Redux'],
      color: 'bg-blue-500',
    },
    {
      icon: Server,
      title: 'Backend Development',
      skills: ['Node.js', 'Express', 'Python', 'RESTful APIs'],
      color: 'bg-green-500',
    },
    {
      icon: Database,
      title: 'Database',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'cloudfare'],
      color: 'bg-yellow-500',
    },
    {
      icon: Layout,
      title: 'UI/UX Design',
      skills: ['Figma', 'Sketch', 'Wireframing', 'Prototyping'],
      color: 'bg-purple-500',
    },
   
    {
      icon: Figma,
      title: 'Tools & Others',
      skills: ['Git', 'Figma', 'AWS', 'Canva', 'Photoshop'],
      color: 'bg-indigo-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-8"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            I've worked with a variety of technologies in the web development world.
            Here are the major skills I possess:
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className={`${category.color} w-14 h-14 rounded-lg flex items-center justify-center text-white mb-6`}>
                <category.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-indigo-600 mr-2"></div>
                    <span className="text-gray-700">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Technical Proficiency</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: 'JavaScript', percentage: 95 },
              { name: 'React', percentage: 90 },
              { name: 'Node.js', percentage: 85 },
              { name: 'TypeScript', percentage: 80 },
              { name: 'HTML/CSS', percentage: 95 },
              { name: 'UI/UX Design', percentage: 75 },
            ].map((skill, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-indigo-600">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.percentage}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                    className="bg-indigo-600 h-2.5 rounded-full"
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;