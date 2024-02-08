import { combineReducers } from "redux";

import userSlice from "./userSlice";

const rootReducer = combineReducers({
    userReducer: userSlice.reducer
})

export default rootReducer