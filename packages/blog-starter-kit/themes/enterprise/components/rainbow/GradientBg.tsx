import React, { useEffect, useRef, ForwardedRef, MutableRefObject } from 'react';

const MIN_SPEED = 1.5;
const MAX_SPEED = 2.5;

const randomNumber = (min: number, max: number): number => Math.random() * (max - min) + min;

interface BlobProps {
  color: string;
  isWhite?: boolean;
}

const Blob = React.forwardRef(
  (
    { color, isWhite }: BlobProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const localRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (ref && typeof ref === 'function') {
        ref(localRef.current);
      } else if (ref) {
        (ref as MutableRefObject<HTMLDivElement | null>).current = localRef.current;
      }

      const blob = localRef.current;
      if (!blob || typeof window === 'undefined') return;

      const size = isWhite ? 15 : 32;
      const initialX = randomNumber(0, window.innerWidth - size);
      const initialY = randomNumber(0, window.innerHeight - size);
      const vx = randomNumber(MIN_SPEED, MAX_SPEED) * (Math.random() > 0.5 ? 1 : -1);
      const vy = randomNumber(MIN_SPEED, MAX_SPEED) * (Math.random() > 0.5 ? 1 : -1);

      // Set initial position using transform (not top/left)
      blob.style.transform = `translate(${initialX}px, ${initialY}px)`; 
      blob.dataset.x = initialX.toString();
      blob.dataset.y = initialY.toString();
      blob.dataset.vx = vx.toString();
      blob.dataset.vy = vy.toString();

      const updatePosition = () => {
        let { x, y, vx, vy } = blob.dataset;
        let numX = parseFloat(x!);
        let numY = parseFloat(y!);
        let numVx = parseFloat(vx!);
        let numVy = parseFloat(vy!);

        numX += numVx;
        numY += numVy;

        if (numX >= window.innerWidth - size || numX <= 0) {
          numVx *= -1;
        }
        if (numY >= window.innerHeight - size || numY <= 0) {
          numVy *= -1;
        }

        blob.style.transform = `translate(${numX}px, ${numY}px)`; 
        blob.dataset.x = numX.toString();
        blob.dataset.y = numY.toString();
        blob.dataset.vx = numVx.toString();
        blob.dataset.vy = numVy.toString();
      };

      const animationFrame = requestAnimationFrame(function animate() {
        updatePosition();
        requestAnimationFrame(animate);
      });

      return () => cancelAnimationFrame(animationFrame);
    }, [isWhite]); 

    const blobClassNames = `bouncing-blob bouncing-blob--${color} ${isWhite ? 'bouncing-blob--white' : ''}`;

    return <div ref={localRef} className={blobClassNames} />;
  }
);

const GradientBg: React.FC = () => {
  const blobRefs = Array.from({ length: 7 }, () => useRef<HTMLDivElement>(null));

  return (
    <div className="bouncing-blobs-container">
      <div className="bouncing-blobs-glass" />
      <div className="bouncing-blobs">
        {blobRefs.map((ref, index) => (
          <Blob
            key={index}
            ref={ref}
            color={index === 3 ? "white" : index < 3 ? "blue" : index > 5 ? "pink" : "purple"}
            isWhite={index === 3}
          />
        ))}
      </div>
    </div>
  );
};

export default React.memo(GradientBg);
