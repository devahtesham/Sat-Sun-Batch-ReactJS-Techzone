const INITIAL_STATE = {
    cart:0,
    isLoading:false
}

const ProductReducer = (state = INITIAL_STATE,action)=>{
    // type matching
    switch (action.type) {
        case 'ADD_PRODUCT':
            return{
                ...state,
                cart:state.cart+1
            }

        case "DELETE_PRODUCT":
            return{
                ...state,
                cart:state.cart-1
            }
        default:
            return {
                ...state
            }
    }
}

export default ProductReducer