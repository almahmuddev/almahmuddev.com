import { ThemeProvider } from '@/providers/ThemeProvider'
import './globals.css'

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const metadata = {
  title:       'My Portfolio',
  description: 'Personal portfolio — designer & developer.',
  icons: {
    icon: '/assets/images/favicon.svg',
  },
}

// ─── Layout ───────────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <head>
        {/*
          ── Original template CSS ──────────────────────────────────────────
          All CSS files live in /public/assets/css/.
          They are served as static files at /assets/css/...
          Order matters — style.css must come last.
        */}
        <link rel="stylesheet" href="/assets/css/vendor/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/vendor/fontawesome.css" />
        <link rel="stylesheet" href="/assets/css/vendor/animate.min.css" />
        <link rel="stylesheet" href="/assets/css/plugins/swiper.css" />
        <link rel="stylesheet" href="/assets/css/plugins/odometer.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
      </head>

      <body>
        {/*
          ThemeProvider:
          - Reads saved theme from localStorage on mount
          - Toggles `tmp-white-version` class on <body>
          - Exposes `useTheme()` hook to any component below
        */}
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
