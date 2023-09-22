import Image from 'next/image'
import PropTypes from 'prop-types'

import './styles/stylesv1.scss'
import { LogoBrand } from '@/components/others'

const AuthLayoutV1 = ({ children }) => {
  return (
    <div className="auth-v1 flex h-full">
      <div className="form-section flex-1 py-14 pl-12 pr-36">
        <LogoBrand />
        <div className="mt-28">{children}</div>
      </div>
      <div className="flex-[1.8]">
        <div className="relative h-full">
          <Image
            src="/images/login-banner.png"
            alt="banner"
            fill
            className="object-fill"
          />
        </div>
      </div>
    </div>
  )
}

AuthLayoutV1.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AuthLayoutV1
