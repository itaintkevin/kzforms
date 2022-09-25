import React from 'react'
import FormInput from './FormInput';

const Form = () => {
  return (
    <div className='flex justify-center text-white my-24 scroll-smooth'>
        <form className='w-screen'>
            <FormInput condition="" placeholder="First Name"/>
            <FormInput condition="" placeholder="Last Name"/>
            <FormInput condition="" placeholder="Registration Number"/>
            <FormInput condition="" placeholder="SRM Email-id"/>
            <FormInput condition="" placeholder="Github Profile"/>
            <FormInput condition="" placeholder="Course"/>
            <FormInput condition="" placeholder="Year"/>
        </form>
    </div>
  )
}

export default Form