import React from 'react'
import './categoryCard.css'


 const CategoryCard = ({ id, image, productName, price}) => {
  
    return (
      <div className='category__item' key={id}>
      <img src={image} alt='product' className='product__image'/>
    <div className='category__titles'>
    <h3 className='product__name'>{productName}</h3>
    <span className='product__price'>{price}</span>
    </div>
      </div>
    )
  
}
export default CategoryCard
