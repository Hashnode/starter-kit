import { RequiredStaticPageFieldsFragment } from '../generated/graphql';

type Props = {
  pageContent: RequiredStaticPageFieldsFragment;
};

function StaticPageContent(props: Props) {
  const { content, title } = props.pageContent;

  return (
    <div className={`blog-page-card pb-32`}>
      <div
        className={`blog-page-content prose prose-lg mx-auto break-words tracking-tight dark:prose-dark xl:prose-xl`}
      >
        <h1
          className={`blog-page-title mb-10 break-words text-3xl font-bold text-black dark:text-white md:text-4xl xl:text-5xl`}
        >
          {title}
        </h1>
        <div
          dangerouslySetInnerHTML={{
            __html: content.html,
          }}
        />
      </div>
    </div>
  );
}

export default StaticPageContent;
