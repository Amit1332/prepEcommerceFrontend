import React from 'react'
import Slider from 'react-slick'

import banner1 from '../../assets/banners/fashionbanner.png'
import banner2 from '../../assets/banners/electronicsbanner.png'
import banner5 from '../../assets/banners/findstylebanner.png'
import banner6 from '../../assets/banners/fashionagbanner.png'

import banner3 from '../../assets/banners/corousel_2.png'
import banner4 from '../../assets/banners/corousel_3.png'



const BannerOne = () => {
    var settings = {
        dots: false,
        infinite: true,  
        speed: 500,
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
          autoplaySpeed: 3000
      };
      const banner = [
        banner1,banner2,banner5,banner6
        
      ]
  return (
    <div className='w-100  banners-part'>

<Slider {...settings}>
    {
        banner.map((elem)=>{
            return (
                <>
                <div className="banner h-60 w-100 brsx-radius-3">
              <img src={elem} alt="" className='h-100-per w-100 brsx-radius-3'/>
    </div>
                </>
            )
        })
    }
    </Slider>


    </div>
  )
}

export default BannerOne


