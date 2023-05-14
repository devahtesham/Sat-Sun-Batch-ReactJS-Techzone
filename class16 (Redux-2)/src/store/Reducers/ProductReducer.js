import ACTION_TYPE from "../Constants/ActionType";

const INITIAL_STATE = {
    cart:0,
    isLoading:false,
    data:[],
    cartItems:[]
}

const getProductsReducer = (state = INITIAL_STATE, action)=>{
    switch (action.type) {
        case ACTION_TYPE.LOADING_START:
            return {
                ...state,
                isLoading:true
            }
        case ACTION_TYPE.LOADING_END:
            return {
                ...state,
                isLoading:false
            }

        case ACTION_TYPE.GET_PRODUCTS:
            return {
                ...state,
                data:[...action.payload],
            }
        default:
            return {
                ...state
            }
    }
}

const ProductReducer = (state = INITIAL_STATE,action)=>{
    // type matching
    switch (action.type) {
        case ACTION_TYPE.ADD_PRODUCT:
            return{
                ...state,
                cart:state.cart+1,
                cartItems:[...state.cartItems,action.payload]
            }

        case ACTION_TYPE.DELETE_PRODUCT:
            const allCartProducts = state.cartItems.filter((product,productIndex)=>productIndex!==action.payload)
            // console.log('allCartProducts',allCartProducts);
            return{
                ...state,
                cart:state.cart-1,
                cartItems:allCartProducts
            }
        default:
            return {
                ...state
            }
    }
}

export {ProductReducer,getProductsReducer}