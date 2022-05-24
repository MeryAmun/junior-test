import React, {useState} from 'react';
import prodauctData from '../dummyData/dummyData';
import CategoryCard from '../../Cards/CategoryCard/CategoryCard';
import './category.css'


 const Category = ()  => {
  const [fetchedProducts, setFetchedProducts] = useState(prodauctData);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(0);

//console.log(fetchedProducts[0].products)
  //const newProducts = 
 const { products } = fetchedProducts[value]
 console.log(products)
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
        </div>
       
      </div>
    )
  }
  export default Category

