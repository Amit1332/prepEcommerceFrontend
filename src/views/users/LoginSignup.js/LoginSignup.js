import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import HelperFunction from '../../../store/actions/action'
import { showToast } from '../../../helper/Toast'


const LoginSignup = () => {
    const userData = useSelector((state)=>state.data.user)
        const token =  userData&&userData.token
        const msg = userData&&userData.msg
        const success = userData&&userData.success

        const info = userData&&userData.info

    const Navigate = useNavigate()
    const dispatch =  useDispatch()
     
     const [state ,setState]=useState(true)
     const [data, setData]= useState({
         name:"",
         mob:"",
         email:"",
         password:""
     })
 
     ;

     const handleChange = (e)=>{
        const {name,value} = e.target
        setData({...data,[name]:value})
    }
    const handleSubmit = (e)=>{
            e.preventDefault()
            if(state){
             dispatch(HelperFunction.postData(`${process.env.REACT_APP_BASE_URL}/user/signup`,data,"user"))  
                                     
          }
            else{
             dispatch(HelperFunction.postData('/user/login',data,"user"))
            }
            setData({
                name:"",
                mob:"",
                email:"",
                password:""
            })

    }

    useEffect(()=>{
        if(token){
            localStorage.setItem("luke",token)
        }
      if(msg){
        showToast(msg, 'success');
      }
      if(info){
        showToast(info);
      }
    },[token])
  return (
    <div className='h-70 d-flex pos-relative flex-justify-center loginsignup'>
        <div className="w-100 h-100-per pos-absolute">
            <img src="/images/loginbanner.png" alt="" className='w-100 h-100-per'/>
        </div>
         <div className="w-50 h-100-per d-flex flex-align-center  text-center flex-dir-col z-index-999">
           <div className="card ps-5 d-flex my-1 w-60 shadow-orange-red brsx-radius-2">
           <button className={`${state?'bg-orange-red color-white': 'bg-light-orange-red color-orange-red'} br-none  ps-4 w-100 fs-mm-2 cr-pointer`} onClick={()=> setState(true)}>Signup</button>
           <button className={`${!state?'bg-orange-red color-white': 'bg-light-orange-red color-orange-red'} br-none  ps-4 w-100 fs-mm-2 cr-pointer`} onClick={()=> setState(false)}>Login</button>

           </div>
            <form action="" className='w-60'>
            <div className="card p-2 rounded shadow-orange-red brsx-radius-2">
                <div className="card-title h-2  flex-justify-center d-flex flex-align-center fw-600 color-grey  bg-light-orange-red rounded fs-mm-2 ">
                    {
                        state ? 
                    "Signup"
                    : "Login"
                }

                </div>
                <div className="card-body my-1">
                    {
                        state ?   
                        <div className="row my-1">
                        <div className="col-4 text-left">
                        <label htmlFor="name">Name</label>

                        </div>
                    <div className="col-8">
                    <input type="text" id='name' placeholder='Enter Your Name' name='name' value={data.name} className=' text-center' onChange={handleChange}/>

                    </div>
                    </div>

                        :''
                    }
                  
                  {
                    state ? 
                    <div className="row  my-1">
                        <div className="col-4 text-left">
                        <label htmlFor="mob">Mobile</label>

                        </div>
                    <div className="col-8">
                    <input type="text" id='mob' placeholder='Enter Your Mobile No.' name='mob' value={data.mob} className=' text-center' onChange={handleChange}/>

                    </div>
                    </div>
                    :''
                  }
                    
                    <div className="row  my-1">
                        <div className="col-4 text-left">
                        <label htmlFor="email">Email</label>

                        </div>
                    <div className="col-8">
                    <input type="text" id='email' placeholder='Enter Your Email' name='email' value={data.email} className=' text-center' onChange={handleChange}/>

                    </div>
                    </div>
                    <div className="row my-1">
                        <div className="col-4 text-left">
                        <label htmlFor="password">Password</label>

                        </div>
                    <div className="col-8 bg-dark">
                    <input type="text" id='password' name='password' placeholder='Enter Your Password' value={data.password} className=' text-center' onChange={handleChange}/>

                    </div>
                    </div>
                </div>


                <div className="submit"> 
                    <button className='bg-orange-red br-none color-white ps-4 brsx-radius-2 w-100 fs-mm-2  cr-pointer' onClick={handleSubmit}>{state? "Submit": "Login"}</button>
              
                    </div>
            </div>
            </form>
        </div>
    </div>
  )
}

export default LoginSignup