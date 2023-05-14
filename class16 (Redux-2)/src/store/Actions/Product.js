import ACTION_TYPE from "../Constants/ActionType"

const getProducts = ()=>{
    
    return async (dispatch)=>{

        dispatch({
            type: ACTION_TYPE.LOADING_START
        })
        try {
            const response = await fetch("https://fakestoreapi.com/products")
            const data = await response.json()
            
            dispatch({
                type: ACTION_TYPE.LOADING_END
            })

            dispatch({
                type:ACTION_TYPE.GET_PRODUCTS,
                payload:data
            })
        } catch (error) {
            dispatch({
                type: ACTION_TYPE.LOADING_END
            })
        }

        
    }
}


const addProduct = (cartProduct)=>{
    return (dispatch)=>{
        dispatch({
            type:ACTION_TYPE.ADD_PRODUCT,
            payload:cartProduct
        })
    }
}

const deleteProduct = (index)=>{
    return (dispatch)=>{
        dispatch({
            type:ACTION_TYPE.DELETE_PRODUCT,
            payload:index
        })
    }
}


export {addProduct,deleteProduct,getProducts}