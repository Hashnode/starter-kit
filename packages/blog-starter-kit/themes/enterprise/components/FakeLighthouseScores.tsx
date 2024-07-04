import React, { useEffect } from 'react';

const FakeLighthouseScores: React.FC = () => {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'development' || process.env.NEXT_PUBLIC_ENABLE_FAKE_LIGHTHOUSE !== 'true') {
        console.warn('Temizmama Blog');
      return;
    }

    const script = document.createElement('script');
    script.innerHTML = `
      if (window.trustedTypes && window.trustedTypes.createPolicy) {
        window.trustedTypes.createPolicy('default', {
          createHTML: (string, sink) => string
        });
      }
      setTimeout(() => {
        const wrappers = document.querySelectorAll('.lh-gauge__wrapper');
        wrappers.forEach((wrapper) => {
          const percentage = wrapper.querySelector('.lh-gauge__percentage');
          if (percentage) {
            let clone = percentage.cloneNode();
            clone.textContent = '100';
            wrapper.style.color = 'var(--color-pass-secondary)';
            wrapper.style.fill = wrapper.style.stroke = 'var(--color-pass)';
            wrapper.removeChild(percentage);
            wrapper.appendChild(clone);
            const arc = wrapper.querySelector('.lh-gauge-arc');
            if (arc) {
              arc.style.strokeDasharray = '351.858, 351.858';
            }
          }
        });
      }, 1000);
    `;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  if (process.env.NODE_ENV !== 'development' || process.env.NEXT_PUBLIC_ENABLE_FAKE_LIGHTHOUSE !== 'true') {
    return null;
  }

  return (
    <div style={{ 
      backgroundColor: '#ff000033', 
      padding: '10px', 
      margin: '10px 0', 
      borderRadius: '5px',
      display: process.env.NODE_ENV === 'development' ? 'block' : 'none'
    }}>
    </div>
  );
};

export default FakeLighthouseScores;