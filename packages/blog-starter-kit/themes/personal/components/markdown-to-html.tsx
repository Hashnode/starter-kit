import { markdownToHtml } from "@starter-kit/utils/renderer/markdownToHtml";
import useEmbeds from "@starter-kit/utils/renderer/hooks/useEmbeds";

type Props = {
  contentMarkdown: string;
};

const MarkdownToHtml = ({ contentMarkdown }: Props) => {
  const content = markdownToHtml(contentMarkdown);
  useEmbeds({ enabled: true });

  return (
    <div
      className="w-full px-5 mx-auto md:max-w-screen-md hashnode-content-style"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default MarkdownToHtml;
