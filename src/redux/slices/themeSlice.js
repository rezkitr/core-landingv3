import { THEME } from '@/utils/enum'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  theme: THEME.LIGHT,
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === THEME.DARK ? THEME.LIGHT : THEME.LIGHT
    },
  },
})

export const { toggleTheme } = themeSlice.actions

export default themeSlice.reducer
