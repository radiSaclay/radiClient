import { combineReducers } from "redux"
import events from "./eventReducer"
import farms from "./farmReducer"
import news from "./newsReducer"
import products from "./productReducer"
import user from "./userReducer"

export default rootReducer = combineReducers({
	events,
	farms,
	news,
	products,
	user
})
