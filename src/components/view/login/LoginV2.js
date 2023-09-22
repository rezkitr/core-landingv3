import { LoginFormV1 } from '@/components/form/login'
import Image from 'next/image'
import './styles/login.scss'
import { LogoBrand } from '@/components/others'

const LoginV2 = () => {
  return (
    <div className="login-v2 flex h-full">
      <div className="form-section flex-1 py-14 pl-12 pr-36">
        <LogoBrand />
        <div className="mt-28">
          <LoginFormV1 />
        </div>
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

export default LoginV2
