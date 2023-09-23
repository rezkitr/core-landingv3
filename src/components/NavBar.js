'use client'

import Link from 'next/link'

import { LogoBrand, NavBarSearch } from './others'

const NavBar = () => {
  return (
    <div className="h-20 bg-gray-200">
      <div className="container flex h-full items-center justify-between">
        <LogoBrand />
        <div className="flex items-center gap-2">
          <Link href="/">Beranda</Link>
          <Link href="/">Lacak Pesanan</Link>
          <Link href="/">Semua Game</Link>
          <Link href="/">Price List</Link>
          <Link href="/">Ulasan</Link>
        </div>
        <NavBarSearch />
      </div>
    </div>
  )
}

export default NavBar
