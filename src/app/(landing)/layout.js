import { NavBar } from '@/components'

export default function LandingLayout({ children }) {
  return (
    <div className="relative">
      <NavBar />
      <div className="container mt-6">{children}</div>
    </div>
  )
}
