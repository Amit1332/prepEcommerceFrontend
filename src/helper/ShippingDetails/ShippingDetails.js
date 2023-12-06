import React from 'react'
import shipping from '../../assets/icons/free-delivery.png'
import refund from '../../assets/icons/reimbursement.png'
import support from '../../assets/icons/customer-service.png'



const ShippingDetails = () => {
  return (
    <div className='shipping w-100 d-flex flex-wrap flex-align-center flex-justify-center py-2'>
    <div className="card-head h-50 w-25 pm-5">
           <div className="card text-center p-2 cr-pointer w-100-per">
            <div className="card-img h-20-per w-100 pos-relative d-flex flex-align-center flex-justify-center overflow-hidden py-1-5">
                <img src={shipping } alt=""className='w-3 h-3' />
            </div>
            <div className="card-body  line-height-2-5">
                <div className="card-title fs-1 fw-600">FREE SHIPPING
                </div>

               
                <div className="desc-d-flex flex-align-center flex-justify-center flex-gap-s fs-ss-8 fw-600 color-grey line-height-1-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sed eaque maxime temporibus nesciunt eveniet, veniam, nisi quo consectetur est ipsa maiores itaque illum et, deserunt aliquid vero. Quasi, magnam?
                </div>
            </div>
            
            </div>
    </div>
    <div className="card-head h-50 w-25 pm-5">
           <div className="card text-center p-2 cr-pointer w-100-per">
            <div className="card-img h-20-per w-100 pos-relative d-flex flex-align-center flex-justify-center overflow-hidden py-1-5">
                <img src={refund } alt=""className='w-3 h-3' />
            </div>
            <div className="card-body  line-height-2-5">
                <div className="card-title fs-1 fw-600">100% REFUND
                </div>

               
                <div className="desc-d-flex flex-align-center flex-justify-center flex-gap-s fs-ss-8 fw-600 color-grey line-height-1-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sed eaque maxime temporibus nesciunt eveniet, veniam, nisi quo consectetur est ipsa maiores itaque illum et, deserunt aliquid vero. Quasi, magnam?
                </div>
            </div>
            
            </div>
    </div>
    <div className="card-head h-50 w-25 pm-5">
           <div className="card text-center p-2 cr-pointer w-100-per">
            <div className="card-img h-20-per w-100 pos-relative d-flex flex-align-center flex-justify-center overflow-hidden py-1-5">
                <img src={support } alt=""className='w-3 h-3' />
            </div>
            <div className="card-body line-height-2-5">
                <div className="card-title fs-1 fw-600">SUPPORT 24/7
                </div>

               
                <div className="desc-d-flex flex-align-center flex-justify-center flex-gap-s fs-ss-8 fw-600 color-grey line-height-1-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sed eaque maxime temporibus nesciunt eveniet, veniam, nisi quo consectetur est ipsa maiores itaque illum et, deserunt aliquid vero. Quasi, magnam?
                </div>
            </div>
            
            </div>
    </div>
       
       </div>

  )
}

export default ShippingDetails