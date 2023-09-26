import Image from 'next/image'
import PropTypes from 'prop-types'

import './styles/stylesv2.scss'
import { Copyright, LogoBrand } from '@/components/others'

const AuthLayoutV2 = ({ children }) => {
  return (
    <div className="auth-v2 flex min-h-screen">
      <div className="form-section w-full px-6 py-14 md:px-12 lg:w-1/2 lg:pr-24 xl:pr-48">
        <LogoBrand />
        <div className="mt-20">{children}</div>
        <Copyright />
      </div>
      <div className="banner hidden lg:block lg:flex-[1.8]">
        <div className="relative h-full">
          <Image
            src="/images/login-banner-3.png"
            alt="banner"
            fill
            className="banner-img object-fill"
          />
        </div>
      </div>
    </div>
  )
}

AuthLayoutV2.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AuthLayoutV2
