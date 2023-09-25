import PropTypes from 'prop-types'

import './styles/stylesv4.scss'
import { AuthCopyright, LogoBrand } from '@/components/others'

const AuthLayoutV4 = ({ children }) => {
  return (
    <div className="auth-v4 relative flex min-h-screen bg-cover bg-no-repeat lg:bg-[url('/images/login-bg.png')]">
      <div className="shadow-layer absolute inset-0 z-10 hidden lg:block" />
      <div className="relative z-20 flex w-full">
        <div className="w-full">
          <div className="relative h-52 bg-white bg-[url('/images/login-bg.png')] bg-cover bg-no-repeat lg:hidden">
            <div className="shadow-layer-mobile absolute inset-0 z-10" />
          </div>
          <div className="form-section w-full px-6 pb-14 pt-8 md:px-12 lg:w-1/2 lg:pr-24 lg:pt-14 xl:pr-48">
            <LogoBrand />
            <div className="mt-20">{children}</div>
            <AuthCopyright />
          </div>
        </div>
        <div className="hidden lg:block lg:flex-[1.8]" />
      </div>
    </div>
  )
}

AuthLayoutV4.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AuthLayoutV4
