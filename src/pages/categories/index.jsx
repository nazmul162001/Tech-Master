import PcComponentLayout from '@/components/Layouts/PcComponentLayout/PcComponentsLayout'
import RootLayout from '@/components/Layouts/RootLayout'
import React from 'react'

const categories = () => {
  return (
    <div>
      <PcComponentLayout />
    </div>
  )
}

export default categories

categories.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>
}
