import React from 'react'
import Logo from '../../assets/icons/Luke-logo.png'
import twitter from "../../assets/icons/twitter.png"
import facebook from "../../assets/icons/facebook.png"


const FooterOne = () => {
  return (
   <div className='footerone'>
     <div className='d-flex w-100 h-50 flex-justify-between flex-dir-row pxlr-5'> 
    <div className="w-30 pxlr-0-5 color-grey logoimg">
        <img src={Logo} alt="" className='w-30'/>
        <div className="fs-ss-9 line-height-1-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aliquam explicabo facilis assumenda delectus. Dicta fuga repellat excepturi necessitatibus id quos voluptatibus neque explicabo. Nisi, assumenda omnis! Non, quam minima!</div>

    </div>
    <div className="w-30 line-height-2 color-grey pxlr-0-5">
        <div className="fs1 fw-600">Follow Us</div>
        <div className="fs-ss-9 line-height-1-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aliquam explicabo facilis assumenda delectus. Dicta fuga repellat excepturi
        adipisicing elit. Impedit aliquam explicabo facilis assumenda delectus. Dicta fuga repellat excepturi Dicta fuga repellat excepturi
        </div>
     
            <div className="d-flex flex-gap-mm my-1">
            <img src={facebook} alt="" className='w-m-2'/>
            <img src={twitter} alt="" className='w-m-2'/>

            </div>
    </div>
    <div className="contactUs w-30 color-grey line-height-2 pxlr-0-5">
        <div className="fs1 fw-600">Contact Us</div>
        <div className="fs-ss-9 line-height-1-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aliquam explicabo facilis assumenda delectus. Dicta fuga repellat excepturi
           consectetur adipisicing elit. Impedit aliquam explicabo facilis assumenda delectus. Dicta fuga repellat excepturi</div>
     
           
    </div>
        

    </div>
   </div>
  )
}

export default FooterOne