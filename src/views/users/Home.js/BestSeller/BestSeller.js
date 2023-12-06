import React, { useEffect } from 'react'
import ProductCard from '../../../../helper/Card/ProductCard'
import Title from '../../../../helper/Title'
import Nav from './Nav'
import { useDispatch, useSelector } from 'react-redux'
import HelperFunction from '../../../../store/actions/action'

const BestSeller = () => {
    // const data = [
    //     {
    //         name:"iphone 13",
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
   useEffect(()=>{
 
     dispatch(HelperFunction.fetchData(`${process.env.REACT_APP_BASE_URL}/product`,"product"))
   },[dispatch])

   function shuffleArray(array) {
    let shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }

  const arr =[]
data&&data.map((elem)=>{
    arr.push(elem)

})
const shuffledData = shuffleArray(arr);

  return (
    <div className='my-3'>
        <Title title="Best Seller"/>
        {/* <Nav/> */}
      <div className='d-flex flex-wrap flex-justify-between'>   
        {
        shuffledData.filter((ele,index)=>index<10).map((elem)=>{
                return(
                    <>
                   <ProductCard val={elem}/>

                    </>
                )

            })
        }
        </div>
        <div className="load fs-1 my-1 text-center color-orange-red d-flex flex-dir-col flex-align-center fw-600">
            LOAD MORE
            <div className="underline myx-1"></div>
        </div>
    </div>
  )
}

export default BestSeller