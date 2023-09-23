import { NavBar } from '@/components'

export default function LandingLayout({ children }) {
  return (
    <div>
      <NavBar />
      <div className="container">{children}</div>
    </div>
  )
}
