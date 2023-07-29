import PcComponentLayout from '@/components/Layouts/PcComponentLayout/PcComponentsLayout'
import RootLayout from '@/components/Layouts/RootLayout'
import React from 'react'

const Processor = () => {
  return <div>my Processor</div>
}

export default Processor

Processor.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      <PcComponentLayout>{page}</PcComponentLayout>
    </RootLayout>
  )
}
