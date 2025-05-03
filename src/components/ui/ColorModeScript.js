// components/ColorModeScript.js
'use client'

import { useEffect, useState } from 'react'

export default function ColorModeScript() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const theme = localStorage.getItem('chakra-ui-color-mode') || 'light'
  return <script>{`document.documentElement.classList.add('${theme}')`}</script>
}
