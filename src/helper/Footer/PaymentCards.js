import React from 'react'
import westernCards from '../../assets/icons/western-cards.png'
import rupayCards from '../../assets/icons/rupay_card.png'
import visaCards from '../../assets/icons/visa_card.png'
import masterCards from '../../assets/icons/credit-card.png'




const PaymentCards = () => {
  return (
    <div className='paymentCard'>
 <div className='w-100 h-3 my-1 d-flex flex-align-center flex-justify-end  pxlr-5'>
        <div className="h-100-per w-5 d-flex flex-align-center flex-justify-center ">
            <img src={westernCards} alt="" className='h-100-per'/>
        </div>
        <div className="h-100-per w-5 d-flex flex-align-center flex-justify-center ">
            <img src={rupayCards} alt="" className='h-100-per'/>
        </div> <div className="h-100-per w-5 d-flex flex-align-center flex-justify-center ">
            <img src={visaCards} alt="" className='h-100-per'/>
        </div> <div className="h-100-per w-5 d-flex flex-align-center flex-justify-center ">
            <img src={masterCards} alt="" className='h-100-per'/>
        </div>
        
        


    </div>
    </div>
   
  )
}

export default PaymentCards