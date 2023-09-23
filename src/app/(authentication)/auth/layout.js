import PropTypes from 'prop-types'

const AuthLayout = ({ children }) => {
  return <div className="h-full">{children}</div>
}

AuthLayout.propTypes = {
  children: PropTypes.node,
}

AuthLayout.defaultProps = {
  children: undefined,
}

export default AuthLayout
