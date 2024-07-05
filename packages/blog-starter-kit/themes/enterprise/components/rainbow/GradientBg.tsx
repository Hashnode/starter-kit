import React, { useMemo, useState, useEffect } from "react";

// Ekranın köşelerinde ve kenarlarında pozisyon oluştur
const getCornerPosition = () => {
  const side = Math.floor(Math.random() * 4); // 0: üst, 1: sağ, 2: alt, 3: sol
  let x, y;

  switch (side) {
    case 0: // üst
      x = Math.random() * 100;
      y = Math.random() * 20 - 20; // -20% ile 0% arası
      break;
    case 1: // sağ
      x = Math.random() * 20 + 80; // 80% ile 100% arası
      y = Math.random() * 100;
      break;
    case 2: // alt
      x = Math.random() * 100;
      y = Math.random() * 20 + 80; // 80% ile 100% arası
      break;
    case 3: // sol
      x = Math.random() * 20 - 20; // -20% ile 0% arası
      y = Math.random() * 100;
      break;
  }

  return { x, y };
};

const getRandomDuration = () => Math.random() * 10 + 30; // 30-40 saniye arası

const GradientBg: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
      setTimeout(() => setIsVisible(true), 50);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const gradients = useMemo(() => [
    { class: 'g1', ...getCornerPosition(), duration: getRandomDuration() },
    { class: 'g2', ...getCornerPosition(), duration: getRandomDuration() },
    { class: 'g3', ...getCornerPosition(), duration: getRandomDuration() },
    { class: 'g4', ...getCornerPosition(), duration: getRandomDuration() },
    { class: 'g5', ...getCornerPosition(), duration: getRandomDuration() },
  ], []);

  if (!isLoaded) {
    return null;
  }

  return (
    <div className={`gradient-bg ${isVisible ? 'visible' : ''}`}>
      <div className="gradients-container">
        {gradients.map((gradient, index) => (
          <div 
            key={index}
            className={`gradient ${gradient.class}`}
            style={{
              '--x': `${gradient.x}%`,
              '--y': `${gradient.y}%`,
              '--duration': `${gradient.duration}s`,
            } as React.CSSProperties}
          />
        ))}
      </div>
    </div>
  );
};

export default React.memo(GradientBg);