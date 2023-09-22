import Image from 'next/image'
import PropTypes from 'prop-types'

import './styles/stylesv2.scss'
import { LogoBrand } from '@/components/others'

const AuthLayoutV2 = ({ children }) => {
  return (
    <div className="auth-v2 flex h-full">
      <div className="form-section flex-1 py-14 pl-12 pr-36">
        <LogoBrand />
        <div className="mt-28">{children}</div>
      </div>
      <div className="banner flex-[1.8]">
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
