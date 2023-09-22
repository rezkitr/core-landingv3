'use client'
import PropTypes from 'prop-types'

const Button = ({ children, type, className, disabled, onClick, ...props }) => {
  return (
    <button
      type={type}
      className={`h-14 w-full rounded-xl font-semibold ${className}`}
      disabled={disabled}
      onClick={onClick}
      {...props}
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
  onClick: PropTypes.func,
}

Button.defaultProps = {
  children: '',
  type: 'button',
  className: '',
  disabled: false,
  onClick: () => {},
}

export default Button
