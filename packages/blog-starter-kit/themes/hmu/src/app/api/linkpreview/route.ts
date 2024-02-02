// pages/api/link-preview.js

import { load } from "cheerio";
import fetch from "node-fetch";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const link = searchParams.get("link");

  if (!link) {
    return Response.json({ error: "No link provided" });
  }

  const decodedUrl = decodeURIComponent(link).toString();

  try {
    // Fetch HTML content of the page
    const response = await fetch(decodedUrl);
    const html = await response.text();

    // Use Cheerio to parse HTML
    const $ = load(html);

    // Extract relevant information
    const title = $("head title").text().trim();
    const favicon =
      $('head link[rel="icon"]').attr("href") ||
      $('head link[rel="shortcut icon"]').attr("href");
    const description = $('head meta[name="description"]').attr("content");
    const ogImage = $('head meta[property="og:image"]').attr("content");

    // Return the link preview data
    return Response.json({ title, favicon, description, ogImage });
  } catch (error) {
    console.error("Error fetching link preview:", error);
    return Response.json({ error: "Internal Server Error" });
  }
}
