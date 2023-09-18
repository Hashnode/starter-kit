import { markdownToHtml } from "@starter-kit/utils/renderer/markdownToHtml";

type Props = {
  contentMarkdown: string;
};

const PostBody = ({ contentMarkdown }: Props) => {
  const content = markdownToHtml(contentMarkdown);

  return (
    <div
      className="w-full px-5 mx-auto md:max-w-screen-md hashnode-content-style"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default PostBody;