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
      state.currentTheme =
        state.currentTheme === THEME.DARK ? THEME.LIGHT : THEME.DARK
    },
  },
})

export const { toggleTheme } = themeSlice.actions

export default themeSlice.reducer
