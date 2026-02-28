// Packages:
import { SEO } from '@/lib/seo'

// Typescript:
import type {
  WithContext,
  Organization,
  WebSite,
  SoftwareApplication,
  FAQPage,
  WebPage,
  BreadcrumbList,
} from 'schema-dts'

// Exports:

/**
 * Organization — establishes the SlopMuter brand entity for Google's Knowledge Graph.
 */
export const getOrganizationJSONLD = (): WithContext<Organization> => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SEO.siteName,
  url: SEO.siteUrl,
  logo: `${SEO.siteUrl}/apple-touch-icon.png`,
  description: SEO.description,
  founder: {
    '@type': 'Person',
    name: SEO.author.name,
    url: SEO.author.url,
  },
  sameAs: [
    'https://x.com/slopmuter',
    SEO.github,
  ],
})

/**
 * WebSite — tells search engines about the site-level entity, enables sitelinks.
 */
export const getWebSiteJSONLD = (): WithContext<WebSite> => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SEO.siteName,
  url: SEO.siteUrl,
  description: SEO.description,
  publisher: {
    '@type': 'Organization',
    name: SEO.siteName,
    url: SEO.siteUrl,
  },
})

/**
 * SoftwareApplication — the main product schema for the browser extension.
 * Enables rich results with ratings, price, and platform info.
 */
export const getSoftwareApplicationJSONLD = (): WithContext<SoftwareApplication> => ({
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: SEO.siteName,
  url: SEO.siteUrl,
  description: SEO.description,
  applicationCategory: 'BrowserApplication',
  operatingSystem: 'Chrome, Firefox, Safari, Edge',
  softwareVersion: '1.0',
  image: SEO.openGraph.image,
  screenshot: SEO.openGraph.image,
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
  },
  creator: {
    '@type': 'Person',
    name: SEO.author.name,
    url: SEO.author.url,
  },
  publisher: {
    '@type': 'Organization',
    name: SEO.siteName,
    url: SEO.siteUrl,
  },
  downloadUrl: SEO.chromeWebStore,
  installUrl: SEO.chromeWebStore,
  featureList: [
    'Automatically hides AI-generated slop from X/Twitter',
    'Community-curated blocklists',
    'Real-time feed filtering',
    'Zero data collection — 100% private and local',
    'Open source (MIT license)',
    'No account interaction — posts are only hidden locally',
  ],
  permissions: 'storage, activeTab',
  license: 'https://opensource.org/licenses/MIT',
})

/**
 * FAQPage — surfaces Q&A pairs as rich results on the landing page.
 */
export const getLandingPageFaqJSONLD = (): WithContext<FAQPage> => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is SlopMuter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SlopMuter is a free, open-source browser extension that automatically hides AI-generated slop, engagement bait, and bot posts from your X/Twitter feed. It uses community-curated blocklists to filter out low-quality content in real time.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does SlopMuter work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SlopMuter scans every tweet as it appears in your feed and checks the author against your enabled blocklists. If the author is on a list, the post is silently hidden. No accounts are blocked on X itself, posts are only removed from your view, locally in your browser.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is SlopMuter free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. SlopMuter is completely free and open source under the MIT license. No premium tiers, no ads, no hidden costs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does SlopMuter collect my data?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. SlopMuter stores everything locally in your browser. There is no analytics, no tracking, no telemetry, and no data ever leaves your device. The only network requests are to fetch publicly available blocklist files from GitHub.',
      },
    },
    {
      '@type': 'Question',
      name: 'What browsers does SlopMuter support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SlopMuter is currently available for Google Chrome via the Chrome Web Store. Support for Firefox, Safari, and Edge is coming soon. You can also build it from source for any Chromium-based browser.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does SlopMuter block or mute accounts on X/Twitter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. SlopMuter does not block, mute, report, or interact with any account on X/Twitter. It only hides posts locally in your browser. Your X account settings are never modified.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are blocklists?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Blocklists are community-curated lists of X/Twitter accounts known for posting slop: AI-generated content, engagement farming, crypto spam, and more. You choose which blocklists to enable, and SlopMuter filters posts from those accounts.',
      },
    },
  ],
})

/**
 * WebPage — generic page-level structured data.
 */
export const getWebPageJSONLD = (page: {
  name: string
  description: string
  url: string
}): WithContext<WebPage> => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: page.name,
  description: page.description,
  url: page.url,
  isPartOf: {
    '@type': 'WebSite',
    name: SEO.siteName,
    url: SEO.siteUrl,
  },
  publisher: {
    '@type': 'Organization',
    name: SEO.siteName,
    url: SEO.siteUrl,
  },
})

/**
 * BreadcrumbList — helps search engines understand site hierarchy.
 */
export const getBreadcrumbJSONLD = (
  items: { name: string; url: string }[],
): WithContext<BreadcrumbList> => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
})
