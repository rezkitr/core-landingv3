'use client'

import { Provider } from 'react-redux'

import { store } from './store'
import StoreWrapper from './StoreWrapper'

const StoreProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <StoreWrapper>{children}</StoreWrapper>
    </Provider>
  )
}

export default StoreProvider
