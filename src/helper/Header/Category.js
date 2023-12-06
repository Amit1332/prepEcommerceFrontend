import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import HelperFunction from '../../store/actions/action'


const Category = () => {
//  const data =[]
const navigate =useNavigate()
  const data = useSelector((state)=>state.data.category)
 const dispatch = useDispatch()

  useEffect(()=>{ 
    dispatch(HelperFunction.fetchData(`${process.env.REACT_APP_BASE_URL}/category`,'category'))
  },[dispatch])

  return (
  <div div className='category d-flex flex-dir-col flex-align-center bg-orange-red flex-justify-center pos-relative w-100'>
    <div className='parent-category  h-3 pos-relative d-flex flex-align-center w-80 flex-justify-center flex-gap-s fs-mm-2 fw-500'>
    {
data&&data.map((elem)=>{
  return (
    <>
     <div className="color-white h-100-per  cr-pointer d-flex flex-align-center flex-justify-center" onClick={()=>navigate(`/product/${elem.name}/${elem._id}`)}>
     <div className='d-flex  flex-align-center flex-justify-center flex-gap-ssm'>
          <div className=" cat-image d-flex h-m-2 w-m-2 bg-white br-radius-50 flex-align-center flex-justify-center">
          <img src={elem.img_url} className='w-1' alt="" />
          </div>
        <span> {elem.name} </span>
     </div>
     {/* <div className='sub-nav w-80 bg-white p-1 d-flex flex-wrap'>

<div className="sub-cat w-20 d-flex flex-dir-col flex-gap-sm m-1 fs-ss-9 ">
  {
   elem.sub_category && elem.sub_category.map((elem)=>{
      return (
        <>
      <NavLink className="fw-600 color-grey">{elem.name} <i class="ri-arrow-right-s-fill"></i> </NavLink>
      <div className="sub-child-category d-flex flex-dir-col flex-gap-sm fw-400">
        {
          elem.sub_child_category.map((ele)=>{
            return (
              <>
              <NavLink className="color-grey ">{ele.name}</NavLink>

              </>
            )

          })
        }

   </div>
        </>
      )
    })
  }
  
  </div>
 
 
</div> */}
      </div>

    </>
  )

})



    }

    </div>


   
  
  
  </div>
  )
}


export default Category