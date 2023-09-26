'use client'
import { useState, useEffect } from 'react'

const useGetScreenSize = () => {
  const [size, setSize] = useState({
    isSmScreen: false,
    isMdScreen: false,
    isLgScreen: false,
    isXlScreen: false,
  })

  useEffect(() => {
    const smWatcher = window.matchMedia('(max-width: 640px)')
    const mdWatcher = window.matchMedia('(max-width: 768px)')
    const lgWatcher = window.matchMedia('(max-width: 1024px)')
    const xlWatcher = window.matchMedia('(max-width: 1280px)')

    setSize({
      isSmScreen: smWatcher.matches,
      isMdScreen: mdWatcher.matches,
      isLgScreen: lgWatcher.matches,
      isXlScreen: xlWatcher.matches,
    })

    const handleSmScreen = (e) => {
      setSize((prev) => ({ ...prev, isSmScreen: e.matches }))
    }
    const handleMdScreen = (e) => {
      setSize((prev) => ({ ...prev, isMdScreen: e.matches }))
    }
    const handleLgScreen = (e) => {
      setSize((prev) => ({ ...prev, isLgScreen: e.matches }))
    }
    const handleXlScreen = (e) => {
      setSize((prev) => ({ ...prev, isXlScreen: e.matches }))
    }

    smWatcher.addEventListener('change', handleSmScreen)
    mdWatcher.addEventListener('change', handleMdScreen)
    lgWatcher.addEventListener('change', handleLgScreen)
    xlWatcher.addEventListener('change', handleXlScreen)

    return () => {
      smWatcher.removeEventListener('change', handleSmScreen)
      mdWatcher.removeEventListener('change', handleMdScreen)
      lgWatcher.removeEventListener('change', handleLgScreen)
      xlWatcher.removeEventListener('change', handleXlScreen)
    }
  }, [])

  return [size]
}

export default useGetScreenSize
