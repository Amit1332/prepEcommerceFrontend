import React from 'react'
import TopNav from './TopNav'
import Logo from './Logo'
import Category from './Category'
import CurrentPage from './CurrentPage'

const Header = () => {
  return (
    <div>
        <TopNav/>
        <Logo/>
        <Category/>
        {/* <CurrentPage/> */}



    </div>
  )
}

export default Header