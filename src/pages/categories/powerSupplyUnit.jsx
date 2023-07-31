import PcComponentLayout from '@/components/Layouts/PcComponentLayout/PcComponentsLayout'
import RootLayout from '@/components/Layouts/RootLayout'
import React from 'react'
import { Card } from 'antd'
import Link from 'next/link'
import Image from 'next/image'
const { Meta } = Card

const PowerSupplyUnit = ({ filterData }) => {
  return (
    <div className='w-full h-full'>
      {filterData?.data?.length === 0 ? (
        <div className='w-full h-full text-xl font-bold flex justify-center items-center'>
          No Data Matched
        </div>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
          {filterData?.data?.map((data, index) => (
            <div key={index}>
              <Link href={`/${data?._id}`}>
                <Card
                  className='bg-[#f2f4f8]'
                  hoverable
                  cover={
                    <Image
                      className='p-4'
                      width={100}
                      height={100}
                      layout='responsive'
                      alt='example'
                      src='/pc.jpg'
                    />
                  }
                >
                  <Meta title={data?.name} />
                  <p className='my-2 text-gray-500 font-bold'>
                    Price: $<span>{data?.price}</span>
                  </p>
                </Card>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default PowerSupplyUnit

PowerSupplyUnit.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      <PcComponentLayout>{page}</PcComponentLayout>
    </RootLayout>
  )
}

export const getStaticProps = async () => {
  const response = await fetch(
    'https://pc-builder-server-webdevnazmulh-gmailcom.vercel.app/api/v1/products?category=powerSupplyUnit'
  )
  const filterData = await response.json()

  return {
    props: {
      filterData: filterData,
    },
  }
}
