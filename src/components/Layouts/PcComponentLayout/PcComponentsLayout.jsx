import Sidebar from '@/components/UI/Home/Sidebar/Sidebar'
import { HomeOutlined, InboxOutlined } from '@ant-design/icons'
import { Breadcrumb } from 'antd'

const PcComponentLayout = ({ children }) => {
  return (
    <div className='sm:w-[80%] px-1 sm:mx-auto'>
      <div className='mt-3'>
        <Breadcrumb
          items={[
            {
              href: '/',
              title: <HomeOutlined />,
            },
            {
              title: (
                <div className='flex items-center gap-2 mt-1 text-sm'>
                  <InboxOutlined />
                  <span>Product List</span>
                </div>
              ),
            },
          ]}
        />
      </div>
      <div className='min-h-[100vh] grid sm:grid-cols-5 grid-cols-1 py-8  gap-2'>
        <Sidebar></Sidebar>
        <div className='border rounded-md px-4 py-5  shadow-md bg-white sm:col-span-4'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default PcComponentLayout
