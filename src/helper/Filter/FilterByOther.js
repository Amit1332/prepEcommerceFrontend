import React from 'react'
import Select from 'react-select'
import filterIcon from "../../assets/icons/filter.png"
import menuIcon from "../../assets/icons/menu.png"

const customStyles = {
    control: (provided, state) => ({
      ...provided,
      borderRadius: '5px',
      cursor:'pointer',
      borderColor: state.isFocused ? 'orangered' : '#ced4da',
      boxShadow: state.isFocused ? 'orangered' : '#ced4da',
      backgroundColor: state.isFocused ? 'transparent' : null,
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? 'orangered' : 'rgb(254, 235, 229)',
      color: state.isFocused ? 'white' : null,
    }),
  };
const FilterByOther = ({filtercount,catproductCount}) => {
    const option1 = [
        { value: 'name', label: 'Name' },
        { value: 'ratings', label: 'Ratings' },
        { value: 'price', label: 'Price' }
      ]
      const option2 = [
        { value: 10, label: 10 },
        { value: 20, label: 20 },
        { value: 50, label: 50 }
      ]




  return (
    <div className='h-4 w-100 fs-1 fw-600 pxlr-2 color-grey bg-light-orange-redd d-flex flex-align-center flex-justify-between flex-gap-mm brsx-radius-3'>
   <div className="d-flex h-100 flex-align-center flex-justfify-center flex-gap-mm">
   <span >{
    filtercount&&filtercount.length>1 ? 
      filtercount.length
      :
      catproductCount&&catproductCount.length
    }
    
     &nbsp; Item</span>
    {/* <div className="d-flex flex-align-center flex-gap-s">
    <span >Sort By</span>
     <div className="w-200px">
     <Select options={option1} styles={customStyles}
      isSearchable={false}/>
     </div>

    </div> */}
    {/* <div className="d-flex flex-align-center flex-gap-s">
    <span >Show</span>
     <div className="w-200px">
     <Select options={option2} styles={customStyles}
      isSearchable={false}/>
     </div>

    </div> */}
   </div>

   <div className="d-flex h-100-per flex-align-center flex-justfify-center flex-gap-mm">
   <img src={menuIcon} alt="" className='w-2 cr-pointer'/>
    <img src={filterIcon} alt="" className='w-2 cr-pointer'/>


   </div>
    </div>
  )
}

export default FilterByOther