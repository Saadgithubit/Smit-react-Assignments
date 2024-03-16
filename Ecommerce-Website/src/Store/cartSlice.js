import { createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
      cart: []
    },
    reducers: {
      setcart: (state ,data) => {
        state.cart.push(data.payload)
      }
      
    }
  })

  export const { setcart } = cartSlice.actions

  export default cartSlice
