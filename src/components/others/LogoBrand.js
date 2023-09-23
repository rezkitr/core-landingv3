import Image from 'next/image'
import Link from 'next/link'

const LogoBrand = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image src="/icons/logo.png" alt="logo" width={52} height={32} />
      <h5 className="logo-text font-semibold">GameManiac</h5>
    </Link>
  )
}

export default LogoBrand
