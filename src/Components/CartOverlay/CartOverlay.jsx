import React from 'react';
import { Link } from 'react-router-dom';
import { productA } from '../../assets';
import './cartOverlay.css'

const CartOverlay  = ({productName, price, sizes, colors, qty, total}) => {
  return (
   <div className='cart__overlay_items_wrapper'>
       <div className='cart__overlay_overlay__header'>
         <div className='cart__overlay_overlay__header_text'>
         <span className="cart__overlay_name">
         My Bag,
         </span>
         <span className="numberOf__items">
         3 items
         </span>
         </div>
       </div>
      <div className='cart__overlay_item_wrapper'>
      <div className='cart__overlay_item_props'>
      <div className='products__overlay__wrapper'>
          <span className='product__name'>
          Apollo
Running Short
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
      <div className='cart__overlay_value'>
           <div className='cart__overlay_add'>
               <span className='sign'>+</span>
           </div>
           <div className='cart__overlay_quantity'>
               <span className='sign'>2</span>
           </div>
           <div className='cart__overlay_reduce'>
               <span className='sign'>-</span>
           </div>
       </div>
       <img src={productA} alt='cart' className='cart__overlay_item_image'/>
      </div>
      <div className='cart__overlay_checkout_wrapper'>
          <div className='total__wrapper'>
              <span className='total'>
              Total
              </span>
              <span className='cart__overlay_amount'>
              $200.00
              </span>
          </div>
          <div className='cart__overlay_checkout'>
              <div className='view__bag__wrapp'>
                  <Link to='/cart' className='bag'>View bag</Link>
              </div>
              <div className='checkout__wrapp'>
              <a href='#' className='check'>CHECK OUT</a>
              </div>
          </div>
      </div>
   </div>
  )
}
export default CartOverlay
