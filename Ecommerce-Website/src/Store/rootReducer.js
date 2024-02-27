import { combineReducers } from "redux";

import userSlice from "./userSlice";
import cartSlice from "./cartSlice";

const rootReducer = combineReducers({
    userReducer: userSlice.reducer,
    cartReducer: cartSlice.reducer
})

export default rootReducer