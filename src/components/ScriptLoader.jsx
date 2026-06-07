'use client'

import { useEffect } from 'react'

// Loads each script only after the previous one has fully loaded.
// This guarantees: jQuery → plugins → swiper → splittext → main.js
const SCRIPTS = [
  '/assets/js/vendor/jquery.js',
  '/assets/js/vendor/jquery-ui.min.js',
  '/assets/js/vendor/bootstrap.min.js',
  '/assets/js/plugins/gsap.js',
  '/assets/js/plugins/scrolltigger.js',
  '/assets/js/plugins/scrolltoplugins.js',
  '/assets/js/plugins/splittext.js',
  '/assets/js/plugins/smoothscroll.js',
  '/assets/js/plugins/swiper.js',
  '/assets/js/vendor/waw.js',
  '/assets/js/plugins/odometer.js',
  '/assets/js/vendor/appear.js',
  '/assets/js/plugins/isotop.js',
  '/assets/js/plugins/animation.js',
  '/assets/js/plugins/text-type.js',
  '/assets/js/vendor/backtop.js',
  '/assets/js/main.js',   // always last
]

function loadScript(src) {
  return new Promise((resolve, reject) => {
    // Don't load the same script twice
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve()
      return
    }
    const script = document.createElement('script')
    script.src = src
    script.async = false
    script.onload = resolve
    script.onerror = reject
    document.body.appendChild(script)
  })
}

async function loadAllScripts() {
  for (const src of SCRIPTS) {
    await loadScript(src)
  }
}

export default function ScriptLoader() {
  useEffect(() => {
    loadAllScripts().catch((err) => {
      console.error('Script load error:', err)
    })
  }, [])

  return null
}
