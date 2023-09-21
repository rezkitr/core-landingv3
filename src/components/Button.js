import PropTypes from 'prop-types'

const Button = ({ children, type, className, disabled }) => {
  return (
    <button
      type={type}
      className={`h-14 w-full rounded-xl font-semibold ${className}`}
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
