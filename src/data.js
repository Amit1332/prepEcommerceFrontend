const data = [
    {
        name:"iphone 13",
        description:"This i phone",
        stock:10,
        attribute:{
            color:["red","blue","black"],
            size:["23","45","66"]
        },
        img_url:"https://images.hindustantimes.com/tech/img/2023/01/31/1600x900/Untitled_design_-_2022-12-22T182124448_1675180418555_1675180418751_1675180418751.jpg",
        category:"Mobile",
        rating:4,
        discount:5,
        mrp:500000,
        disc_amount:500 ,
        rate:5,
        gst:1,
        actual_price:450000


    }
,
    {
        name:"iphone 12",
        description:"This i phone",
        stock:10,
        attribute:{
            color:["red","blue","black"],
            size:["23","45","66"]
        },
        img_url:"https://images.hindustantimes.com/tech/img/2023/01/31/1600x900/Untitled_design_-_2022-12-22T182124448_1675180418555_1675180418751_1675180418751.jpg",
        category:"Mobile",
        rating:4,
        discount:5,
        mrp:500000,
        disc_amount:500 ,
        rate:5,
        gst:1,
        actual_price:450000


    },
    {
        name:"iphone11",
        description:"This i phone",
        stock:10,
        attribute:{
            color:["red","blue","black"],
            size:["23","45","66"]
        },
        img_url:"https://images.hindustantimes.com/tech/img/2023/01/31/1600x900/Untitled_design_-_2022-12-22T182124448_1675180418555_1675180418751_1675180418751.jpg",
        category:"Mobile",
        rating:4,
        discount:5,
        mrp:500000,
        disc_amount:500 ,
        rate:5,
        gst:1,
        actual_price:450000


    }
]



export const parent_category = [
    {   _id:1,
        name:"Electronics",
        img_url:"https://images.hindustantimes.com/tech/img/2023/01/31/1600x900/Untitled_design_-_2022-12-22T182124448_1675180418555_1675180418751_1675180418751.jpg",
        set_attribute:[
            {
             color:["red","blue","black"]
            },
            {
              size:["23","45","66"]
            }
         ],
        
   
    },

    
]


export const  child_category= [
   {
     parent_category: 1,
     name:"Mobile",
     img_url:"https://images.hindustantimes.com/tech/img/2023/01/31/1600x900/Untitled_design_-_2022-12-22T182124448_1675180418555_1675180418751_1675180418751.jpg",
     set_attribute:[
        {
         color:["red","blue","black"]
        },
        {
          size:["23","45","66"]
        }
     ],
   }
]

export const  sub_child_category= [
    {
      parent_category: 1,
      child_category:1,
      name:"Mi",
      img_url:"https://images.hindustantimes.com/tech/img/2023/01/31/1600x900/Untitled_design_-_2022-12-22T182124448_1675180418555_1675180418751_1675180418751.jpg",
      set_attribute:[
         {
          color:["red","blue","black"]
         },
         {
           size:["23","45","66"]
         }
      ],
    },
    {
        parent_category: 1,
        child_category:1,
        name:"Realme",
        img_url:"https://images.hindustantimes.com/tech/img/2023/01/31/1600x900/Untitled_design_-_2022-12-22T182124448_1675180418555_1675180418751_1675180418751.jpg",
        set_attribute:[
           {
            color:["red","blue","black"]
           },
           {
             size:["23","45","66"]
           }
        ],
      }
 ]
    