import { GoogleOutlined, GithubOutlined } from '@ant-design/icons'
import Head from 'next/head'
import { signIn } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import RootLayout from '@/components/Layouts/RootLayout'
import Link from 'next/link'

const Login = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    // console.log(data)
  }

  // const callbackUrl = process.env.NEXTAUTH_URL || 'http://localhost:3000'

  return (
    <div className='flex justify-center items-center'>
      <Head>
        <title>Login</title>
      </Head>
      <div className='form w-full px-5 mx-5 md:w-3/5 lg:w-2/5 h-full md:h-96 rounded bg-[#090928] my-[8%] md:mx-auto p-5 text-center text-white'>
        <h3>LOGIN</h3>
        <div className='social_icons w-1/3 text-[40px] my-5 mx-auto flex justify-between'>
          <GoogleOutlined
            onClick={() =>
              signIn('google', {
                callbackUrl: 'https://pc-builder-nextjs-client.vercel.app',
              })
            }
          />
          <GithubOutlined
            onClick={() =>
              signIn('github', {
                callbackUrl: 'https://pc-builder-nextjs-client.vercel.app',
              })
            }
          />
        </div>
        <hr />
        <form className='text-left mt-5' onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor=''>Your Email</label>
          <input
            className='w-full px-2 py-1 rounded outline-none'
            {...register('email', { required: true })}
            type='email'
          />
          <label htmlFor=''>Your Password</label>
          <input
            className='w-full px-2 py-1 rounded outline-none'
            {...register('password', { required: true })}
            type='password'
          />
          <button className='bg-purple-500 w-full mt-5 rounded' type='submit'>
            Login
          </button>
          <p className='py-3'>
            New Here?{' '}
            <Link className='text-blue-500' href='/signup'>
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login

Login.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>
}
