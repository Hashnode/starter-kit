import React from 'react'
import styles from "./about.module.scss"
import Image from 'next/image'
import CustomImage from '../custom-image'
import { getBlurHash, resizeImage } from '@starter-kit/utils/image';
import { getDefaultPostCoverImageUrl } from '../../utils/commonUtils';
import { DEFAULT_AVATAR, blurImageDimensions } from '../../utils/const/images';

export default function About(props: { publication }) {
    const { publication } = props
    console.log(publication, "GHJKL")

    const postCoverImageURL = publication.ogMetaData.image ?? getDefaultPostCoverImageUrl();

    return (
        <div className={styles.about}>
            <div className={styles.left}>

                <div className={styles.customImg}>
                <CustomImage
                    className="block w-full"
                    originalSrc={publication.ogMetaData.image}
                    src={resizeImage(postCoverImageURL, {
                        w: 1600,
                        h: 840,
                    })}
                    width={1600}
                    height={840}
                    placeholder="blur"
                    blurDataURL={getBlurHash(
                        resizeImage(postCoverImageURL, {
                            ...blurImageDimensions,
                        }),
                    )}
                    layout="responsive"
                    alt={"OG Image"}
                    priority={false}
                />
                </div>
            </div>
            <div className={styles.right}>
                <h1>
                    <p>{publication.title}</p>
                    {publication.author.name}
                </h1>
                {/* <h2>@{publication.author.username}</h2> */}
                {/* <p>{publication.author.followersCount}</p> */}
                <p>{publication.about.text}</p>
                {/* <p>{publication.posts.totalDocuments}</p> */}
                <div className={styles.btns}>
                    <button>
                        Follow ME !!
                    </button>
                    <button>
                        Sponser ME !!
                    </button>
                </div>
            </div>
        </div>
    )
}
