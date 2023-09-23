import PropTypes from 'prop-types'

import './styles/stylesv4.scss'
import { LogoBrand } from '@/components/others'

const AuthLayoutV4 = ({ children }) => {
  return (
    <div className="auth-v4 relative flex h-fit min-h-full bg-[url('/images/login-bg.png')] bg-cover bg-no-repeat">
      <div className="shadow-layer absolute inset-0 z-10" />
      <div className="relative z-20 flex w-full">
        <div className="form-section flex-1 py-14 pl-12 pr-36">
          <LogoBrand />
          <div className="mt-20">{children}</div>
        </div>
        <div className="flex-[1.8]" />
      </div>
    </div>
  )
}

AuthLayoutV4.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AuthLayoutV4
