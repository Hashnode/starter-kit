import React, { useRef, useEffect } from 'react';

const ClickSpark: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      setSparkPosition(e);
      animateSpark();
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const setSparkPosition = (e: MouseEvent) => {
    if (!svgRef.current) return;
    svgRef.current.style.left = `${e.clientX - svgRef.current.clientWidth / 2}px`;
    svgRef.current.style.top = `${e.clientY - svgRef.current.clientHeight / 2}px`;
  };

  const animateSpark = () => {
    if (!svgRef.current) return;
    const sparks = Array.from(svgRef.current.children);
    const size = parseInt(sparks[0].getAttribute('y1') || '0');
    const offset = `${size / 2}px`;

    const keyframes = (i: number) => {
      const deg = `calc(${i} * (360deg / ${sparks.length}))`;
      return [
        {
          strokeDashoffset: size * 3,
          transform: `rotate(${deg}) translateY(${offset})`
        },
        {
          strokeDashoffset: size,
          transform: `rotate(${deg}) translateY(0)`
        }
      ];
    };

    const options: KeyframeAnimationOptions = {
      duration: 660,
      easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
      fill: 'forwards'
    };

    sparks.forEach((spark, i) => (spark as HTMLElement).animate(keyframes(i), options));
  };

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 9999 }}>
      <style>{`
        svg {
          pointer-events: none;
          position: absolute;
          rotate: -20deg;
          stroke: #efdcc9;
        }
        line {
          stroke-dasharray: 30;
          stroke-dashoffset: 30;
          transform-origin: center;
        }
      `}</style>
      <svg ref={svgRef} width="30" height="30" viewBox="0 0 100 100" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4">
        {[...Array(8)].map((_, i) => (
          <line key={i} x1="50" y1="30" x2="50" y2="4" />
        ))}
      </svg>
    </div>
  );
};

export default ClickSpark;