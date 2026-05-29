import ThemeToggle from '@/components/ThemeToggle'

export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '24px',
      textAlign: 'center',
      padding: '40px 20px',
    }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, margin: 0 }}>
        Stage 1 — Project Scaffolded ✅
      </h1>
      <p style={{ opacity: 0.6, maxWidth: '480px', margin: 0 }}>
        Next.js running. CSS loaded. Theme toggle working.
        Real content starts Stage 2.
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span style={{ opacity: 0.5, fontSize: '0.9rem' }}>Toggle →</span>
        <ThemeToggle />
      </div>
    </main>
  )
}
