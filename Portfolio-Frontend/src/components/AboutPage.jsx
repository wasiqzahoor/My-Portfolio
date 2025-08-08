import React from 'react';
import { motion } from 'framer-motion';

// Aap yahan apni journey ka data daal sakte hain
const journeyData = [
  {
    year: '7-June-2025 - 7-October-2025',
    title: 'Internship at Ezitech Solutions',
    company: 'Ezitech Solutions',
    description: 'Developed and maintained modern web applications using React, Node.js, and other cutting-edge technologies.',
  },
  {
    year: '2023 - Present',
    title: 'Bachelor in Software Engineering',
    company: 'Ibadat Internation University, Islamabad',
    description: ' Pursuing a degree with a focus on software development, algorithms, and data structures.',
  },
  {
    year: '2021 - 2023',
    title: 'Intermediate in Computer Science',
    company: 'Concordia College Dha Campus, Islamabad',
    description: 'Completed with a focus on advanced programming concepts and software development methodologies.',
  },
  {
    year: '2019 - 2021',
    title: 'Matriculation in Biology Science',
    company: 'Sir Syed School and College, Rawalpindi',
    description: 'Passed with honors, focusing on basics Principles of Science.',
  },
];

const AboutPage = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const timelineItemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div 
      className="text-white min-h-screen p-8 pt-24"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto">
        {/* === Section 1: Intro + Bento Grid === */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          
          {/* Left Side: Introduction Text */}
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl font-bold mb-4">About Me</h1>
            <h2 className="text-2xl font-semibold text-cyan-400 mb-6">Turning Vision Into Reality with Code and Design.</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              As a full-stack developer, I thrive on building complex web applications from the ground up. I'm passionate about clean code, user-centric design, and leveraging technology to solve real-world problems. My goal is to create digital experiences that are not only functional but also beautiful and intuitive.
            </p>
          </motion.div>

          {/* Right Side: Bento Grid for Stats */}
          <motion.div className="grid grid-cols-2 grid-rows-2 gap-4" variants={itemVariants}>
            <motion.div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 rounded-lg col-span-1 row-span-1 flex flex-col justify-center items-center" whileHover={{ scale: 1.05, backgroundColor: '#1f2937' }}>
              <span className="text-5xl font-bold text-cyan-400">3+</span>
              <span className="text-gray-400 mt-2">Years of Experience</span>
            </motion.div>
            <motion.div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 rounded-lg col-span-1 row-span-1 flex flex-col justify-center items-center" whileHover={{ scale: 1.05, backgroundColor: '#1f2937' }}>
              <span className="text-5xl font-bold text-cyan-400">20+</span>
              <span className="text-gray-400 mt-2">Projects Completed</span>
            </motion.div>
            <motion.div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 rounded-lg col-span-2 row-span-1 text-center" whileHover={{ scale: 1.05, backgroundColor: '#1f2937' }}>
              <h3 className="font-semibold text-lg">My Philosophy</h3>
              <p className="text-gray-400 text-sm mt-1">"Code with purpose, design with passion."</p>
            </motion.div>
          </motion.div>

        </div>

        {/* === Section 2: My Journey Timeline === */}
        <motion.div variants={itemVariants}>
          <h2 className="text-4xl font-bold text-center mb-12">My Journey</h2>
          <div className="relative">
            {/* The Vertical Line */}
            <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-700"></div>
            
            {/* Mapping through journey data */}
            {journeyData.map((item, index) => (
              <motion.div 
                key={index} 
                className="relative pl-12 mb-10"
                variants={timelineItemVariants}
                initial="hidden"
                whileInView="visible" // Animation jab scroll karke yahan pahuchein
                viewport={{ once: true }} // Animation sirf ek baar play hogi
              >
                {/* The Dot on the timeline */}
                <div className="absolute left-4 top-1 w-4 h-4 bg-cyan-400 rounded-full -translate-x-1/2"></div>
                <p className="text-cyan-400 font-semibold mb-1">{item.year}</p>
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="text-gray-500 mb-2">{item.company}</p>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default AboutPage;