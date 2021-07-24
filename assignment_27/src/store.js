import {createStore,applyMiddleware,compose} from "redux"
import  todoReducers  from "./reducers/todoReducers"
import thunk from "redux-thunk"
import logger from "redux-logger"

const store=createStore(todoReducers,compose(applyMiddleware(thunk,logger),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
export default store