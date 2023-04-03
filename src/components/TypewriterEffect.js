import React, { useState, useEffect } from 'react';
import './Typewriter.css'


const TypewriterEffect = () => {
  const textsToDisplay = [    ' web developer',    ' software engineer',    ' programmer',    ' perpetual learner',  ];

  const [displayText, setDisplayText] = useState('');
  let textIndex = 0;
  let charIndex = -1;

  useEffect(() => {
    const typeWriter = () => {
      if (charIndex < textsToDisplay[textIndex].length - 1) {
        charIndex++;
        setDisplayText((prevDisplayText) => prevDisplayText + textsToDisplay[textIndex].charAt(charIndex));
        setTimeout(typeWriter, 100);
      } else {
        // Transition to the next text
        textIndex = (textIndex + 1) % textsToDisplay.length;
        charIndex = -1;
        setTimeout(() => {
          setDisplayText('');
          typeWriter();
        }, 2000);
      }
    };
    typeWriter();
  }, []);



  return (
    <div className=" flex items-center justify-center mb-10">
      <div className="text-5xl ">
        <span className="border-r-2 border-gray-900 animate-pulse">{displayText}</span>
      </div>
    </div>
  );
};

export default TypewriterEffect;