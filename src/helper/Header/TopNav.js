import React, { useState } from 'react'
import profile from "../../assets/icons/profile.png"
import cart from "../../assets/icons/trolley.png"
import search from "../../assets/icons/magnifying-glass.png"
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import HelperFunction from '../../store/actions/action'


const TopNav = () => {
  const Navigate = useNavigate()
  const dispatch =useDispatch()
  const items = useSelector((state)=> state.cart)
  const data = useSelector((state)=> state.data.search)

  const [isSearch, setIsSearch]=useState(false)
  const [isdrop, setIsDrop]=useState(false)

  const [query, setQuery] = useState('');

const handleSeacrch = ()=>{
setIsSearch(true)
if(isSearch){
setIsSearch(false)
}
 
}

const handleSubmitSearch = async (e) => {
  setQuery(e.target.value)
  
  e.preventDefault()
  try {
    dispatch(HelperFunction.fetchData(`${process.env.REACT_APP_BASE_URL}/search?q=${query}`,"search"))
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};


  const handleChangeSearch = async (e) => {
    setQuery(e.target.value)
      setIsDrop(true)
    if(e.target.value.length<1){
      setIsDrop(false)  
    }
    try {
      dispatch(HelperFunction.fetchData(`${process.env.REACT_APP_BASE_URL}/search?q=${query}`,"search"))
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  const navigateUrl = (elem)=>{
    if(elem.title){
    Navigate(`/products/${elem.category}/product/${elem._id}`)
    }else{
      Navigate(`/product/${elem.name}/${elem._id}`) 

    }
    setIsDrop(false)
  }


  return (

    <div className='top_nav d-flex  pos-relative flex-justify-around color-grey fw-500 h-4 w-100'>
        <div className="left_top_nav d-flex flex-align-center flex-gap-mm ">
                <select name="language" id="" className='fs-1 color-grey fw-500 bg-transparent br-none cr-pointer'>
                    <option value="">english</option>
                    


                </select>

            <select name="currency" id="" className='fs-1 color-grey fw-500 bg-transparent br-none cr-pointer'>
                    <option value="">$ dollar</option>
                    


                </select>
        </div>
       
        {/* <form action="" className='center_top_nav myx-5  z-index-999 d-flex  flex-dir-col flex-align-center w-40' onSubmit={handleSubmitSearch}>

        {
           isSearch ? 
         <div className="w-100">
           <input type="text" placeholder='search ... ' className='bg-white br-none promo p-1 fs-ss-9 fw-600 color-grey' 
        onChange={handleChangeSearch}/>
 
         </div>
          : ''

        }


       {
        isdrop ?
        <ul className='w-100 dropsearch bg-white z-index-999'>
        {
          data&&data.filter((elem,index)=>index<8).map((elem)=>{
            return(
              <>
            <li className=' text-left hover-color-light d-flex  flex-gap-2 cr-pointer list-style-none ps-8' onClick={()=>navigateUrl(elem)}><img src="/assets/icons/gift-box.png" alt="" className='h-m-2'/>{(elem.name&&elem.name.slice(0,40) || elem.title&&elem.title.slice(0,40))}...</li>
              
              </>
            )
          })
        }
      </ul>
      :''
       }
      </form>
      */}


<form action="" className='center_top_nav myx-5  z-index-999 d-flex  flex-dir-col flex-align-center w-40' onSubmit={handleSubmitSearch}>

 <div className="w-100">
   <input type="text" placeholder='search ... ' className='bg-white br-none promo p-1 fs-ss-9 fw-600 color-grey' 
onChange={handleChangeSearch}/>

 </div>
 


{
isdrop ?
<ul className='w-100 dropsearch bg-white z-index-999'>
{
  data&&data.filter((elem,index)=>index<8).map((elem)=>{
    return(
      <>
    <li className=' text-left hover-color-light d-flex  flex-gap-2 cr-pointer list-style-none ps-8' onClick={()=>navigateUrl(elem)}><img src="/assets/icons/gift-box.png" alt="" className='h-m-2'/>{(elem.name&&elem.name.slice(0,40) || elem.title&&elem.title.slice(0,40))}...</li>
      
      </>
    )
  })
}
</ul>
:''
}
</form>




        <div className="right_top_nav d-flex flex-align-center flex-gap-mm">
            <div className="profile d-flex flex-align-center flex-gap-sm flex-justify-center fs-ss-9 cr-pointer" onClick={()=>Navigate('/profile')}>
                <img src={profile} alt="" className='w-m-2'/>
                  My Profile

            </div>
            <div className="cart pos-relative d-flex flex-align-center flex-justify-center flex-gap-sm  fs-1 cr-pointer" onClick={()=>Navigate('/cart')} >
            <img src={cart} alt="" className='w-m-2'/>
            <span className='pos-absolute h-2 w-2 br-radius-50  bg-orange-red d-flex flex-align-center flex-justify-center color-white fs-s-6 top-x5 left-1'>{items.length}</span>
            Cart
            </div>

                   <div className="search d-flex flex-align-center cr-pointer">
               <img src={search} alt="" className='w-m-2'  onClick={handleSeacrch}/>
                
                </div>
                <div className="search d-flex flex-align-center cr-pointer">
               <img src="/assets/icons/log-in.png" alt="" className='w-m-2'  onClick={()=>Navigate('/login')}/>
                
                </div>
        </div>



    </div>
  )
}

export default TopNav