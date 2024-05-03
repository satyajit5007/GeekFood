import React from 'react'
import './AppTemplate.css'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'

const AppTemplate = () => {
  return (
    <div>
        <div className='behind-nav'></div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default AppTemplate