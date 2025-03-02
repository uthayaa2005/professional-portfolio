import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'CRYPTO TACKER',
      description: 'Developed a comprehensive web application for real-time cryptocurrency analysis.',
      image: 'https://images.unsplash.com/photo-1643488072086-9d7318c0a04b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y3J5cHRvJTIwdHJhY2tlcnxlbnwwfHwwfHx8MA%3D%3D',
      technologies: ['React', 'Node.js', 'Material-UI'],
      category: 'frontend',
      github: 'https://github.com/uthayaa2005/crypto-hunter',
      demo: 'https://crypto-tracker-2025.vercel.app/',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A productivity app for managing tasks, projects, and team collaboration with real-time updates.',
      image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      category: 'frontend',
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      id: 3,
      title: 'online quiz system',
      description: 'Created an interactive online quiz system with customizable categories, randomized questions, various question types, instant feedback, and scoring.',
      image: 'https://images.unsplash.com/photo-1484807352052-23338990c6c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b25saW5lJTIwcXVpeiUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D',
      technologies: ['React', 'Node.js', 'MongoDB'],
      category: 'frontend',
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      id: 4,
      title: 'Gig on',
      description: 'Initiated and led a social helping project leveraging online platforms, coordinating both paid and non-paid initiatives.',
      image: 'https://plus.unsplash.com/premium_photo-1720551256983-445d23d516b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNvY2lhbCUyMGNoYXQlMjBhcHB8ZW58MHx8MHx8fDA%3D',
      technologies: ['React', 'Redux', 'Node.js', 'MongoDB'],
      category: 'frontend',
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    
    {
      id: 5,
      title: 'Weather Dashboard',
      description: 'A weather application with location-based forecasts, interactive maps, and historical data.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      technologies: ['React', 'OpenWeather API', 'Chart.js'],
      category: 'frontend',
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      id: 6,
      title: 'Bill Buddy',
      description: 'Bill Buddy – Your go-to app for quick, easy, and delicious food ordering!',
      image: 'https://images.unsplash.com/photo-1609405982549-b8ba38eeef46?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZCUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D',
      technologies: ['figma'],
      category: 'UI/UX design',
      demo: 'https://www.figma.com/design/JdnhlQ832QFbxPZ3IeRjHF/bill-buddy?node-id=0-1&t=yHPt92jWeDbuAJ8B-1',
    },
    {
      id: 7,
      title: 'Grobinar',
      description: 'Grobinar – Smart learning platform for students and teachers to connect, learn, and grow together.',
      image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JvdyUyMCUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D',
      technologies: ['figma'],
      category: 'UI/UX design',
      demo: 'https://www.figma.com/design/UjED5CN8l6QXH8tDXVMpgv/Untitled?node-id=0-1&t=vlsQA0pyKUXK2PyY-1',
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

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
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-8"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project reflects my passion for creating
            intuitive, efficient, and visually appealing applications.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {['all', 'frontend', 'fullstack', 'UI/UX design'].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  filter === category
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative overflow-hidden group h-60">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white text-gray-900 p-3 rounded-full hover:bg-indigo-600 hover:text-white transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white text-gray-900 p-3 rounded-full hover:bg-indigo-600 hover:text-white transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors font-medium"
          >
            View more projects on GitHub <ExternalLink size={16} className="ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;