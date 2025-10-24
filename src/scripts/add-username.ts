// Packages:
import { input, checkbox } from '@inquirer/prompts'
import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

// Assets:
import BLOCKLISTS_MAP from '../constants/blocklists-map.json' with { type: 'json' }

// Functions:
const sha256 = async (message: string): Promise<string> => {
  const encoder = new TextEncoder()
  const data = encoder.encode(message)
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
  return hashHex
}

const main = async () => {
  const username = await input({
    message: 'Enter Twitter username:',
    validate: (value) => {
      if (!value || value.trim().length === 0) {
        return 'Username cannot be empty'
      }
      return true
    }
  })

  const blocklistOptions = Object.entries(BLOCKLISTS_MAP).map(([id, info]) => ({
    name: `${info.name} - ${info.description}`,
    value: id
  }))

  const selectedBlocklists = await checkbox({
    message: 'Select blocklist categories (use arrow keys and spacebar):',
    choices: blocklistOptions,
    validate: (value) => {
      if (value.length === 0) {
        return 'Please select at least one blocklist category'
      }
      return true
    }
  })

  for (const blocklistID of selectedBlocklists) {
    console.log(`\nProcessing ${(BLOCKLISTS_MAP as Record<string, { name: string, description: string }>)[blocklistID].name}...`)

    const blocklistPath = join(process.cwd(), 'public', 'blocklists', `${blocklistID}.txt`)
    let currentContent = ''
    
    try {
      currentContent = readFileSync(blocklistPath, 'utf-8')
    } catch (error) {
      console.log(`  Creating new blocklist file: ${blocklistID}.txt`)
    }

    const usernames = currentContent.split(',').filter(u => u.trim().length > 0)
    if (usernames.includes(username)) {
      console.log(`  Username ${username} already exists in ${blocklistID}`)
      continue
    }

    usernames.push(username)
    usernames.sort()
    const newContent = usernames.join(',')

    writeFileSync(blocklistPath, newContent, 'utf-8')
    console.log(`  ✓ Added ${username} to ${blocklistID}.txt`)

    const hash = await sha256(newContent)
    const hashPath = join(process.cwd(), 'public', 'blocklist-hashes', `${blocklistID}.txt`)
    writeFileSync(hashPath, hash, 'utf-8')
    console.log(`  ✓ Updated hash: ${hash.substring(0, 16)}...`)
  }

  console.log('\n✓ All done!')
}

// Exection:
main().catch(console.error)
