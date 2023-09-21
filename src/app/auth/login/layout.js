import PropTypes from 'prop-types'

const LoginLayout = ({ children }) => {
  return <div className="h-screen">{children}</div>
}

LoginLayout.propTypes = {
  children: PropTypes.node,
}

LoginLayout.defaultProps = {
  children: undefined,
}

export default LoginLayout
