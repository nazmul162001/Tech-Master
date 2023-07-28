import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Banner = () => {
  return (
    <div className='w-full h-screen'>
      <main className='grid grid-cols-1 md:grid-cols-2 gap-3 '>
        <div className='w-full h-full flex flex-col justify-center pl-16'>
          <h2 className='text-4xl font-bold font-mono text-gray-700 '>
            Build & Configure Your <br /> DREAM PC
          </h2>
          <p className='text-gray-500'>
            Building your own PC has numerous benefits. It allows you to
            customize the components according to your specific needs, ensuring
            optimal performance for tasks such as gaming, video editing, or
            office work. Additionally
          </p>
          <button className='my-4 text-left'>
            <Link className='px-5 py-1 bg-[#F1592B] text-white rounded' href='/pc-builder'>PC Builder</Link>
          </button>
        </div>
        <div>
          <Image
            src='/pc.jpg'
            width={100}
            height={100}
            layout='responsive'
            alt='banner/img'
          ></Image>
        </div>
      </main>
    </div>
  )
}

export default Banner
