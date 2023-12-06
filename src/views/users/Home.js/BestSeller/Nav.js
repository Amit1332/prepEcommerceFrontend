import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    const data = [
        {
          parent_category:{
            id:1,
            name:"All",
          },
          sub_category:[
            {
              id:1,
              name:"Mobile",
              sub_child_category:[
                {
                  id:1,
                  name:"Iphone 12",
                },
                {
                  id:2,
                  name:"Real me",
                },
                {
                  id:3,
                  name:"Apple",
                },
                {
                  id:4,
                  name:"Moto 5",
                },
                {
                  id:5,
                  name:"Poco c55",
                }
    
    
              ]
            }
          ],
         
          
    
        },
        {
          parent_category:{
            name:"Fashions",
          },
          sub_category:[
            {
              id:1,
              name:"Saree",
              sub_child_category:[
                {
                  id:1,
                  name:"Iphone 12",
                },
                {
                  id:2,
                  name:"Real me",
                },
                {
                  id:3,
                  name:"Apple",
                },
                {
                  id:4,
                  name:"Moto 5",
                },
                {
                  id:5,
                  name:"Poco c55",
                }
    
    
              ]
            }
          ],
         
        },
        {
          parent_category:{
            name:"Food",
          }
        }
        ,{
          parent_category:{
            name:"Sports",
          }
        },
        {
          parent_category:{
            name:"Grocery",
          }
        }
    
    
    
      ]
  return (
  <div div className='category d-flex flex-dir-col flex-align-center pos-relative my-1'>
    <div className='parent-category bg-light-orange-red w-100 h-3 pos-relative d-flex flex-align-center flex-justify-center flex-gap-s fs-mm-2 fw-500'>
    {
data.map((elem)=>{
  return (
    <>
     <NavLink className="color-grey h-100-per cr-pointer d-flex flex-align-center flex-justify-center">
     <div className='d-flex flex-align-center flex-justify-center flex-gap-ssm'>
        <span> {elem.parent_category.name} </span>
     </div>

      </NavLink>

    </>
  )

})



    }

    </div>


   
  
  
  </div>

  )
}

export default Nav