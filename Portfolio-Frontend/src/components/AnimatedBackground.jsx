// src/components/AnimatedBackground.js
import React from 'react';

// isDarkMode ko props ke roop mein receive karein
const AnimatedBackground = ({ isDarkMode }) => {
  const bubbleCount = 25; 

  // isDarkMode ke hisaab se color class select karein
  const bubbleColorClass = isDarkMode ? 'bg-cyan-500/10' : 'bg-yellow-400/20';

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-full">
        {Array.from({ length: bubbleCount }).map((_, index) => {
          const size = `${Math.random() * 4 + 1}rem`;
          const leftPosition = `${Math.random() * 100}%`;
          const animationDuration = `${Math.random() * 15 + 10}s`;
          const animationDelay = `${Math.random() * 10}s`;

          return (
            <div
              key={index}
              // bubbleColorClass ko dynamic banayein
              className={`absolute bottom-[-10%] rounded-full animate-bubble-rise ${bubbleColorClass}`}
              style={{
                width: size,
                height: size,
                left: leftPosition,
                animationDuration: animationDuration,
                animationDelay: animationDelay,
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default AnimatedBackground;