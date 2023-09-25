'use client'
import { useState } from 'react'

import PropTypes from 'prop-types'
import { BsEye, BsEyeSlash } from 'react-icons/bs'

const InputPassword = ({ className, ...props }) => {
  const [isShowPassword, setIsShowPassword] = useState(false)

  const toggleShowPassword = () => setIsShowPassword((prev) => !prev)

  return (
    <div className="relative">
      <input
        type={isShowPassword ? 'text' : 'password'}
        className="h-14 w-full rounded-xl bg-gray-100 pl-5 pr-14 focus:outline-none"
        {...props}
      />
      <div
        className="absolute inset-y-0 right-5 my-auto h-fit cursor-pointer text-xl text-gray-400"
        onClick={toggleShowPassword}
      >
        {isShowPassword ? <BsEye /> : <BsEyeSlash />}
      </div>
    </div>
  )
}

InputPassword.propTypes = {
  className: PropTypes.string,
}

InputPassword.defaultProps = {
  className: '',
}

export default InputPassword
