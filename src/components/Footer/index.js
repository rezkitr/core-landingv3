'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

import { LogoBrand } from '../others'

import { footerItems } from '@/utils/config'

const Footer = () => {
  const router = useRouter()
  const pathname = usePathname()
  const { siteLinks, otherLinks, socialLinks } = footerItems
  return (
    <div className="footer container pb-6 pt-12 lg:pt-20">
      <div className="mb-10 grid grid-cols-4 space-y-8 lg:mb-20 lg:grid-cols-12 lg:space-y-0">
        <div className="col-span-4">
          <LogoBrand logoHeight={64} logoWidth={72} textClassName="text-xl" />
        </div>
        <div className="col-span-2">
          <h3 className="mb-2 font-semibold md:mb-4">PETA SITUS</h3>
          <div className="flex flex-col space-y-3">
            {siteLinks.map((link) =>
              link.action ? (
                <div
                  key={link.label}
                  onClick={() => link.action(pathname, router)}
                  className="cursor-pointer"
                >
                  {link.label}
                </div>
              ) : (
                <Link key={link.label} href={link.href}>
                  {link.label}
                </Link>
              )
            )}
          </div>
        </div>
        <div className="col-span-2">
          <h3 className="mb-2 font-semibold md:mb-4">TOP UP LAINNYA</h3>
          <div className="flex flex-col space-y-3">
            {otherLinks.map((link) => (
              <Link key={link.label} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="col-span-4 lg:col-span-2">
          <div>
            <h3 className="mb-2 font-semibold md:mb-4">IKUTI KAMI</h3>
            <div className="flex items-center space-x-3">
              {socialLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-secondaryBlack text-xl text-white"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-8">
            <h3 className="mb-2 font-semibold md:mb-4">KONTAK KAMI</h3>
            <Link href="/">contact@h2h.id</Link>
          </div>
        </div>
      </div>
      <div className="hidden h-1 border-b border-solid border-alternativeGray10 md:block" />
      <div className="mt-4 flex items-center justify-between text-sm">
        <p>© PT BERMAIN BERSAMA INDONESIA, 2023</p>
        <Link href="/" className="hidden md:inline-block">
          Kebijakan Privasi
        </Link>
        <Link href="/" className="hidden md:inline-block">
          Terms of Service
        </Link>
        <Link href="/" className="hidden md:inline-block">
          Hubungi Kami
        </Link>
      </div>
    </div>
  )
}

export default Footer
