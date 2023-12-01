import { combineReducers, createStore } from "redux";
import {productReducer} from "./reducer/Reducer.js";
const rootReducer = combineReducers({
    productReducer,
})
export const store = createStore(rootReducer)
