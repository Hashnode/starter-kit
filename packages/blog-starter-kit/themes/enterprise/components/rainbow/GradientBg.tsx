import React, { useMemo } from "react";

const getRandomPosition = () => ({
  x: Math.random() * 100 - 50,
  y: Math.random() * 100 - 50
});

const getRandomDuration = () => Math.random() * 10 + 20; // 20-30 saniye arası

const GradientBg: React.FC = () => {
  const gradients = useMemo(() => [
    { class: 'g1', ...getRandomPosition(), duration: getRandomDuration() },
    { class: 'g2', ...getRandomPosition(), duration: getRandomDuration() },
    { class: 'g3', ...getRandomPosition(), duration: getRandomDuration() },
    { class: 'g4', ...getRandomPosition(), duration: getRandomDuration() },
    { class: 'g5', ...getRandomPosition(), duration: getRandomDuration() },
  ], []);

  return (
    <div className="gradient-bg">
      <svg className="noiseBg" xmlns="http://www.w3.org/2000/svg">
        <filter id="noiseFilterBg">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilterBg)" />
      </svg>
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