import { combineReducers } from "redux";

import userSlice from "./userSlice";
import cartSlice from "./cartSlice";
import userToken from "./userToken";

const rootReducer = combineReducers({
    userReducer: userSlice.reducer,
    cartReducer: cartSlice.reducer,
    userTokenReducer: userToken.reducer
})

export default rootReducer