import { combineReducers } from "redux"
import events from "./eventReducer"
import farms from "./farmReducer"
import products from "./productReducer"
import user from "./userReducer"

export default rootReducer = combineReducers({
	events,
	farms,
	products,
	user
})
