import RootLayout from '@/components/Layouts/RootLayout'
import React, { useEffect, useState } from 'react'
import PcBuilderCategoryCard from '@/components/Products/PcBuilder'
import Link from 'next/link'

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
        <Link href='/pc-builder/cpu'>
          <PcBuilderCategoryCard url={'cpu'} title={'CPU / Processor'} />
        </Link>
        <Link href='/pc-builder/motherboard'>
          <PcBuilderCategoryCard url={'motherboard'} title={'Motherboard'} />
        </Link>
        <Link href='/pc-builder/ram'>
          <PcBuilderCategoryCard url={'ram'} title={'RAM'} />
        </Link>
        <Link href='/pc-builder/powerSupplyUnit'>
          <PcBuilderCategoryCard
            url={'powerSupplyUnit'}
            title={'Power Supply Unit'}
          />
        </Link>
        <Link href='/pc-builder/storageDevice'>
          <PcBuilderCategoryCard
            url={'storageDevice'}
            title={'Storage Device'}
          />
        </Link>
        <Link href='/pc-builder/monitor'>
          <PcBuilderCategoryCard url={'monitor'} title={'Monitor'} />
        </Link>
        <Link href='/pc-builder/others'>
          <PcBuilderCategoryCard url={'others'} title={'Others'} />
        </Link>
      </div>
    </div>
  )
}

export default PcBuilder

PcBuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>
}
