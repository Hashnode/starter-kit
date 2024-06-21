import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';

gsap.registerPlugin(MorphSVGPlugin);

const CookieBanner = () => {
  useEffect(() => {
    const banner = document.querySelector('.banner');
    const buttons = banner.querySelectorAll('button');
    const cookie = banner.querySelector('.cookie');
    const eyePath = cookie.querySelectorAll('.eye path');
    const mouthPath = cookie.querySelector('.mouth path');
    const pieceLeft = cookie.querySelectorAll('.piece.left');
    const pieceRight = cookie.querySelectorAll('.piece.right');

    const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

    buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        gsap.to(cookie, {
          keyframes: [{ '--crack-offset': '0px', duration: 0.4 }],
        });
        gsap.to(cookie, {
          repeat: 2,
          keyframes: [
            { '--rotate': '-3deg', duration: 0.05 },
            { '--rotate': '3deg', duration: 0.05 },
            { '--rotate': '0deg', duration: 0.05 },
          ],
          onComplete: () => {
            gsap.to(cookie, { '--top-y': '-16px', duration: 0.3, ease: 'power4.out' });
            gsap.to([...pieceRight, ...pieceLeft], {
              y: () => random(-16, -24),
              x: () => random(12, -12),
              duration: 0.5,
            });
            gsap.to([...pieceLeft, ...pieceRight], {
              rotateZ: () => random(90, -90),
              opacity: 0,
              duration: 0.2,
              delay: 0.25,
            });
          },
        });
        gsap.to(eyePath, {
          keyframes: [
            {
              morphSVG: 'M8.99929 4.99965C8.99929 7.20859 7.20894 7.5 5 7.5C2.79106 7.5 1 7.20859 1 4.99965C1 2.7907 2.7907 2.5 4.99964 2.5C7.20859 2.5 8.99929 2.7907 8.99929 4.99965Z',
              duration: 0.15,
            },
            {
              morphSVG: 'M8.99929 4.99965C7.99929 10.2086 7.20894 7 5 7C2.79106 7 2 10.2086 1 4.99965C1 2.7907 2.79106 1 5 1C7.20894 1 8.99929 2.7907 8.99929 4.99965Z',
              duration: 0.15,
              delay: 0.15,
              onStart: () => {
                gsap.to(cookie, {
                  keyframes: [
                    { '--eyeball-scale': '.5', '--eyeball-y': '-4px', '--mouth-y': '1px', duration: 0.15 },
                    { '--eyeball-x': '-3px', duration: 0.15 },
                    { '--eyeball-x': '-1px', duration: 0.15 },
                    {
                      '--eyeball-x': '-2px',
                      duration: 0.15,
                      onComplete: () => {
                        gsap.to(banner, {
                          opacity: 0,
                          y: 16,
                          duration: 0.2,
                          onComplete: () => {
                            setTimeout(() => {
                              gsap.set(cookie, { clearProps: true });
                              gsap.set(eyePath, {
                                morphSVG:
                                  'M8.99929 4.99965C8.99929 7.20859 7.20859 8.99929 4.99964 8.99929C2.7907 8.99929 1 7.20859 1 4.99965C1 2.7907 2.7907 1 4.99964 1C7.20859 1 8.99929 2.7907 8.99929 4.99965Z',
                              });
                              gsap.set([...pieceRight, ...pieceLeft], { clearProps: true });
                              gsap.set(mouthPath, {
                                morphSVG:
                                  'M6 8.5C3.4154 8.5 1.5 5.5 1.5 5.5H10.5C10.5 5.5 8.5846 8.5 6 8.5Z',
                              });
                              gsap.to(banner, { opacity: 1, y: 0, duration: 0.2 });
                            }, 2000);
                          },
                        });
                      },
                    },
                  ],
                });
              },
            },
          ],
        });
        gsap.to(mouthPath, {
          keyframes: [
            {
              morphSVG: 'M6 5.45001C3.4154 5.45001 1.5 5.50001 1.5 5.50001H10.5C10.5 5.50001 8.5846 5.45001 6 5.45001Z',
              duration: 0.15,
            },
            {
              morphSVG: 'M6 1.5C3.4154 1.5 1.5 5.5 1.5 5.5H10.5C10.5 5.5 8.5846 1.5 6 1.5Z',
              duration: 0.15,
              delay: 0.15,
            },
          ],
        });
      });
    });
  }, []);

  return (
    
  )