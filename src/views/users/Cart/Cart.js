import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteItemFromCart, itemDecrement, itemIncrement } from '../../../store/Slice/CartSlice'

const Cart = () => {
  const Navigate = useNavigate()
  const items = useSelector((state)=> state.cart)
  const dispatch =useDispatch()
  const [totalprice,setTotalPrice]=useState(0)
  const [discountPrice,setDiscountPrice]=useState(0)
  const [ratePrice,setRatePrice]=useState(0)


  const [order,setOrder]=useState({
    orderId:'',
    orders:'',
    amount:''
  })

  const totalPriceFunc = ()=>{
    let totalPrice = 0
    items.map((elem)=>{
      totalPrice+=elem.price*elem.qty
    })
      let discprice = totalPrice*50/100
      let ratePrice = discprice*5/100

      setRatePrice(ratePrice)
     setDiscountPrice(discprice)
     setTotalPrice(totalPrice)
     setOrder({amount:discprice+ratePrice,orders:items})
  }

const decrement = (id)=>{
  dispatch(itemDecrement(id))

}

const increment = (id)=>{
  console.log(id);
dispatch(itemIncrement(id))
}
const deleteItem = (id)=>{
  dispatch(deleteItemFromCart(id))
  console.log(id);

  }

useEffect(()=>{
  totalPriceFunc()
},[items])
  return (
    <div className='w-100 h-50-min my-3 pxlr-5'>
{items.length>0 ? <>

        <div className="row fs-mm-2 fw-500 color-grey">
          <div className="col-5 ps-5 d-flex flex-align-center flex-gap-4">Product </div>
          <div className="col-5 ps-5 d-flex flex-align-center flex-gap-4">

            <div className="row">
              <div className="col-4">
                Price
              </div>
              <div className="col-4">
                Qty
              </div>
              <div className="col-4">
                Unit Price
              </div>
            </div>
          </div>

        </div>
{
  items.map((elem)=>{
    return(
      <>
       <div className="row fs-mm-2 fw-500 color-grey my-1">
          <div className="col-5  ps-5 d-flex flex-align-center flex-gap-4">
            <div className="cross"><img src="/assets/icons/close.png" alt="" className='w-1 cr-pointer' onClick={()=>deleteItem(elem._id)}/></div>
             <div className="w-100px ps-5  d-flex flex-align-center flex-justify-center h-6 ">
            <img src={elem.thumbnail} alt="" className='w-100 '/>
            </div>
            
            <div className="fs-ss-9">{elem.title.slice(0,50)}</div>
            
             </div>
          <div className="col-5 ps-5 d-flex flex-align-center flex-gap-4">

            <div className="row">
              <div className="col-4 d-flex flex-align-center">
               $ {elem.price*elem.qty}
              </div>
              <div className="col-4 d-flex flex-align-center">
               <div className="w-m-6 brsx-radius-4 h-2 bg-light-orange-redd d-flex flex-align-center flex-justify-center">
                      <div className="col-4 d-flex flex-align-center flex-justify-center cr-pointer" onClick={()=>decrement(elem._id)}>-</div>
                      <div className="col-4 d-flex flex-align-center flex-justify-center">{elem.qty}</div>
                      <div className="col-4 d-flex flex-align-center flex-justify-center cr-pointer" onClick={()=>increment(elem._id)}>+</div>

               </div>
              </div>
              <div className="col-4 d-flex flex-align-center">
                $ {elem.price}
              </div>
            </div>
          </div>

        </div>
      </>
    )
  })
}
       
        


        <div className="d-flex flex-justify-between">
          <div className="promo h-m-3 d-flex brsx-radius-3 overflow-hidden">
            <input type="text"  className='promo br-none pxlr-2 fs-1'/>
            <div className="btn bg-orange-red pxy-2  color-white fs-1 cr-pointer fw-600">Apply</div>
          </div>
          <div className="card bg-light-orange-redd p-1 w-350px brsx-radius-4 ">
            <div className="card-title fs-m-2 fw-600 d-flex flex-justify-end">
             <div className=""> Total</div>
            </div>
            <div className="d-flex flex-justify-end fs-mm-1 fw-600 my-1">
              
              <div className="w-50 d-flex flex-justify-end">$ {totalprice}</div>

            </div>
            <div className="d-flex flex-justify-between fs-mm-1 fw-600 my-1">
              <span>Discount</span>
              <div className="w-50 d-flex flex-justify-between"><span className='w-30 text-right'>-50%</span>$ {discountPrice}</div>

            </div>
            <div className="d-flex flex-justify-between fs-1 fw-600">
              <span>Rate</span>
              <div className="w-50 d-flex flex-justify-between"><span className='w-30 text-right'>5%</span>$ {ratePrice}</div>

            </div>
            <div className="d-flex flex-justify-between fs-1 fw-600 my-1">
              <span>Grand Total</span>
              <div className="d-flex flex-justify-between">$ {order.amount}</div>

            </div>

                <div className="pay d-flex flex-justify-end">
                        <div className="btn bg-orange-red pxy-2 color-white brsx-radius-3 cr-pointer fw-600" onClick={()=>Navigate('/payment')}>Proceed to Pay</div>
                       
                       
                </div>
          </div>

        </div>
        </> : <div className='w-100 h-50-min d-flex flex-align-center flex-justify-center'><div className="bg-orange-red color-white fs-mm-2 fw-600 pxy-2 brsx-radius-3">Your Card is Empty</div></div>
}

    </div>
  )
}

export default Cart