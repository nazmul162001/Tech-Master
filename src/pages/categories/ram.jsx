import PcComponentLayout from '@/components/Layouts/PcComponentLayout/PcComponentsLayout'
import RootLayout from '@/components/Layouts/RootLayout'
import React from 'react'

const Ram = () => {
  return (
    <div>
      <h2>Ram</h2>
    </div>
  )
}

export default Ram

Ram.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      <PcComponentLayout>{page}</PcComponentLayout>
    </RootLayout>
  )
}
