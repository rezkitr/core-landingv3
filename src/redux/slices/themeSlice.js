'use client'
import { createSlice } from '@reduxjs/toolkit'

import { THEME } from '@/utils/enum'

const initialState = {
  currentTheme: THEME.DARK,
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      const usedTheme =
        state.currentTheme === THEME.DARK ? THEME.LIGHT : THEME.DARK
      state.currentTheme = usedTheme
      localStorage.setItem('currentTheme', JSON.stringify(usedTheme))
    },
    setTheme: (state, action) => {
      state.currentTheme = action.payload
    },
  },
})

export const { toggleTheme, setTheme } = themeSlice.actions

export default themeSlice.reducer
