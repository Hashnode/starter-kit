import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  res.status(200).json({ ip });
}