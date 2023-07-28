import Link from 'next/link'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { useSession, signOut } from 'next-auth/react'
import { Divide as Hamburger } from 'hamburger-react'
import { GiComputerFan } from 'react-icons/gi'
import Sidebar from './Sidebar/Sidebar'

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
            <span className='text-2xl font-bold'>Pc-Builder</span>
          </div>
          <div className='flex items-center gap-5 justify-end'>
            <Link
              className={
                currentRoute === '/'
                  ? 'text-primary text-base font-semibold border-b-[2px] border-primary h-8'
                  : 'text-dark text-base font-semibold h-8 hover:text-primary hover:border-primary hover:border-b-[2px] transition-all duration-100'
              }
              href={'/'}
            >
              Home
            </Link>
            <Link
              className={
                currentRoute === '/pc-builder'
                  ? 'text-primary text-base font-semibold border-b-[2px] border-primary h-8'
                  : 'text-dark text-base font-semibold h-8 hover:text-primary hover:border-primary hover:border-b-[2px] transition-all duration-100'
              }
              href={'/'}
            >
              PC Builder
            </Link>
            {!session?.user && (
              <Link
                className={
                  currentRoute === '/login'
                    ? 'text-primary text-base font-semibold border-b-[2px] border-primary h-8'
                    : 'text-dark text-base font-semibold h-8 hover:text-primary hover:border-primary hover:border-b-[2px] transition-all duration-100'
                }
                href={'/login'}
              >
                Login
              </Link>
            )}
            {session?.user && (
              <button onClick={() => signOut()}>Sign Out</button>
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
            <h2 className='text-2xl font-bold'>PC Builder</h2>
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
