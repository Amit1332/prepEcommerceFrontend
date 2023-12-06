import React from 'react'
import BannerOne from '../../../helper/Banners/BannerOne'
import BestSeller from './BestSeller/BestSeller'
import ShippingDetails from '../../../helper/ShippingDetails/ShippingDetails'
import FeaturedProduct from '../../../helper/Card/FeaturedProduct'

const Home = () => {
 
  return (
    <div>

<BannerOne/>
<BestSeller/>
<BannerOne/>
<ShippingDetails/>    
<FeaturedProduct/>

    </div>
  )
}

export default Home