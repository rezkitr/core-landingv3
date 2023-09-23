'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { Button } from '@/components'
import { InputCheckBox, InputItem, InputPassword } from '@/components/input'

const LoginForm = () => {
  const router = useRouter()
  return (
    <div className="login-form">
      <div className="mb-12">
        <h1 className="text-3xl font-bold">Masuk Akun</h1>
        <p className="mt-2 text-gray-400">
          Masuk menggunakan akun terdaftar milikmu.
        </p>
      </div>
      <form>
        <div className="flex flex-col gap-6">
          <InputItem type="text" placeholder="Nomor Handphone" />
          <InputPassword placeholder="Password" />
        </div>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <InputCheckBox type="checkbox" id="rememberme" name="rememberme" />
            <label htmlFor="rememberme" className="text-gray-400">
              Ingatkan Saya
            </label>
          </div>
          <Link href="/" className="forget-pwd">
            Lupa Password
          </Link>
        </div>
        <div className="mt-8">
          <Button className="submit-btn mb-6">Masuk</Button>
          <Link className="text-sm text-gray-400" href="/">
            Belum punya akun?
          </Link>
          <Button
            className="helper-btn mt-3 border"
            onClick={() => router.push('/auth/register')}
          >
            Daftar Sekarang
          </Button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
