import { configureStore } from '@reduxjs/toolkit'
import {usersSlice} from '../RequestAPI/auth'
export const store = configureStore({
  reducer: {
    login: usersSlice
  }
})