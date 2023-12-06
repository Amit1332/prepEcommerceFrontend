import React, { useEffect, useState } from 'react'
import ReactImageMagnify from 'react-image-magnify';
import { useDispatch } from 'react-redux';
import {useNavigate} from "react-router-dom"
import { cart } from '../../../store/Slice/CartSlice';
import { showToast } from '../../../helper/Toast'

const ProductImage = ({images, data}) => {
    const Navigate = useNavigate()
    const dispatch = useDispatch()
    const [image,setImage]=useState()
    useEffect(()=>{
        setImage(data&&data.thumbnail)
    },[data&&data.thumbnail])


    const AddInCart = ()=>{
        dispatch(cart(data))
        showToast("Item Added in Cart","success")
        
    }


  return (
   <div>

<div className='w-100 d-flex h-80 card-border'>
        <div className="w-20  d-flex flex-dir-col">
            {
                data&&data.images&&data&&data.images.map((elem)=>{
                    return(
                        <>
                         <div className="overflow-hidden ps-5  d-flex flex-align-center flex-justify-center h-6 card-border-2 cr-pointer">
                            <img src={elem} alt="" className='w-fit h-100-per' onClick={(e)=>setImage(e.target.src)}/>
            </div>
                        </>
                    )
                })
            }
           

     
           
        </div>

        <div className="w-80 ps-5 d-flex flex-align-center flex-justify-center"style={{height:"fit-content"}}>
        <ReactImageMagnify {...{
    smallImage: {
        alt: 'Wristwatch by Ted Baker London',
        height: 480,
        width:400,
        src: image
    },
    largeImage: {
        src: image,
        width:1000,
        height: 1300,
    },

}} />
</div>
    </div>

    <div className="d-flex flex-align-center flex-justify-center my-3 flex-gap-2">
    <div className="h-3 w-30 cr-pointer  bg-orange-red fw-bold color-white d-flex flex-align-center flex-justify-center brsx-radius-3" onClick={AddInCart}>Add To Card</div>
    <div className="h-3 w-30 cr-pointer bg-blue fw-bold color-white d-flex flex-align-center flex-justify-center brsx-radius-3"onClick={()=>Navigate('/payment')}>Buy Now</div>
   
    </div>
   </div>
  )
}

export default ProductImage