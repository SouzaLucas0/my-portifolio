export const GA_TRACKING_ID = 'G-ZNESW29Y5E'
export const pageview = (url: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}
