// Typescript:
import type { EnsureAllKeys } from '@/types/helpers'

// Exports:
/**
 * These are the categories of posts and posters on X/Twitter that deserve to be muted/blocked.
 */
import BLOCKLISTS_MAP_JSON from './blocklists-map.json' assert { type: 'json' }

export const BLOCKLISTS_MAP = BLOCKLISTS_MAP_JSON as Record<string, { name: string, description: string }>

const _BLOCKLISTS_ARRAY = Object.keys(BLOCKLISTS_MAP)

export const BLOCKLISTS: EnsureAllKeys<typeof BLOCKLISTS_MAP, typeof _BLOCKLISTS_ARRAY> = _BLOCKLISTS_ARRAY
