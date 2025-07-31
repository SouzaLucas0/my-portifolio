'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Script from 'next/script'
import * as gtag from '../lib/gtag'

const GA_ID = gtag.GA_TRACKING_ID

export default function GoogleAnalytics() {
  const pathname = usePathname()

  useEffect(() => {
    if (!GA_ID) return
    gtag.pageview(pathname)
  }, [pathname])

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  )
}
