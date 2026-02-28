// Packages:
import { useCallback, useEffect, useState } from 'react'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'

// Assets:
import Icon from '../../public/apple-touch-icon.png'
import { ArrowRightIcon, MenuIcon, XIcon } from 'lucide-react'

// Constants:
const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

// Components:
import Link from 'next/link'
import Image from 'next/image'
import { Button } from './ui/button'

// Functions:
const Navbar = () => {
  // State:
  const [scrolled, setScrolled] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // Functions:
  const openSidebar = useCallback(() => setSidebarOpen(true), [])
  const closeSidebar = useCallback(() => setSidebarOpen(false), [])

  // Effects:
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [sidebarOpen])

  // Return:
  return (
    <>
      <header
        className={cn(
          `fixed top-0 z-9999 flex w-full items-center justify-center backdrop-blur-lg transition-all duration-300 ${inter.className} font-sans`,
          scrolled
            ? 'h-14 border-b border-neutral-200/60 bg-white/80 shadow-xs backdrop-blur-xl'
            : 'h-16 bg-transparent',
        )}
      >
        <div className='mx-auto flex w-full max-w-6xl items-center justify-between px-5 md:px-8'>
          {/* Left: Logo + Nav */}
          <div className='flex items-center gap-1'>
            <Link href='/' className='inline-flex shrink-0 items-center justify-center rounded-lg p-1 transition-opacity hover:opacity-70'>
              <Image src={Icon.src} alt='SlopMuter' width={26} height={26} />
            </Link>

            <nav className='ml-6 hidden items-center gap-0.5 md:flex'>
              <Link
                href='/'
                className='rounded-md px-3 py-1.5 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-950'
              >
                Home
              </Link>
              <Link
                href='/downloads'
                className='rounded-md px-3 py-1.5 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-950'
              >
                Downloads
              </Link>
              <Link
                href='https://github.com/diragb/slop-muter-extension'
                target='_blank'
                className='inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-950'
              >
                <svg className='size-4' viewBox='0 0 24 24' fill='currentColor'>
                  <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                </svg>
                GitHub
              </Link>
            </nav>
          </div>

          {/* Right: CTA + Mobile Menu */}
          <div className='flex items-center gap-3'>
            <Link
              href='/downloads'
              className='hidden items-center gap-1.5 rounded-full bg-neutral-950 px-4 py-1.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-neutral-800 md:inline-flex'
            >
              Get Extension
              <ArrowRightIcon className='size-3.5' />
            </Link>

            <Button
              size='icon'
              variant='ghost'
              className='relative flex size-8 text-neutral-700 outline-hidden md:hidden'
              onClick={openSidebar}
            >
              <MenuIcon className='size-5' />
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={cn(
          'fixed inset-0 z-10000 bg-black/40 backdrop-blur-xs transition-opacity duration-300 md:hidden',
          sidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        )}
        onClick={closeSidebar}
        aria-hidden='true'
      />

      {/* Mobile sidebar */}
      <aside
        className={cn(
          `fixed top-0 right-0 z-10001 flex h-full w-72 flex-col bg-white/95 shadow-2xl backdrop-blur-xl transition-transform duration-300 ease-in-out md:hidden ${inter.className} font-sans`,
          sidebarOpen ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <div className='flex items-center justify-between px-5 py-4'>
          <Link href='/' onClick={closeSidebar} className='inline-flex items-center gap-2.5'>
            <Image src={Icon.src} alt='SlopMuter' width={22} height={22} />
            <span className='text-sm font-semibold tracking-tight text-neutral-900'>SlopMuter</span>
          </Link>
          <Button
            size='icon'
            variant='ghost'
            className='size-8 text-neutral-400 hover:text-neutral-700'
            onClick={closeSidebar}
          >
            <XIcon className='size-4' />
          </Button>
        </div>

        <div className='mx-4 h-px bg-neutral-100' />

        <nav className='flex flex-col gap-0.5 px-3 py-4'>
          <Link
            href='/'
            onClick={closeSidebar}
            className='flex items-center rounded-lg px-3 py-2.5 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-50 hover:text-neutral-950'
          >
            Home
          </Link>
          <Link
            href='/downloads'
            onClick={closeSidebar}
            className='flex items-center rounded-lg px-3 py-2.5 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-50 hover:text-neutral-950'
          >
            Downloads
          </Link>
          <Link
            href='https://github.com/diragb/slop-muter-extension'
            target='_blank'
            onClick={closeSidebar}
            className='flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-50 hover:text-neutral-950'
          >
            <svg className='size-4' viewBox='0 0 24 24' fill='currentColor'>
              <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
            </svg>
            GitHub
          </Link>
        </nav>

        <div className='mt-auto px-4 pb-6'>
          <Link
            href='/downloads'
            onClick={closeSidebar}
            className='flex w-full items-center justify-center gap-2 rounded-full bg-neutral-950 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-neutral-800'
          >
            Get Extension
            <ArrowRightIcon className='size-3.5' />
          </Link>
        </div>
      </aside>
    </>
  )
}

// Exports:
export default Navbar
