import axios from "axios";
import { ORDER } from "./types";


axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

export const set_orders = (order) =>async(dispatch) =>{
   
   axios.post('http://localhost:8000/order/',order)
   console.log({order})
   localStorage.removeItem('cartItems')
   
   dispatch({
       type: ORDER,
       payload : order
   })
   
}