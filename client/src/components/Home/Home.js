import React from 'react'
import './Home.css'
import  Navbar from "../Navbar/Navbar"
import Card from '../Cards/Card'
import List from '../Cards/List'
import Navbaradmin from '../Dashboard-admin/Navbar-admin/Navbar-admin'

const Home = () => {
  return (
    <div className='form'>
      <Navbar />
      <Navbaradmin />
    </div>
  )
}

export default Home
                                