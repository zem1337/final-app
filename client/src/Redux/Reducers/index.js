import AuthReducer from "./AuthReducer"
import {combineReducers} from "redux"
import ErrorReducer from "./ErrorReducer"

const rootReducer = combineReducers({AuthReducer,ErrorReducer})

export default rootReducer