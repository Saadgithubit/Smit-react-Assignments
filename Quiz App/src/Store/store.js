import { configureStore } from '@reduxjs/toolkit'
import colorSlice from './colorSlice'
const store = configureStore({
    reducer: colorSlice.reducer
  })

  export default store