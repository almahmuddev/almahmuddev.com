import { ThemeProvider } from '@/providers/ThemeProvider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScriptLoader from '@/components/ScriptLoader'
import RouteAnimations from '@/components/RouteAnimations'
import './globals.css'

const siteUrl = 'https://almahmuddev.com'
const siteName = 'Al Mahmud — Front-End Developer & WordPress Expert'
const siteDesc =
  'Portfolio of Al Mahmud, a Front-End Developer and WordPress specialist building fast, modern websites with React, Next.js and WordPress.'


export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: '%s | Al Mahmud',
  },
  description: siteDesc,
  keywords: [
    'Al Mahmud',
    'Front-End Developer',
    'WordPress Expert',
    'React Developer',
    'Next.js Developer',
    'Web Developer Bangladesh',
    'almahmuddev',
  ],
  authors: [{ name: 'Al Mahmud', url: siteUrl }],
  creator: 'Al Mahmud',

  icons: {
    icon: '/assets/images/favicon.svg',
    shortcut: '/assets/images/favicon.svg',
    apple: '/assets/images/favicon.svg',
  },

  openGraph: {
    type: 'website',
    url: siteUrl,
    title: siteName,
    description: siteDesc,
    siteName: siteName,
    images: [
      {
        url: '/assets/images/banner/banner-user-image-four.png',
        width: 1200,
        height: 630,
        alt: 'Al Mahmud — Portfolio',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description: siteDesc,
    images: ['/assets/images/banner/banner-user-image-four.png'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
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
          <Footer />
        </ThemeProvider>

        {/* Re-runs scroll animations on client-side route changes */}
        <RouteAnimations />

        {/* load external js first */}

        <span
          className="end"
          aria-hidden="true"
          style={{
            position: 'absolute',
            width: 0,
            height: 0,
            overflow: 'hidden',
            opacity: 0,
            pointerEvents: 'none',
          }}
        >
          end
        </span>
        <ScriptLoader />
      </body>
    </html>
  )
}
