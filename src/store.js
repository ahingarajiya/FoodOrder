import { configureStore } from '@reduxjs/toolkit'
import myslice from './myslice'

export const store = configureStore({
  reducer:myslice
})