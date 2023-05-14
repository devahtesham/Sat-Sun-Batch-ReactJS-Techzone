import { applyMiddleware, createStore } from "redux";
import ProductReducer from "./Reducers/ProductReducer";
import thunk from "redux-thunk";
import CombineReducer from "./Reducers/CombineReducer";

const store = createStore(CombineReducer,{},applyMiddleware(thunk))
export default store