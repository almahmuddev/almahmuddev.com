'use client'

import { useTheme } from '@/providers/ThemeProvider'

// ─── Inline styles ────────────────────────────────────────────────────────────
// These are intentionally inline for Stage 1.
// In Stage 2 (Navbar) they move into style.css / a CSS module.

const baseStyle = {
  display:        'flex',
  alignItems:     'center',
  justifyContent: 'center',
  width:          '42px',
  height:         '42px',
  borderRadius:   '50%',
  border:         '1.5px solid rgba(255,255,255,0.25)',
  background:     'rgba(255,255,255,0.08)',
  color:          '#fff',
  fontSize:       '16px',
  cursor:         'pointer',
  transition:     'background 0.3s ease, border-color 0.3s ease, transform 0.3s ease',
  flexShrink:     0,
}

const lightStyle = {
  ...baseStyle,
  border:     '1.5px solid rgba(0,0,0,0.18)',
  background: 'rgba(0,0,0,0.06)',
  color:      '#222',
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isLight = theme === 'light'

  return (
    <button
      onClick={toggleTheme}
      style={isLight ? lightStyle : baseStyle}
      title="Toggle Dark / Light Mode"
      aria-label="Toggle theme"
    >
      {/* Sun icon — visible in dark mode (click to go light) */}
      {!isLight && <i className="fa-regular fa-sun" />}

      {/* Moon icon — visible in light mode (click to go dark) */}
      {isLight && <i className="fa-regular fa-moon" />}
    </button>
  )
}
