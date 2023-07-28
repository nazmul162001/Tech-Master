import Hamburger from 'hamburger-react'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

const Sidebar = ({ isOpen, setOpen }) => {
  return (
    <motion.div
      animate={{
        width: isOpen ? '300px' : '0px',
        transition: {
          duration: 0.5,
          type: 'spring',
          damping: 12,
        },
      }}
      className={`fixed w-[300px] top-0 left-0 z-50 bg-gray-500 h-screen overflow-x-hidden`}
    >
      <header className='flex justify-between items-center'>
        <h2 className='text-xl font-bold'>PC Builder</h2>
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          size={34}
          color={isOpen ? 'white' : 'black'}
          label='Toggle Menu'
        />
      </header>
      <ul>
        <li>
          <Link href='/'>Home </Link>
        </li>
      </ul>
    </motion.div>
  )
}

export default Sidebar
