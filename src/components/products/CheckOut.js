import React from 'react';
import { PayPalScriptProvider, PayPalButtons,BraintreePayPalButtons, } from "@paypal/react-paypal-js";
import {add_to_cart} from '../../actions/products'
import {useSelector,useDispatch} from 'react-redux'
import {remove_from_cart} from '../../actions/products'
import { set_orders } from '../../actions/order';
function CheckOut() {
    const cart = useSelector(state=>state.cart.cart)
  const total = useSelector(state => state.cart.total)
  const items = useSelector(state => state.cart.items)
  const order = useSelector(state => state.order.order)




    const dispatch = useDispatch()

  return(
   <div>
      {cart.map(item=>(
          <div key={item.id} className='flex space-x-4 mt-2'>
            <h1>{item.slug}</h1>
          <h1>price: {item.price}</h1>  
          <h1>quantity: {item.quantity}</h1>
          <button className='bg-yellow-400 px-2 mb-2 rounded-lg mx-10'
           onClick={()=>dispatch(remove_from_cart(item))}>Remove</button>
        </div>
        ))}
         <h1>Subtotal({items} items)</h1>
         <h1>Total: {total.toFixed(2)}</h1>
         <button className='bg-yellow-400 px-2' onClick={()=> dispatch(set_orders({orderItems:cart,items:items,total:total.toFixed(2)}))}>Set Order</button>
         {cart.map(item=>(item.slug.concat(` quantity:${item.quantity}`))).join(' / ')}
      
         <PayPalScriptProvider options={{ "client-id": "AS6sVCA_eGz2AlxPZq45TPIyWe8utd0xROs0xpHFD0ycQzjm-mKh_DEc5Njl0_h4FOKrBfkA0nRO9xj7" }}>
            <PayPalButtons
             createOrder={(data, actions) => {
               return actions.order.create({
                 purchase_units: [
                   {
                     description: `${cart.map(item=>(item.slug.concat(` quantity:${item.quantity}`))).join(' / ')} ${items} products purchage`,
                     amount: {
                       value: `${total.toFixed(2)}`,
                       currency_code: "USD",
        
                      },
          
                    }
                  ]
                });
              }}
              onApprove={(data, actions) => {
                return actions.order.capture().then((details) => {
                  const name = details.payer.name.given_name;
                  alert(`Transaction completed by ${name}`);
                  dispatch(set_orders({orderItems:cart,items:items,total:total}))
                });
              }}
              />
        </PayPalScriptProvider>
    
  </div>
  );}

export default CheckOut;
