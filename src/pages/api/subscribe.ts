import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ message: 'Invalid email address' });
  }

  try {
    // Create data directory if it doesn't exist
    const dataDir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    // Append email to subscribers file
    const subscribersFile = path.join(dataDir, 'subscribers.txt');
    const timestamp = new Date().toISOString();
    const entry = `${email},${timestamp}\n`;
    
    fs.appendFileSync(subscribersFile, entry);

    res.status(200).json({ message: 'Successfully subscribed!' });
  } catch (error) {
    console.error('Error saving subscription:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
} 