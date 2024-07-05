import React, { useEffect, useRef, useCallback, useMemo, useState } from 'react';

const MIN_SPEED = 1.5;
const MAX_SPEED = 2.5;

const randomNumber = (min: number, max: number) => Math.random() * (max - min) + min;

interface BlobProps {
  color: string;
  isWhite?: boolean;
}

const Blob: React.FC<BlobProps> = React.memo(({ color, isWhite }) => {
  const blobRef = useRef<HTMLDivElement>(null);
  const [initialState, setInitialState] = useState<{
    size: number;
    initialX: number;
    initialY: number;
    vx: number;
    vy: number;
  } | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const size = isWhite ? 15 : 32;
      setInitialState({
        size: size,
        initialX: randomNumber(0, window.innerWidth - size),
        initialY: randomNumber(0, window.innerHeight - size),
        vx: randomNumber(MIN_SPEED, MAX_SPEED) * (Math.random() > 0.5 ? 1 : -1),
        vy: randomNumber(MIN_SPEED, MAX_SPEED) * (Math.random() > 0.5 ? 1 : -1),
      });
    }
  }, [isWhite]);

  const updatePosition = useCallback(() => {
    if (!blobRef.current || !initialState) return;

    let { x, y, vx, vy } = blobRef.current.dataset;
    let numX = parseFloat(x!);
    let numY = parseFloat(y!);
    let numVx = parseFloat(vx!);
    let numVy = parseFloat(vy!);

    numX += numVx;
    numY += numVy;

    if (numX >= window.innerWidth - initialState.size || numX <= 0) {
      numVx *= -1;
    }
    if (numY >= window.innerHeight - initialState.size || numY <= 0) {
      numVy *= -1;
    }

    blobRef.current.style.transform = `translate(${numX - initialState.initialX}px, ${numY - initialState.initialY}px)`;
    blobRef.current.dataset.x = numX.toString();
    blobRef.current.dataset.y = numY.toString();
    blobRef.current.dataset.vx = numVx.toString();
    blobRef.current.dataset.vy = numVy.toString();
  }, [initialState]);

  useEffect(() => {
    if (blobRef.current && initialState) {
      blobRef.current.style.top = `${initialState.initialY}px`;
      blobRef.current.style.left = `${initialState.initialX}px`;
      blobRef.current.dataset.x = initialState.initialX.toString();
      blobRef.current.dataset.y = initialState.initialY.toString();
      blobRef.current.dataset.vx = initialState.vx.toString();
      blobRef.current.dataset.vy = initialState.vy.toString();

      const animationFrame = requestAnimationFrame(function animate() {
        updatePosition();
        requestAnimationFrame(animate);
      });

      return () => cancelAnimationFrame(animationFrame);
    }
  }, [initialState, updatePosition]);

  if (!initialState) return null;

  return (
    <div 
      ref={blobRef}
      className={`bouncing-blob bouncing-blob--${color}`}
      style={isWhite ? { width: '15vw', zIndex: 2 } : undefined}
    />
  );
});

const GradientBg: React.FC = () => {
  return (
    <div className="bouncing-blobs-container">
      <div className="bouncing-blobs-glass" />
      <div className="bouncing-blobs">
        <Blob color="blue" />
        <Blob color="blue" />
        <Blob color="blue" />
        <Blob color="white" isWhite />
        <Blob color="purple" />
        <Blob color="purple" />
        <Blob color="pink" />
      </div>
    </div>
  );
};

export default React.memo(GradientBg);
