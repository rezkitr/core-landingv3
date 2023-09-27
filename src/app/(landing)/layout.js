import { NavBar } from '@/components'

import './styles.scss'

export default function LandingLayout({ children }) {
  return (
    <div className="relative">
      <NavBar />
      <div className="mt-20">{children}</div>
    </div>
  )
}
