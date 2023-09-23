'use client'
import { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { setTheme } from './slices/themeSlice'

const StoreWrapper = ({ children }) => {
  const dispatch = useDispatch()
  const currentTheme = useSelector((state) => state.theme.currentTheme)

  useEffect(() => {
    const savedTheme = localStorage.getItem('currentTheme')
    dispatch(setTheme(JSON.parse(savedTheme)))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <div className={`relative ${currentTheme}`}>{children}</div>
}

export default StoreWrapper
