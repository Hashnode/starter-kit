'use client'
import React, { useEffect, useState, useRef } from 'react'
import styles from "./home.module.scss"
import Typewriter from 'typewriter-effect/dist/core';
import { Post, PostThumbnailFragment, RequiredPublicationFieldsFragment } from '../../generated/graphql';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { getDefaultPostCoverImageUrl } from '../../utils/commonUtils';
import CustomImage from '../custom-image';
import { getBlurHash, resizeImage } from '@starter-kit/utils/image';
import { DEFAULT_AVATAR, blurImageDimensions } from '../../utils/const/images';
import { MdPeopleAlt } from "react-icons/md";
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { IoIosTime } from "react-icons/io";
import Image from 'next/image';

export default function Home(props: {
  posts: Array<PostThumbnailFragment>;
  publication: Pick<RequiredPublicationFieldsFragment, 'id' | 'features'> & {
    pinnedPost?: Pick<Post, 'id'> | null;
  };
}) {

  const swiperRef = useRef(null);
  const [sliderPosition, setSliderPosition] = useState(0);
  const { publication, posts } = props;

  useEffect(() => {
    new Typewriter('#typingEffect', {
      strings: ['Python', 'DSA', 'React', 'Prisma', 'Next', "Figma"],
      autoStart: true,
      loop: true
    });
  })

  useEffect(() => {
    const handleScroll = (event: any) => {
      const scrollDelta = event.deltaY * 1;
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

        {posts.map((post, index) => {
          const postURL = `/${post.slug}`;
          const isFirstPost = index === 0;

          if (!postURL) return null;
          const postCoverImageURL = post.coverImage?.url ?? getDefaultPostCoverImageUrl();
          let postBrief = post.subtitle || '';
          if (postBrief.length < 151 && post.brief) {
            postBrief = `${postBrief}${postBrief ? ' · ' : ''}${post.brief.substring(0, 151 - postBrief.length)}`;
            if (postBrief.length >= 151) {
              const indexLastSpace = postBrief.lastIndexOf(' ');
              postBrief = `${indexLastSpace === -1 ? postBrief : postBrief.substring(0, indexLastSpace)}...`;
            }
          }
          return (
            <SwiperSlide key={post.id} style={{ transform: `translateX(${-sliderPosition}px` }} className={styles.swiperSlider}>
              <div>
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
                <div className={styles.profile}>
                  <div className={styles.profileImg}>
                    <Image
                      alt={post.author.name || 'Author'}
                      className="block"
                      width={72}
                      height={72}
                      src={resizeImage(post.author.profilePicture || DEFAULT_AVATAR, { w: 72, h: 72, c: 'face' })}
                    />
                  </div>
                  <div className={styles.content}>
                    <h3>{post.author.name}</h3>
                    <article>@{post.author.username}</article>
                  </div>
                </div>
              </div>

              <div className={styles.blogContent}>
                <h2><a href={postURL}>{post.title}</a></h2>
                <p> {postBrief}</p>
              </div>

              <div className={styles.blogInfo}>
                <div>
                  <MdPeopleAlt size={25} className={styles.icon} />
                  <p>{formatNumbers(post.author.followersCount)}</p>
                </div>


                <div>
                  <IoIosTime size={25} className={styles.icon} />
                  <p>{formatNumbers(post.readTimeInMinutes) + ' min'}</p>
                </div>

                <div>
                  <MdOutlineRemoveRedEye size={25} className={styles.icon} />
                  <p>{formatNumbers(post.views)}</p>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

function formatNumbers(likes: number): string {
  const suffixes: string[] = ["", "K", "M", "B", "T"];
  const num: number = parseFloat(likes.toString());

  if (num < 1000) {
    return num.toString();
  }

  const tier: number = Math.floor(Math.log10(Math.abs(num)) / 3);
  const suffix: string = suffixes[Math.min(tier, suffixes.length - 1)]; // Choose suffix based on tier, preventing array index overflow
  const scale: number = Math.pow(10, tier * 3);

  const scaledNumber: number = num / scale;
  const formattedNumber: string = scaledNumber.toFixed(1).replace(/\.0$/, ""); // Remove '.0' for whole numbers

  return formattedNumber + suffix;
}