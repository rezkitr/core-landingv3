import Link from 'next/link'
import PropTypes from 'prop-types'

const NavLinkItem = ({ item }) => {
  return (
    <div className="flex items-center gap-1">
      {item.icon}
      <Link href={item.href}>{item.label}</Link>
    </div>
  )
}

NavLinkItem.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string,
    icon: PropTypes.node,
    href: PropTypes.string,
  }),
}

NavLinkItem.defaultProps = {
  item: {
    label: '',
    icon: '',
    href: '',
  },
}

export default NavLinkItem
