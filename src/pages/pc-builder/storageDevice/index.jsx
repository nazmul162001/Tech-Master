import RootLayout from '@/components/Layouts/RootLayout'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const CategoryStorageInfo = ({ relatedProduct }) => {
  const { data: session } = useSession()
  const [copiedProductId, setCopiedProductId] = useState(null)

  const handleCopyProductToMypc = async (productId) => {
    try {
      const response = await fetch(
        'https://pc-builder-server-dusky.vercel.app/api/v1/pcbuild',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            product: productId,
            userEmail: session?.user?.email,
          }),
        }
      )

      if (response.ok) {
        // Product data copied successfully
        setCopiedProductId(productId)
        window.location.reload()
        toast.success('Successfully added product')
      } else {
        // Handle the error if necessary
        toast.error('Already added this product')
        console.error('Failed to copy product data:', response.statusText)
      }
    } catch (error) {
      console.error('Error while copying product data:', error.message)
    }
  }
  return (
    <div className='w-full px-5 flex justify-center items-center'>
      <div className='w-full md:w-4/5 h-full bg-white md:p-8 p-3'>
        <h2 className='text-center text-gray-500 font-medium text-2xl mb-2 font-mono'>
          Choose Your Favorite Storage
        </h2>
        {relatedProduct?.data?.map((product, index) => (
          <div
            key={index}
            className='flex bg-[#f2f4f8] gap-3 justify-between items-center mb-3'
          >
            <div className='flex w-full h-full p-5 rounded'>
              <div>
                <Image
                  src='/ryzen.png'
                  width={400}
                  height={400}
                  layout='responsive'
                  alt='category/img'
                ></Image>
              </div>
              <div>
                <h4 className='font-medium mb-2'>{product?.name}</h4>
                <ul className='list-disc pl-5'>
                  <li className='text-sm'>Base Clock Speed 3.2GHz</li>
                  <li className='text-sm'>Package AM4</li>
                  <li className='text-sm'>PCI Express PCIe 3.0</li>
                  <li className='text-sm'>
                    Speed 4.10 GHz, Cores- 2 & Threads- 4
                  </li>
                  <li className='text-sm'>4M Intel Smart Cache</li>
                </ul>
              </div>
            </div>
            <div className='mr-3'>
              <h3 className='font-medium text-xl'>
                7,000 <span className='text-3xl font-bold'>৳</span>
              </h3>
              <button
                onClick={() => handleCopyProductToMypc(product?._id)}
                type='button'
                className='btn btn--purple mt-2'
                disabled={copiedProductId === product?._id}
              >
                <span class='btn__txt'>
                  <Link className='text-white' href='/pc-builder'>
                    {copiedProductId === product?._id ? 'Added' : 'Add'}
                  </Link>
                </span>
                <i class='btn__bg' aria-hidden='true'></i>
                <i class='btn__bg' aria-hidden='true'></i>
                <i class='btn__bg' aria-hidden='true'></i>
                <i class='btn__bg' aria-hidden='true'></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CategoryStorageInfo

CategoryStorageInfo.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>
}

export const getServerSideProps = async () => {
  const response = await fetch(
    'https://pc-builder-server-dusky.vercel.app/api/v1/products?category=Storage Device'
  )
  const cpu = await response.json()

  return {
    props: {
      relatedProduct: cpu,
    },
  }
}
