import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './views/users/Home.js/Home'
import Product from './views/users/Product/Product'
import Cart from './views/users/Cart/Cart'
import CategoryProducts from './views/users/CategoryProducts/CategoryProducts'
import Header from './helper/Header/Header'
import Footer from './helper/Footer/Footer'
import LoginSignup from './views/users/LoginSignup.js/LoginSignup'
import Payment from './views/users/Payment'
import Profile from './views/users/Profile/Profile'


const BaseRoute = () => {
  return (
    <div>

<BrowserRouter>
<Header/>
<Routes>
    <Route path='/' element={<Home/>} /> 
    <Route path='/product/:category/:id' element={<CategoryProducts/>} /> 
    <Route path='/products/:category/product/:id' element={<Product/>} /> 
    <Route path='/cart' element={<Cart/>} /> 
    <Route path='/payment' element={<Payment/>} /> 
    <Route path='/login' element={<LoginSignup/>} /> 
    <Route path='/profile' element={<Profile/>} /> 




</Routes>
<Footer/>
</BrowserRouter>

    </div>
  )
}

export default BaseRoute