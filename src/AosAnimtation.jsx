import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AosAnimation = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,  // Set animation duration
    });
  }, []); // Empty dependency array ensures it runs only on mount


};

export default AosAnimation;
