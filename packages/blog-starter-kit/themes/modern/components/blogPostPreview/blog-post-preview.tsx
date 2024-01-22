import moment from 'dayjs';
import Image from 'next/legacy/image';
import Link from 'next/link';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { twJoin } from 'tailwind-merge';

import { BookOpenSVG, FileLineChartSVG, PinSVG } from '../icons/svgs';
import { getBlurHash, resizeImage } from '../../utils/image';
import { kFormatter } from '../../utils/image';
import CustomImage from '../custom-image';
import { DEFAULT_AVATAR, blurImageDimensions } from '../../utils/const/images';
import { PostThumbnailFragment } from '../../generated/graphql';
import { getDefaultPostCoverImageUrl } from '../../utils/commonUtils';
import { RequiredPublicationProps } from '../publicationsPosts/publication-posts';
import styles from "./blogPostPreview.module.scss"
import { MdPeopleAlt } from "react-icons/md";
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { IoIosTime } from "react-icons/io"

moment.extend(localizedFormat);

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

function BlogPostPreview(props: {
  post: PostThumbnailFragment;
  publication: RequiredPublicationProps;
  pinnedPostId?: string;
}) {
  const { post, publication, pinnedPostId } = props;
  const postURL = `/${post.slug}`;

  const postCoverImageURL = post.coverImage?.url ?? getDefaultPostCoverImageUrl();

  const preload = async () => {
    const nextData = document.getElementById('__NEXT_DATA__');
    if (nextData) {
      const { buildId } = JSON.parse(nextData.innerHTML);
      if (buildId) {
        fetch(`/_next/data/${buildId}/${post.slug}.json?slug=${post.slug}`);
      }
    }
  };

  let postBrief = post.subtitle || '';
  if (postBrief.length < 151 && post.brief) {
    postBrief = `${postBrief}${postBrief ? ' · ' : ''}${post.brief.substring(0, 151 - postBrief.length)}`;
    if (postBrief.length >= 151) {
      const indexLastSpace = postBrief.lastIndexOf(' ');
      postBrief = `${indexLastSpace === -1 ? postBrief : postBrief.substring(0, indexLastSpace)}...`;
    }
  }

  return (
    <div key={post.id} className={styles.swiperSlider}>
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
          priority={false}
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
    </div>
  );
}

export default BlogPostPreview;
