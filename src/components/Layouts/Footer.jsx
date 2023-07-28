import {
  FacebookOutlined,
  GithubOutlined,
  GoogleOutlined,
  LinkedinOutlined,
} from '@ant-design/icons'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full p-5'>
      <hr className='w-full mt-5 ' />

      <div className='flex flex-wrap justify-center md:justify-between items-center py-5 '>
        <div>
          <p className='text-sm font-bold text-gray-500'>
            Copyright 2023 by PC_Builder
          </p>
        </div>
        <div className='text-right'>
          <FacebookOutlined className='p-2 border m-1 hover:bg-gray-500 hover:text-white rounded cursor-pointer' />
          <GithubOutlined className='p-2 border m-1 hover:bg-gray-500 hover:text-white rounded cursor-pointer' />
          <LinkedinOutlined className='p-2 border m-1 hover:bg-gray-500 hover:text-white rounded cursor-pointer' />
          <GoogleOutlined className='p-2 border m-1 hover:bg-gray-500 hover:text-white rounded cursor-pointer' />
        </div>
      </div>
    </footer>
  )
}

export default Footer
