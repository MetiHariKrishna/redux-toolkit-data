import React from 'react'
import { useSelector } from 'react-redux';

const Navbars = () => {
  const cartCount =useSelector((state)=>state.cartReducer.cartValues.length)
  const totalPrice =useSelector((state)=>state.cartReducer.totalPrice)
  return (
    <div className='bg-dark my-2 p-3'>
      <span className='btn btn-primary'>cart items:{cartCount}</span> &nbsp;
      <span className='btn btn-primary'>Total price:{totalPrice}</span>
    </div>
  )
}

export default Navbars
