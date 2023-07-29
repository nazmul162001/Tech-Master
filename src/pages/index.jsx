import Banner from '@/components/UI/Home/Banner.js'
import RootLayout from '../components/Layouts/RootLayout.js'
import React from 'react'
import Products from '@/components/UI/Home/Products.js'

const HomePage = ({ products }) => {
  // console.log(products)
  return (
    <section className='min-h-screen'>
      <Banner />
      <Products products={products} />
    </section>
  )
}

export default HomePage

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>
}

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:5000/api/v1/products')
  const data = await res.json()
  // console.log(data)

  return {
    props: {
      products: data,
    },
    revalidate: 10
  }
}
