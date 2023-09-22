import { LoginForm } from '@/components/form/login'
import Image from 'next/image'
import './styles/loginv1.scss'
import { LogoBrand } from '@/components/others'

const LoginV1 = () => {
  return (
    <div className="login-v1 flex h-full">
      <div className="form-section flex-1 py-14 pl-12 pr-36">
        <LogoBrand />
        <div className="mt-28">
          <LoginForm />
        </div>
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

export default LoginV1
