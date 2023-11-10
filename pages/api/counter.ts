import type { NextApiRequest, NextApiResponse } from 'next';

export const count = { value: 0 };

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json({ count: count.value });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}