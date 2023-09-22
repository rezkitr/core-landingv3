import { LoginForm } from '@/components/form/login'
import './styles/loginv4.scss'
import { LogoBrand } from '@/components/others'

const LoginV4 = () => {
  return (
    <div className="login-v4 relative flex h-full bg-[url('/images/login-bg.png')] bg-cover bg-no-repeat">
      <div className="shadow-layer absolute inset-0 z-10" />
      <div className="relative z-20 flex w-full">
        <div className="form-section flex-1 py-14 pl-12 pr-36">
          <LogoBrand />
          <div className="mt-28">
            <LoginForm />
          </div>
        </div>
        <div className="flex-[1.8]" />
      </div>
    </div>
  )
}

export default LoginV4
