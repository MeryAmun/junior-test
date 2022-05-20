import React, { Component } from 'react';
import prodauctData from '../dummyData/dummyData';
import CategoryCard from '../../Cards/CategoryCard/CategoryCard';
import './category.css'
import CartItemCard from '../../Cards/CartItemCard/CartItemCard';

export default class Category extends Component {
  
  render() {
    
    return (
      <div className='category__wrapper'>
       <div className='category__header'>
         <h2 className='category__header-text'>
    Category name
         </h2>
       </div>
       <div className='category__items-wrapper'>
        {/* {
         
          prodauctData.map((data) => (
              <CategoryCard
            key={data.id}
            image={data.image}
            productName={data.productName}
            price={data.productPrice}/>
          ))
          
        } */}
         <CartItemCard/>
        </div>
       
      </div>
    )
  }
}
