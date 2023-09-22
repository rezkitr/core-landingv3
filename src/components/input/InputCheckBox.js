'use client'
import PropTypes from 'prop-types'

const InputCheckbox = ({ className, ...props }) => {
  return (
    <div className="relative">
      <input
        type="checkbox"
        className={`peer relative mt-1 h-4 w-4 appearance-none rounded border border-gray-300 checked:border-0 ${className} `}
        {...props}
      />
      <svg
        className="pointer-events-none absolute inset-0 mt-1 hidden h-4 w-4 peer-checked:block"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </div>
  )
}

InputCheckbox.propTypes = {
  className: PropTypes.string,
}

InputCheckbox.defaultProps = {
  className: '',
}

export default InputCheckbox
