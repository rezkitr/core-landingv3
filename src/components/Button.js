'use client'

const Button = ({
  children = '',
  type = 'button',
  className = '',
  disabled = false,
  onClick = () => {},
  ...props
}) => {
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

export default Button
