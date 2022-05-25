import React, {useState} from 'react';
import prodauctData from '../dummyData/dummyData';
import { Link } from 'react-router-dom';
import CategoryCard from '../../Cards/CategoryCard/CategoryCard';
import './category.css'


 const Category = ()  => {
  const [fetchedProducts, setFetchedProducts] = useState(prodauctData);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(0);

  const { products } = fetchedProducts[value]
    return (
      <div className='category__wrapper'>
       <div className='category__header'>
         <h2 className='category__header-text'>
    Category name
         </h2>
       </div>
       <div className='category__items-wrapper'>
       {
            products.map((data) => (
              <Link to={`/product/${data.id}`}
              style={{textDecoration:'none'}}
              key={data.id}>
                <CategoryCard
                image={data.image}
                productName={data.productName}
                price={data.productPrice} />
              </Link>

            ))
          }
        </div>
       
      </div>
    )
  }
  export default Category

