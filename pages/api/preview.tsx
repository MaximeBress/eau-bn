import { NextApiRequest, NextApiResponse } from 'next';
import { createClient, linkResolver } from 'prismicio';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const client = createClient({ req });

  const { token, documentId } = req.query;

  if (!token) {
    return res.status(401).json({ message: 'Missing token' });
  }

  try {
    const url = await client.resolvePreviewURL({ linkResolver, defaultURL: '/' });
    res.setPreviewData({ ref: token });
    res.writeHead(302, { Location: url });
    res.end();
  } catch (error) {
    res.status(500).json({ message: 'Preview error' });
  }
}
