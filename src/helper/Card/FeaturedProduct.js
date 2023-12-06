import React, { useEffect } from 'react'
import Rating from 'react-star-ratings'
import Slider from 'react-slick'
import Title from '../Title';
import { useDispatch, useSelector } from 'react-redux';
import HelperFunction from '../../store/actions/action';
import { useNavigate } from 'react-router-dom';


const FeaturedProduct = () => {
  const navigate = useNavigate()
    var settings = {
        dots: false,
        infinite: true,  
        speed: 500,
        arrows:true,
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
        //   autoplaySpeed: 3000
      };
    //   const data = [
    //     {
    //         name:"iphone 13  pro max 2108 black brox",
    //         description:"This i phone",
    //         stock:10,
    //         attribute:{
    //             color:["red","blue","black"],
    //             size:["23","45","66"]
    //         },
    //         img_url:"https://images.hindustantimes.com/tech/img/2023/01/31/1600x900/Untitled_design_-_2022-12-22T182124448_1675180418555_1675180418751_1675180418751.jpg",
    //         category:"Mobile",
    //         rating:4,
    //         discount:5,
    //         mrp:500000,
    //         disc_amount:500 ,
    //         rate:5,
    //         gst:1,
    //         actual_price:450000
    
    
    //     }
    // ,
    //     {
    //         name:"iphone 12",
    //         description:"This i phone",
    //         stock:10,
    //         attribute:{
    //             color:["red","blue","black"],
    //             size:["23","45","66"]
    //         },
    //         img_url:"https://images.hindustantimes.com/tech/img/2023/01/31/1600x900/Untitled_design_-_2022-12-22T182124448_1675180418555_1675180418751_1675180418751.jpg",
    //         category:"Mobile",
    //         rating:4,
    //         discount:5,
    //         mrp:500000,
    //         disc_amount:500 ,
    //         rate:5,
    //         gst:1,
    //         actual_price:450000
    
    
    //     },
    //     {
    //         name:"iphone11",
    //         description:"This i phone",
    //         stock:10,
    //         attribute:{
    //             color:["red","blue","black"],
    //             size:["23","45","66"]
    //         },
    //         img_url:"https://images.hindustantimes.com/tech/img/2023/01/31/1600x900/Untitled_design_-_2022-12-22T182124448_1675180418555_1675180418751_1675180418751.jpg",
    //         category:"Mobile",
    //         rating:4,
    //         discount:5,
    //         mrp:500000,
    //         disc_amount:500 ,
    //         rate:5,
    //         gst:1,
    //         actual_price:450000
    
    
    //     },
    //     {
    //         name:"iphone11",
    //         description:"This i phone",
    //         stock:10,
    //         attribute:{
    //             color:["red","blue","black"],
    //             size:["23","45","66"]
    //         },
    //         img_url:"https://images.hindustantimes.com/tech/img/2023/01/31/1600x900/Untitled_design_-_2022-12-22T182124448_1675180418555_1675180418751_1675180418751.jpg",
    //         category:"Mobile",
    //         rating:4,
    //         discount:5,
    //         mrp:500000,
    //         disc_amount:500 ,
    //         rate:5,
    //         gst:1,
    //         actual_price:450000
    
    
    //     },
    //     {
    //         name:"iphone11",
    //         description:"This i phone",
    //         stock:10,
    //         attribute:{
    //             color:["red","blue","black"],
    //             size:["23","45","66"]
    //         },
    //         img_url:"https://images.hindustantimes.com/tech/img/2023/01/31/1600x900/Untitled_design_-_2022-12-22T182124448_1675180418555_1675180418751_1675180418751.jpg",
    //         category:"Mobile",
    //         rating:4,
    //         discount:5,
    //         mrp:500000,
    //         disc_amount:500 ,
    //         rate:5,
    //         gst:1,
    //         actual_price:450000
    
    
    //     },
    //     {
    //         name:"iphone11",
    //         description:"This i phone",
    //         stock:10,
    //         attribute:{
    //             color:["red","blue","black"],
    //             size:["23","45","66"]
    //         },
    //         img_url:"https://images.hindustantimes.com/tech/img/2023/01/31/1600x900/Untitled_design_-_2022-12-22T182124448_1675180418555_1675180418751_1675180418751.jpg",
    //         category:"Mobile",
    //         rating:4,
    //         discount:5,
    //         mrp:500000,
    //         disc_amount:500 ,
    //         rate:5,
    //         gst:1,
    //         actual_price:450000
    
    
    //     },
    //     {
    //         name:"iphone11",
    //         description:"This i phone",
    //         stock:10,
    //         attribute:{
    //             color:["red","blue","black"],
    //             size:["23","45","66"]
    //         },
    //         img_url:"https://images.hindustantimes.com/tech/img/2023/01/31/1600x900/Untitled_design_-_2022-12-22T182124448_1675180418555_1675180418751_1675180418751.jpg",
    //         category:"Mobile",
    //         rating:4,
    //         discount:5,
    //         mrp:500000,
    //         disc_amount:500 ,
    //         rate:5,
    //         gst:1,
    //         actual_price:450000
    
    
    //     },
    //     {
    //         name:"iphone11",
    //         description:"This i phone",
    //         stock:10,
    //         attribute:{
    //             color:["red","blue","black"],
    //             size:["23","45","66"]
    //         },
    //         img_url:"https://images.hindustantimes.com/tech/img/2023/01/31/1600x900/Untitled_design_-_2022-12-22T182124448_1675180418555_1675180418751_1675180418751.jpg",
    //         category:"Mobile",
    //         rating:4,
    //         discount:5,
    //         mrp:500000,
    //         disc_amount:500 ,
    //         rate:5,
    //         gst:1,
    //         actual_price:450000
    
    
    //     },
    //     {
    //         name:"iphone11",
    //         description:"This i phone",
    //         stock:10,
    //         attribute:{
    //             color:["red","blue","black"],
    //             size:["23","45","66"]
    //         },
    //         img_url:"https://images.hindustantimes.com/tech/img/2023/01/31/1600x900/Untitled_design_-_2022-12-22T182124448_1675180418555_1675180418751_1675180418751.jpg",
    //         category:"Mobile",
    //         rating:4,
    //         discount:5,
    //         mrp:500000,
    //         disc_amount:500 ,
    //         rate:5,
    //         gst:1,
    //         actual_price:450000
    
    
    //     },
    //     {
    //         name:"iphone11",
    //         description:"This i phone",
    //         stock:10,
    //         attribute:{
    //             color:["red","blue","black"],
    //             size:["23","45","66"]
    //         },
    //         img_url:"https://images.hindustantimes.com/tech/img/2023/01/31/1600x900/Untitled_design_-_2022-12-22T182124448_1675180418555_1675180418751_1675180418751.jpg",
    //         category:"Mobile",
    //         rating:4,
    //         discount:5,
    //         mrp:500000,
    //         disc_amount:500 ,
    //         rate:5,
    //         gst:1,
    //         actual_price:450000
    
    
    //     }
    // ]
    const data= useSelector((state)=>state.data.product)
const dispatch = useDispatch()
const arr =[]
//  useEffect(()=>{
//    dispatch(HelperFunction.fetchData(`/product/`,"catproduct"))
//  },[dispatch,id])


 function shuffleArray(array) {
    let shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }

  data&&data.map((elem)=>{
    arr.push(elem)

})
const shuffledData = shuffleArray(arr);
  return (
    
    <>
    <Title title="Featured Products"/>
<div className='pxlr-5'>  
<Slider {...settings}>

{
            shuffledData.map((elem)=>{
                return(
                    <>
            <div className="card-head h-35 w-100 pm-5">
    <div className="card text-center p-2 cr-pointer h-100-per w-100-per card-border d-flex " onClick={()=>navigate(`/products/${elem.category}/product/${elem._id}`)}>
     <div className="card-img pos-relative d-flex flex-align-center flex-justify-center overflow-hidden">
         <img src={`${elem.thumbnail}`} alt=""className='h-100-per w-auto'/>
     </div>
     <div className="card-body line-height-2 text-left pxlr-1">
         <div className="card-title h-10 fs-ss-9 fw-600 line-height-1-5">
             {elem.title.slice(0,30)}...
         </div>

         <div className="rating d-flex flex-align-center">
                 <Rating
                   rating={elem.rating}
                  starRatedColor="#DC143C"
                  starDimension="18px"
                  starSpacing="2px"/>
         </div>
         <div className="price d-flex flex-gap-s">
             <span className='color-crimson fs-ss-9 fw-bold'>${elem.price}</span>
             <del className='color-grey fs-ss-9 fw-500'>${elem.actual_price}</del>
         </div>
     </div>
     
     </div>
            </div>

</>
                )

            })
        }

</Slider>
</div>
    
    </>
  )
}

export default FeaturedProduct