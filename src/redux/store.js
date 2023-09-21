import { configureStore } from '@reduxjs/toolkit'
import { themeReducer } from './slices'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
})
