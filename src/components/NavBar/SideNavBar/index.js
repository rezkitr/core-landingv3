'use client'
import { useState, useEffect } from 'react'

import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'

import {
  Copyright,
  LoginButton,
  LogoBrand,
  NavLinkItem,
  ThemeToggleButton,
} from '@/components/others'
import { navLinkItems } from '@/utils/config'

import './styles.scss'

const SideNavBar = ({ show = false, setShow = () => {} }) => {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        setShowContent(true)
      }, 300)
    } else {
      setShowContent(false)
    }
  }, [show])

  const onClose = () => {
    setShowContent(false)
    setTimeout(() => {
      setShow(false)
    }, 500)
  }

  return (
    <div
      className={`side-navbar fixed inset-0 z-[100] bg-black/40 transition-all duration-300 ease-in-out ${
        show ? 'block' : 'hidden'
      }`}
    >
      <div
        className={`content absolute inset-y-0 right-0 flex w-3/4 bg-white transition-all duration-300 ease-in-out md:w-2/5 ${
          showContent ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div
          className="flex w-6 cursor-pointer items-center justify-center bg-softGray20"
          onClick={onClose}
        >
          <MdOutlineKeyboardDoubleArrowRight className="text-lg" />
        </div>
        <div className="flex flex-col justify-between px-4 py-20">
          <div>
            <LogoBrand />
            <div className="mt-8 flex flex-col gap-4">
              {navLinkItems.map((item) => (
                <NavLinkItem key={item.label} item={item} />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <ThemeToggleButton />
            <LoginButton />
            <Copyright className="mt-0 text-xs" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideNavBar
