import React from 'react'

import { BiHome, BiSearch } from 'react-icons/bi'
import { PiGameControllerBold, PiChatTextBold } from 'react-icons/pi'
import { TfiMenuAlt } from 'react-icons/tfi'

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
