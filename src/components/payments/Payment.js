import { PayPalScriptProvider, PayPalButtons,BraintreePayPalButtons, } from "@paypal/react-paypal-js";
 import React from 'react'
 
 function Payment() {

  
     return (
         <div className="sm:w-3/4 mx-auto bg-gray-700 h-screen ">

          <div className="pt-20 mx-auto w-full ">

          <PayPalScriptProvider options={{ "client-id": "AS6sVCA_eGz2AlxPZq45TPIyWe8utd0xROs0xpHFD0ycQzjm-mKh_DEc5Njl0_h4FOKrBfkA0nRO9xj7" }}>
            <PayPalButtons
             createOrder={(data, actions) => {
               return actions.order.create({
                 purchase_units: [
                   {
                     amount: {
                       value: "12.99",
                      }
                    }
                  ]
                });
              }}
              onApprove={(data, actions) => {
                return actions.order.capture().then((details) => {
                  const name = details.payer.name.given_name;
                  alert(`Transaction completed by ${name}`);
                });
              }}
              />
        </PayPalScriptProvider>
      
                  </div>
         </div>
     )
 }
 
 export default Payment
 