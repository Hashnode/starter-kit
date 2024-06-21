import React, { useEffect } from 'react';

const CookieBanner: React.FC = () => {
  useEffect(() => {
    // GSAP ve MorphSVGPlugin scriptlerini yükle
    const loadScript = (src: string) => {
      return new Promise<void>((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Failed to load script ${src}`));
        document.body.appendChild(script);
      });
    };

    const initGsap = async () => {
      try {
        await loadScript('https://unpkg.com/gsap@3/dist/gsap.min.js');
        await loadScript('https://assets.codepen.io/16327/MorphSVGPlugin3.min.js');

        const gsap = (window as any).gsap;
        const MorphSVGPlugin = (window as any).MorphSVGPlugin;

        gsap.registerPlugin(MorphSVGPlugin);

        const { to, from, set } = gsap;

        const banner = document.querySelector(".banner");
        const button = banner.querySelectorAll("button");
        const cookie = banner.querySelector(".cookie");
        const eyePath = cookie.querySelectorAll(".eye path");
        const mouthPath = cookie.querySelector(".mouth path");
        const pieceLeft = cookie.querySelectorAll(".piece.left");
        const pieceRight = cookie.querySelectorAll(".piece.right");

        const random = (min: number, max: number) => {
          return Math.floor(Math.random() * (max - min + 1) + min);
        };

        button.forEach((btn) => {
          btn.addEventListener("click", () => {
            to(cookie, {
              keyframes: [
                {
                  "--crack-offset": "0px",
                  duration: 0.4,
                },
              ],
            });
            to(cookie, {
              repeat: 2,
              keyframes: [
                {
                  "--rotate": "-3deg",
                  duration: 0.05,
                },
                {
                  "--rotate": "3deg",
                  duration: 0.05,
                },
                {
                  "--rotate": "0deg",
                  duration: 0.05,
                },
              ],
              onComplete: () => {
                to(cookie, {
                  "--top-y": "-16px",
                  duration: 0.3,
                  ease: "power4.out",
                });
                to([...pieceRight, ...pieceLeft], {
                  y: () => random(-16, -24),
                  x: () => random(12, -12),
                  duration: 0.5,
                });
                to([...pieceLeft, ...pieceRight], {
                  rotateZ: () => random(90, -90),
                  opacity: 0,
                  duration: 0.2,
                  delay: 0.25,
                });
              },
            });
            to(eyePath, {
              keyframes: [
                {
                  morphSVG:
                    "M8.99929 4.99965C8.99929 7.20859 7.20894 7.5 5 7.5C2.79106 7.5 1 7.20859 1 4.99965C1 2.7907 2.7907 2.5 4.99964 2.5C7.20859 2.5 8.99929 2.7907 8.99929 4.99965Z",
                  duration: 0.15,
                },
                {
                  morphSVG:
                    "M8.99929 4.99965C7.99929 10.2086 7.20894 7 5 7C2.79106 7 2 10.2086 1 4.99965C1 2.7907 2.79106 1 5 1C7.20894 1 8.99929 2.7907 8.99929 4.99965Z",
                  duration: 0.15,
                  delay: 0.15,
                  onStart: () => {
                    to(cookie, {
                      keyframes: [
                        {
                          "--eyeball-scale": ".5",
                          "--eyeball-y": "-4px",
                          "--mouth-y": "1px",
                          duration: 0.15,
                        },
                        {
                          "--eyeball-x": "-3px",
                          duration: 0.15,
                        },
                        {
                          "--eyeball-x": "-1px",
                          duration: 0.15,
                        },
                        {
                          "--eyeball-x": "-2px",
                          duration: 0.15,
                          onComplete: () => {
                            to(banner, {
                              opacity: 0,
                              y: 16,
                              duration: 0.2,
                              onComplete: () => {
                                setTimeout(() => {
                                  set(cookie, {
                                    clearProps: true,
                                  });
                                  set(eyePath, {
                                    morphSVG:
                                      "M8.99929 4.99965C8.99929 7.20859 7.20859 8.99929 4.99964 8.99929C2.7907 8.99929 1 7.20859 1 4.99965C1 2.7907 2.7907 1 4.99964 1C7.20859 1 8.99929 2.7907 8.99929 4.99965Z",
                                  });
                                  set([...pieceRight, ...pieceLeft], {
                                    clearProps: true,
                                  });
                                  set(mouthPath, {
                                    morphSVG:
                                      "M6 8.5C3.4154 8.5 1.5 5.5 1.5 5.5H10.5C10.5 5.5 8.5846 8.5 6 8.5Z",
                                  });
                                  to(banner, {
                                    opacity: 1,
                                    y: 0,
                                    duration: 0.2,
                                  });
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
            to(mouthPath, {
              keyframes: [
                {
                  morphSVG:
                    "M6 5.45001C3.4154 5.45001 1.5 5.50001 1.5 5.50001H10.5C10.5 5.50001 8.5846 5.45001 6 5.45001Z",
                  duration: 0.15,
                },
                {
                  morphSVG:
                    "M6 1.5C3.4154 1.5 1.5 5.5 1.5 5.5H10.5C10.5 5.5 8.5846 1.5 6 1.5Z",
                  duration: 0.15,
                  delay: 0.15,
                },
              ],
            });
          });
        });
      } catch (error) {
        console.error('Error loading GSAP or MorphSVGPlugin:', error);
      }
    };

    initGsap();
  }, []);

  return (
    <div className="banner">
      <div className="cookie">
        <svg className="piece left first" viewBox="0 0 6 6">
          <path
            d="M2.7712 3.24799C2.49222 3.48546 2.25276 3.56275 2.0468 3.54193C1.83835 3.52086 1.60578 3.39352 1.35475 3.09775C1.32929 3.06776 1.30223 3.03622 1.27405 3.00337C1.14064 2.84789 0.98195 2.66294 0.847989 2.47237C0.767445 2.35779 0.701633 2.24904 0.658271 2.1518C0.613433 2.05125 0.602085 1.98386 0.605059 1.945C0.605871 1.9344 0.615589 1.89561 0.682208 1.82564C0.746183 1.75846 0.839337 1.68684 0.954432 1.61004C1.04061 1.55253 1.1302 1.4978 1.22128 1.44216C1.25177 1.42354 1.28242 1.40481 1.31317 1.38585C1.42939 1.31416 1.55181 1.23617 1.6446 1.15718C1.92359 0.919702 2.16305 0.842405 2.36903 0.863218C2.57748 0.884281 2.81005 1.0116 3.06108 1.30737C3.15208 1.4146 3.18572 1.55517 3.18078 1.74639C3.17737 1.87881 3.15862 2.00137 3.13819 2.13496C3.12652 2.21129 3.11429 2.29122 3.10406 2.37865C3.06203 2.73781 2.97771 3.07221 2.7712 3.24799Z"
          />
        </svg>
        <svg className="piece left second" viewBox="0 0 6 6">
          <path
            d="M3.41877 4.34598C3.25832 4.4149 3.05082 4.4003 2.76355 4.20721C2.47228 4.01145 2.13466 3.65292 1.75621 3.11101C1.72207 3.06213 1.68536 3.00983 1.64671 2.95478C1.46019 2.68906 1.22858 2.35912 1.02389 2.0393C0.900476 1.84648 0.789635 1.6616 0.705989 1.5005C0.621272 1.33733 0.575794 1.21961 0.562939 1.15003C0.58648 1.13809 0.632947 1.12218 0.714191 1.10853C0.786405 1.09639 0.861375 1.08938 0.943475 1.0817C0.972457 1.07899 1.00233 1.07619 1.03328 1.07306C1.13458 1.06281 1.27078 1.04742 1.37711 1.00175C1.53757 0.932828 1.74507 0.947428 2.03234 1.1405C2.32361 1.33626 2.66123 1.69477 3.03968 2.23668C3.34391 2.67231 3.3799 3.03115 3.41841 3.41501C3.42664 3.49709 3.43499 3.58032 3.4461 3.66569C3.47107 3.85758 3.48486 4.04125 3.46883 4.18288C3.46088 4.25308 3.44701 4.29854 3.43354 4.32493C3.42733 4.33711 3.42251 4.34262 3.42064 4.3445C3.41938 4.34577 3.41903 4.34589 3.41884 4.34596C3.41882 4.34597 3.41879 4.34597 3.41877 4.34598Z"
          />
        </svg>
        <svg className="piece left third" viewBox="0 0 6 6">
          <path
            d="M1.88258 2.82165C1.68571 2.99149 1.53057 3.03982 1.4116 3.03138C1.29397 3.02305 1.15245 2.95495 0.991176 2.76217C0.973255 2.74075 0.954403 2.71847 0.934921 2.69544C0.844059 2.58805 0.739488 2.46446 0.651753 2.33625C0.599125 2.25934 0.558447 2.18896 0.532976 2.12821C0.50891 2.07081 0.505164 2.03786 0.505506 2.0242C0.507356 2.0202 0.515919 2.00229 0.546947 1.96967C0.589585 1.92486 0.653164 1.87464 0.735084 1.8184C0.796261 1.7764 0.85946 1.73644 0.924784 1.69515C0.946903 1.68116 0.969266 1.66702 0.991876 1.6526C1.07531 1.59938 1.16688 1.53934 1.2377 1.47824C1.43458 1.30839 1.58972 1.26006 1.7087 1.26849C1.82633 1.27682 1.96785 1.34491 2.12912 1.53768C2.17046 1.5871 2.19186 1.66082 2.18457 1.79015C2.17948 1.88042 2.16475 1.96095 2.14795 2.05279C2.1379 2.10773 2.12711 2.16672 2.1172 2.23426C2.07985 2.48878 2.01506 2.70735 1.88258 2.82165Z"
          />
        </svg>
        {/* Diğer SVG elementlerini buraya ekleyin */}
      </div>
      <div className="content">
        <div>
          Site deneyiminizi kişiselleştirmek ve site trafiğini <br />analiz etmek için çerezleri kullanıyoruz.
        </div>
        <div className="list">
          <button className="muted">Reddet</button>
          <button>Kabul et</button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
