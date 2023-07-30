import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PcBuilder = ({ title, url }) => {
  // console.log(product)

  return (
    <>
      <div className='grid grid-cols-2 justify-between items-center gap-2 border-b'>
        <div className='flex items-center my-3'>
          <div>
            <Image
              className='p-3 bg-[#EBECF8] rounded'
              src='/cpu.png'
              width={100}
              height={100}
              layout='responsive'
              alt='category/img'
            />
          </div>
          <div className='w-full pl-2'>
            <h4 className='font-medium text-gray-400'>
              {title}{' '}
              <span className='bg-gray-500 px-1 rounded text-sm text-white'>
                Required
              </span>{' '}
            </h4>
            <span className='inline-block w-full bg-[#F2F3F4] h-3'></span>
          </div>
        </div>

        {/* choose button  */}
        <div className='text-right '>
          <button type='button' class='btn btn--purple'>
            <span class='btn__txt'>
              <Link className='text-white' href={`/pc-builder/${url}`}>
                Choose
              </Link>
            </span>
            <i class='btn__bg' aria-hidden='true'></i>
            <i class='btn__bg' aria-hidden='true'></i>
            <i class='btn__bg' aria-hidden='true'></i>
            <i class='btn__bg' aria-hidden='true'></i>
          </button>
        </div>
      </div>
    </>
  )
}

export default PcBuilder
