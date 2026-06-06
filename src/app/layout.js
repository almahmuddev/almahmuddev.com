import { ThemeProvider } from '@/providers/ThemeProvider'
import Header from '@/components/Header'
import Script from 'next/script'
import './globals.css'

export const metadata = {
  title: 'Al Mahmud — Portfolio',
  description: 'Full-stack developer portfolio',
  icons: {
    icon: '/assets/images/favicon.svg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/assets/css/vendor/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/vendor/fontawesome.css" />
        <link rel="stylesheet" href="/assets/css/vendor/animate.min.css" />
        <link rel="stylesheet" href="/assets/css/plugins/swiper.css" />
        <link rel="stylesheet" href="/assets/css/plugins/odometer.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
      </head>
      <body>
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>

        {/* JS — jQuery must load first, then everything else, then main.js last */}
        <Script src="/assets/js/vendor/jquery.js" strategy="beforeInteractive" />
        <Script src="/assets/js/vendor/jquery-ui.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/vendor/bootstrap.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/gsap.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/scrolltigger.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/scrolltoplugins.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/smoothscroll.js" strategy="afterInteractive" />
        <Script src="/assets/js/vendor/waw.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/odometer.js" strategy="afterInteractive" />
        <Script src="/assets/js/vendor/appear.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/isotop.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/animation.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/text-type.js" strategy="afterInteractive" />
        <Script src="/assets/js/vendor/backtop.js" strategy="afterInteractive" />
        <Script src="/assets/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}
