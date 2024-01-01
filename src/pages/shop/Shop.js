import React from 'react';
import {PRODUCTS} from '../../Products';
import Productlist from './Productlist';
import './shop.css';

const Shop = () => {
  return (
    <div className='shop'>
      <div className='shopTitle'>
        <h1>PedroTech Shop</h1>
      </div>
      <div className='products'>
         {
         PRODUCTS.map((value)=>{
          return(
            <Productlist  data={value}/>
          )
         })
         }
      </div>
    </div>
  )
}

export default Shop
