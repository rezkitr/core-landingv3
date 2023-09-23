import Link from 'next/link'
import { IoLogIn } from 'react-icons/io5'

const LoginButton = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-softGray20">
        <IoLogIn className="text-2xl text-alternativeGray" />
      </div>
      <Link href="/auth/login">Masuk/Daftar</Link>
    </div>
  )
}

export default LoginButton
