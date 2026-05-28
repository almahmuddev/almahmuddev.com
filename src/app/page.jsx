import ThemeToggle from '@/components/ThemeToggle'

/*
  Stage 1 — Home Page (placeholder)
  ───────────────────────────────────
  This is a temporary placeholder page that proves:
    ✅ Next.js project runs
    ✅ Original CSS loads correctly from /public/assets
    ✅ ThemeProvider is wired up
    ✅ ThemeToggle button switches dark ↔ light

  The full Hero, Navbar, About, Portfolio sections etc.
  are built in Stage 2 onwards — one section per stage.
*/

export default function Home() {
  return (
    <main
      style={{
        minHeight:      '100vh',
        display:        'flex',
        flexDirection:  'column',
        alignItems:     'center',
        justifyContent: 'center',
        gap:            '24px',
        padding:        '40px 20px',
        textAlign:      'center',
      }}
    >
      <h1 style={{ fontSize: '2rem', fontWeight: 700, margin: 0 }}>
        Stage 1 — Project Scaffolded ✅
      </h1>

      <p style={{ fontSize: '1rem', opacity: 0.6, maxWidth: '480px', margin: 0 }}>
        Next.js is running. Original CSS is loaded. Theme toggle is live.
        Content sections start from Stage 2.
      </p>

      {/* Live proof the toggle works */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span style={{ fontSize: '0.9rem', opacity: 0.5 }}>Toggle mode →</span>
        <ThemeToggle />
      </div>
    </main>
  )
}
