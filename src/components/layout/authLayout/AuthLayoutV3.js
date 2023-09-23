import Image from 'next/image'
import './styles/stylesv3.scss'
import PropTypes from 'prop-types'

import './styles/stylesv1.scss'
import { LogoBrand } from '@/components/others'

const AuthLayoutV3 = ({ children }) => {
  return (
    <div className="auth-v3 flex min-h-screen">
      <div className="form-section w-1/2 shrink-0 py-14 pl-12 pr-48">
        <LogoBrand />
        <div className="mt-20">{children}</div>
      </div>
      <div className="banner-section flex flex-[1.8] items-center py-14 pr-12">
        <div className="relative flex h-full w-full items-center justify-center">
          <div className="banner-wrapper absolute inset-0" />
          <div className="banner-inner absolute inset-1 z-10" />
          <div className="banner relative z-20 inline-block h-[96%] w-[97%] before:bg-[url('/images/login-banner-3.png')]" />
          <svg
            style={{ visibility: 'hidden', position: 'absolute' }}
            width="0"
            height="0"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
          >
            <defs>
              <filter id="roundedCorner">
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="10"
                  result="blur"
                />
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                  result="roundedCorner"
                />
                <feComposite
                  in="SourceGraphic"
                  in2="roundedCorner"
                  operator="atop"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  )
}

AuthLayoutV3.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AuthLayoutV3
