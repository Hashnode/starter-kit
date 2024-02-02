"use client";
import { useEmbeds } from "../hooks/useEmbeds";
import { markdownToHtml } from "../lib/utils/renderer/markdownToHtml";
import { memo } from "react";

type Props = {
  contentMarkdown: string;
};

const _MarkdownToHtml = ({ contentMarkdown }: Props) => {
  const content = markdownToHtml(contentMarkdown);
  useEmbeds({ enabled: true });

  return (
    <div
      className="hashnode-content-style  mx-auto w-full px-5 md:max-w-screen-md mb-44"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export const MarkdownToHtml = memo(_MarkdownToHtml);
