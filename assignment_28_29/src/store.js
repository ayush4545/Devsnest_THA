import {createStore,applyMiddleware,compose} from "redux"
import { weatherReducer } from "./reduers/weatherReducers"
import thunk from "redux-thunk"
// import  {logger} from "redux-logger"

const store=createStore(weatherReducer,compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
export default store