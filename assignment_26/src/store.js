import { createStore } from "redux";
import { LoginReducers } from "./reducers";

const store=createStore(LoginReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store