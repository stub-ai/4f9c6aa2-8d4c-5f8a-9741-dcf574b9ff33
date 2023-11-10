import type { NextApiRequest, NextApiResponse } from 'next';
import { count } from '../counter';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    count.value++;
    res.status(200).json({ count: count.value });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}