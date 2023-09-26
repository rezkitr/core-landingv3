import Image from 'next/image'
import Link from 'next/link'
import PropTypes from 'prop-types'

const LogoBrand = ({ withText, logoWidth, logoHeight }) => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image
        src="/icons/logo.png"
        alt="logo"
        width={logoWidth}
        height={logoHeight}
      />
      {withText && <h5 className="logo-text font-semibold">GameManiac</h5>}
    </Link>
  )
}

LogoBrand.propTypes = {
  withText: PropTypes.bool,
  logoWidth: PropTypes.number,
  logoHeight: PropTypes.number,
}

LogoBrand.defaultProps = {
  withText: true,
  logoWidth: 52,
  logoHeight: 32,
}

export default LogoBrand
