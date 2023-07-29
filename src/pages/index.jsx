import Banner from '@/components/UI/Home/Banner.js'
import RootLayout from '../components/Layouts/RootLayout.js'
import React from 'react'
import Products from '@/components/UI/Home/Products.js'

const HomePage = () => {
  return (
    <section className='min-h-screen'>
      <Banner />
      <Products />
    </section>
  )
}

export default HomePage

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>
}
