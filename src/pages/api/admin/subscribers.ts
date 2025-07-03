import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Basic security - you can enhance this later
  const { secret } = req.query;
  
  // Simple secret check (you should use a more secure method in production)
  if (secret !== 'reactionbay2024') {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const subscribersFile = path.join(process.cwd(), 'data', 'subscribers.txt');
    
    if (!fs.existsSync(subscribersFile)) {
      return res.status(200).json({ subscribers: [], count: 0 });
    }

    const content = fs.readFileSync(subscribersFile, 'utf-8');
    const lines = content.trim().split('\n').filter(line => line.length > 0);
    
    const subscribers = lines.map(line => {
      const [email, timestamp] = line.split(',');
      return { email, timestamp };
    });

    res.status(200).json({ 
      subscribers, 
      count: subscribers.length,
      lastUpdated: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error reading subscribers:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
} 