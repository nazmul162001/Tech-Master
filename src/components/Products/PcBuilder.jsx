import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PcBuilder = ({ title, url, filteredPCBuilds }) => {
  const isCategorySelected = (category) => {
    return (
      Array.isArray(filteredPCBuilds) &&
      filteredPCBuilds.some((item) => item.product.category === category)
    )
  }

  const isChooseButtonDisabled = isCategorySelected(title)

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
          {isChooseButtonDisabled ? (
            // If the category has been selected, show the simple disabled button
            <button type='button' className='btn btn--disabled cursor-not-allowed border text-[#A19AFE]'>
              Selected
            </button>
          ) : (
            // If the category has not been selected, show the previous "Choose" button
            <button
              type='button'
              className='btn btn--purple'
              onClick={() => {
                // Perform the action when the button is clicked
                // For example, navigate to the specified URL
                window.location.href = `/pc-builder/${url}`
              }}
            >
              Choose
            </button>
          )}
        </div>
      </div>
    </>
  )
}

export default PcBuilder
