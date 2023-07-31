import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Button, Input, Modal, Rate } from 'antd'
const { TextArea } = Input
import { toast } from 'react-toastify'

const ReviewForm = ({ singleData }) => {
  const currentProductId = singleData?.data?._id
  const [submittingReview, setSubmittingReview] = useState(false)
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const onSubmit = async (data) => {
    setSubmittingReview(true)
    try {
      await fetch(
        `https://pc-builder-server-webdevnazmulh-gmailcom.vercel.app/api/v1/products/${currentProductId}/reviews`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      )
      toast.success('Review submitted successfully!', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      })
      reset()
      setModal2Open(false)
      window.location.reload()
    } catch (error) {
      console.error('Error submitting review:', error)
    } finally {
      setSubmittingReview(false)
    }
  }

  const [modal2Open, setModal2Open] = React.useState(false)
  return (
    <div className='review-form'>
      <Button
        className='px-5 py-1 border-blue-600 text-blue-500 hover:bg-[#3749BB] hover:text-white transition-all duration-500 font-medium border'
        type='primary'
        onClick={() => setModal2Open(true)}
      >
        Write a Review
      </Button>
      <Modal
        title='Write a Review'
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
        footer={null}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className='font-medium text-gray-500' htmlFor='rating'>
            Select Your Review
          </label>
          <br />
          <Controller
            name='individualRating'
            control={control}
            defaultValue={2.5}
            render={({ field }) => <Rate {...field} allowHalf />}
          />
          <br />
          <label className='font-medium text-gray-500' htmlFor='name'>
            Your Name
          </label>
          <br />
          <Controller
            name='name'
            control={control}
            defaultValue=''
            rules={{ required: 'Name is required' }}
            render={({ field }) => <Input {...field} placeholder='Your Name' />}
          />
          {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
          <label className='font-medium text-gray-500' htmlFor='review'>
            Your Review
          </label>
          <br />
          <Controller
            name='comment'
            control={control}
            defaultValue=''
            rules={{ required: 'Review is required' }}
            render={({ field }) => <TextArea {...field} rows={4} />}
          />
          {errors.review && (
            <p className='text-red-500'>{errors.review.message}</p>
          )}
          <br />
          <Button
            className='px-5 py-1 border-blue-600 text-blue-500 hover:bg-[#3749BB] hover:text-white transition-all duration-500 font-medium border mt-3'
            type='primary'
            htmlType='submit'
            disabled={submittingReview}
          >
            {submittingReview ? 'Submitting...' : 'Submit'}
          </Button>
        </form>
      </Modal>
    </div>
  )
}

export default ReviewForm
