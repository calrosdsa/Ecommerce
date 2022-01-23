// Root Reducer
import { combineReducers } from 'redux';
import auth from './auth';
import alert from './alert';
import product from './product'
import cart from './cart'
import order from './order'

//import comment from './comment'
export default combineReducers({
  alert,
  auth,
  product,
  cart,   
  order,
});

