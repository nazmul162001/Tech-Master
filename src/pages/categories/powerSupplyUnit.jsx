import PcComponentLayout from '@/components/Layouts/PcComponentLayout/PcComponentsLayout'
import RootLayout from '@/components/Layouts/RootLayout'
import React from 'react'

const PowerSupplyUnit = () => {
  return (
    <div>
      <h2>Power Supply Unit</h2>
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
