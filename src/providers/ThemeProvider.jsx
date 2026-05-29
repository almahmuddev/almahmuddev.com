'use client'

import { createContext, useContext, useEffect, useState, useCallback } from 'react'

const ThemeContext = createContext({
  theme: 'dark',
  toggleTheme: () => {},
})

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

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark')

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

export function useTheme() {
  return useContext(ThemeContext)
}
