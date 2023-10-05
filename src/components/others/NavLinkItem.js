import Link from 'next/link'

const NavLinkItem = ({
  item = {
    label: '',
    icon: '',
    href: '',
  },
}) => {
  return (
    <div className="flex items-center gap-1">
      {item.icon}
      <Link href={item.href}>{item.label}</Link>
    </div>
  )
}

export default NavLinkItem
