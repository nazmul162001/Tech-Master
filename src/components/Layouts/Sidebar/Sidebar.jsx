import Hamburger from 'hamburger-react'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { Dropdown } from 'antd'
import { useSession } from 'next-auth/react'

const items = [
  {
    key: '1',
    label: (
      <Link rel='noopener noreferrer' href='/categories/processor'>
        CPU / Processor
      </Link>
    ),
  },
  {
    key: '2',
    label: (
      <Link rel='noopener noreferrer' href='/categories/motherboard'>
        Motherboard
      </Link>
    ),
  },
  {
    key: '3',
    label: (
      <Link rel='noopener noreferrer' href='/categories/ram'>
        RAM
      </Link>
    ),
  },
  {
    key: '4',
    label: (
      <Link rel='noopener noreferrer' href='/categories/powerSupplyUnit'>
        Power Supply Unit
      </Link>
    ),
  },
  {
    key: '5',
    label: (
      <Link rel='noopener noreferrer' href='/categories/storageDevice'>
        Storage Device
      </Link>
    ),
  },
  {
    key: '5',
    label: (
      <Link rel='noopener noreferrer' href='/categories/monitor'>
        Monitor
      </Link>
    ),
  },
  {
    key: '5',
    label: (
      <Link rel='noopener noreferrer' href='/categories/others'>
        Others
      </Link>
    ),
  },
]

const Sidebar = ({ isOpen, setOpen }) => {
  const currentRoute = usePathname()
  const { data: session } = useSession()

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
      className={`fixed w-[300px] top-0 left-0 z-50 bg-gray-200 h-screen overflow-x-hidden`}
    >
      <header className='flex justify-between items-center border-b pb-3'>
        <h2 className='text-xl font-bold text-black pl-2'>PC Builder</h2>
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          size={34}
          color={isOpen ? 'black' : 'black'}
          label='Toggle Menu'
        />
      </header>
      <div className='px-5 w-full py-4'>
          <div className='flex flex-col gap-5'>
            <Link
              className={
                currentRoute === '/' ? 'active custom_link' : 'custom_link'
              }
              href={'/'}
            >
              Home
            </Link>

            <Dropdown
              menu={{
                items,
              }}
              placement='bottomRight'
              arrow
            >
              <Link
                className={
                  currentRoute === '/categories/processor'
                    ? 'active custom_link'
                    : 'custom_link'
                }
                href={'/categories/processor'}
              >
                Categories
              </Link>
            </Dropdown>

            <Link
              className={
                currentRoute === '/pc-builder'
                  ? 'active custom_link'
                  : 'custom_link'
              }
              href={'/pc-builder'}
            >
              PC BUILDER
            </Link>
            {!session?.user && (
              <Link
                className={
                  currentRoute === '/login'
                    ? 'active custom_link active_user_login'
                    : 'custom_link user_login'
                }
                href={'/login'}
              >
                Login
              </Link>
            )}
            {session?.user && (
              <Link
                className={
                  currentRoute === '/login'
                    ? 'active custom_link active_user_login'
                    : 'custom_link user_login'
                }
                onClick={() => signOut()}
                href={'/login'}
              >
                Sign Out
              </Link>
            )}
          </div>
        </div>
    </motion.div>
  )
}

export default Sidebar
