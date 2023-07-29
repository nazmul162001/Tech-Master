import RootLayout from '@/components/Layouts/RootLayout'
import ReviewForm from '@/components/review/ReviewForm'
import { FolderAddOutlined } from '@ant-design/icons'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Components = ({ singleData, relatedProduct }) => {
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
                      <h2 className='font-bold'>Reviews(0)</h2>
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
                    <h3 className='font-medium font-mono mt-5'>
                      This product has no review Yet
                    </h3>
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

  // getting all data
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
