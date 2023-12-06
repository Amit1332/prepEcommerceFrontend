import React from 'react'

const Profile = () => {
  return (
    <div className='d-flex h-100 p-2 flex-gap-mm'>

        <div className="w-20 h-100-per bg-light-orange-red brx-radius-1">

                <div className="user-imgg d-flex flex-align-center flex-justify-center p-1">
                    <img src="/assets/icons/profile.png" alt="profile.png" className='h-6 cr-pointer'/>
                </div>
                <ul className='w-100'>
                       <li className=' text-left hover-color-orange d-flex flex-gap-2 cr-pointer list-style-none ps-8'><img src="/assets/icons/gift-box.png" alt="" className='h-m-2'/>Profile</li>
                       <li className=' text-left hover-color-orange d-flex flex-gap-2 cr-pointer list-style-none ps-8'><img src="/assets/icons/gift-box.png" alt="" className='h-m-2'/>Offers</li>
                       <li className=' text-left hover-color-orange d-flex flex-gap-2 cr-pointer list-style-none ps-8'><img src="/assets/icons/gift-box.png" alt="" className='h-m-2'/>PromoCode</li>
                       <li className=' text-left hover-color-orange d-flex flex-gap-2 cr-pointer list-style-none ps-8'><img src="/assets/icons/gift-box.png" alt="" className='h-m-2'/>Debit Card</li>
                       <li className=' text-left hover-color-orange d-flex flex-gap-2 cr-pointer list-style-none ps-8'><img src="/assets/icons/gift-box.png" alt="" className='h-m-2'/>Orders</li>
                       <li className=' text-left hover-color-orange d-flex flex-gap-2 cr-pointer list-style-none ps-8'><img src="/assets/icons/gift-box.png" alt="" className='h-m-2'/>Address</li>
                       <li className=' text-left hover-color-orange d-flex flex-gap-2 cr-pointer list-style-none ps-8'><img src="/assets/icons/gift-box.png" alt="" className='h-m-2'/>Reset Password</li>
                       <li className=' text-left hover-color-orange d-flex flex-gap-2 cr-pointer list-style-none ps-8'><img src="/assets/icons/gift-box.png" alt="" className='h-m-2'/>Help & Supports</li>



                        
                 </ul>


        </div>
        <div className="w-80 h-100-per bg-light-orange-red brx-radius-1"></div>





    </div>
  )
}

export default Profile