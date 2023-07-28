import RootLayout from '@/components/Layouts/RootLayout'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CategoryInfo = () => {
  return (
    <div className='w-full px-5 flex justify-center items-center'>
      <div className='w-full md:w-4/5 h-full bg-white md:p-8 p-3'>
        <h2 className='text-center text-gray-500 font-medium text-2xl mb-2 font-mono'>
          Choose Your Favorite CPU
        </h2>
        <div className='flex bg-[#f2f4f8] gap-3 justify-between items-center mb-3'>
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
              <h4 className='font-medium mb-2'>
                AMD Athlon 200GE AM4 Socket Desktop Processor with Radeon Vega 3
                Graphics
              </h4>
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
            <button type='button' class='btn btn--purple mt-2'>
              <span class='btn__txt'>
                <Link className='text-white' href='/pc-builder'>
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

        <div className='flex bg-[#f2f4f8] gap-3 justify-between items-center mb-3'>
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
              <h4 className='font-medium mb-2'>
                AMD Athlon 200GE AM4 Socket Desktop Processor with Radeon Vega 3
                Graphics
              </h4>
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
            <button type='button' class='btn btn--purple mt-2'>
              <span class='btn__txt'>
                <Link className='text-white' href='/pc-builder'>
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

        <div className='flex bg-[#f2f4f8] gap-3 justify-between items-center mb-3'>
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
              <h4 className='font-medium mb-2'>
                AMD Athlon 200GE AM4 Socket Desktop Processor with Radeon Vega 3
                Graphics
              </h4>
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
            <button type='button' class='btn btn--purple mt-2'>
              <span class='btn__txt'>
                <Link className='text-white' href='/pc-builder'>
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
      </div>
    </div>
  )
}

export default CategoryInfo

CategoryInfo.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>
}
