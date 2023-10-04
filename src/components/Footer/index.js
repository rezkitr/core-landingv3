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
    <div className="container pb-6 pt-20">
      <div className="mb-20 grid grid-cols-12">
        <div className="col-span-4">
          <LogoBrand logoHeight={64} logoWidth={72} textClassName="text-xl" />
        </div>
        <div className="col-span-2">
          <h3 className="mb-4 font-semibold">PETA SITUS</h3>
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
          <h3 className="mb-4 font-semibold">TOP UP LAINNYA</h3>
          <div className="flex flex-col space-y-3">
            {otherLinks.map((link) => (
              <Link key={link.label} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="col-span-2">
          <div>
            <h3 className="mb-4 font-semibold">IKUTI KAMI</h3>
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
            <h3 className="mb-4 font-semibold">KONTAK KAMI</h3>
            <Link href="/">contact@h2h.id</Link>
          </div>
        </div>
        <div />
      </div>
      <div className="h-1 border-b border-solid border-alternativeGray10" />
      <div className="mt-4 flex items-center justify-between text-sm">
        <p>© PT BERMAIN BERSAMA INDONESIA, 2023</p>
        <Link href="/">Kebijakan Privasi</Link>
        <Link href="/">Terms of Service</Link>
        <Link href="/">Hubungi Kami</Link>
      </div>
    </div>
  )
}

export default Footer
