import React from 'react';
import { productA } from '../../assets';
import './cartItemCard.css'

export default function CartItemCard() {
  return (
   <div className='cart__items_wrapper'>
      <div className='cart__item_wrapper'>
      <div className='cart__item_props'>
      <div className='products__wrapper'>
          <span className='product__name'>
          Apollo Running Short
              </span> 
              <span className='amount'>
              $50.00
              </span>
       </div>
       <div className='size__wrapper'>
           <span className='size__label'>
               Size:
           </span>
           <div className='sizes'>
               <span className='size'>XS</span>
               <span className='size'>S</span>
               <span className='size size__active'>M</span>
               <span className='size'>L</span>
           </div>
       </div>
       <div className='color__wrapper'>
           <span className='color__label'>
               Color:
           </span>
           <div className='colors'>
               <span className='color_ash'></span>
               <span className='color_black'></span>
               <span className='color_green'></span>
           </div>
       </div>
      </div>
      <div className='cart__value'>
           <div className='cart__add'>
               <span className='sign'>+</span>
           </div>
           <div className='cart__quantity'>
               <span className='sign'>2</span>
           </div>
           <div className='cart__reduce'>
               <span className='sign'>-</span>
           </div>
       </div>
       <img src={productA} alt='cart' className='cart__item_image'/>
      </div>
      <div className='cart__checkout_wrapper'>
          <div className='total__wrapper'>
              <span className='total'>
              Total
              </span>
              <span className='cart__amount'>
              $200.00
              </span>
          </div>
          <div className='cart__checkout'>
              <div className='view__bag__wrapp'>
                  <a href='#' className='bag'>View bag</a>
              </div>
              <div className='checkout__wrapp'>
              <a href='#' className='check'>CHECK OUT</a>
              </div>
          </div>
      </div>
   </div>
  )
}
