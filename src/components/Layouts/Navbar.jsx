import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { useSession, signOut } from 'next-auth/react'
import { Divide as Hamburger } from 'hamburger-react'
import { GiComputerFan } from 'react-icons/gi'
import Sidebar from './Sidebar/Sidebar'
import { Dropdown } from 'antd'
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

const Navbar = () => {
  const currentRoute = usePathname()
  const [isOpen, setOpen] = useState(false)

  const { data: session } = useSession()
  // console.log('session user', session)

  return (
    <div className='w-full h-[80px]'>
      {' '}
      <div className='w-full hidden md:block'>
        <div className='px-5 w-full py-4 flex justify-between'>
          <div>
            <Link href='/' className='text-2xl font-bold'>
              Pc-Builder
            </Link>
          </div>
          <div className='flex items-center gap-5 justify-end'>
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
      </div>
      {/* sidebar */}
      <div className='md:hidden block relative'>
        <div className='flex  justify-between px-5 md:px-10 items-center py-4'>
          <div>
            <Hamburger toggled={isOpen} toggle={setOpen} />
            <Sidebar isOpen={isOpen} setOpen={setOpen} />
          </div>
          <div>
            <Link href='pcBuilder'>PC Builder</Link>
          </div>
          <div>
            <GiComputerFan className='text-2xl' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
