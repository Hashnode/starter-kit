import React from 'react'
import styles from "./blogsLayout.module.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion'
import { useState } from 'react';
import { PostThumbnailFragment } from '../../generated/graphql';
import CustomImage from '../custom-image';
import { getBlurHash, resizeImage } from '@starter-kit/utils/image';
import { blurImageDimensions } from '../../utils/const/images';
import SplitText from './SpliText';
import { getDefaultPostCoverImageUrl } from '../../utils/commonUtils';

export default function BlogsLayout(props: {
  posts: Array<PostThumbnailFragment>
}) {
  const [contentIndex, setContentIndex] = useState<number>(0)

  const { posts } = props;
  console.log(posts, "FROM BLOGS LAYOUT")

  let coursesContent = [];

  for (const key in posts) {
    if (Object.prototype.hasOwnProperty.call(posts, key)) {
      const sectionTitle = `${convertToTitleCase(key)}`;

      const section = {
        title: sectionTitle,
        headline: `Expand Your Job Oppurtunities With Our Top Professional <span>${key.replace(/^\w/, (match) => match.toUpperCase())}</span`,
        description: `Dive into the dynamic world of web development, a crucial skill sought after in today's tech-driven landscape. From crafting responsive websites to mastering the latest frameworks, our web development courses empower you to thrive in the digital realm.`,
        courses: posts[key].slice(0, 2).map((post) => ({
          ...post
        })),
      };

      coursesContent.push(section);
    }
  }

  return (
    <div className={styles.parent}>
      <div className={styles.editorContainer}>
        <div className={styles.tabs}>
          {coursesContent.map((el, index) => {
            return (
              <div key={index} className={styles.tab} onClick={() => setContentIndex(index)}>{el.title}</div>
            )
          })}
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
              text={coursesContent[contentIndex].headline}
            />
          </motion.h1>
          <p>{coursesContent[contentIndex].description}</p>
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={30}
            className={styles.swiper}
            freeMode={true}
            loop={true}
            mousewheel={{ releaseOnEdges: true }}
            modules={[Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
          >

            {coursesContent[contentIndex].courses.map((post: { 
                slug: string, 
                id: string, 
                title: string, 
                coverImage: { url: string, isPortrait: boolean } 
            }, index: number) => {
              const postURL = `/${post.slug}`;
              const isFirstPost = index === 0;

              if (!postURL) return null;
              const postCoverImageURL = post.coverImage?.url ?? getDefaultPostCoverImageUrl();

              return (
                <SwiperSlide key={post.id} className={styles.swiperSlider}>
                  <a href={postURL}>
                    <CustomImage
                      className="block w-full"
                      originalSrc={postCoverImageURL}
                      src={resizeImage(postCoverImageURL, {
                        w: 1600,
                        h: 840,
                        ...(!post.coverImage?.isPortrait ? { c: 'thumb' } : { fill: 'blur' }),
                      })}
                      width={1600}
                      height={840}
                      placeholder="blur"
                      blurDataURL={getBlurHash(
                        resizeImage(postCoverImageURL, {
                          ...blurImageDimensions,
                          ...(!post.coverImage?.isPortrait ? { c: 'thumb' } : { fill: 'blur' }),
                        }),
                      )}
                      layout="responsive"
                      alt={post.title}
                      priority={isFirstPost}
                    />
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

const convertToTitleCase = (str: string) => str.replace(/([A-Z])/g, ' $1').replace(/^./, (s) => s.toUpperCase());
