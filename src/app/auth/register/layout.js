import PropTypes from 'prop-types'

const RegisterLayout = ({ children }) => {
  return <div className="h-full">{children}</div>
}

RegisterLayout.propTypes = {
  children: PropTypes.node,
}

RegisterLayout.defaultProps = {
  children: undefined,
}

export default RegisterLayout
