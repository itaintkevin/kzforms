import React from 'react'
import FormInput from './FormInput';

const Form = () => {
  return (
    <div className='text-white mt-24 pb-24 pt-5 scroll-smooth'>
        <form className='w-screen'>
            <FormInput condition="" placeholder="First Name"/>
            <FormInput condition="" placeholder="Last Name"/>
            <FormInput condition="" placeholder="Registration Number"/>
            <FormInput condition="" placeholder="SRM Email-id"/>
            <FormInput condition="" placeholder="Github Profile"/>
            <FormInput condition="" placeholder="Course"/>
            <FormInput condition="" placeholder="Year"/>
            <div className='from-[#FB5A0D] to-[#EB144C] text-white text-center text-xl font-semibold bg-gradient-to-r drop-shadow-2xl rounded-md mx-5 px-5 py-2'>
              <button type="submit">Sumbit</button>
            </div>
        </form>
    </div>
  )
}

export default Form