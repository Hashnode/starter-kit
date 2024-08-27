import CustomImage from './custom-image';
import { getBlurHash, resizeImage } from '@starter-kit/utils/image';

function PostAuthorInfo(props: any) {
  const {
    author,
  } = props;

  return (
    <div className="flex w-full flex-1 flex-col md:flex-row">
      <div className="mb-4 flex w-full flex-1 flex-row md:mb-0 ">
        <div className="mr-4 flex flex-row md:mb-0 w-16 h-16 items-center self-center">
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
        </div>
        <div className="flex flex-1 flex-col justify-center md:justify-start">
          <div className="flex flex-row items-center md:mb-1">
            <p className="font-sans text-lg font-semibold text-slate-800 dark:text-slate-100">
              {author.name}
            </p>
          </div>
            <div className="hidden pr-2 md:block">
              <div className="prose text-slate-600 dark:prose-dark dark:text-slate-300">
                <p className="text-slate-800 dark:text-slate-100">
                  Temizmama Blog İçerik Ekibi olarak kapsamlı araştırmalar sonucunda yerli ve yabancı kaynaklardan edindiğimiz güncel bilgileri toplayıp kedi ve köpeklerle ilgili sorularınıza yanıt buluyor ve ilginç bilgiler paylaşıyoruz.
                </p>
              </div>    
            </div>
        </div>
      </div>
        <div className="mb-4 block md:hidden">
          <div className="prose text-slate-600 dark:prose-dark ">
            <p className="text-slate-800 dark:text-slate-100">
                Temizmama Blog İçerik Ekibi olarak kapsamlı araştırmalar sonucunda yerli ve yabancı kaynaklardan edindiğimiz güncel bilgileri toplayıp kedi ve köpeklerle ilgili sorularınıza yanıt buluyor ve ilginç bilgiler paylaşıyoruz.
            </p>
          </div>    
        </div>
    </div>
  );
}

export default PostAuthorInfo;
