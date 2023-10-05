import Image from 'next/image'

import './styles/stylesv1.scss'
import { Copyright, LogoBrand } from '@/components/others'

const AuthLayoutV1 = ({ children }) => {
  return (
    <div className="auth-v1 flex min-h-screen">
      <div className="form-section w-full px-6 py-14 md:px-12 lg:w-1/2 lg:pr-24 xl:pr-48">
        <LogoBrand />
        <div className="mt-20">{children}</div>
        <Copyright />
      </div>
      <div className="hidden lg:block lg:flex-[1.8]">
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

export default AuthLayoutV1
