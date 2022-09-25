import React from 'react'

const FormInput = (props) => {
  return (
    <div className='flex items-center justify-between my-3'>
        <input className='bg-[#202020] w-full rounded-md mx-5 px-5 py-2' placeholder={props.placeholder} onChange={props.function}/>
    </div>
  )
}

export default FormInput