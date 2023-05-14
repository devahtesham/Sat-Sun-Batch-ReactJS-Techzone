import {combineReducers} from "redux"
import { ProductReducer, getProductsReducer } from "./ProductReducer"

const CombineReducer = combineReducers({
    getProductsReducer:getProductsReducer,
    ProductReducer:ProductReducer
})

export default CombineReducer