'use client'
import { BiSun, BiMoon } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'

import { toggleTheme } from '@/redux/slices/themeSlice'
import { THEME } from '@/utils/enum'

import './styles.scss'

const ThemeToggleButton = () => {
  const dispatch = useDispatch()
  const currentTheme = useSelector((state) => state.theme.currentTheme)
  const isDarkMode = currentTheme === THEME.DARK

  const onToggleTheme = () => dispatch(toggleTheme())
  return (
    <div className="flex items-center gap-2">
      {isDarkMode ? (
        <BiMoon className="text-2xl" />
      ) : (
        <BiSun className="text-2xl" />
      )}
      <button
        className="toggle-theme-btn relative h-[26px] w-11 cursor-pointer rounded-full bg-primaryBlack"
        onClick={onToggleTheme}
      >
        <div
          className={`circle absolute inset-y-0 my-auto h-5 w-5 rounded-full bg-white transition-all duration-300 ease-in-out ${
            isDarkMode ? 'translate-x-5' : 'left-1'
          }`}
        />
      </button>
    </div>
  )
}

export default ThemeToggleButton
