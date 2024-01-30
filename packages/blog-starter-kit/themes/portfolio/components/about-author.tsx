import PostAuthorInfo from './post-author-info';
import { useAppContext } from './contexts/appContext';
import { PostFullFragment } from '../generated/graphql';

function AboutAuthor() {
  const { post: _post } = useAppContext();
  const post = _post as unknown as PostFullFragment;
  const { publication, author } = post;
  let coAuthors = post.coAuthors || [];

  const allAuthors = publication?.isTeam ? [author, ...coAuthors] : [author];

  return (
    <div className="mx-auto w-full px-5 md:max-w-screen-md mb-5 mt-10 flex flex-col gap-16">
      <div className="flex-1 px-2">
        <div className="flex flex-col flex-wrap items-start md:flex-nowrap">
          <h3 className="mb-4 w-full border-b-1-1/2 pb-2 text-base font-medium tracking-wider text-slate-500 dark:border-slate-800 dark:text-slate-400 ">
            Written by
          </h3>
          <div className="flex w-full flex-col gap-12">
            {allAuthors.map((_author) => {
              return (
                <PostAuthorInfo
                  key={_author.id.toString()}
                  author={_author}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutAuthor;