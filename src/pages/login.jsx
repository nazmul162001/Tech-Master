import { GoogleOutlined, GithubOutlined } from '@ant-design/icons'
import Head from 'next/head'
import styles from '@/styles/Login.module.css'
import { signIn } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import RootLayout from '@/components/Layouts/RootLayout'
import Link from 'next/link'

const Login = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div>
      <Head>
        <title>Next Login</title>
      </Head>
      <div className={styles.form}>
        <h3>LOGIN</h3>
        <div className={styles.social_icons}>
          <GoogleOutlined
            onClick={() =>
              signIn('google', {
                callbackUrl: 'http://localhost:3000',
              })
            }
          />
          <GithubOutlined
            onClick={() =>
              signIn('github', {
                callbackUrl: 'http://localhost:3000',
              })
            }
          />
        </div>
        <hr />
        <form className='text-left' onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor=''>Your Email</label>
          <input {...register('email', { required: true })} type='email' />
          <label htmlFor=''>Your Password</label>
          <input
            {...register('password', { required: true })}
            type='password'
          />
          <button className='bg-purple-500 !w-full rounded' type='submit'>
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
