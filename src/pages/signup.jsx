import Head from 'next/head'
import { useForm } from 'react-hook-form'
import RootLayout from '@/components/Layouts/RootLayout'
import Link from 'next/link'

const SignUp = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    // You can handle form submission here
    // console.log(data)
  }

  return (
    <div className='flex justify-center items-center'>
      <Head>
        <title>Sign Up</title>
      </Head>
      <div className='form w-full px-5 mx-5 md:w-3/5 lg:w-2/5 h-full md:h-96 rounded bg-[#090928] my-[8%] md:mx-auto p-5 text-center text-white'>
        <h3>SIGN UP</h3>
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
            Sign Up
          </button>
          <p className='py-3'>
            Already have an account?{' '}
            <Link className='text-blue-500' href='/login'>
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default SignUp

SignUp.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>
}
