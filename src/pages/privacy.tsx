// Packages:
import Link from 'next/link'
import { getWebPageJSONLD, getBreadcrumbJSONLD } from '@/lib/json-ld'

// Components:
import CustomHead from '@/components/CustomHead'

// Constants:
import { SEO } from '@/lib/seo'

// Functions:
const Privacy = () => {
  return (
    <>
      <CustomHead
        title='Privacy Policy'
        description='SlopMuter privacy policy. Everything stays local — no analytics, no tracking, no data collection. Your data never leaves your device.'
        canonicalPath='/privacy'
        keywords={[
          'slopmuter privacy policy',
          'slopmuter data collection',
          'slopmuter privacy',
          'browser extension privacy',
          'twitter extension privacy',
          'no tracking extension',
        ]}
        jsonLd={[
          getWebPageJSONLD({
            name: 'Privacy Policy — SlopMuter',
            description: 'SlopMuter privacy policy. Everything stays local — no analytics, no tracking, no data collection.',
            url: `${SEO.siteUrl}/privacy`,
          }),
          getBreadcrumbJSONLD([
            { name: 'Home', url: SEO.siteUrl },
            { name: 'Privacy Policy', url: `${SEO.siteUrl}/privacy` },
          ]),
        ]}
      />

      <section className='mx-auto flex w-full max-w-2xl flex-col px-6 pt-28 pb-24'>
        <h1 className='text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl'>
          Privacy Policy
        </h1>
        <p className='mt-2 text-sm text-neutral-400'>
          Last updated — March 1, 2026
        </p>

        <div className='mt-12 flex flex-col gap-10 text-[15px] leading-relaxed text-neutral-600'>
          {/* Intro */}
          <p>
            SlopMuter is built with a simple privacy principle:{' '}
            <strong className='text-neutral-950'>your data never leaves your device.</strong>{' '}
            We don&apos;t collect, store, or transmit any personal information. Period.
          </p>

          {/* What we don't collect */}
          <div>
            <h2 className='mb-3 text-lg font-semibold text-neutral-950'>
              What we don&apos;t collect
            </h2>
            <ul className='flex flex-col gap-2 pl-5'>
              <li className='list-disc'>No personal data or account information</li>
              <li className='list-disc'>No browsing history or feed content</li>
              <li className='list-disc'>No analytics, telemetry, or usage tracking</li>
              <li className='list-disc'>No cookies or fingerprinting</li>
              <li className='list-disc'>No data is sold, shared, or transmitted to third parties</li>
            </ul>
          </div>

          {/* Local storage */}
          <div>
            <h2 className='mb-3 text-lg font-semibold text-neutral-950'>
              What is stored locally
            </h2>
            <p>
              SlopMuter uses your browser&apos;s local storage to save:
            </p>
            <ul className='mt-3 flex flex-col gap-2 pl-5'>
              <li className='list-disc'>Your blocklist preferences (which lists you&apos;ve enabled or disabled)</li>
              <li className='list-disc'>Cached blocklist data (so the extension doesn&apos;t re-download unchanged lists)</li>
              <li className='list-disc'>Scan and removal statistics (displayed in the extension popup)</li>
            </ul>
            <p className='mt-3'>
              All of this data lives entirely in your browser and is never transmitted anywhere.
            </p>
          </div>

          {/* Network requests */}
          <div>
            <h2 className='mb-3 text-lg font-semibold text-neutral-950'>
              Network requests
            </h2>
            <p>
              The only network requests SlopMuter makes are to fetch publicly available
              blocklist files hosted on GitHub. These requests contain no user-identifying
              information — they are simple GET requests to public URLs.
            </p>
            <p className='mt-3'>
              SHA-256 hashing is used to check whether a blocklist has changed before
              re-downloading, minimizing unnecessary network activity.
            </p>
          </div>

          {/* Permissions */}
          <div>
            <h2 className='mb-3 text-lg font-semibold text-neutral-950'>
              Browser permissions
            </h2>
            <p>SlopMuter requests only the permissions it needs:</p>
            <ul className='mt-3 flex flex-col gap-2 pl-5'>
              <li className='list-disc'>
                <strong className='text-neutral-950'>storage</strong> — to save your preferences and cached blocklist data locally
              </li>
              <li className='list-disc'>
                <strong className='text-neutral-950'>activeTab</strong> — to communicate with the current X/Twitter tab and filter posts
              </li>
            </ul>
            <p className='mt-3'>
              The extension only runs on X/Twitter pages. It does not inject code into other
              websites, run in the background on unrelated pages, or access any data beyond
              what is needed to filter your feed.
            </p>
          </div>

          {/* No account interaction */}
          <div>
            <h2 className='mb-3 text-lg font-semibold text-neutral-950'>
              No account interaction
            </h2>
            <p>
              SlopMuter does not block, report, mute, or interact with any account on X/Twitter.
              It only hides posts locally in your browser. Your X account settings are never
              modified.
            </p>
          </div>

          {/* Open source */}
          <div>
            <h2 className='mb-3 text-lg font-semibold text-neutral-950'>
              Open source
            </h2>
            <p>
              SlopMuter is fully open source. You can audit the extension code, the blocklists,
              and the blocklist criteria at any time on{' '}
              <Link
                href='https://github.com/diragb/slop-muter-extension'
                target='_blank'
                className='font-medium text-neutral-950 underline decoration-neutral-300 underline-offset-2 transition-colors hover:decoration-neutral-950'
              >
                GitHub
              </Link>
              .
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className='mb-3 text-lg font-semibold text-neutral-950'>
              Contact
            </h2>
            <p>
              If you have questions about this privacy policy, reach out on{' '}
              <Link
                href='https://x.com/slopmuter'
                target='_blank'
                className='font-medium text-neutral-950 underline decoration-neutral-300 underline-offset-2 transition-colors hover:decoration-neutral-950'
              >
                X/Twitter
              </Link>{' '}
              or open an issue on{' '}
              <Link
                href='https://github.com/diragb/slop-muter-extension'
                target='_blank'
                className='font-medium text-neutral-950 underline decoration-neutral-300 underline-offset-2 transition-colors hover:decoration-neutral-950'
              >
                GitHub
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

// Exports:
export default Privacy
