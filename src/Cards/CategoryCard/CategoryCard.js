import React from 'react'
import './categoryCard.css'
import { BsCart } from '../../Components/Icons'


 const CategoryCard = ({ id, image, productName, price}) => {
  
    return (
      <div className='category__item' key={id}>
    <div className='category__image_wrapper'>
    <img src={image} alt='product' className='product__image'/>
    <span className='catigory__cart_icon'>
      <BsCart/>
    </span>
    </div>
    <div className='category__titles'>
    <h3 className='product__name'>{productName}</h3>
    <span className='product__price'>{price}</span>
    </div>
      </div>
    )
  
}
export default CategoryCard
