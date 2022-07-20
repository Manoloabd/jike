import { combineReducers } from "redux";
import login from './Login'
import profile from "./profile";
import home from "./home"
const rootReducer = combineReducers({
    login, profile, home
})

export default rootReducer