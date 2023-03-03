import React from 'react'
import Data from '../Data/Data.json'
import {useDispatch} from 'react-redux'
import { incrementcart } from '../Redux/CartReducer';
import { decrementcart } from '../Redux/CartReducer';

const Products = () => {
    const dispatch =useDispatch();
  return (
    <div>
        <div className='container'>
            <div className='row'>
            {Data.products.map(product =>
                <div className='col' key={product.id}>
                    <div className='card m-5' style={{"width":"18rem","height":"28rem","textAlign":"center"}}>
                        <img className='card-img-top' src={product.src} style={{"width":"18rem","height":"20rem","textAlign":"center"}} alt=''/>
                        <p className='card-title mt-3'>{product.name} | ₹ {product.price}</p>
                        <div className='card-body'>
                        <button className='btn btn-primary ml-auto' 
                        onClick={()=>dispatch(incrementcart({
                            productName:product.name,
                            productPrice:product.price
                        }))}
                        >Add</button> &nbsp;
                        <button className='btn btn-primary ml-auto'
                        onClick={()=>dispatch(decrementcart({
                            productName:product.name,
                            productPrice:product.price
                        }))}
                        >Remove</button>
                    </div>
                    </div>
                    
                    
                </div>
                )}
            </div>
            
        </div>
      
    </div>
  )
}

export default Products
