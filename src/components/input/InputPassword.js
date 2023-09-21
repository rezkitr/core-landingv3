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
        className="rounded-xl bg-gray-100 h-14 px-5 focus:outline-none w-full"
        {...props}
      />
      <div
        className="absolute right-5 top-0 bottom-0 my-auto h-fit text-xl cursor-pointer text-gray-400"
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
