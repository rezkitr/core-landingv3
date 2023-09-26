import { NavBar } from '@/components'

export default function LandingLayout({ children }) {
  return (
    <div className="relative">
      <NavBar />
      <div className="container">{children}</div>
    </div>
  )
}
