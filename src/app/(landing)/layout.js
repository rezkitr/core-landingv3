import { NavBar } from '@/components'

export default function LandingLayout({ children }) {
  return (
    <div className="relative">
      <NavBar />
      <div className="mt-20">{children}</div>
    </div>
  )
}
