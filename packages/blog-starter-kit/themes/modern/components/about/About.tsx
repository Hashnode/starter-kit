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
              <img src={publication.ogMetaData.image}/>
                </div>
            </div>
            <div className={styles.right}>
                <h1>
                    <p>{publication.title}</p>
                    {publication.author.name}
                </h1>
                {/* <p>{publication.author.followersCount}</p> */}
                <p>{publication.about.text}</p>
                {/* <p>{publication.posts.totalDocuments}</p> */}
                <div className={styles.btns}>
                    <button>
                        Follow ME
                    </button>
                    <button>
                        Sponser ME
                    </button>
                </div>
            </div>
        </div>
    )
}
