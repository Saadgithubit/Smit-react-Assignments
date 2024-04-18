import { createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
      cart: []
    },
    reducers: {
      setcart: (state ,data) => {
        state.cart.push(data.payload)
      },
      removeCartProduct: (state,data) => {
        console.log(data);
      },
      removeAllCart: state => {
        state.cart = []
      }
      
    }
  })

  export const { setcart,removeAllCart,removeCartProduct } = cartSlice.actions

  export default cartSlice
