import RootLayout from '@/components/Layouts/RootLayout'
import React, { useEffect, useState } from 'react'
import PcBuilderCategoryCard from '@/components/Products/PcBuilder'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import Image from 'next/image'

const PcBuilder = ({ pcbuild }) => {
  const { data: session } = useSession()
  const filteredPCBuilds = pcbuild?.data?.filter(
    (build) => build.userEmail === session?.user?.email
  )

  return (
    <div className='w-full px-5 '>
      <div className='flex justify-center items-center'>
        <div className='w-full md:w-4/5 h-full bg-white md:p-8 p-3'>
          <p className='text-xl font-bold text-[#3749BB] font-mono  text-center'>
            PC Master - Build & Configure Your Dream PC
          </p>
          <p className='my-3 bg-gray-500 px-3 text-white rounded'>
            core components
          </p>

          <PcBuilderCategoryCard url={'cpu'} title={'CPU / Processor'} />

          {filteredPCBuilds?.map(
            (data, index) =>
              // Check if the product category is 'CPU / Processor'
              data?.product?.category === 'CPU / Processor' && (
                <div key={index}>
                  <div className='w-[95%] my-3 bg-[#F2F4F8] mx-auto flex flex-wrap gap-5 justify-between items-center'>
                    <div className='flex flex-wrap gap-4 items-center'>
                      <div className='rounded'>
                        <Image
                          src='/pc.png'
                          width={70}
                          height={70}
                          alt='pc/img'
                        ></Image>
                      </div>
                      <div>
                        <p>{data?.product?.name}</p>
                        <p className='text-sm text-gray-500'>
                          {data?.product?.category}
                        </p>
                      </div>
                    </div>
                    <p className='pr-3 font-bold'>${data?.product?.price}</p>
                  </div>
                </div>
              )
          )}

          <PcBuilderCategoryCard url={'motherboard'} title={'Motherboard'} />

          {filteredPCBuilds?.map(
            (data, index) =>
              // Check if the product category is 'CPU / Processor'
              data?.product?.category === 'Motherboard' && (
                <div key={index}>
                  <div className='w-[95%] my-3 bg-[#F2F4F8] mx-auto flex flex-wrap gap-5 justify-between items-center'>
                    <div className='flex flex-wrap gap-4 items-center'>
                      <div className='rounded'>
                        <Image
                          src='/pc.png'
                          width={70}
                          height={70}
                          alt='pc/img'
                        ></Image>
                      </div>
                      <div>
                        <p>{data?.product?.name}</p>
                        <p className='text-sm text-gray-500'>
                          {data?.product?.category}
                        </p>
                      </div>
                    </div>
                    <p className='pr-3 font-bold'>${data?.product?.price}</p>
                  </div>
                </div>
              )
          )}

          <PcBuilderCategoryCard url={'ram'} title={'RAM'} />

          {filteredPCBuilds?.map(
            (data, index) =>
              // Check if the product category is 'CPU / Processor'
              data?.product?.category === 'RAM' && (
                <div key={index}>
                  <div className='w-[95%] my-3 bg-[#F2F4F8] mx-auto flex flex-wrap gap-5 justify-between items-center'>
                    <div className='flex flex-wrap gap-4 items-center'>
                      <div className='rounded'>
                        <Image
                          src='/pc.png'
                          width={70}
                          height={70}
                          alt='pc/img'
                        ></Image>
                      </div>
                      <div>
                        <p>{data?.product?.name}</p>
                        <p className='text-sm text-gray-500'>
                          {data?.product?.category}
                        </p>
                      </div>
                    </div>
                    <p className='pr-3 font-bold'>${data?.product?.price}</p>
                  </div>
                </div>
              )
          )}

          <PcBuilderCategoryCard
            url={'powerSupplyUnit'}
            title={'Power Supply Unit'}
          />

          {filteredPCBuilds?.map(
            (data, index) =>
              // Check if the product category is 'CPU / Processor'
              data?.product?.category === 'Power Supply Unit' && (
                <div key={index}>
                  <div className='w-[95%] my-3 bg-[#F2F4F8] mx-auto flex flex-wrap gap-5 justify-between items-center'>
                    <div className='flex flex-wrap gap-4 items-center'>
                      <div className='rounded'>
                        <Image
                          src='/pc.png'
                          width={70}
                          height={70}
                          alt='pc/img'
                        ></Image>
                      </div>
                      <div>
                        <p>{data?.product?.name}</p>
                        <p className='text-sm text-gray-500'>
                          {data?.product?.category}
                        </p>
                      </div>
                    </div>
                    <p className='pr-3 font-bold'>${data?.product?.price}</p>
                  </div>
                </div>
              )
          )}

          <PcBuilderCategoryCard
            url={'storageDevice'}
            title={'Storage Device'}
          />

          {filteredPCBuilds?.map(
            (data, index) =>
              // Check if the product category is 'CPU / Processor'
              data?.product?.category === 'Storage Device' && (
                <div key={index}>
                  <div className='w-[95%] my-3 bg-[#F2F4F8] mx-auto flex flex-wrap gap-5 justify-between items-center'>
                    <div className='flex flex-wrap gap-4 items-center'>
                      <div className='rounded'>
                        <Image
                          src='/pc.png'
                          width={70}
                          height={70}
                          alt='pc/img'
                        ></Image>
                      </div>
                      <div>
                        <p>{data?.product?.name}</p>
                        <p className='text-sm text-gray-500'>
                          {data?.product?.category}
                        </p>
                      </div>
                    </div>
                    <p className='pr-3 font-bold'>${data?.product?.price}</p>
                  </div>
                </div>
              )
          )}

          <PcBuilderCategoryCard url={'monitor'} title={'Monitor'} />

          {filteredPCBuilds?.map(
            (data, index) =>
              // Check if the product category is 'CPU / Processor'
              data?.product?.category === 'Monitor' && (
                <div key={index}>
                  <div className='w-[95%] my-3 bg-[#F2F4F8] mx-auto flex flex-wrap gap-5 justify-between items-center'>
                    <div className='flex flex-wrap gap-4 items-center'>
                      <div className='rounded'>
                        <Image
                          src='/pc.png'
                          width={70}
                          height={70}
                          alt='pc/img'
                        ></Image>
                      </div>
                      <div>
                        <p>{data?.product?.name}</p>
                        <p className='text-sm text-gray-500'>
                          {data?.product?.category}
                        </p>
                      </div>
                    </div>
                    <p className='pr-3 font-bold'>${data?.product?.price}</p>
                  </div>
                </div>
              )
          )}

          <PcBuilderCategoryCard url={'others'} title={'Others'} />

          {filteredPCBuilds?.map(
            (data, index) =>
              // Check if the product category is 'CPU / Processor'
              data?.product?.category === 'Others' && (
                <div key={index}>
                  <div className='w-[95%] my-3 bg-[#F2F4F8] mx-auto flex flex-wrap gap-5 justify-between items-center'>
                    <div className='flex flex-wrap gap-4 items-center'>
                      <div className='rounded'>
                        <Image
                          src='/pc.png'
                          width={70}
                          height={70}
                          alt='pc/img'
                        ></Image>
                      </div>
                      <div>
                        <p>{data?.product?.name}</p>
                        <p className='text-sm text-gray-500'>
                          {data?.product?.category}
                        </p>
                      </div>
                    </div>
                    <p className='pr-3 font-bold'>${data?.product?.price}</p>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
      <div className='w-full md:w-4/5 h-full bg-white mx-auto flex justify-end pb-3 pr-8'>
        <button className='px-8 py-3 rounded border hover:border-orange-500 border-gray-500 text-black hover:bg-orange-500 hover:text-white font-medium'>Build PC</button>
      </div>
    </div>
  )
}

export default PcBuilder

PcBuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>
}

export const getServerSideProps = async () => {
  const res = await fetch(
    `https://pc-builder-server-dusky.vercel.app/api/v1/pcBuild`
  )
  const data = await res.json()

  return {
    props: {
      pcbuild: data,
    },
  }
}
