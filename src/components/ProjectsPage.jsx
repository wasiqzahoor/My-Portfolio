import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Data... (Pehle jaisa hi hai)
const projectsData = [
    {
      title: 'Mern Job Portal',
      description: 'A full-stack MERN job portal with roles for Admin, Company, and User. It includes features like job posting, application management, and user profiles.',
      imageUrl: 'https://i.ibb.co/V02pVj1m/job-portal-image.png',
      tags: ['React', 'Node.js', 'MongoDB','Web Applications'], liveUrl: '#', repoUrl: 'https://github.com/wasiqzahoor/Mern-job-Portal',
    },
    {
      title: 'AI Video Detection',
      description: '🎥 AI Video Detection An AI-powered video analysis tool that can detect, classify, and track objects, people, or activities within video files. ',
      imageUrl: 'https://tse2.mm.bing.net/th/id/OIP.eJnNd_MXbNYfK83g8b7b9QHaDh?cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3',
      tags: ['OpenCv', 'Colab', 'Python','API'], liveUrl: '#', repoUrl: 'https://github.com/wasiqzahoor/AI-Video-Detection-',
    },
    {
      title: 'AI Real Time Detection',
      description: '🤖 AI Real Time Detection A real-time object detection system that uses AI to identify and track objects in live video streams, such as from a webcam or IP camera.',
      imageUrl: 'https://tse4.mm.bing.net/th/id/OIP.yWOMENbhDxaR6jKgawVtRgHaE8?cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3',
      tags: ['OpenCv', 'API','Python'], liveUrl: '#', repoUrl: 'https://github.com/wasiqzahoor/AI-Real-Time-Detection',
    },
    {
      title: 'AI Health Analyzer',
      description: '🩺 AI Health Analyzer An AI-powered health monitoring and analysis tool that helps users track vital signs, analyze health data, and get instant health insights. ',
      imageUrl: 'https://thf.bing.com/th/id/OIP.g58OawGmKs1tWO8KJBYbMgHaE8?o=7&cb=thfc1rm=3&rs=1&pid=ImgDetMain&o=7&rm=3',
      tags: ['Python', 'API'], liveUrl: '#', repoUrl: 'https://github.com/wasiqzahoor/AI-Health-Analyzer',
    },
    {
      title: 'AI Assistant',
      description: '🤖 AI Assistant An AI-powered virtual assistant that can answer questions, assist with tasks, and provide real-time responses. ',
      imageUrl: 'https://aisera.com/wp-content/uploads/2020/06/AI-Virtual-Assistant.jpg',
      tags: ['Python','API'], liveUrl: '#', repoUrl: 'https://github.com/wasiqzahoor/AI-Assistant-',
    },
    {
      title: 'Tic Tac Toe Game',
      description: '❌⭕ Tic Tac Toe Game A classic Tic Tac Toe game built using HTML, CSS, and JavaScript. Two players take turns marking a square with X or O, and the first player to get three marks in a row (horizontally, vertically, or diagonally) wins.',
      imageUrl: 'https://thf.bing.com/th/id/OIP.-ls_-PmKRIrZq8Sl3hpJJQHaHa?o=7&cb=thfc1rm=3&rs=1&pid=ImgDetMain&o=7&rm=3',
      tags: ['Vanilla JS', 'Games','Web Applications'], liveUrl: '#', repoUrl: 'https://github.com/wasiqzahoor/Tic-Tac-Toe-Game',
    },
    {
      title: 'Scissors Paper Rock Game',
      description: '✂️📄 Rock Paper Scissors Game A fun and simple Rock Paper Scissors game built in Python. The player competes against the computer, and the winner is decided based on the classic rules: Rock beats Scissors Scissors beats Paper Paper beats Rock',
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/I/81wYLoxQjBL.png',
      tags: ['Games', 'Web Applications'], liveUrl: '#', repoUrl: 'https://github.com/wasiqzahoor/Scissor-Paper-Game',
    },
    {
      title: 'Python Snake Game',
      description: '🐍 Python Snake Game This is a simple yet fun Snake Game built using Python and Pygame. The player controls a snake that moves around the screen, eating food to grow longer while avoiding collisions with the walls and itself.',
      imageUrl: 'https://tse1.mm.bing.net/th/id/OIP._62HvS7KTSGWY9PnifZqqwHaD4?cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3',
      tags: ['Games', 'Python'], liveUrl: '#', repoUrl: 'https://github.com/wasiqzahoor/Python-Snake-Game',
    },
    {
      title: 'AI Play Music with Emotions',
      description: '🎵 AI Play Music with Emotions An AI-powered music player that detects your emotions and plays songs that match your mood. Whether you’re feeling happy, sad, relaxed, or energetic, this AI assistant curates a playlist tailored to your emotional state.',
      imageUrl: 'https://tse2.mm.bing.net/th/id/OIP.uLmLgdVyOB2x1ShCHQyv1QHaD4?cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3',
      tags: ['API', 'Python'], liveUrl: '#', repoUrl: 'https://github.com/wasiqzahoor/AI-Play-Music-with-Emotions',
    },
    {
      title: 'AI Image Detection',
      description: 'A simple web-based AI application that detects face shapes from uploaded images.',
      imageUrl: 'https://tse4.mm.bing.net/th/id/OIP.Edt9_dLZJqXhT_6EEGgiOQHaFP?cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3',
      tags: ['OpenCv', 'API', 'Python'], liveUrl: '#', repoUrl: 'https://github.com/wasiqzahoor/AI-Image-Detection',
    },
  ];

const allTags = ['All', ...new Set(projectsData.flatMap(p => p.tags))];

const ProjectsPage = () => {
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [activeFilter, setActiveFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  useEffect(() => {
    setCurrentPage(1);
  }, [filteredProjects]);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const handleFilter = (tag) => {
    setActiveFilter(tag);
    if (tag === 'All') {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(projectsData.filter(project => project.tags.includes(tag)));
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="text-white min-h-screen p-8 pt-24">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold text-center mb-4">My Creations</h1>
        <p className="text-lg text-gray-400 text-center mb-12">A collection of my best work and personal projects.</p>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {allTags.map(tag => (
            <button key={tag} onClick={() => handleFilter(tag)} className={`px-6 py-2 rounded-full font-medium transition-colors duration-300 ${activeFilter === tag ? 'bg-cyan-500 text-gray-900' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}>
              {tag}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {currentProjects.map((project) => (
              
              // === CHANGES START HERE ===

              <motion.div
                key={project.title}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg overflow-hidden flex flex-col" // <--- 1. ADD 'flex flex-col'
              >
                {/* Image Section */}
                <div className="relative">
                  <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-1"> {/* <--- 2. ADD 'flex flex-col flex-1' */}
                  
                  {/* Top part of content (Title, Tags, Description) */}
                  <div className="flex-1"> {/* <--- 3. ADD 'flex-1' TO A NEW WRAPPER */}
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 text-xs text-cyan-200 bg-cyan-900/50 rounded-full">{tag}</span>
                      ))}
                    </div>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                  </div>
                  
                  {/* Bottom part of content (Buttons) */}
                  <div className="flex gap-4 mt-auto"> {/* <--- 4. (Optional but good practice) ADD 'mt-auto' */}
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-2 bg-cyan-500 text-gray-900 rounded-md font-semibold hover:bg-cyan-400 transition-colors">Live Demo</a>
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-2 border border-gray-600 text-gray-300 rounded-md font-semibold hover:bg-gray-700 transition-colors">Source Code</a>
                  </div>
                </div>
              </motion.div>

              // === CHANGES END HERE ===

            ))}
          </AnimatePresence>
        </motion.div>

        {/* Pagination UI */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-12">
            <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1} className="px-4 py-2 bg-gray-800 text-gray-300 rounded-md font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:enabled:bg-gray-700 transition-colors">
              Previous
            </button>
            <span className="text-gray-400">Page {currentPage} of {totalPages}</span>
            <button onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages} className="px-4 py-2 bg-gray-800 text-gray-300 rounded-md font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:enabled:bg-gray-700 transition-colors">
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;