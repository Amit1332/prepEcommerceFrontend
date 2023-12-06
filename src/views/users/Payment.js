import React, { useEffect, useState } from 'react'
import axios from 'axios'

import {loadStripe} from '@stripe/stripe-js';
import { useSelector } from 'react-redux';

const Payment = () => {
  const data = useSelector((state)=>state.cart)
         const arr =[]
 const [items,setItems]=useState([])
 data.map((elem)=>{
  arr.push({
    id:elem._id,
    price:elem.price,
    quantity:elem.qty,
    name:elem.title,
  })

 })
 useEffect(()=>{
  setItems(arr)
 },[])
  console.log(items);
  const checkout  =async ()=>{
    try {
      const stripe = await loadStripe('pk_test_51OJiJgSHqKSNDjqqHKxgDaTSizL4h16CRajI3zfwiZLZDF76n4MAZok17F7z48Y7XHvRxdZjavEJVHINlFBsEezb007QGqdmuZ');
      const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/order/checkout`,items)
      const result = stripe.redirectToCheckout({
        sessionId:res.data.id
      })
      // window.location=res.url;
      
    } catch (error) {
      console.log(error);
    }
  }
  
    return (
    <div className='d-flex flex-align-center flex-justify-center h-50'>

            <div className="w-50 bg-dark">
              .card
           

            <button onClick={checkout}>Checkout</button>

            </div>





    </div>
  )
}

export default Payment