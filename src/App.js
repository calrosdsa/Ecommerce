import React,{useEffect,useState} from "react";
import { Link } from "react-router-dom";
import {get_products,add_to_cart} from './actions/products'
import { useSelector,useDispatch } from "react-redux";
import Products from "./components/products/Products";
import axios from "axios";
import setAuthToken from "./utils/setAuthToken copy";
import store from "./store";
import { loadUser } from "./actions/auth";
function App() {
  const dispatch = useDispatch()
  const products = useSelector(state=>state.product.products)
  const cart = useSelector(state => state.cart.cart)
  const total = useSelector(state => state.cart.total)
  useEffect(()=>{
    dispatch(get_products())
  },[get_products])

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuthToken(token);
    }
     setTimeout(() => {  
      store.dispatch(loadUser());
    }, 1000);
    axios.defaults.xsrfCookieName = 'csrftoken';
    axios.defaults.xsrfHeaderName = 'X-CSRFToken';
  }, []);
  return (


    <div>
      hello world
      <div className=" sm:w-2/4 mx-auto space-y-2 ">


      {products.map(item=>(
        <div  className="flex space-x-5" key={item.slug}>
        <Products
        slug = {item.slug}
        price = {item.price}
        id={item.id}
        Qnt={item.quantity}
        image={item.image}
        title={item.title}
        />
       
      
        </div>
        ))}
        <Link to='cart'>Go to Cart</Link>
        </div>
    </div>
  );
}

export default App;
