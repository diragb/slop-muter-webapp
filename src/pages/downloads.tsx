// Packages:
import Link from 'next/link'

// Components:
import CustomHead from '@/components/CustomHead'

// Constants:
import { getWebPageJSONLD, getBreadcrumbJSONLD } from '@/lib/json-ld'
import { SEO } from '@/lib/seo'

// Assets:
import GoogleChromeIcon from '@/assets/icons/GoogleChromeIcon'
import MozillaFirefoxIcon from '@/assets/icons/MozillaFirefoxIcon'
import SafariIcon from '@/assets/icons/SafariIcon'
import MicrosoftEdgeIcon from '@/assets/icons/MicrosoftEdgeIcon'

const browsers = [
  {
    name: 'Chrome',
    available: true,
    href: 'https://chromewebstore.google.com/detail/slopmuter',
    icon: <GoogleChromeIcon />,
  },
  {
    name: 'Firefox',
    available: false,
    href: '#',
    icon: (
      <MozillaFirefoxIcon />
    ),
  },
  {
    name: 'Safari',
    available: false,
    href: '#',
    icon: (
      <SafariIcon />
    ),
  },
  {
    name: 'Edge',
    available: false,
    href: '#',
    icon: <MicrosoftEdgeIcon />,
  },
]

// Functions:
const Downloads = () => {
  return (
    <>
      <CustomHead
        title='Download SlopMuter — Browser Extension'
        description='Download SlopMuter for your browser. Available on Chrome, with Firefox, Safari, and Edge coming soon. Free, open source, and always will be.'
        canonicalPath='/downloads'
        keywords={[
          ...SEO.keywords,
          'download slopmuter',
          'slopmuter chrome extension',
          'install slopmuter',
          'slopmuter firefox',
          'slopmuter safari',
          'slopmuter edge',
          'twitter slop blocker download',
        ]}
        jsonLd={[
          getWebPageJSONLD({
            name: 'Download SlopMuter',
            description: 'Download SlopMuter for your browser. Available on Chrome, with Firefox, Safari, and Edge coming soon.',
            url: `${SEO.siteUrl}/downloads`,
          }),
          getBreadcrumbJSONLD([
            { name: 'Home', url: SEO.siteUrl },
            { name: 'Downloads', url: `${SEO.siteUrl}/downloads` },
          ]),
        ]}
      />

      <section className='mx-auto flex w-full max-w-3xl flex-col items-center px-6 pt-28 pb-24'>
        <h1 className='text-center text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl'>
          Get SlopMuter
        </h1>
        <p className='mt-3 max-w-md text-center text-base leading-relaxed text-neutral-500'>
          Choose your browser and install SlopMuter in seconds. Free, open source, and always will be.
        </p>

        <div className='mt-14 grid w-full gap-4 sm:grid-cols-2'>
          {browsers.map((browser) => (
            <div
              key={browser.name}
              className={`relative flex flex-col items-center rounded-2xl border px-6 py-8 text-center transition-all ${
                browser.available
                  ? 'border-neutral-200 bg-white shadow-sm hover:border-neutral-300 hover:shadow-md'
                  : 'border-neutral-100 bg-neutral-50/60'
              }`}
            >
              {/* Coming soon badge */}
              {!browser.available && (
                <span className='absolute top-4 right-4 rounded-full bg-neutral-100 px-2.5 py-0.5 text-[11px] font-medium text-neutral-400'>
                  Coming soon
                </span>
              )}

              <div className={!browser.available ? 'opacity-40 grayscale' : ''}>
                {browser.icon}
              </div>

              <h2 className={`mt-4 text-lg font-semibold ${browser.available ? 'text-neutral-950' : 'text-neutral-400'}`}>
                {browser.name}
              </h2>

              {browser.available ? (
                <a
                  href={browser.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='mt-5 inline-flex w-full items-center justify-center rounded-full bg-neutral-950 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-neutral-800'
                >
                  Install Extension
                </a>
              ) : (
                <span className='mt-5 inline-flex w-full cursor-not-allowed items-center justify-center rounded-full bg-neutral-100 px-5 py-2.5 text-sm font-medium text-neutral-400'>
                  Not yet available
                </span>
              )}
            </div>
          ))}
        </div>

        <p className='mt-10 text-center text-sm text-neutral-400'>
          SlopMuter is{' '}
          <Link
            href='https://github.com/diragb/slop-muter-extension'
            target='_blank'
            className='font-medium text-neutral-950 underline decoration-neutral-300 underline-offset-2 transition-colors hover:decoration-neutral-950'
          >
            open source
          </Link>
          . You can also build it from source if your browser isn&apos;t listed yet.
        </p>
      </section>
    </>
  )
}

// Exports:
export default Downloads
