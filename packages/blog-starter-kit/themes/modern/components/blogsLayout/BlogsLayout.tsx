import React from 'react'
import styles from "./blogsLayout.module.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { HTMLMotionProps, motion } from 'framer-motion'
import { useState } from 'react';

export default function BlogsLayout() {
  const coursesContent = [
    {
      title: "Expand Your Job Oppurtunities With Our Top Professional <span>Web</span> <span>Development</span> <span>Blogs</span> <span>!!</span>",
      description: "Dive into the dynamic world of web development, a crucial skill sought after in today's tech-driven landscape. From crafting responsive websites to mastering the latest frameworks, our web development courses empower you to thrive in the digital realm. ",
      courses: [
        {
          link: "",
          img: "https://media.discordapp.net/attachments/1144663357845147790/1194165447889797191/Frame_2.png?ex=65af5c3d&is=659ce73d&hm=1f129c23fa02436f6e57d24bb26f55920aee89508e7e309a461d8a67bd34afa9&=&format=webp&quality=lossless&width=967&height=544"
        },
        {
          link: "",
          img: "https://media.discordapp.net/attachments/1144663357845147790/1194165447889797191/Frame_2.png?ex=65af5c3d&is=659ce73d&hm=1f129c23fa02436f6e57d24bb26f55920aee89508e7e309a461d8a67bd34afa9&=&format=webp&quality=lossless&width=967&height=544"
        }

      ]
    },
    {
      title: "Lead Data-Driven Decisions With The Best <span>Data</span> <span>Analysis</span> <span>Courses</span> <span>!!</span>",
      description: "Dive into the dynamic world of data analysis, a crucial skill sought after across diverse industries such as finance, transportation, education, manufacturing, and banking. Our courses cover essential aspects of data science, incorporating Python, statistics, and machine learning to enhance your expertise.",
      courses: [
        {
          link: "https://imp.i384100.net/jr549M",
          img: "https://media.discordapp.net/attachments/1144663357845147790/1194158971217514516/Frame_1.png?ex=65af5635&is=659ce135&hm=f2d83b32e7cb0f6ec29a4dc81afd034a845a917d308d09d957ad63e831fe3481&=&format=webp&quality=lossless&width=967&height=544"
        },
        {
          link: "https://imp.i384100.net/5g07zj",
          img: "https://media.discordapp.net/attachments/1144663357845147790/1194165447889797191/Frame_2.png?ex=65af5c3d&is=659ce73d&hm=1f129c23fa02436f6e57d24bb26f55920aee89508e7e309a461d8a67bd34afa9&=&format=webp&quality=lossless&width=967&height=544"
        },
        {
          link: "",
          img: "https://media.discordapp.net/attachments/1144663357845147790/1194165447889797191/Frame_2.png?ex=65af5c3d&is=659ce73d&hm=1f129c23fa02436f6e57d24bb26f55920aee89508e7e309a461d8a67bd34afa9&=&format=webp&quality=lossless&width=967&height=544"
        },
        {
          link: "",
          img: "https://media.discordapp.net/attachments/1144663357845147790/1194165447889797191/Frame_2.png?ex=65af5c3d&is=659ce73d&hm=1f129c23fa02436f6e57d24bb26f55920aee89508e7e309a461d8a67bd34afa9&=&format=webp&quality=lossless&width=967&height=544"
        },
        {
          link: "",
          img: "https://media.discordapp.net/attachments/1144663357845147790/1194165447889797191/Frame_2.png?ex=65af5c3d&is=659ce73d&hm=1f129c23fa02436f6e57d24bb26f55920aee89508e7e309a461d8a67bd34afa9&=&format=webp&quality=lossless&width=967&height=544"
        }
      ]
    },
    {
      title: "Unlock Your Leadership Potencial With Our Top Professional <span>Leadership</span> <span>Courses</span> <span>!!</span>",
      description: "Leadership is a universally sought-after skill that transcends industries. From finance to education, manufacturing to banking, strong leadership is pivotal for success. Our comprehensive leadership courses empower you with essential skills, equipping you for impactful decision-making and effective team management.",
      courses: [
        {
          link: "https://imp.i384100.net/daJ7PK",
          img: "https://media.discordapp.net/attachments/1144663357845147790/1194169277608120431/Frame_4.png?ex=65af5fce&is=659ceace&hm=bc4ea1a2a90641aee10843dddf79b49e9a5a5c754527f24fceb6de284e525c15&=&format=webp&quality=lossless&width=967&height=544"
        }
      ]
    }
  ]

  const [contentIndex, setContentIndex] = useState<number>(0)


  return (
    <div className={styles.parent}>
      <div className={styles.editorContainer}>
        <div className={styles.tabs}>
          <div className={styles.tab} onClick={() => setContentIndex(0)}>Web Dev</div>
          <div className={styles.tab} onClick={() => setContentIndex(1)}>Data Analysis</div>
          <div className={styles.tab} onClick={() => setContentIndex(2)}>Leadership</div>
        </div>
        <div className={styles.courseContainer}>
          <motion.h1
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <SplitText
              initial={{ y: '100%' }}
              animate="visible"
              variants={{
                visible: (i: number) => ({
                  y: 0,
                  transition: {
                    delay: i * 0.1
                  }
                })
              }}
              text={coursesContent[contentIndex].title}
            />
            {/* <h1 dangerouslySetInnerHTML={{ __html: coursesContent[contentIndex].title }}></h1> */}
          </motion.h1>
          <p>{coursesContent[contentIndex].description}</p>
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={30}
            className={styles.swiper}
            freeMode={true}
            loop={true}
            mousewheel={{ releaseOnEdges: true }}
            modules={[Autoplay]} // Add the Autoplay module here
            autoplay={{
              delay: 3000, // Delay between transitions in milliseconds (adjust as needed)
              disableOnInteraction: false, // Continue autoplay after user interactions
              pauseOnMouseEnter: true, // Pause autoplay on mouse hover
            }}
          >

            {coursesContent[contentIndex].courses.map((card, index) => {
              return (
                <SwiperSlide key={index} className={styles.swiperSlider}>
                  <a href={card.link}>
                    <div
                      style={{
                        backgroundImage: `url(${card.img})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                      className={`border-5 border-solid border-[#fff] absolute inset-0 z-0 w-[100%] h-[100%] rounded-[15px] ${styles.thumbContainer}`}
                    ></div>
                  </a>
                </SwiperSlide>
              )

            })}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

function SplitText({ text, ...rest }: HTMLMotionProps<"div"> & {
  text: string
}) {
  let words = text.split(' ')
  return words.map((word, i) => {
    return (
      <div
        key={text + i}
        style={{ display: 'inline-block', overflow: 'hidden' }}
      >
        <motion.div
          {...rest}
          style={{ display: 'inline-block', willChange: 'transform' }}
          custom={i}
          dangerouslySetInnerHTML={{ __html: word + (i !== words.length - 1 ? '\u00A0' : '') }}
        >
        </motion.div>
      </div>
    )
  })
}