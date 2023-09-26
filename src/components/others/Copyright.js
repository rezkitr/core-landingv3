import PropTypes from 'prop-types'

const Copyright = ({ className }) => {
  return (
    <p className={`text-center text-alternativeGray10 ${className}`}>
      © PT Bermain Bersama Indonesia, 2023
    </p>
  )
}

Copyright.propTypes = {
  className: PropTypes.string,
}

Copyright.defaultProps = {
  className: 'mt-64 md:hidden',
}

export default Copyright
