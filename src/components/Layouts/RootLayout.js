import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const RootLayout = ({ children }) => {
  return (
    <div className=''>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default RootLayout
