import React, { Component } from 'react';
import prodauctData from '../dummyData/dummyData';
import CategoryCard from '../../Cards/CategoryCard/CategoryCard';

export default class Category extends Component {
  
  render() {
    console.log(prodauctData)
    return (
      <div>
        {
         
          prodauctData.map((data) => (
            <CategoryCard
            key={data.id}
            image={data.image}
            productName={data.productName}
            price={data.productPrice}/>
          ))
          
        }
      </div>
    )
  }
}
