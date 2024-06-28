import { randomBytes, createHmac, timingSafeEqual } from 'crypto';
import { NextApiRequest, NextApiResponse } from 'next';

const CSRF_SECRET = process.env.NEXT_PUBLIC_CSRF_SECRET || 'cd0102b7cb534906f90d7b0298fb159217fb1ea2051331c3c57f70f826b29f350078efe0d7fb76e7e160aa0f1fbad1629f2f2086419b82b8f330e491e2f8c3e4';

const generateCsrfToken = (): string => {
  const timestamp = Date.now().toString();
  const hash = createHmac('sha256', CSRF_SECRET).update(timestamp).digest('hex');
  return `${timestamp}.${hash}`;
};

const validateCsrfToken = (token: string): boolean => {
  const [timestamp, hash] = token.split('.');
  const expectedHash = createHmac('sha256', CSRF_SECRET).update(timestamp).digest('hex');
  return timingSafeEqual(Buffer.from(hash), Buffer.from(expectedHash));
};

const handler = (req: NextApiRequest, res: NextApiResponse): void => {
  if (req.method === 'GET') {
    const csrfToken = generateCsrfToken();
    res.status(200).json({ csrfToken });
  } else if (req.method === 'POST') {
    const { token } = req.body;
    const isValid = validateCsrfToken(token);
    if (isValid) {
      res.status(200).json({ success: true });
    } else {
      res.status(403).json({ success: false });
    }
  } else {
    res.status(405).end();
  }
};

export default handler;
