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
      removeCartProducts: (state,data) => {
        const products = data.payload
        console.log(products);
        products.map((item) => {
          state.cart.splice(item,1)
        })
      }
      
    }
  })

  export const { setcart,removeAllCart,removeCartProducts } = cartSlice.actions

  export default cartSlice
