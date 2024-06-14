import CustomImage from './custom-image';
import { getBlurHash, resizeImage } from '@starter-kit/utils/image';

function PostAuthorInfo(props: any) {
  const {
    author,
  } = props;

  return (
    <div className="flex w-full flex-1 flex-col md:flex-row">
      <div className="mb-4 flex w-full flex-1 flex-row md:mb-0 ">
          <div className="mr-4 flex flex-row md:mb-0">
              <CustomImage
                className="block"
                placeholder="blur"
                originalSrc={author.profilePicture}
                src={resizeImage(author.profilePicture, {
                  w: 256,
                  h: 256,
                  c: 'thumb',
                })}
                blurDataURL={getBlurHash(
                  resizeImage(author.profilePicture, {
                    w: 256,
                    h: 256,
                    c: 'thumb',
                  }),
                )}
                width={256}
                height={256}
                alt={author.name}
              />
            </a>
          </div>
    </div>
  );
}

export default PostAuthorInfo;
