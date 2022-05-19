import React, { Component } from 'react'
import './categoryCard.css'
export default class CategoryCard extends Component {
  constructor({ id, image, productName, price}) {
    super();
    this.state = {
      id, image, productName, price
    };
  }

  render() {
    return (
      <div className='category__wrapper'>
       <div className='category__header'>
         <h2 className='category__header-text'>
    
         </h2>
       </div>
      <div className='category__items-wrapper'key={this.id}>
      <img src={this.image} alt=''/>
    <h3 className='product__name'>{this.productName}</h3>
    <span className='product__price'>{this.price}</span>
      </div>
      </div>
    )
  }
}
