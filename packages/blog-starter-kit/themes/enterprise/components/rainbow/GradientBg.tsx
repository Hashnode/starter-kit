import React, { useMemo, useState, useEffect } from "react";

const getRandomPosition = () => ({
  x: Math.random() * 100 - 50,
  y: Math.random() * 100 - 50
});

const getRandomDuration = () => Math.random() * 10 + 20; // 20-30 saniye arası

const GradientBg: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
      setTimeout(() => setIsVisible(true), 50); // Kısa bir gecikme ile opacity değişimini tetikle
    }, 1000); // 1 saniye gecikme ile yüklemeyi başlat

    return () => clearTimeout(timer);
  }, []);

  const gradients = useMemo(() => [
    { class: 'g1', ...getRandomPosition(), duration: getRandomDuration() },
    { class: 'g2', ...getRandomPosition(), duration: getRandomDuration() },
    { class: 'g3', ...getRandomPosition(), duration: getRandomDuration() },
    { class: 'g4', ...getRandomPosition(), duration: getRandomDuration() },
    { class: 'g5', ...getRandomPosition(), duration: getRandomDuration() },
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