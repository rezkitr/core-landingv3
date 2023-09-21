'use client'
import { THEME } from '@/utils/enum'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentTheme: THEME.DARK,
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.currentTheme =
        state.currentTheme === THEME.DARK ? THEME.LIGHT : THEME.DARK
    },
  },
})

export const { toggleTheme } = themeSlice.actions

export default themeSlice.reducer
