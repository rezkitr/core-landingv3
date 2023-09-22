'use client'
import PropTypes from 'prop-types'

const InputItem = ({ className, ...props }) => {
  return (
    <input
      {...props}
      className={`h-14 rounded-xl bg-gray-100 px-5 focus:outline-none ${className}`}
    />
  )
}

InputItem.propTypes = {
  className: PropTypes.string,
}

InputItem.defaultProps = {
  className: '',
}

export default InputItem
