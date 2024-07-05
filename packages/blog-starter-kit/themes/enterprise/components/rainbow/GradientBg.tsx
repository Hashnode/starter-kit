import React, { useEffect, useRef, useCallback, useMemo } from 'react';

const MIN_SPEED = 1.5;
const MAX_SPEED = 2.5;

const randomNumber = (min, max) => Math.random() * (max - min) + min;

interface BlobProps {
  color: string;
  isWhite?: boolean;
}

const Blob = React.memo(({ color, isWhite }) => {
  const blobRef = useRef(null);

  const initialState = useMemo(() => {
    const size = isWhite ? 15 : 32;
    return {
      size,
      initialX: randomNumber(0, window.innerWidth - size),
      initialY: randomNumber(0, window.innerHeight - size),
      vx: randomNumber(MIN_SPEED, MAX_SPEED) * (Math.random() > 0.5 ? 1 : -1),
      vy: randomNumber(MIN_SPEED, MAX_SPEED) * (Math.random() > 0.5 ? 1 : -1),
    };
  }, [isWhite]);

  const updatePosition = useCallback(() => {
    if (!blobRef.current) return;

    let { x, y, vx, vy } = blobRef.current.dataset;
    let numX = parseFloat(x);
    let numY = parseFloat(y);
    let numVx = parseFloat(vx);
    let numVy = parseFloat(vy);

    numX += numVx;
    numY += numVy;

    if (numX >= window.innerWidth - initialState.size || numX <= 0) {
      numVx *= -1;
    }
    if (numY >= window.innerHeight - initialState.size || numY <= 0) {
      numVy *= -1;
    }

    blobRef.current.style.transform = `translate(${numX - initialState.initialX}px, ${numY - initialState.initialY}px)`;
    blobRef.current.dataset.x = numX;
    blobRef.current.dataset.y = numY;
    blobRef.current.dataset.vx = numVx;
    blobRef.current.dataset.vy = numVy;
  }, [initialState]);

  useEffect(() => {
    if (blobRef.current) {
      blobRef.current.dataset.x = initialState.initialX;
      blobRef.current.dataset.y = initialState.initialY;
      blobRef.current.dataset.vx = initialState.vx;
      blobRef.current.dataset.vy = initialState.vy;

      updatePosition(); // Initial positioning
    }

    const animationFrame = requestAnimationFrame(function animate() {
      updatePosition();
      requestAnimationFrame(animate);
    });

    return () => cancelAnimationFrame(animationFrame);
  }, [initialState, updatePosition]);

  const blobClassNames = `bouncing-blob bouncing-blob--${color} ${isWhite ? 'bouncing-blob--white' : ''}`;

  return (
    <div ref={blobRef} className={blobClassNames} style={isWhite ? { width: '15vw', zIndex: 2 } : undefined} /> 
  );
});


const GradientBg = React.memo(() => (
  <div className="bouncing-blobs-container">
    <div className="bouncing-blobs-glass" />
    <div className="bouncing-blobs">
      {/* Blobs */}
      <Blob color="blue" />
      <Blob color="blue" />
      <Blob color="blue" />
      <Blob color="white" isWhite />
      <Blob color="purple" />
      <Blob color="purple" />
      <Blob color="pink" />
    </div>
  </div>
));

export default GradientBg;
