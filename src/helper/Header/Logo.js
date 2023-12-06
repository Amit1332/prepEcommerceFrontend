import React from 'react'
import logo from "../../assets/icons/Luke-logo.png"
import { NavLink, useNavigate } from 'react-router-dom'


const Logo = () => {
  const Navigate = useNavigate()
  return (
    <div>
      <div className="logo w-100 d-flex flex-align-center flex-justify-center">
          <img src={logo} alt=""  className='w-10 cr-pointer' onClick={()=>Navigate('/')}/>
      </div>

    </div>
  )
}

export default Logo