import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// YAHAN APNE CERTIFICATES KA DATA DAALEIN
const certificatesData = [
  {
    id: 1,
    title: 'MERN Stack Development',
    issuer: 'Coursera',
    imageUrl: 'https://i.ibb.co/n8Y326WK/1671537942-mern-stack-1-mern-stack.png', // Use high-res images
  },
  {
    id: 2,
    title: 'Advanced React',
    issuer: 'Udemy',
    imageUrl: 'https://miro.medium.com/v2/resize:fit:1358/1*8nZqlzH7gCrBCisSrGSr1Q.png',
  },
  {
    id: 3,
    title: 'AI / Machine Learning',
    issuer: 'Coursera',
    imageUrl: 'https://nitkop.in/wp-content/uploads/2022/04/new-polytechnic-kolhapur-Artificial-intelligence-and-machine-learning-460.png',
  },
   {
    id: 4,
    title: 'UI/UX Design Principles',
    issuer: 'Google',
    imageUrl: 'https://www.saveasweb.com/images/app-development/mobile-ui-ux-design-services.jpg',
  },
  {
    id: 5,
    title: 'Node.js Essentials',
    issuer: 'LinkedIn Learning',
    imageUrl: 'https://i.ibb.co/Ldd6192W/OIP.webp',
  },
  {
    id: 6,
    title: 'Cloud Computing Basics',
    issuer: 'HP Enterprise',
    imageUrl: 'https://tse4.mm.bing.net/th/id/OIP._7eM_4ioIkRtrZ2hS4aCUAHaEK?cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3',
  },
];

const CertificatesPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCert, setSelectedCert] = useState(null);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % certificatesData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + certificatesData.length) % certificatesData.length);
  };

  return (
    <div className="text-white min-h-screen p-8 pt-24 flex flex-col items-center justify-center overflow-hidden">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold">My Achievements</h1>
        <p className="text-lg text-gray-400 mt-2">A showcase of my certified skills and knowledge.</p>
      </div>

      {/* 3D Carousel Container */}
      <div className="relative w-full h-[400px] flex items-center justify-center">
        {certificatesData.map((cert, index) => {
          const isActive = index === activeIndex;
          const distance = index - activeIndex;
          const scale = isActive ? 1 : 0.8;
          const rotateY = distance * 20; // Angle for 3D effect
          const translateX = distance * 150; // Spacing between cards

          return (
            <motion.div
              key={cert.id}
              className={`absolute w-[500px] h-[350px] cursor-pointer ${isActive ? 'z-10' : 'z-0'}`}
              initial={false}
              animate={{
                transform: `translateX(${translateX}px) rotateY(${rotateY}deg) scale(${scale})`,
                zIndex: isActive ? 2 : (distance < 0 ? 1 : 0),
                opacity: isActive ? 1 : 0.6,
              }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
              onClick={() => isActive && setSelectedCert(cert.imageUrl)}
            >
              <img src={cert.imageUrl} alt={cert.title} className="w-full h-full object-contain rounded-lg shadow-2xl" />
              {/* Card info */}
              <div className={`absolute bottom-0 w-full p-4 text-center bg-black/40 backdrop-blur-sm rounded-b-lg transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                  <h3 className="font-bold text-xl">{cert.title}</h3>
                  <p className="text-gray-300">{cert.issuer}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
      
      {/* Navigation Buttons */}
      <div className="flex gap-8 mt-12">
        <button onClick={handlePrev} className="px-6 py-2 bg-gray-800 rounded-md font-semibold hover:bg-gray-700 transition-colors">Previous</button>
        <button onClick={handleNext} className="px-6 py-2 bg-gray-800 rounded-md font-semibold hover:bg-gray-700 transition-colors">Next</button>
      </div>

      {/* Full-Screen Image Viewer Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <img src={selectedCert} alt="Selected Certificate" className="max-w-full max-h-full rounded-lg shadow-2xl"/>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CertificatesPage;