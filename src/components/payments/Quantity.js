import React from 'react';

function Quantity({quantity,setQuantity, qnt  }) {

    const increaseCount = () => {
        if(quantity < qnt){
            setQuantity(quantity + 1)
        }
    }

    const decreaseCount = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }
    }
 


  return <div className='flex items-center text-2xl mx-10'>
      <button onClick={()=>decreaseCount()}>-</button>
      <h1>{quantity}</h1>
      <button onClick={()=>increaseCount()}>+</button>
      

  </div>;
}

export default Quantity;
