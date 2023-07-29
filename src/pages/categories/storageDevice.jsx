import PcComponentLayout from '@/components/Layouts/PcComponentLayout/PcComponentsLayout'
import RootLayout from '@/components/Layouts/RootLayout'
import React from 'react'

const StorageDevice = () => {
  return (
    <div>
      <h2>Storage Device</h2>
    </div>
  )
}

export default StorageDevice

StorageDevice.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      <PcComponentLayout>{page}</PcComponentLayout>
    </RootLayout>
  )
}
