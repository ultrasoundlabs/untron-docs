import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import Image from 'next/image'

// We need to use a separate component for the logo
// because hooks can only be used inside of components
const DynamicLogo = () => {
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }
  
  const currentTheme = theme === 'system' ? resolvedTheme : theme
  
  return (
    <span style={{ display: 'flex', alignItems: 'center' }}>
      <Image 
        src={currentTheme === 'dark' ? '/static/logo/white.png' : '/static/logo/black.png'} 
        alt="Untron Logo" 
        width={128} 
        height={128} 
      />
    </span>
  )
}


export default {
    logo: DynamicLogo,
    project: {
      link: 'https://github.com/ultrasoundlabs/untron'
    },
    docsRepositoryBase: 'https://github.com/ultrasoundlabs/untron-docs/blob/main',
    footer: {
      text: 'Untron Documentation'
    }
  }