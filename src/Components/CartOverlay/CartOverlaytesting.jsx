import React, { Component } from 'react';
import CartItemCard from '../../Cards/CartItemCard/CartItemCard';
import './cartOverlay.css'
import { Link } from 'react-router-dom';


export default class CartOverlay extends Component {
  render() {
    return (
      <div className='cart__overlay__wrapper'>
           <div className='cart__overlay__header'>
         <div className='cart__overlay__header_text'>
         <span className="cart__name">
         My Bag,
         </span>
         <span className="numberOf__items">
         3 items
         </span>
         </div>
       </div>
       <CartItemCard/>
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
}
