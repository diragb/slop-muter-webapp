// Constants:
const SITE_URL = process.env['NEXT_PUBLIC_SITE_URL'] || 'https://slopmuter.com'

// Exports:
export const SEO = {
  siteName: 'SlopMuter',
  siteUrl: SITE_URL,
  title: {
    default: 'SlopMuter — Mute the Slop. Keep the Signal.',
    template: '%s | SlopMuter',
  },
  description:
    'Free, open-source browser extension that automatically hides AI-generated slop, engagement bait, and bot posts from your X/Twitter feed. No data collected, fully private.',
  keywords: [
    'slop muter',
    'slopmuter',
    'twitter slop blocker',
    'x slop blocker',
    'ai slop filter',
    'block ai posts twitter',
    'hide ai tweets',
    'twitter bot blocker',
    'engagement bait blocker',
    'twitter feed cleaner',
    'x feed filter',
    'browser extension twitter',
    'block slop accounts',
    'mute slop twitter',
    'twitter content filter',
    'anti-slop extension',
    'open source twitter filter',
    'community blocklist twitter',
    'twitter spam filter extension',
    'clean twitter feed',
  ],
  author: {
    name: 'Dirag Biswas',
    url: 'https://github.com/diragb',
  },
  creator: 'SlopMuter',
  publisher: 'SlopMuter',
  twitterHandle: '@slopmuter',
  github: 'https://github.com/diragb/slop-muter-extension',
  chromeWebStore: 'https://chromewebstore.google.com/detail/mcihoalbpibkcngfpohfolldkicapgcj',
  openGraph: {
    image: `${SITE_URL}/og-image.jpg`,
    squareImage: `${SITE_URL}/og-square.png`,
    imageAlt: 'SlopMuter — Mute the Slop. Keep the Signal.',
    imageWidth: 1200,
    imageHeight: 630,
  },
  twitter: {
    image: `${SITE_URL}/twitter-image.jpg`,
    imageAlt: 'SlopMuter — Mute the Slop. Keep the Signal.',
  },
}
