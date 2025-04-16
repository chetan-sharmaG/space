import React, { useEffect, useState } from 'react';
import './starField.css';

const Starfield = () => {
  const [stars, setStars] = useState([]);
  const [comets, setComets] = useState([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 100 }).map((_, index) => ({
      id: index,
      top: `${Math.random() * 100}vh`,  // Random position from bottom to top
      left: `${Math.random() * 100}vw`, // Random position horizontally
      duration: 5 + Math.random() * 10,
      delay: Math.random() * 5
    }));

    const generatedComets = Array.from({ length: 3 }).map((_, index) => ({
      id: index,
      top: `${Math.random() * 100}vh`,
      left: `${Math.random() * 100}vw`,
      duration: 3 + Math.random() * 7,
      delay: Math.random() * 2
    }));

    setStars(generatedStars);
    setComets(generatedComets);
  }, []);

  return (
    <div className="starfield">
      {stars.map(star => (
        <div
          key={star.id}
          className="star"
          style={{
            top: star.top,
            left: star.left,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`
          }}
        />
      ))}
      {comets.map(comet => (
        <div
          key={comet.id}
          className="comet"
          style={{
            top: comet.top,
            left: comet.left,
            animationDuration: `${comet.duration}s`,
            animationDelay: `${comet.delay}s`
          }}
        />
      ))}
    </div>
  );
};

export default Starfield;
