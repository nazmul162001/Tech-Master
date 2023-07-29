import React from 'react'
import { Card } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
const { Meta } = Card

const ProductCard = ({ product }) => {
  // console.log(product?.name)
  const { name, price, _id } = product
  return (
    <div className='px-5'>
      <Link href={`/${_id}`}>
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
          <Meta title={name} />
          <p className='my-2 text-gray-500 font-bold'>
            Price: $<span>{price}</span>
          </p>
        </Card>
      </Link>
    </div>
  )
}

export default ProductCard
