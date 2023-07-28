import Hamburger from 'hamburger-react'
import Link from 'next/link'
import React from 'react'

const Sidebar = ({ isOpen, setOpen }) => {
  return (
    <div
      className={`absolute top-0 w-1/2 bg-gray-500 min-h-screen ${
        isOpen
          ? 'left-0 transition-left duration-700'
          : '-left-1/2 transition-left duration-700'
      } `}
    >
      <header className='flex justify-between items-center'>
        <h2 className='text-xl font-bold'>PC Builder</h2>
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </header>
      <ul>
        <li>
          <Link href='/'>Home </Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
