'use client'
import React, { useEffect, useState, useRef } from 'react'
import styles from "./home.module.scss"
import Typewriter from 'typewriter-effect/dist/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Home() {

  useEffect(() => {
    new Typewriter('#typingEffect', {
      strings: ['Python', 'DSA', 'React', 'Prisma', 'Next', "Figma"],
      autoStart: true,
      loop: true
    });
  })

  const testimonials = [
    {
      url: "hello-world/cover.jpg",
      title: "got my portfolio ready in 18 hours with CMS !!",
      id: 1,
    },
    {
      url: "hello-world/cover.jpg",
      title: "got my portfolio ready in 18 hours with CMS !!",
      id: 2,
    },
    {
      url: "hello-world/cover.jpg",
      title: "Learnt prompting for free and got 23% hike !!",
      id: 3,
    },{
      url: "hello-world/cover.jpg",
      title: "got my portfolio ready in 18 hours with CMS !!",
      id: 1,
    },
    {
      url: "hello-world/cover.jpg",
      title: "got my portfolio ready in 18 hours with CMS !!",
      id: 2,
    },
    {
      url: "hello-world/cover.jpg",
      title: "Learnt prompting for free and got 23% hike !!",
      id: 3,
    },{
      url: "hello-world/cover.jpg",
      title: "got my portfolio ready in 18 hours with CMS !!",
      id: 1,
    },
    {
      url: "hello-world/cover.jpg",
      title: "got my portfolio ready in 18 hours with CMS !!",
      id: 2,
    },
    {
      url: "hello-world/cover.jpg",
      title: "Learnt prompting for free and got 23% hike !!",
      id: 3,
    },{
      url: "hello-world/cover.jpg",
      title: "got my portfolio ready in 18 hours with CMS !!",
      id: 1,
    },
    {
      url: "hello-world/cover.jpg",
      title: "got my portfolio ready in 18 hours with CMS !!",
      id: 2,
    },
    {
      url: "hello-world/cover.jpg",
      title: "Learnt prompting for free and got 23% hike !!",
      id: 3,
    },
  ];

  const swiperRef = useRef(null);
  const [sliderPosition, setSliderPosition] = useState(0);
  useEffect(() => {
    const handleScroll = (event: any) => {
      const scrollDelta = event.deltaY * 0.5;
      const newSliderPosition = sliderPosition + scrollDelta;

      if (newSliderPosition >= 0) {
        setSliderPosition(newSliderPosition);
      } else {
        setSliderPosition(0);
      }
    };

    window.addEventListener('wheel', handleScroll);

    return () => window.removeEventListener('wheel', handleScroll);
  }, [sliderPosition]);
  return (
    <div className={styles.landingPage}>
      <h1>
        Discover Content Rich <br /> Blogs In <span id='typingEffect'></span>
      </h1>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        className={styles.swiper}
        ref={swiperRef}
        freeMode={true}
        loop={true}

        mousewheel={{ releaseOnEdges: true }}
      >

        {testimonials.map((card, index) => {
          return (
            <SwiperSlide key={index} style={{ transform: `translate3d(${-sliderPosition}px, ${-sliderPosition/3}px, ${-sliderPosition}px)` }} className={styles.swiperSlider}>
              <img src='https://media.discordapp.net/attachments/1144663357845147790/1198278477464473710/woman.png?ex=65be52cb&is=65abddcb&hm=8fc86c0a031eaa4dee52bd7050be9c074bdbaf99f261ff21620226b346d31ef7&=&format=webp&quality=lossless&width=429&height=490'/>
              <div>
                <p className={styles.box}>
                  {/* <div className="profile"></div> */}
                  <span>{card.title}</span>
                </p>
              </div>
            </SwiperSlide>
          )

        })}
      </Swiper>
    </div>
  )
}
