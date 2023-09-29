import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Slider from '../components/Slider'
import Categories from '../components/Categories'

const Homepage = () => {
  return (
    <div>
      <Navbar/>
      <Announcement/>
      <Slider/>
      <Categories />
    </div>
  )
}

export default Homepage