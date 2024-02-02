"use client";

import { updateBlogPost } from "@/lib/datafetch/updatePost";
import { Editor } from "novel";
import { useState } from "react";

function EditorUI({
  contentMarkdown,
  postId,
}: {
  contentMarkdown: string;
  postId: string;
}) {
  const [markdown, setMarkdown] = useState(contentMarkdown);

  const saveContentToHashnode = async () => {
    const data = await fetch("/api/update", {
      method: "POST",
      body: JSON.stringify({ postId: postId, contentMarkdown: markdown }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    alert(JSON.stringify(data));
  };

  return (
    <>
      <button
        className="absolute top-4 left-5 bg-blue-600 px-4 py-2 rounded-lg"
        onClick={saveContentToHashnode}
      >
        update to hashnode
      </button>
      <Editor
        className="h-screen w-full"
        defaultValue={markdown}
        disableLocalStorage
        storageKey="hmu"
        completionApi="/api/chat"
        onUpdate={(editor) => {
          setMarkdown(editor?.storage.markdown.getMarkdown());
          console.log(editor?.storage.markdown.getMarkdown());
        }}
        onDebouncedUpdate={(editor) => {
          console.log(editor?.storage.markdown.getMarkdown());
        }}
      />
    </>
  );
}

export default EditorUI;
