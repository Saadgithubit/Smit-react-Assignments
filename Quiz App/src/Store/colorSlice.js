import { createSlice } from '@reduxjs/toolkit'

const colorSlice = createSlice({
    name: 'color',
    initialState: {
      color: 'white'
    },
    reducers: {
      updateColor: state => {
        state.color = ''
      }
    }
  })

  export const { updateColor } = colorSlice.actions
  export default colorSlice