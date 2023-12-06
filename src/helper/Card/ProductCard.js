import React from 'react'
import { useNavigate } from 'react-router-dom'
import Rating from 'react-star-ratings'

const ProductCard = ({val}) => {

  const navigate  =useNavigate()
   
  return (
    <>
       <div className="card-head h-55 w-300px pm-5">
           <div className="card text-center ps-5 cr-pointer h-100-per w-100-per card-border" onClick={()=>navigate(`/products/${val.category}/product/${val._id}`)}>
            <div className="hot w-4 h-m-2 bg-crimson color-white fs-ss-8 p-1 fw-500 d-flex flex-align-center flex-justify-center brsx-radius-2">HOT</div>
            <div className="card-img h-60-per w-100 pos-relative d-flex flex-align-center flex-justify-center overflow-hidden py-1-5">
                <img src={`${val&&val.thumbnail}`} alt=""className='w-auto h-100-per' />
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

export default ProductCard