import React, {useState} from 'react';
import prodauctData from '../dummyData/dummyData';
import CategoryCard from '../../Cards/CategoryCard/CategoryCard';
import './category.css'
import CartItemCard from '../../Cards/CartItemCard/CartItemCard';

 const Category = ()  => {
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(0);

//const {id, image, } = prodauctData[1].products
    return (
      <div className='category__wrapper'>
       <div className='category__header'>
         <h2 className='category__header-text'>
    Category name
         </h2>
       </div>
       <div className='category__items-wrapper'>
        {
           prodauctData[1].products.map((data) => (
            <CategoryCard
            key={data.id}
            image={data.image}
            productName={data.productName}
            price={data.productPrice}/>
             
          ))
        }
         <CartItemCard className='overlay'/>
        </div>
       
      </div>
    )
  }
  export default Category

