'use client'
import { useSelector } from 'react-redux'

const StoreWrapper = ({ children }) => {
  const theme = useSelector((state) => state.theme.currentTheme)
  return <div className={`h-full relative ${theme}`}>{children}</div>
}

export default StoreWrapper
