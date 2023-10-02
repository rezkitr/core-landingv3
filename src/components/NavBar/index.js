'use client'
import { useState } from 'react'

import { BiMenu } from 'react-icons/bi'

import {
  LoginButton,
  LogoBrand,
  NavBarSearch,
  NavLinkItem,
  ThemeToggleButton,
} from '../others'

import SideNavBar from './SideNavBar'

import useGetScreenSize from '@/hooks/useGetScreenSize'
import { navLinkItems } from '@/utils/config'

import './styles.scss'

const NavBar = () => {
  const [size] = useGetScreenSize()
  const [showSideBarNav, setShowSideBarNav] = useState(false)

  return (
    <>
      <div className="navbar fixed inset-x-0 top-0 z-10 h-20">
        <div className="container flex h-full items-center justify-between gap-5">
          <LogoBrand withText={!size.isLgScreen} />
          <div className="hidden items-center gap-4 xl:flex">
            {navLinkItems.map((item) => (
              <NavLinkItem key={item.label} item={item} />
            ))}
          </div>
          <div className="flex-1 xl:flex-none">
            <NavBarSearch />
          </div>
          <div className="hidden xl:block">
            <ThemeToggleButton />
          </div>
          <div className="hidden xl:block">
            <LoginButton />
          </div>
          <button
            className="xl:hidden"
            onClick={() => setShowSideBarNav((prev) => !prev)}
          >
            <BiMenu className="text-2xl" />
          </button>
        </div>
      </div>
      {size.isXlScreen && (
        <SideNavBar show={showSideBarNav} setShow={setShowSideBarNav} />
      )}
    </>
  )
}

export default NavBar
