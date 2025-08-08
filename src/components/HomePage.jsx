import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AboutPage from './AboutPage';
import ProjectsPage from './ProjectsPage';
import CertificatesPage from './CertificatesPage';
import ContactPage from './ContactPage';

const HomePage = () => {
  // Skills array, aap isko apne hisab se change kar sakte hain
  const skills = [
    "Web Developer",
    "UI/UX Designer",
    "Node.js",
    "Backend Engineer"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Sequence animation thodi fast kar di hai
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <motion.section 
        className=" text-white min-h-screen flex items-center justify-center p-4 md:p-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Changed from grid to flex and added flex-col-reverse for mobile */}
        <div className="container mx-auto flex flex-col-reverse md:flex-row gap-10 md:gap-16 items-center">

          {/* Left Side: Text Content */}
          <motion.div className="flex flex-col items-center md:items-start text-center md:text-left mt-10 md:mt-0" variants={containerVariants}>
            
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 leading-tight"
              variants={itemVariants}
            >
              Hi, I'm <br/> <p className='text-3xl sm:text-4xl md:text-5xl font-extrabold pt-3'>Chaudhary Wasiq Zahoor</p>
            </motion.h1>

            {/* --- */}

            {/* Skills Tags */}
            <motion.div 
              className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3 my-6" // Tags ke liye container
              variants={itemVariants}
            >
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 text-xs sm:text-sm font-medium text-cyan-200 bg-gray-800 border border-gray-700 rounded-full transition-all duration-300 cursor-pointer hover:bg-cyan-500/20 hover:border-cyan-500 hover:scale-105"
                >
                  {skill}
                </span>
              ))}
            </motion.div>

            {/* --- */}
            
            <motion.p 
              className="text-base sm:text-xl md:text-2xl text-gray-400 mb-6 sm:mb-8"
              variants={itemVariants}
            >
              A passionate <strong>Full Stack Developer</strong> crafting modern and unique web experiences.
            </motion.p>
            
            {/* Buttons Container */}
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
              variants={itemVariants}
            >
              <a 
                href="https://drive.google.com/file/d/19CImFyQbWg1A3wZcHE58yNv69iVJLriX/view?usp=sharing"
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-2 sm:px-8 sm:py-3 w-full sm:w-auto text-center bg-cyan-500 text-gray-900 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Download Resume
              </a>
              <Link 
                to="/contact"
                className="px-6 py-2 sm:px-8 sm:py-3 w-full sm:w-auto text-center border border-cyan-500 text-cyan-400 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:bg-cyan-500 hover:text-gray-900 shadow-lg"
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side: Animated Image with Smoke */}
<motion.div 
    className="relative w-64 sm:w-72 md:w-96 aspect-square mx-auto mb-10 md:mb-0"
    variants={itemVariants}
    transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
>
    <motion.img 
        src="https://i.ibb.co/21yMQyJw/my-pro-pic.jpg"
        alt="Profile" 
        className="absolute inset-0 w-full h-full object-cover rounded-full z-10 shadow-2xl bg-gray-800"
        whileHover={{ scale: 1.05, rotateY: 10 }}
        transition={{ duration: 0.5 }}
    />
    <div className="absolute inset-0 z-0">
        <span className="absolute -top-10 -left-10 w-24 h-24 bg-white opacity-0 rounded-full filter blur-xl animate-smoke" style={{ animationDelay: '0s' }}></span>
        <span className="absolute -bottom-10 -right-10 w-28 h-28 bg-white opacity-0 rounded-full filter blur-xl animate-smoke" style={{ animationDelay: '1s' }}></span>
        <span className="absolute top-1/4 left-1/4 w-20 h-20 bg-white opacity-0 rounded-full filter blur-lg animate-smoke" style={{ animationDelay: '2s' }}></span>
    </div>
</motion.div>

        </div>
      </motion.section>
    </>
  );
};

export default HomePage;