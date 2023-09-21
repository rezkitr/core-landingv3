import PropTypes from 'prop-types'

const Button = ({ children, type, className, disabled }) => {
  return (
    <button
      type={type}
      className={`w-full rounded-xl h-14 font-semibold ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
}

Button.defaultProps = {
  children: '',
  type: 'button',
  className: '',
  disabled: false,
}

export default Button
