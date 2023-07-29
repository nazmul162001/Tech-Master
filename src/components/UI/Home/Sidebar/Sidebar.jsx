import { Collapse, Select } from 'antd'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

const Categories = [
  {
    link: '/pc-components/processor',
    name: 'CPU / Processor',
  },
  {
    link: '/pc-components/motherboard',
    name: 'Motherboard',
  },
  {
    link: '/pc-components/ram',
    name: 'RAM',
  },
  {
    link: '/pc-components/powerSupplyUnit',
    name: 'Power Supply Unit',
  },
  {
    link: '/pc-components/storageDevice',
    name: 'Storage Device',
  },
  {
    link: '/pc-components/monitor',
    name: 'Monitor',
  },
  {
    link: '/pc-components/others',
    name: 'Others ',
  },
]

const OPTIONS = ['In Stock', 'Out of stock']

const Sidebar = () => {
  const currentRoute = usePathname()

  const [selectedItems, setSelectedItems] = useState([])
  //   console.log("selectedItems", selectedItems);

  const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o))
  return (
    <div className='border rounded-md px-5 py-5 shadow-md bg-white'>
      <div>
        <h1 className='text-[17px] font-medium mb-2'>Availability</h1>
        <Select
          mode='multiple'
          placeholder='Check Availability'
          value={selectedItems}
          onChange={setSelectedItems}
          style={{
            width: '100%',
          }}
          options={filteredOptions.map((item) => ({
            value: item,
            label: item,
          }))}
        />
      </div>
      <div className='my-5'>
        <h1 className='text-[17px] font-medium mb-2'>Categories</h1>
        {Categories.map((c, i) => (
          <div key={i}>
            <Link
              className={
                currentRoute === `${c.link}`
                  ? 'text-primary text-base font-semibold catagories-button-active'
                  : 'catagories-button text-primary font-semibold'
              }
              href={c.link}
            >
              <button className='w-full my-3'>{c.name}</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
