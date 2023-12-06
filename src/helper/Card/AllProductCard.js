

import React from 'react'
import { useNavigate } from 'react-router-dom'
import Rating from 'react-star-ratings'

const AllProductCard = ({val}) => {
const Navigate= useNavigate()
   
  return (
    <>
       <div className="card-head h-50 w-250px" onClick={()=>Navigate(`/products/${val.category}/product/${val._id}`)}>
           <div className="card text-center ps-5 cr-pointer h-100-per w-100-per card-border">
            <div className="card-img h-60-per w-100 pos-relative d-flex flex-align-center flex-justify-center overflow-hidden">
                <img src={`${val&&val.thumbnail}`} alt=""className='w-auto h-100-per' />
                {/* <img src='./images/ptron-earbuds.png' alt=""className='w-auto h-100-per' /> */}

            </div>
            <div className="card-body line-height-2">
                <div className="card-title fs-1 fw-600">
                    {val&&val.title.slice(0,20)}...
                </div>

                <div className="rating d-flex flex-align-center flex-justify-center ">
                        <Rating
                          rating={val.rating}
                         starRatedColor="#DC143C"
                         starDimension="20px"
                         starSpacing="2px"/>
                </div>
                <div className="price d-flex flex-align-center flex-justify-center flex-gap-s">
                    <span className='color-crimson fw-bold'>${val&&val.price }</span>
                    <del className='color-grey fw-500'>${val&&val.actual_price}</del>
                </div>
            </div>
            
            </div>
       </div>
    

    </>
  )
}

export default AllProductCard