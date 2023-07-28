import RootLayout from '@/components/Layouts/RootLayout'
import React from 'react'
import PcBuilderCategoryCard from '@/components/Products/PcBuilder'

const PcBuilder = () => {
  return (
    <div className='w-full h-screen px-5 flex justify-center items-center'>
      <div className='w-full md:w-4/5 h-full bg-white md:p-8 p-3'>
        <p className='text-xl font-bold text-[#3749BB] font-mono  text-center'>
          PC Master - Build & Configure Your Dream PC
        </p>
        <p className='my-3 bg-gray-500 px-3 text-white rounded'>
          core components
        </p>

        <PcBuilderCategoryCard />
        <PcBuilderCategoryCard />
        <PcBuilderCategoryCard />
        <PcBuilderCategoryCard />
        <PcBuilderCategoryCard />
      </div>
    </div>
  )
}

export default PcBuilder

PcBuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>
}
