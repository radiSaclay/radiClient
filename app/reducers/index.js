import { combineReducers } from "redux"
import app from "./appReducer"
import events from "./eventReducer"
import farms from "./farmReducer"
import news from "./newsReducer"
import products from "./productReducer"
import user from "./userReducer"

export default rootReducer = combineReducers({
	app,
	events,
	farms,
	news,
	products,
	user
})
