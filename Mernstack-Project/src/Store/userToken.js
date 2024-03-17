import { createSlice} from '@reduxjs/toolkit'

const userToken = createSlice({
    name: 'token',
    initialState: {
      tokens: {}
    },
    reducers: {
      settoken: (state ,data) => {
        state.tokens = data.payload
      },
      removetoken: state => {
        state.tokens = {}
      }
    }
  })
  
  export const { settoken, removetoken } = userToken.actions

  export default userToken