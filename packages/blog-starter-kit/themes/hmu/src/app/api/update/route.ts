import { updateBlogPost } from "@/lib/datafetch/updatePost";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  const data: any = await req.json();

  console.log("this si the data", data);

  if (!data.postId || !data.contentMarkdown) {
    return NextResponse.json({ error: "Missing data" });
  }

  const response = await updateBlogPost(data.postId, data.contentMarkdown);

  return NextResponse.json(response);
}
