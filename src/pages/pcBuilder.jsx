import RootLayout from '@/components/Layouts/RootLayout'
import React from 'react'

const pcBuilder = () => {
  return <div>build your own pc</div>
}

export default pcBuilder

pcBuilder.getLayout = function getLayout({ page }) {
  return <RootLayout>{page}</RootLayout>
}
