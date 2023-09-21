import PropTypes from 'prop-types'

const InputItem = ({ className, ...props }) => {
  return (
    <input
      {...props}
      className={`rounded-xl bg-gray-100 h-14 px-5 focus:outline-none ${className}`}
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
