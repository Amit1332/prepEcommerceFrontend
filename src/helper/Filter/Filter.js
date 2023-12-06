import React, { useEffect, useState } from 'react'
import Slider from 'rc-slider';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import HelperFunction from '../../store/actions/action';
import filterIcon from "../../assets/icons/filter.png"
import menuIcon from "../../assets/icons/menu.png"

const Filter = ({onFilterData,catproduct,resetFilter}) => {
const {childCategory,brand,color}  = useSelector((state)=> state.data)
const dispatch = useDispatch()
const {id} =useParams()
  useEffect(()=>{
      dispatch(HelperFunction.fetchData(`${process.env.REACT_APP_BASE_URL}/category/childcategory/${id}`,'childCategory'))
      dispatch(HelperFunction.fetchData(`${process.env.REACT_APP_BASE_URL}/brand/category/${id}`,'brand'))
      dispatch(HelperFunction.fetchData(`${process.env.REACT_APP_BASE_URL}/color/`,'color'))


  },[])
  
  const [query,setQuery]=useState({
    brand:'',
    color:'',
    childCategory:'',
    priceRange:''
  })
  
    const [isCheckedBrand,setIsCheckedBrand] =useState([])
    const handleCheckboxBrandChange = (index) => {
      const updatedChecked = [...isCheckedBrand];
      const indexInArray = updatedChecked.indexOf(index);
      if (indexInArray === -1) {
        updatedChecked.push(index);
      } else {
        updatedChecked.splice(indexInArray, 1);
      }
      setIsCheckedBrand(updatedChecked);
    };


    const [isCheckedColor,setIsCheckedColor] =useState([])
    const handleCheckboxColorChange = (index) => {
      const updatedChecked = [...isCheckedColor];
      const indexInArray = updatedChecked.indexOf(index);
      if (indexInArray === -1) {
        updatedChecked.push(index);
      } else {
        updatedChecked.splice(indexInArray, 1);
      }
      setIsCheckedColor(updatedChecked);
    };

    const [isCheckedCategory,setIsCheckedCategory] =useState([])
    const handleCheckboxCategoryChange = (index) => {
      const updatedChecked = [...isCheckedCategory];
      const indexInArray = updatedChecked.indexOf(index);
      if (indexInArray === -1) {
        updatedChecked.push(index);
      } else {
        updatedChecked.splice(indexInArray, 1);
      }
      setIsCheckedCategory(updatedChecked);
    };
    const [range, setRange] = useState([100, 100000]);

    const handleSliderChange = (newRange) => {
      setRange(newRange);
    };
  

   useEffect(()=>{
    setQuery({brand:isCheckedBrand,color:isCheckedColor,childCategory:isCheckedCategory,priceRange:range})

   },[isCheckedBrand,isCheckedCategory,isCheckedColor,range])

const handleFilterbutton = ()=>{
  onFilterData(query)

}




const [brandCounts, setBrandCounts] = useState(new Map());
const [childCatCounts, setChildCatCounts] = useState(new Map());


  useEffect(() => {
    const brandCountMap = new Map();
    const childCatCountMap = new Map();

    brand&&brand.forEach((brand) => {
      brandCountMap.set(brand._id, 0);
    });

    // Iterate through products and update the count for each brand
    catproduct&&catproduct.forEach((product) => {
      const brandId = product.brand;
      if (brandCountMap.has(brandId)) {
        brandCountMap.set(brandId, brandCountMap.get(brandId) + 1);
      }
    });

    // Set the brand counts in the state
    setBrandCounts(brandCountMap);




    childCategory&&childCategory.forEach((childCategory) => {
      childCatCountMap.set(childCategory._id, 0);
    });

    // Iterate through products and update the count for each brand
    catproduct&&catproduct.forEach((product) => {
      const childCategoryId = product.childCategoryId;
      if (childCatCountMap.has(childCategoryId)) {
        childCatCountMap.set(childCategoryId, childCatCountMap.get(childCategoryId) + 1);
      }
    });

    // Set the brand counts in the state
    setChildCatCounts(childCatCountMap); 
  }, [catproduct]); 


const handleFilterReset = ()=>{
  resetFilter()
}
  return (
   <>
    <div className="p-1 color-grey line-height-2 bg-light-orange-redd brsx-radius-3 d-flex flex-justify-between">
    <img src='/assets/icons/undo.png' alt="" className='w-2 cr-pointer' onClick={handleFilterReset}/>
    <img src={filterIcon} alt="" className='w-2 cr-pointer' onClick={handleFilterbutton}/>

   </div>
    <div className='p-1 color-grey line-height-2 bg-light-orange-redd brsx-radius-3'>
   
      <div className="fs-1 fw-600"></div>
      {
       childCategory&&childCategory.map((elem,index)=>{
          return(
            <>
          <div className="fs-ss-9 d-flex flex-justify-between fw-500 color-light-grey">
            <label htmlFor={elem.name} className={`${isCheckedCategory.includes(elem._id) ? 'color-orange-red' : ''} cr-pointer`}>{elem.name}</label>
            <input name='cat' id={elem.name} hidden type="checkbox" value={elem.name} 
              // checked={isChecked.some((e)=> e===index)}
              checked={isCheckedCategory.includes(elem._id)}
              onChange={()=>handleCheckboxCategoryChange(elem._id)}/> 
              <span className='color-light-grey-xx'>{childCatCounts.get(elem._id)}</span></div>
              
            </>
          )

        })
      }
  
    </div>
    <div className='p-1 color-grey line-height-2 bg-light-orange-redd brsx-radius-3'>
      <div className="fs-1 fw-600">Price</div> 
      <label htmlFor="rangeSlider" className='d-flex flex-justify-between w-100 '><span>Range: </span><span>${range[0]} -  ${range[1]}</span></label>
      <Slider
        range
        min={0}
        max={100000}
        step={1}
        defaultValue={range}
        onChange={handleSliderChange}
        className='cr-pointer my-1'
      />
    </div>

    <div className='p-1 color-grey line-height-2 bg-light-orange-redd brsx-radius-3'>
      <div className="fs-1 fw-600 ">COLOR</div>
      
          <div className="fs-ss-9 d-flex flex-wrap fw-500 flex-gap-s w-100 ">
          {
        color&&color.map((elem,index)=>{
          return(
            <>
            <label htmlFor={elem._id} className={`cr-pointer h-m-2 w-m-2 d-flex flex-align-center ${isCheckedColor.includes(elem._id) ? 'ps-2':''}  flex-justify-center br-radius-50 border-${elem.name}-1`} >
              <div className={`h-100-per w-100 br-radius-50 bg-${elem.name}`}></div>
              <input type="checkbox" hidden id={elem._id} name={elem.name} value={elem._id} checked={isCheckedColor.includes(elem._id)}
              onChange={()=>handleCheckboxColorChange(elem._id)}/> 
            </label>
              
            </>
          )

        })
      }
            </div>
          
  
    </div>

    <div className='p-1 color-grey line-height-2 bg-light-orange-redd brsx-radius-3'>
      <div className="fs-1 fw-600">Brand</div>
      {/* {
        brand&&brand.map((elem,index)=>{
         
          return(
            <>
          <div className="fs-ss-9 d-flex flex-justify-between fw-500 color-light-grey">
            <label htmlFor={elem.name} className={`${isCheckedBrand.includes(elem._id) ? 'color-orange-red' : ''} cr-pointer`}>{elem.name}</label>
            <input name='cat' id={elem.name} hidden type="checkbox" value={elem.name} 
              // checked={isChecked.some((e)=> e===index)}
              checked={isCheckedBrand.includes(elem._id)}
              onChange={()=>handleCheckboxBrandChange(elem._id)}/> 
              <span className='color-light-grey-xx'></span></div>
              
            </>
          )
        

        })
      } */}
  
        {brand&&brand.map((brand) => (
          <div className="fs-ss-9 d-flex flex-justify-between fw-500 color-light-grey">
          <label htmlFor={brand.name} className={`${isCheckedBrand.includes(brand._id) ? 'color-orange-red' : ''} cr-pointer`}>{brand.name}</label>
          <input name='cat' id={brand.name} hidden type="checkbox" value={brand.name} 
            // checked={isChecked.some((e)=> e===index)}
            checked={isCheckedBrand.includes(brand._id)}
            onChange={()=>handleCheckboxBrandChange(brand._id)}/> 
            <span className='color-light-grey-xx'>{brandCounts.get(brand._id)}</span></div>
          // <li key={brand._id}>
          //   {brand.name}: {brandCounts.get(brand._id)}
          // </li> 
        ))}
    </div>
   
   
   </>
  )
}

export default Filter