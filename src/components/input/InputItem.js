'use client'

const InputItem = ({ className = '', ...props }) => {
  return (
    <input
      {...props}
      className={`h-14 rounded-xl bg-gray-100 px-5 focus:outline-none ${className}`}
    />
  )
}

export default InputItem
