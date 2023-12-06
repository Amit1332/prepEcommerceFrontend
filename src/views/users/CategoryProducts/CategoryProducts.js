import React, { useEffect, useRef, useState } from 'react'
import ProductCard from '../../../helper/Card/ProductCard'
import AllProductCard from '../../../helper/Card/AllProductCard'
import Filter from '../../../helper/Filter/Filter'
import BannerOne from '../../../helper/Banners/BannerOne'
import FilterByOther from '../../../helper/Filter/FilterByOther'
import { useDispatch, useSelector } from 'react-redux'
import HelperFunction from '../../../store/actions/action'
import { useParams } from 'react-router-dom'

const CategoryProducts = () => {
//   const data = [
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


//     }, {
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


//     }, {
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


//     }, {
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


//     }, {
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
const {id} =useParams()
const {catproduct,filterProduct}= useSelector((state)=>state.data)
const [filteredProducts, setFilteredProducts] = useState([]);

const dispatch = useDispatch()

 useEffect(()=>{
   dispatch(HelperFunction.fetchData(`${process.env.REACT_APP_BASE_URL}/product/category/${id}`,"catproduct"))
 },[dispatch,id])



const filterProductFunc = (data)=>{
  dispatch(HelperFunction.postData(`${process.env.REACT_APP_BASE_URL}/product/filter/product/`,data,"filterProduct"))
}

const ResetFilterProductFunc = (data)=>{
  setFilteredProducts([]);

}

useEffect(() => {
  if (filterProduct) {
    setFilteredProducts(filterProduct.data);
  }
}, [filterProduct]);
  return (
   <>
    <div className='w-100 d-flex pm-5 flex-gap-s'>
      <div className="w-20 d-flex flex-dir-col flex-gap-s">
        <Filter onFilterData={filterProductFunc} catproduct={catproduct} resetFilter={ResetFilterProductFunc}/>
      </div>
      <div className='w-80 d-flex flex-dir-col flex-gap-s '>  
      <BannerOne />
      <FilterByOther filtercount={filteredProducts} catproductCount={catproduct}/>
      <div className="h-auto">
      <div className='w-100 d-flex flex-wrap flex-gap-s flex-justify-between'>   
      {filteredProducts.length > 0
                ? filteredProducts&&filteredProducts.map((elem) => (
                    <React.Fragment key={elem._id}>
                      <AllProductCard val={elem} />
                    </React.Fragment>
                  ))
                : 
                catproduct &&
                  catproduct.map((elem) => (
                    <React.Fragment key={elem._id}>
                      <AllProductCard val={elem} />
                    </React.Fragment>
                  ))}


</div>
      </div>

      </div>



    
    </div>

   </>

  )
}

export default CategoryProducts