import { ThemeProvider } from '@/providers/ThemeProvider'
import Header from '@/components/Header'
import ScriptLoader from '@/components/ScriptLoader'
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

        {/* Loads all JS in guaranteed sequence — jQuery first, main.js last */}
        <ScriptLoader />
      </body>
    </html>
  )
}
