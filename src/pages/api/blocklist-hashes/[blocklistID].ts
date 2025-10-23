// Packages:
import { readFileSync } from 'fs'
import { join } from 'path'

// Typescript:
import type { NextApiRequest, NextApiResponse } from 'next'

// Exports:
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') return res.status(200).end()
  
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' })

  const { blocklistID } = req.query

  if (!blocklistID || typeof blocklistID !== 'string') {
    return res.status(400).json({ error: 'Blocklist ID is required' })
  }

  try {
    const filePath = join(process.cwd(), 'public', 'blocklist-hashes', `${blocklistID}.txt`)
    const fileContents = readFileSync(filePath, 'utf8')
    res.setHeader('Content-Type', 'text/plain')
    res.status(200).send(fileContents)
  } catch (error) {
    res.status(404).json({ error: 'Blocklist not found' })
  }
}
