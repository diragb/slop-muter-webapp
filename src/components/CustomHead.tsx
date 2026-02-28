// Packages:
import Head from 'next/head'

// Constants:
import { SEO } from '@/lib/seo'

// Components:
import JSONLD from '@/components/JSONLD'

// Typescript:
import type { Thing, WithContext } from 'schema-dts'

interface CustomHeadProps {
  title?: string
  description?: string
  canonicalPath?: string
  keywords?: string[]
  image?: {
    og: string
    square?: string
    twitter?: string
    alt?: string
    width?: number
    height?: number
  }
  noindex?: boolean
  jsonLd?: WithContext<Thing>[]
}

// Functions:
const CustomHead = ({
  title,
  description,
  canonicalPath,
  keywords,
  image,
  noindex,
  jsonLd,
}: CustomHeadProps) => {
  const pageTitle = title
    ? SEO.title.template.replace('%s', title)
    : SEO.title.default
  const pageDescription = description ?? SEO.description
  const canonicalUrl = canonicalPath
    ? `${SEO.siteUrl}${canonicalPath}`
    : SEO.siteUrl
  const pageKeywords = keywords ?? SEO.keywords
  const ogImage = image?.og ?? SEO.openGraph.image
  const ogSquare = image?.square ?? SEO.openGraph.squareImage
  const twitterImage = image?.twitter ?? SEO.twitter.image
  const imageAlt = image?.alt ?? SEO.openGraph.imageAlt
  const ogWidth = image?.width ?? SEO.openGraph.imageWidth
  const ogHeight = image?.height ?? SEO.openGraph.imageHeight

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{pageTitle}</title>
      <meta name='description' content={pageDescription} />
      <meta name='keywords' content={pageKeywords.join(', ')} />
      <meta name='author' content={SEO.author.name} />
      <meta name='creator' content={SEO.creator} />
      <meta name='publisher' content={SEO.publisher} />
      <meta name='application-name' content={SEO.siteName} />
      <meta name='theme-color' content='#0a0a0a' />

      {/* Robots */}
      {noindex && <meta name='robots' content='noindex, nofollow' />}

      {/* Canonical */}
      <link rel='canonical' href={canonicalUrl} />

      {/* Favicons */}
      <link rel='icon' href='/favicon.ico' />
      <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
      <link rel='icon' type='image/png' sizes='512x512' href='/icon-512x512.png' />

      {/* Open Graph / Facebook */}
      <meta property='og:type' content='website' />
      <meta property='og:url' content={canonicalUrl} />
      <meta property='og:site_name' content={SEO.siteName} />
      <meta property='og:title' content={pageTitle} />
      <meta property='og:description' content={pageDescription} />
      <meta property='og:image' content={ogImage} />
      <meta property='og:image:width' content={String(ogWidth)} />
      <meta property='og:image:height' content={String(ogHeight)} />
      <meta property='og:image:alt' content={imageAlt} />
      {ogSquare && (
        <>
          <meta property='og:image' content={ogSquare} />
          <meta property='og:image:width' content='1200' />
          <meta property='og:image:height' content='1200' />
        </>
      )}

      {/* Twitter */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content={SEO.twitterHandle} />
      <meta name='twitter:creator' content={SEO.twitterHandle} />
      <meta name='twitter:title' content={pageTitle} />
      <meta name='twitter:description' content={pageDescription} />
      <meta name='twitter:image' content={twitterImage} />
      <meta name='twitter:image:alt' content={imageAlt} />

      {/* JSON-LD Structured Data */}
      {jsonLd?.map((data, i) => (
        <JSONLD key={i} data={data} />
      ))}
    </Head>
  )
}

// Exports:
export default CustomHead
