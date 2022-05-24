import React, { useState} from 'react';
import { BsCart, BsArrowCounterclockwise } from '../../Components/Icons/index'
import productData from '../dummyData/dummyData';
import CategoryCard from '../../Cards/CategoryCard/CategoryCard';
import CartItemCard from '../../Cards/CartItemCard/CartItemCard'
import './header.css'
import Category from '../Category/Category';

const Header = () => {
const [fetchedProducts, setFetchedProducts] = useState(productData);
const [open, setOpen] = useState(false);
const [value, setValue] = useState(0);


const reload = () => {
  window.location.reload()
}

const { products , category} = fetchedProducts[value]

    return (
      <div className="cart__body_wrapper">
        <div className='header__wrapper'>
        <div className="header__firstchild">
          {
            productData.map((data, index) => (
              <div className="child__wrapper" key={index}>

                <button key={index}
                onClick={() => setValue(index)}
                className={`gender ${index === value && 'border'}`}
                >
                  {data.category}
                </button>
                <span className=""></span>
              </div>
            ))
            }
        </div>
        <div className="header__logo__wrapper">
          <div className="logo__container">
            <span className="">
              <BsArrowCounterclockwise className='logo' onClick={reload}/>
            </span>
            <span className="arrow"></span>
          </div>
        </div>
        <div className="header__currency">
          <select>
            <option value="">currency</option>
            <option value="USD">$ USD</option>
            <option value="EUR">€ EUR</option>
            <option value="JPN">¥ JPN</option>
          </select>
          <span className="cart">
            <BsCart onClick={() => setOpen(!open)}/>
          </span>
        </div>
        {/* <CartItemCard className='cart__overlay'/> */}
      </div>
      <div className='category__wrapper'>
      
       <div className='category__header'>
         <h2 className='category__header-text'>
   {category}
         </h2>
       </div>
        
       <div className='category__items-wrapper'>
        {
          products.map((data) => (
            <CategoryCard
            key={data.id}
            image={data.image}
            productName={data.productName}
            price={data.productPrice}/>
             
          ))
        }
        </div>
       
      </div>
      </div>
    )
  }
  export default Header

