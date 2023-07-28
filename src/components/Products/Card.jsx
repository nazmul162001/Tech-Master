import React from 'react'
import { Card } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
const { Meta } = Card

const ProductCard = () => {
  return (
    <div className='px-5'>
      <Link href='/1645654644'>
        <Card
          hoverable
          cover={
            <Image
              width={100}
              height={100}
              layout='responsive'
              alt='example'
              src='/pc.jpg'
            />
          }
        >
          <Meta title='MSI PRO MP223 21.45" Full HD Business Monitor' />
          <p className='my-2 text-gray-500 font-bold'>Price: $399.99</p>
        </Card>
      </Link>
    </div>
  )
}

export default ProductCard


