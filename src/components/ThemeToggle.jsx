'use client'

import { useTheme } from '@/providers/ThemeProvider'

const darkStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '42px',
  height: '42px',
  borderRadius: '50%',
  border: '1.5px solid rgba(255,255,255,0.25)',
  background: 'rgba(255,255,255,0.08)',
  color: '#fff',
  fontSize: '16px',
  cursor: 'pointer',
  flexShrink: 0,
}

const lightStyle = {
  ...darkStyle,
  border: '1.5px solid rgba(0,0,0,0.18)',
  background: 'rgba(0,0,0,0.06)',
  color: '#222',
}

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isLight = theme === 'light'

  return (
    <button
      onClick={toggleTheme}
      style={isLight ? lightStyle : darkStyle}
      title="Toggle Dark / Light Mode"
      aria-label="Toggle theme"
    >
      {!isLight && <i className="fa-regular fa-sun" />}
      {isLight && <i className="fa-regular fa-moon" />}
    </button>
  )
}
