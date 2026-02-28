// Packages:
import Link from 'next/link'
import { ArrowRightIcon, EyeOffIcon, ShieldIcon, SlidersHorizontalIcon } from 'lucide-react'

// Components:
import CustomHead from '@/components/CustomHead'
import { Button } from '@/components/ui/button'

// Constants:
import {
  getSoftwareApplicationJSONLD,
  getLandingPageFaqJSONLD,
  getBreadcrumbJSONLD,
} from '@/lib/json-ld'
import { SEO } from '@/lib/seo'

// Functions:
const SlopMuter = () => {
  return (
    <>
      <CustomHead
        canonicalPath='/'
        jsonLd={[
          getSoftwareApplicationJSONLD(),
          getLandingPageFaqJSONLD(),
          getBreadcrumbJSONLD([
            { name: 'Home', url: SEO.siteUrl },
          ]),
        ]}
      />

      {/* Hero */}
      <section className='relative flex min-h-dvh w-full flex-col items-center justify-center px-6 pt-16 pb-24'>
        <div
          className='pointer-events-none absolute inset-0 z-0'
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(0,0,0,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.035) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div
          className='pointer-events-none absolute inset-0 z-0'
          style={{
            background: 'radial-gradient(circle at 50% 50%, transparent 40%, white 100%)',
          }}
        />
        <div className='relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center'>
          <h1 className='text-4xl leading-[1.1] font-bold tracking-tight text-neutral-950 sm:text-5xl md:text-6xl'>
            Mute the slop.
            <br />
            <span className='text-green-500'>Keep the signal.</span>
          </h1>

          <p className='mt-6 max-w-xl text-base leading-relaxed text-neutral-500 sm:text-lg'>
            Our browser extension automatically hides
            AI&#8209;generated&nbsp;slop, engagement&nbsp;bait, and bot posts from your
            X/Twitter feed.
          </p>

          <div className='mt-10 flex flex-col items-center gap-3 sm:flex-row'>
            <Button
              asChild
              size='lg'
              className='rounded-full bg-neutral-950 px-7 text-sm font-semibold text-white shadow-md hover:bg-neutral-800'
            >
              <Link href='/downloads'>
                Get the Extension
                <ArrowRightIcon className='ml-1 size-4' />
              </Link>
            </Button>

            <Button
              asChild
              variant='outline'
              size='lg'
              className='rounded-full px-7 text-sm font-semibold'
            >
              <Link href='https://github.com/diragb/slop-muter-extension' target='_blank'>
                View on GitHub
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className='w-full border-t border-neutral-100 bg-neutral-50/60 px-6 py-24'>
        <div className='mx-auto max-w-5xl'>
          <h2 className='text-center text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl'>
            How it works
          </h2>
          <p className='mx-auto mt-3 max-w-lg text-center text-sm leading-relaxed text-neutral-500 sm:text-base'>
            Three steps to a cleaner feed. No accounts blocked, no data collected, no interactions made on your behalf.
          </p>

          <div className='mt-16 grid gap-10 sm:grid-cols-3 sm:gap-8'>
            {/* Card 1 */}
            <div className='flex flex-col items-center text-center'>
              <div className='flex size-12 items-center justify-center rounded-xl bg-neutral-950 text-white shadow-sm'>
                <SlidersHorizontalIcon className='size-5' />
              </div>
              <h3 className='mt-5 text-base font-semibold text-neutral-950'>
                Choose your blocklists
              </h3>
              <p className='mt-2 text-sm leading-relaxed text-neutral-500'>
                Choose community-curated lists that target AI&nbsp;slop, engagement farming, crypto&nbsp;spam, and more. You decide what counts as slop.
              </p>
            </div>

            {/* Card 2 */}
            <div className='flex flex-col items-center text-center'>
              <div className='flex size-12 items-center justify-center rounded-xl bg-neutral-950 text-white shadow-sm'>
                <EyeOffIcon className='size-5' />
              </div>
              <h3 className='mt-5 text-base font-semibold text-neutral-950'>
                Slop disappears in real time
              </h3>
              <p className='mt-2 text-sm leading-relaxed text-neutral-500'>
                As you scroll, SlopMuter checks every tweet against your lists and silently hides the ones from known slop accounts.
              </p>
            </div>

            {/* Card 3 */}
            <div className='flex flex-col items-center text-center'>
              <div className='flex size-12 items-center justify-center rounded-xl bg-neutral-950 text-white shadow-sm'>
                <ShieldIcon className='size-5' />
              </div>
              <h3 className='mt-5 text-base font-semibold text-neutral-950'>
                100% private &amp; local
              </h3>
              <p className='mt-2 text-sm leading-relaxed text-neutral-500'>
                Everything stays in your browser. No analytics, no tracking, no data ever leaves your device. Fully open&nbsp;source.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Footer */}
      <section className='w-full px-6 py-24'>
        <div className='mx-auto flex max-w-2xl flex-col items-center text-center'>
          <h2 className='text-2xl font-bold tracking-tight text-neutral-950 sm:text-3xl'>
            Take back your feed
          </h2>
          <p className='mt-3 max-w-md text-sm leading-relaxed text-neutral-500 sm:text-base'>
            Your attention is worth protecting. Install SlopMuter, pick your blocklists, and scroll in peace.
          </p>

          <Button
            asChild
            size='lg'
            className='mt-8 rounded-full bg-neutral-950 px-7 text-sm font-semibold text-white shadow-md hover:bg-neutral-800'
          >
            <Link href='/downloads'>
              Download Now
              <ArrowRightIcon className='ml-1 size-4' />
            </Link>
          </Button>
        </div>

        <footer className='mx-auto mt-20 flex max-w-5xl flex-col items-center gap-4 border-t border-neutral-100 pt-8 text-xs text-neutral-400 sm:flex-row sm:justify-between'>
          <span>&copy; {new Date().getFullYear()} SlopMuter</span>
          <div className='flex gap-5'>
            <Link href='/privacy' className='transition-colors hover:text-neutral-600'>
              Privacy
            </Link>
            <Link href='/support' className='transition-colors hover:text-neutral-600'>
              Support
            </Link>
            <Link href='https://x.com/slopmuter' target='_blank' className='transition-colors hover:text-neutral-600'>
              X/Twitter
            </Link>
            <Link href='https://github.com/diragb/slop-muter-extension' target='_blank' className='transition-colors hover:text-neutral-600'>
              GitHub
            </Link>
          </div>
        </footer>
      </section>
    </>
  )
}

// Exports:
export default SlopMuter
