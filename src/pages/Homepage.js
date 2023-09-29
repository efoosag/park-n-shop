import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'

const Homepage = () => {
  return (
    <div>
      <Navbar/>
      <Announcement/>
      <Slider/>
      <Categories />
      <Products />
      <Newsletter />
    </div>
  )
}

export default Homepage