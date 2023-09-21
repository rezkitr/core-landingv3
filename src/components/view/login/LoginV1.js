import { LoginFormV1 } from '@/components/form/login'
import Image from 'next/image'
import './styles/loginV1.scss'

const LoginV1 = () => {
  return (
    <div className="flex h-full login-v1">
      <div className="flex-1 py-14 pl-12 pr-36 form-section">
        <div className="flex items-center gap-2">
          <Image src="/icons/logo.png" alt="logo" width={52} height={32} />
          <h5 className="font-semibold logo-text">GameManiac</h5>
        </div>
        <div className="mt-28">
          <LoginFormV1 />
        </div>
      </div>
      <div className="flex-[1.8] py-8">
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
