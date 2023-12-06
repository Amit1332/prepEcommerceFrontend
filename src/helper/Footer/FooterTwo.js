import React from 'react'
import { NavLink } from 'react-router-dom'


const FooterTwo = () => {
  return (
    <div className='footertwo'>
<div className='d-flex flex-justify-between  pxlr-5 flex-dir-row'>
              <div className="w-50 d-flex">
              <div className="w-50 color-grey line-height-2">

<div className="fs-1 fw-600">Information</div>
<div className="fs-ss-9 d-flex flex-dir-col">
    <NavLink className="color-grey">About Us</NavLink>
    <NavLink className="color-grey">Information</NavLink>
    <NavLink className="color-grey">Privacy Policy</NavLink>
    <NavLink className="color-grey">Term & Condition</NavLink>


</div>
</div>
<div className="w-50 color-grey line-height-2">

<div className="fs-1 fw-600">Services</div>
<div className="fs-ss-9 d-flex flex-dir-col">
    <NavLink className="color-grey">About Us</NavLink>
    <NavLink className="color-grey">Information</NavLink>
    <NavLink className="color-grey">Privacy Policy</NavLink>
    <NavLink className="color-grey">Term & Condition</NavLink>


</div>
</div>
              </div>
       <div className="w-50 d-flex">
       <div className="w-50 color-grey line-height-2">

<div className="fs-1 fw-600">Extras</div>
<div className="fs-ss-9 d-flex flex-dir-col">
    <NavLink className="color-grey">About Us</NavLink>
    <NavLink className="color-grey">Information</NavLink>
    <NavLink className="color-grey">Privacy Policy</NavLink>
    <NavLink className="color-grey">Term & Condition</NavLink>


</div>
</div>
<div className="w-50 color-grey line-height-2">
<div className="fs-1 fw-600">My Account</div>
<div className="fs-ss-9 d-flex flex-dir-col">
    <NavLink className="color-grey">About Us</NavLink>
    <NavLink className="color-grey">Information</NavLink>
    <NavLink className="color-grey">Privacy Policy</NavLink>
    <NavLink className="color-grey">Term & Condition</NavLink>


</div>
</div>
       </div>
       
        



    </div>
    </div>
  )
}

export default FooterTwo