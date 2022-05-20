import React from 'react';
import './cartItemCard.css'

export default function CartItemCard() {
  return (
   <div className='cart__item_wrapper'>
       <div className='properties__wrapper'>
          <span className='product__name'>
          Apollo Running Short
              </span> 
              <span className='amount'>
              $50.00
              </span>
       </div>
       <div className='cart__value'>
           <div className='cart__add'>
               <span className='sign'></span>
           </div>
           <div className='cart__quantity'>
               <span className='number'></span>
           </div>
           <div className='cart__reduce'>
               <span className='sign'></span>
           </div>
       </div>
   </div>
  )
}
