import {
  LoginButton,
  LogoBrand,
  NavBarSearch,
  NavLinkItem,
  ThemeToggleButton,
} from '../others'

import { navLinkItems } from '@/utils/config'

import './styles.scss'

const NavBar = () => {
  return (
    <div className="navbar h-20">
      <div className="container flex h-full items-center justify-between">
        <LogoBrand />
        <div className="flex items-center gap-5">
          {navLinkItems.map((item) => (
            <NavLinkItem key={item.label} item={item} />
          ))}
        </div>
        <NavBarSearch />
        <ThemeToggleButton />
        <LoginButton />
      </div>
    </div>
  )
}

export default NavBar