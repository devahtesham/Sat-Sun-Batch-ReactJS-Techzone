const addProduct = ()=>{
    return (dispatch)=>{
        dispatch({
            type:"ADD_PRODUCT"
            // payload
        })
    }
}

const deleteProduct = ()=>{
    return (dispatch)=>{
        dispatch({
            type:"DELETE_PRODUCT"
            // payload
        })
    }
}


export {addProduct,deleteProduct}