import React, { Component } from 'react';


export default class CartOverlay extends Component {
  render() {
    return (
      <div className='cart__overlay__wrapper'>
           <div className='cart__overlay__header'>
         <div className='cart__overlay__header-text'>
         <span className="cart__name">
         My Bag,
         </span>
         <span className="numberOf__items">
         3 items
         </span>
         </div>
       </div>
       <div className='cart__overlay__items-wrapper'>

       </div>
      </div>
    )
  }
}
