import { ThemeProvider } from '@/providers/ThemeProvider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScriptLoader from '@/components/ScriptLoader'
import RouteAnimations from '@/components/RouteAnimations'
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
          <Footer />
        </ThemeProvider>

        {/* Re-runs scroll animations on client-side route changes */}
        <RouteAnimations />

        {/*
          Hidden target for main.js's fonklsAnimation (SplitText on ".end").
          Prevents "Element not found: .end" console warnings —
          this element is invisible and takes no layout space.
        */}
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
