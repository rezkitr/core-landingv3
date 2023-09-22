import Image from 'next/image'

const LogoBrand = () => {
  return (
    <div className="flex items-center gap-2">
      <Image src="/icons/logo.png" alt="logo" width={52} height={32} />
      <h5 className="logo-text font-semibold">GameManiac</h5>
    </div>
  )
}

export default LogoBrand
