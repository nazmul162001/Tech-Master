import React, { useEffect, useState } from 'react'
import { Card, Rate } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
const { Meta } = Card

const ProductCard = ({ product }) => {
  // console.log(product?.reviews)
  const { name, price, _id, category, status, reviews } = product
  // review
  const [averageRating, setAverageRating] = useState(0)
  // console.log(singleData?.data?.reviews)
  useEffect(() => {
    // Calculate the average rating
    const reviews = product?.reviews
    let sumRatings = 0

    if (reviews && reviews.length > 0) {
      reviews.forEach((review) => {
        const individualRating = review.individualRating
        if (typeof individualRating === 'number') {
          sumRatings += individualRating
        } else {
          console.warn('Invalid individualRating:', individualRating)
        }
      })

      const calculatedAverageRating = sumRatings / reviews.length

      // Update the state with the calculated average rating
      setAverageRating(calculatedAverageRating.toFixed(1))
    } else {
      console.warn('No reviews found or empty reviews array.')
    }
  }, [product?.reviews])

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
          <div className='flex justify-between items-center mb-3'>
            <div>
              <Rate allowHalf disabled value={parseFloat(averageRating)} />
              {' '}
              ({reviews?.length})
            </div>
            <p className='font-bold text-gray-500'>{averageRating}</p>
          </div>

          <Meta title={name} />
          <p className='my-2 text-gray-500 text-[16px] font-bold'>
            <span>{status}</span>
          </p>
          <p className='my-2 text-gray-500 font-bold'>
            Category: <span>{category}</span>
          </p>
          <p className='my-2 text-gray-500 font-bold'>
            Price: $<span>{price}</span>
          </p>
        </Card>
      </Link>
    </div>
  )
}

export default ProductCard
