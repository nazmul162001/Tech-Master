import RootLayout from '@/components/Layouts/RootLayout'
import ReviewForm from '@/components/review/ReviewForm'
import { FolderAddOutlined } from '@ant-design/icons'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Rate } from 'antd'
import { format, isValid } from 'date-fns'

const Components = ({ singleData, relatedProduct }) => {
  const [averageRating, setAverageRating] = useState(0)
  // console.log(singleData?.data?.reviews)
  useEffect(() => {
    // Calculate the average rating
    const reviews = singleData?.data?.reviews
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
  }, [singleData?.data?.reviews])

  // Review days count
  const calculateDaysAgo = (date) => {
    const currentDate = new Date()
    const reviewDate = new Date(date)
    const timeDifference = currentDate.getTime() - reviewDate.getTime()

    // Calculate days, hours, and minutes
    const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
    const hoursAgo = Math.floor(timeDifference / (1000 * 60 * 60))
    const minutesAgo = Math.floor(timeDifference / (1000 * 60))

    if (daysAgo >= 1) {
      return `${daysAgo} day${daysAgo !== 1 ? 's' : ''} ago`
    } else if (hoursAgo >= 1) {
      return `${hoursAgo} hour${hoursAgo !== 1 ? 's' : ''} ago`
    } else if (minutesAgo >= 1) {
      return `${minutesAgo} minute${minutesAgo !== 1 ? 's' : ''} ago`
    } else {
      return 'Less than a minute ago'
    }
  }

  return (
    <div className='w-full px-5 flex justify-center items-center'>
      <div className='w-full mx-3 bg-white'>
        <div className='w-full h-full grid grid-cols-12 gap-5'>
          <div className='col-span-12 md:col-span-5'>
            <Image
              className='p-3 md:p-8'
              src='/pcc.png'
              width={200}
              height={200}
              layout='responsive'
              alt='product/details/img'
            ></Image>
          </div>
          <div className='col-span-12 md:col-span-7 mt-5'>
            <h2 className='text-xl text-blue-600 font-mono font-medium'>
              {singleData?.data?.name}
            </h2>
            {/* information  */}
            <div className='top-category flex gap-3 items-center'>
              <p className='px-3 mt-2 bg-[#F5F6FC] rounded-full'>
                Price: <span className='font-bold'>9,800 ৳</span>{' '}
              </p>
              <p className='px-3 mt-2 bg-[#F5F6FC] rounded-full'>
                Regular Price: <span className='font-bold'>10,310 ৳</span>{' '}
              </p>
              <p className='px-3 mt-2 bg-[#F5F6FC] rounded-full'>
                Status: <span className='font-bold'>In Stock</span>{' '}
              </p>
              <p className='px-3 mt-2 bg-[#F5F6FC] rounded-full'>
                Brand: <span className='font-bold'>MSI</span>{' '}
              </p>
            </div>

            {/* key feature  */}
            <div>
              <h3 className='font-mono font-medium text-xl mt-5 mb-3'>
                Key Features
              </h3>
              <p>
                Model: <span>PRO MP223</span>{' '}
              </p>
              <p>
                Resolution: <span>FHD (1920 x 1080)</span>{' '}
              </p>
              <p>
                Display: <span> VA, 100Hz, 1ms</span>{' '}
              </p>
              <p>
                Ports: <span>1x HDMI, 1x VGA, 1x Audio Out</span>{' '}
              </p>
              <p>
                Features: <span>Anti-Flicker Technology</span>{' '}
              </p>
            </div>

            <button className='my-5'>
              <Link
                className='px-10 py-2 bg-blue-600 text-white rounded'
                href='pc-builder'
              >
                Buy Now
              </Link>
            </button>
          </div>
        </div>

        {/* product details area  */}
        <div className='grid grid-cols-12 gap-3 my-10 border-t pt-5 mx-5'>
          <div className='col-span-8 flex gap-5 items-start w-full'>
            <div className='w-full'>
              <div className='flex justify-center items-center w-full gap-3 border-b pb-3'>
                <button className='px-5 bg-[#E5330B] text-white rounded py-1'>
                  Specification
                </button>
                <button className='px-5 bg-[#f2f4f8] text-black rounded py-1'>
                  Description
                </button>
                <button className='px-5 bg-[#f2f4f8] text-black rounded py-1'>
                  Reviews
                </button>
              </div>
              {/* specification  */}
              <div>specification</div>
              {/* description */}
              <div>Description</div>

              {/* Review  */}
              <div className='my-10 w-full h-full'>
                <div>
                  <div className='w-full h-full flex justify-between items-center gap-10 my-3 pb-3 border-b '>
                    <div>
                      <h2 className='font-bold'>
                        Reviews({singleData?.data?.reviews.length}) avg(
                        {averageRating})
                      </h2>
                      <p className='text-gray-500'>
                        Get specific details about this product from customers
                        who own it.
                      </p>
                    </div>
                    <div className='flex justify-end'>
                      <ReviewForm singleData={singleData} />
                    </div>
                  </div>
                  <div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                      {singleData?.data?.reviews?.map((review, index) => (
                        <div key={index} className='bg-[#f2f4f8] rounded p-3'>
                          <div className='flex gap-4 border-b border-gray-300 pb-3 items-center'>
                            <div className='w-16 h-16 rounded-full flex justify-center items-center'>
                              {/* <Space direction='vertical' size={16}>
                              <Avatar size={64} icon={<UserOutlined />} />
                            </Space> */}
                              <Image
                                className='rounded-full'
                                src='/review.jpg'
                                width={64}
                                height={64}
                                layout='responsive'
                                alt='review/img'
                              ></Image>
                            </div>
                            <div>
                              <h1>{review.name}</h1>
                              <Rate
                                allowHalf
                                disabled
                                defaultValue={review.individualRating}
                              />
                              <p className='text-gray-500'>
                                {(() => {
                                  try {
                                    const createdAtDate = new Date(review?.date)
                                    return format(
                                      createdAtDate,
                                      'MMM dd, yyyy - hh:mm a'
                                    )
                                  } catch (error) {
                                    return 'Review Time Not Found'
                                  }
                                })()}
                              </p>
                              <p className='text-gray-500'>
                                {calculateDaysAgo(review?.date)}
                              </p>
                            </div>
                          </div>
                          <div>
                            <p className='text-left mt-2 text-gray-500'>
                              description
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className='h-32 md:hidden w-full flex justify-center items-center'>
                      <h3 className='font-mono font-bold'>
                        This product has no review Yet
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='col-span-4 bg-[#f2f4f8] py-5'>
            <h2 className='text-center text-blue-600 font-medium text-xl '>
              Related Product
            </h2>
            {/* related card  */}
            {relatedProduct?.data?.slice(0, 5).map((product, index) => (
              <Link key={index} href={`/${product._id}`}>
                <div className='cursor-pointer grid grid-cols-12 items-center border-b border-b-gray-300 mx-2 mb-5'>
                  <div className='col-span-4'>
                    <Image
                      className='p-5'
                      src='/pcc.png'
                      width={10}
                      height={10}
                      layout='responsive'
                      alt='/related/product'
                    ></Image>
                  </div>
                  <div className='col-span-8'>
                    <h2>Dell E2016HV 19.5 LED Monitor</h2>
                    <p className='text-orange-500'>
                      9,499{' '}
                      <span className='text-gray-500 line-through pl-2'>
                        9,499
                      </span>{' '}
                    </p>
                    <span className='flex items-center gap-2 text-gray-500'>
                      <FolderAddOutlined /> Add To Compare
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Components

Components.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>
}

export const getServerSideProps = async (context) => {
  //  getting single data
  const { params } = context
  const res = await fetch(
    `http://localhost:5000/api/v1/products/${params.componentsId}`
  )
  const data = await res.json()

  // getting category filter data data
  const response = await fetch(
    `http://localhost:5000/api/v1/products?category=${data?.data?.category}`
  )
  const allData = await response.json()

  return {
    props: {
      singleData: data,
      relatedProduct: allData,
    },
  }
}
