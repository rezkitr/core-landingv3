import Image from 'next/image'
import Link from 'next/link'

const LogoBrand = ({
  withText = true,
  logoWidth = 52,
  logoHeight = 52,
  textClassName = '',
}) => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image
        src="/icons/logo.png"
        alt="logo"
        width={logoWidth}
        height={logoHeight}
      />
      {withText && (
        <h5 className={`logo-text font-semibold ${textClassName}`}>
          GameManiac
        </h5>
      )}
    </Link>
  )
}
export default LogoBrand
