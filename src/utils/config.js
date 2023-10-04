import React from 'react'

import { AiOutlineInstagram, AiFillYoutube } from 'react-icons/ai'
import { BiHome, BiSearch, BiLogoTiktok } from 'react-icons/bi'
import { PiGameControllerBold, PiChatTextBold } from 'react-icons/pi'
import { TfiMenuAlt } from 'react-icons/tfi'
import { animateScroll as scroll } from 'react-scroll'

export const navLinkItems = [
  {
    label: 'Beranda',
    icon: <BiHome />,
    href: '/',
  },
  {
    label: 'Lacak Pesanan',
    icon: <BiSearch />,
    href: '/',
  },
  {
    label: 'Semua Game',
    icon: <PiGameControllerBold />,
    href: '/',
  },
  {
    label: 'Price List',
    icon: <TfiMenuAlt />,
    href: '/',
  },
  {
    label: 'Ulasan',
    icon: <PiChatTextBold />,
    href: '/',
  },
]

export const footerItems = {
  siteLinks: [
    {
      label: 'Beranda',
      action: (pathname, router) => {
        if (pathname === '/') {
          scroll.scrollToTop()
        } else {
          router.push('/')
        }
      },
    },
    {
      label: 'Semua Game',
      href: '/games',
    },
    {
      label: 'Masuk',
      href: '/auth/login',
    },
    {
      label: 'Daftar',
      href: '/auth/register',
    },
  ],
  otherLinks: [
    {
      label: 'Mobile Legends',
      href: '/',
    },
    {
      label: 'Free Fire',
      href: '/',
    },
    {
      label: 'PUBG Mobile',
      href: '/',
    },
    {
      label: 'Undawn',
      href: '/',
    },
  ],
  socialLinks: [
    { href: '', icon: <AiOutlineInstagram /> },
    { href: '', icon: <BiLogoTiktok /> },
    { href: '', icon: <AiFillYoutube /> },
  ],
}
