import RootLayout from '@/components/Layouts/RootLayout'
import React from 'react'

const PcBuilder = () => {
  return (
    <div className='w-full h-screen'>
      <h2>This is my Pc builder</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic eligendi
        recusandae iusto facilis, aliquam non eveniet asperiores, vero nam ea
        animi doloribus similique deserunt esse accusantium repellat debitis,
        dicta rerum.
      </p>
    </div>
  )
}

export default PcBuilder

PcBuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>
}
