import React, { useEffect, useRef, useState } from 'react'
import Delivery from '../../../assets/icons/free-delivery.png'
import Refund from '../../../assets/icons/reimbursement.png'
import Support from '../../../assets/icons/customer-service.png'
import FeaturedProduct from '../../../helper/Card/FeaturedProduct'
import ProductImage from './ProductImage'
import gsap from 'gsap'; 
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import HelperFunction from '../../../store/actions/action'
gsap.registerPlugin(ScrollTrigger);



const Product = () => {
  const ref = useRef([]); 
  ref.current = []; 

  useEffect(() => { 
      ref.current.forEach((el) => { 
          gsap.fromTo(el, { autoAlpha: 0 }, { 
              autoAlpha: 1, left: 0, 
              duration: 1, scrollTrigger: { 
                  trigger: el, 
                  start: "top bottom-=100", 
                  toggleActions: "play none none reverse"
              } 
          }) 
      }) 
  }, []) 

  const addtoRefs = (el) => { 
      if (el && !ref.current.includes(el)) { 
          ref.current.push(el); 
      } 
  } 


  const {id} =useParams()
const data= useSelector((state)=>state.data.prod)
const dispatch = useDispatch()

const arr =()=>{
  const specificationArray =Object.keys(data&&data.specification).map(key => ({ [key]: data&&data.specification[key] }));
return specificationArray
// Iterate through the array of objects and print key-value pairs
// for (const obj of specificationArray) {
//     const key = Object.keys(obj)[0];
//     const value = obj[key];
//     arr.push(`${key}: ${value}`)
//     console.log(`${key}: ${value}`);
// }
}

const [ss,setSS]=useState()
 useEffect(()=>{
   dispatch(HelperFunction.fetchData(`${process.env.REACT_APP_BASE_URL}/product/${id}`,"prod"))
  
 },[dispatch,id])

 useEffect(()=>{
  if(data&&data.specification){
    setSS(arr())


  }
},[data&&data.specification])

  return (
    <>
    <div className='w-100  d-flex color-grey pm-5'>
      <div className="w-40 h-100-per">
          <ProductImage data ={data}/>
      </div>
      <div className="w-60 h-100-per line-height-2 pxlr-2 " ref={addtoRefs}>
        <div className="fs-m-2 fw-600">{data&&data.title}</div>
       <div className="reviews-ratings w-100 fs-1 fw-600 d-flex flex-gap-s flex-align-center" ref={addtoRefs}>
         <span className=' bg-orange-red  color-white h-m-2 pxy-1 brsx-radius-2 d-flex flex-align-center flex-justify-center flex-gap-ssm'> {data&&data.rating} <i class="ri-star-fill"></i></span>
          <span>341 Ratings & 34 Reviews</span>

       </div>
        <div className="fs-mm-2 fw-600 color-orange-red">Special Price</div>
        <div className="fw-600 d-flex flex-gap-s"><span className='fs-2 '>$ {data&&data.price}</span> <del className='fs-mm-2'>$ {data&&data.actual_price}</del> <span className='color-orange-red fs-mm-2'>{data&&data.discountPercentage} % off</span></div>
        <div className=" my-3 w-100 d-flex flex-gap-m flex-align-center line-height-1-5">
          <div className="text-center ">
            <img src={Delivery} alt=""  className='w-m-4'ref={addtoRefs}/>
            <div className="fs-1 fw-600">Free Delivery</div>
          </div>
          <div className="text-center">
            <img src={Refund} alt=""  className='w-m-4' ref={addtoRefs}/>
            <div className="fs-1 fw-600">100% Refund</div>

          </div>
          <div className="text-center">
            <img src={Support} alt=""  className='w-m-4'ref={addtoRefs}/>
            <div className="fs-1 fw-600">24/7 Support</div>

          </div>

        </div>
        <div className="desc" ref={addtoRefs}>
          <div className="fs-m-2 fw-600 ">Product Desription</div>
          <div className="fs-1 line-height-1-5 my-1" >{data&&data.description}</div>
        </div>

        <div className="spec" ref={addtoRefs}>
          <div className="fs-m-2 fw-600 ">Specification</div>
         
         {
          ss&&ss.map((elem)=>{
            return(
              <>
              <div className="fs-1 line-height-1-5 my-1 w-100 d-flex">
            <div className="w-20 fw-600" >{Object.keys(elem)}</div>
            <div className="w-80">{Object.values(elem)}</div>
          </div>
              </>
            )
          })
         }
            
          
          
        
          
         
        </div>




        <div className="ratings">
          <div className="fs-m-2 fw-600 d-flex flex-justify-between" ref={addtoRefs}><span>Ratings & Reviews</span>    <span className='bg-orange-red color-white pxy-1 brsx-radius-3 fs-ss-8'ref={addtoRefs}>Rate Products <i class="ri-star-fill"></i></span></div>
          <div className="reviews-ratings card-border-y my-1" ref={addtoRefs}>
           <div className="reviews-ratings w-100 fs-1 fw-600 d-flex flex-gap-s flex-align-center  line-height-1-5 my-1">
              <span className=' bg-orange-red  color-white h-m-2 pxy-1 brsx-radius-2 d-flex flex-align-center flex-justify-center flex-gap-ssm'> 5 <i class="ri-star-fill"></i></span>
                <span>Simply Awesome</span>

          </div>
         <div className="fs-1 line-height-1-5 my-1" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem accusamus magni autem! Minus quod nisi nihil voluptate officiis sint reprehenderit? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum fugiat impedit, ipsam reprehenderit odio quibusdam quisquam, quo minima adipisci tenetur culpa similique corporis iusto quam, at non! Fuga, sapiente. Illo minus laborum aspernatur dolorem nostrum eius nam numquam odit ab sit delectus repudiandae, esse iusto totam! Temporibus, ipsam. Labore, dicta. Quam eos itaque, molestiae rem possimus maxime ab a quidem?</div>
          <div className="fs-1 fw-500 my-1"><span>Amtesh Singh ,Rewa 2 month ago</span></div>
        
         </div>
        
         <div className="reviews-ratings card-border-y my-1" ref={addtoRefs}>
           <div className="reviews-ratings w-100 fs-1 fw-600 d-flex flex-gap-s flex-align-center  line-height-1-5 my-1">
              <span className=' bg-orange-red  color-white h-m-2 pxy-1 brsx-radius-2 d-flex flex-align-center flex-justify-center flex-gap-ssm'> 5 <i class="ri-star-fill"></i></span>
                <span>Good Choice</span>

          </div>
         <div className="fs-1 line-height-1-5 my-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem accusamus magni autem! Minus quod nisi nihil voluptate officiis sint reprehenderit? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum fugiat impedit, ipsam reprehenderit odio quibusdam quisquam, quo minima adipisci tenetur culpa similique corporis iusto quam, at non! Fuga, sapiente. Illo minus laborum aspernatur dolorem nostrum eius nam numquam odit ab sit delectus repudiandae, esse iusto totam! Temporibus, ipsam. Labore, dicta. Quam eos itaque, molestiae rem possimus maxime ab a quidem?</div>
          <div className="fs-1 fw-500 my-1"><span>Amtesh Singh ,Rewa 2 month ago</span></div>
        
         </div>
        </div>






        </div>

    </div>
    <FeaturedProduct/>
    </>
  )
}

export default Product