'use client'
import { cn } from '@/lib/utils'
import { MoonIcon, SunIcon } from 'lucide-react'
import { useEffect, useState } from 'react'

export const DarkModeToggle = () => {
  // there are 3 states: true, false, and null
  const [darkMode, setDarkMode] = useState(true
  )

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <button
      className={cn('relative h-10 w-10 dark:text-yellow-200')}
      onClick={() => setDarkMode(!darkMode)}
    >
        {darkMode ? (
            <MoonIcon size={16} />
        ) : (
            <SunIcon size={16} />
        )}
    </button>
  )
}
