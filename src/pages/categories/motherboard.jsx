import PcComponentLayout from '@/components/Layouts/PcComponentLayout/PcComponentsLayout'
import RootLayout from '@/components/Layouts/RootLayout'
import React from 'react'

const MotherBoard = () => {
  return (
    <div>
      <h2>MotherBoard</h2>
    </div>
  )
}

export default MotherBoard

MotherBoard.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      <PcComponentLayout>{page}</PcComponentLayout>
    </RootLayout>
  )
}
