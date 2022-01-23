import axios from "axios"
import { ADD_TO_CART, GET_PRODUCTS, ITEM_LENGTH, POST_ERROR, QUANTITY, REMOVE_FROM_CART, SELECT_TOTAL, UPDATE_QUANTITY } from "./types"


export const get_products = ()=>async (dispatch)=>{

        const res = await axios.get('https://store-app-1.herokuapp.com/store/')
        dispatch({
            type : GET_PRODUCTS,
            payload: res.data,
        });
}

export const add_to_cart = (product,quantity) =>async(dispatch,getState)=>{
    dispatch({
        type:ADD_TO_CART,
        payload :{
            slug :product.slug,
            title: product.title,
            price: product.price.toFixed(2),
            id: product.id, 
            image:product.image,
            quantity,
        }
    })
    dispatch({
        type:SELECT_TOTAL,
        payload : product.price * quantity
    })
    dispatch({
        type:ITEM_LENGTH,
        payload: quantity
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart))

    
}
export const remove_from_cart =( product ) =>async(dispatch,getState)=>{
    dispatch({
    type: REMOVE_FROM_CART,
    payload :{
        price: product.price * product.quantity,
        id: product.id, 
        quantity: product.quantity 
    }
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart))

}

