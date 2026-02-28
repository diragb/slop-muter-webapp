// Packages:
import Link from 'next/link'
import { getWebPageJSONLD, getBreadcrumbJSONLD } from '@/lib/json-ld'

// Components:
import CustomHead from '@/components/CustomHead'

// Constants:
import { SEO } from '@/lib/seo'

// Functions:
const Support = () => {
  return (
    <>
      <CustomHead
        title='Support'
        description='Get help with SlopMuter. Find answers to common questions, troubleshooting steps, and ways to contact us or report issues.'
        canonicalPath='/support'
        keywords={[
          'slopmuter support',
          'slopmuter help',
          'slopmuter troubleshooting',
          'slopmuter faq',
          'slopmuter contact',
          'slopmuter bug report',
          'browser extension support',
          'twitter extension help',
        ]}
        jsonLd={[
          getWebPageJSONLD({
            name: 'Support — SlopMuter',
            description: 'Get help with SlopMuter. Find answers to common questions, troubleshooting steps, and ways to contact us.',
            url: `${SEO.siteUrl}/support`,
          }),
          getBreadcrumbJSONLD([
            { name: 'Home', url: SEO.siteUrl },
            { name: 'Support', url: `${SEO.siteUrl}/support` },
          ]),
        ]}
      />

      <section className='mx-auto flex w-full max-w-2xl flex-col px-6 pt-28 pb-24'>
        <h1 className='text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl'>
          Support
        </h1>
        <p className='mt-2 text-sm text-neutral-400'>
          Need help? We&apos;ve got you covered.
        </p>

        <div className='mt-12 flex flex-col gap-10 text-[15px] leading-relaxed text-neutral-600'>
          {/* Getting Started */}
          <div>
            <h2 className='mb-3 text-lg font-semibold text-neutral-950'>
              Getting started
            </h2>
            <p>
              SlopMuter is a browser extension that hides AI-generated slop and low-quality posts from your X/Twitter feed. Here&apos;s how to get up and running:
            </p>
            <ol className='mt-3 flex flex-col gap-2 pl-5'>
              <li className='list-decimal'>
                <strong className='text-neutral-950'>Install the extension</strong> — visit the{' '}
                <Link
                  href='/downloads'
                  className='font-medium text-neutral-950 underline decoration-neutral-300 underline-offset-2 transition-colors hover:decoration-neutral-950'
                >
                  Downloads page
                </Link>{' '}
                and add SlopMuter to your browser.
              </li>
              <li className='list-decimal'>
                <strong className='text-neutral-950'>Choose your blocklists</strong> — open the extension popup and enable the community-curated blocklists you want to use.
              </li>
              <li className='list-decimal'>
                <strong className='text-neutral-950'>Browse X/Twitter</strong> — SlopMuter works automatically. Posts from accounts on your enabled blocklists will be hidden as you scroll.
              </li>
            </ol>
          </div>

          {/* FAQ */}
          <div>
            <h2 className='mb-3 text-lg font-semibold text-neutral-950'>
              Frequently asked questions
            </h2>

            <div className='flex flex-col gap-6'>
              <div>
                <h3 className='font-semibold text-neutral-950'>
                  Why are some posts still showing up?
                </h3>
                <p className='mt-1'>
                  SlopMuter filters posts based on community-curated blocklists. If an account isn&apos;t on any of your enabled blocklists, its posts will still appear. You can contribute new accounts to blocklists via GitHub.
                </p>
              </div>

              <div>
                <h3 className='font-semibold text-neutral-950'>
                  Does SlopMuter block or mute accounts on X?
                </h3>
                <p className='mt-1'>
                  No. SlopMuter never interacts with your X/Twitter account. It only hides posts locally in your browser. No accounts are blocked, muted, or reported. Your X account settings are never modified.
                </p>
              </div>

              <div>
                <h3 className='font-semibold text-neutral-950'>
                  Does SlopMuter collect any data?
                </h3>
                <p className='mt-1'>
                  No. Everything stays in your browser. There is no analytics, no tracking, and no data ever leaves your device. Read our{' '}
                  <Link
                    href='/privacy'
                    className='font-medium text-neutral-950 underline decoration-neutral-300 underline-offset-2 transition-colors hover:decoration-neutral-950'
                  >
                    Privacy Policy
                  </Link>{' '}
                  for full details.
                </p>
              </div>

              <div>
                <h3 className='font-semibold text-neutral-950'>
                  Which browsers are supported?
                </h3>
                <p className='mt-1'>
                  SlopMuter is currently available for Google Chrome via the Chrome Web Store. Support for Firefox, Safari, and Microsoft Edge is coming soon. You can also build it from source for any Chromium-based browser.
                </p>
              </div>

              <div>
                <h3 className='font-semibold text-neutral-950'>
                  Is SlopMuter free?
                </h3>
                <p className='mt-1'>
                  Yes. SlopMuter is completely free and open source under the MIT license. No premium tiers, no ads, no hidden costs.
                </p>
              </div>

              <div>
                <h3 className='font-semibold text-neutral-950'>
                  How do blocklists work?
                </h3>
                <p className='mt-1'>
                  Blocklists are community-curated lists of X/Twitter accounts known for posting slop — AI-generated content, engagement farming, crypto spam, and more. You choose which lists to enable in the extension popup, and SlopMuter filters posts from those accounts in real time.
                </p>
              </div>
            </div>
          </div>

          {/* Troubleshooting */}
          <div>
            <h2 className='mb-3 text-lg font-semibold text-neutral-950'>
              Troubleshooting
            </h2>

            <div className='flex flex-col gap-6'>
              <div>
                <h3 className='font-semibold text-neutral-950'>
                  The extension isn&apos;t filtering any posts
                </h3>
                <ul className='mt-1 flex flex-col gap-2 pl-5'>
                  <li className='list-disc'>Make sure at least one blocklist is enabled in the extension popup.</li>
                  <li className='list-disc'>Refresh the X/Twitter page after enabling blocklists.</li>
                  <li className='list-disc'>Check that the extension icon is visible in your browser toolbar. If not, click the puzzle piece icon and pin SlopMuter.</li>
                </ul>
              </div>

              <div>
                <h3 className='font-semibold text-neutral-950'>
                  The extension popup won&apos;t open
                </h3>
                <ul className='mt-1 flex flex-col gap-2 pl-5'>
                  <li className='list-disc'>Try disabling and re-enabling the extension in your browser&apos;s extension settings (<code className='rounded bg-neutral-100 px-1.5 py-0.5 text-xs text-neutral-700'>chrome://extensions</code>).</li>
                  <li className='list-disc'>Make sure you&apos;re running the latest version of the extension.</li>
                  <li className='list-disc'>Restart your browser and try again.</li>
                </ul>
              </div>

              <div>
                <h3 className='font-semibold text-neutral-950'>
                  Posts reappear after scrolling
                </h3>
                <p className='mt-1'>
                  X/Twitter dynamically loads content as you scroll. SlopMuter continuously scans new posts, but there may be a brief moment before they are hidden. If a post persists, please report the issue on GitHub.
                </p>
              </div>
            </div>
          </div>

          {/* Report a Bug */}
          <div>
            <h2 className='mb-3 text-lg font-semibold text-neutral-950'>
              Report a bug or request a feature
            </h2>
            <p>
              Found a bug or have an idea for a new feature? Open an issue on our GitHub repository:
            </p>
            <p className='mt-3'>
              <Link
                href='https://github.com/diragb/slop-muter-extension/issues/new'
                target='_blank'
                className='font-medium text-neutral-950 underline decoration-neutral-300 underline-offset-2 transition-colors hover:decoration-neutral-950'
              >
                Open a new issue on GitHub
              </Link>
            </p>
            <p className='mt-3'>
              When reporting a bug, please include:
            </p>
            <ul className='mt-2 flex flex-col gap-2 pl-5'>
              <li className='list-disc'>Your browser name and version</li>
              <li className='list-disc'>The SlopMuter extension version</li>
              <li className='list-disc'>A description of what happened vs. what you expected</li>
              <li className='list-disc'>Steps to reproduce the issue (if possible)</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className='mb-3 text-lg font-semibold text-neutral-950'>
              Contact us
            </h2>
            <p>
              For general questions, feedback, or anything else, you can reach us through:
            </p>
            <ul className='mt-3 flex flex-col gap-2 pl-5'>
              <li className='list-disc'>
                <strong className='text-neutral-950'>X/Twitter</strong> —{' '}
                <Link
                  href='https://x.com/slopmuter'
                  target='_blank'
                  className='font-medium text-neutral-950 underline decoration-neutral-300 underline-offset-2 transition-colors hover:decoration-neutral-950'
                >
                  @slopmuter
                </Link>
              </li>
              <li className='list-disc'>
                <strong className='text-neutral-950'>GitHub Issues</strong> —{' '}
                <Link
                  href='https://github.com/diragb/slop-muter-extension/issues'
                  target='_blank'
                  className='font-medium text-neutral-950 underline decoration-neutral-300 underline-offset-2 transition-colors hover:decoration-neutral-950'
                >
                  github.com/diragb/slop-muter-extension/issues
                </Link>
              </li>
              <li className='list-disc'>
                <strong className='text-neutral-950'>Email</strong> —{' '}
                <Link
                  href='mailto:support@slopmuter.com'
                  className='font-medium text-neutral-950 underline decoration-neutral-300 underline-offset-2 transition-colors hover:decoration-neutral-950'
                >
                  support@slopmuter.com
                </Link>
              </li>
            </ul>
            <p className='mt-3'>
              We typically respond within 48 hours.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

// Exports:
export default Support
