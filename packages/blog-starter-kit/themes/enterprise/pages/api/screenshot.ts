// pages/api/screenshot.ts
import { NextApiRequest, NextApiResponse } from 'next';
import puppeteer from 'puppeteer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { url } = req.query;

  if (!url || typeof url !== 'string') {
    return res.status(400).json({ error: 'URL parametresi gereklidir.' });
  }

  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 630 });
    await page.goto(url, { waitUntil: 'networkidle0' });
    const screenshot = await page.screenshot({ encoding: 'base64' });
    await browser.close();

    res.status(200).json({ screenshot: `data:image/png;base64,${screenshot}` });
  } catch (error) {
    console.error('Screenshot alma hatası:', error);
    res.status(500).json({ error: 'Screenshot alınamadı.' });
  }
}