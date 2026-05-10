import type { ReactNode } from 'react'

import Footer from './Footer'
import GlowBackground from './GlowBackground'
import Navbar from './Navbar'
import ScrollToTop from './ScrollToTop'

type SiteChromeProps = {
  children: ReactNode
}

export default function SiteChrome({ children }: SiteChromeProps) {
  return (
    <>
      <GlowBackground />
      <Navbar />
      <main className="relative z-10 pt-20">{children}</main>
      <ScrollToTop />
      <Footer />
    </>
  )
}
