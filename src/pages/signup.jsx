import Head from 'next/head'
import styles from '@/styles/Login.module.css'
import { useForm } from 'react-hook-form'
import RootLayout from '@/components/Layouts/RootLayout'
import Link from 'next/link'

const SignUp = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    // You can handle form submission here
    console.log(data)
  }

  return (
    <div>
      <Head>
        <title>Next Sign Up</title>
      </Head>
      <div className={styles.form}>
        <h3>SIGN UP</h3>
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
            Sign Up
          </button>
          <p className='py-3'>
            Already have an account? <Link className='text-blue-500' href='/login'>Login</Link>
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
