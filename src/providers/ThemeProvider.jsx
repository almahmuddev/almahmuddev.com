'use client'

import { createContext, useContext, useEffect, useState, useCallback } from 'react'

// ─── Context ──────────────────────────────────────────────────────────────────

const ThemeContext = createContext({
  theme: 'dark',
  toggleTheme: () => {},
})

// ─── Helper ───────────────────────────────────────────────────────────────────

const STORAGE_KEY = 'portfolio-theme'
const LIGHT_CLASS = 'tmp-white-version'

function applyThemeToBody(theme) {
  if (typeof document === 'undefined') return
  if (theme === 'light') {
    document.body.classList.add(LIGHT_CLASS)
  } else {
    document.body.classList.remove(LIGHT_CLASS)
  }
}

// ─── Provider ─────────────────────────────────────────────────────────────────

export function ThemeProvider({ children }) {
  // Default is dark — matches index-04.html behaviour
  const [theme, setTheme] = useState('dark')

  // On first mount, read saved preference and apply immediately
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) || 'dark'
    setTheme(saved)
    applyThemeToBody(saved)
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark'
      applyThemeToBody(next)
      localStorage.setItem(STORAGE_KEY, next)
      return next
    })
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

export function useTheme() {
  return useContext(ThemeContext)
}
