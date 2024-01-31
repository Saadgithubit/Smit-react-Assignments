import { createSlice } from '@reduxjs/toolkit'

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
      theme: 'linear-gradient(#849AC9,#8E9FCA,#C1B3C9,#DBBDC5,#E5C2C0)'
    },
    reducers: {
      updateTheme: (state , data) => {
        state.theme = data.payload
      }
    }
  })

  export const { updateTheme } = themeSlice.actions
  export default themeSlice
  