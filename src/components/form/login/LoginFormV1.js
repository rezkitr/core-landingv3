'use client'
import { Button } from '@/components'
import { InputItem, InputPassword } from '@/components/input'
import { toggleTheme } from '@/redux/slices/themeSlice'
import Link from 'next/link'
import { useDispatch } from 'react-redux'

const LoginFormV1 = () => {
  const dispatch = useDispatch()
  return (
    <div className="login-form">
      <div className="mb-12">
        <h1 className="text-3xl font-bold">Masuk Akun</h1>
        <p className="mt-2 text-gray-400">
          Masuk menggunakan akun terdaftar milikmu.
        </p>
      </div>
      <form>
        <div className="flex flex-col gap-4">
          <InputItem type="text" placeholder="Nomor Handphone" />
          <InputPassword placeholder="Password" />
        </div>
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <InputItem
              type="checkbox"
              id="rememberme"
              name="rememberme"
              className="h-fit"
            />
            <label for="rememberme" className="text-gray-400">
              Ingatkan Saya
            </label>
          </div>
          <Link href="/" className="forget-pwd">
            Lupa Password
          </Link>
        </div>
        <div className="mt-8">
          <Button className="bg-gray-950 text-white mb-6 submit-btn">
            Masuk
          </Button>
          <Link className="text-sm text-gray-400" href="/">
            Belum punya akun?
          </Link>
          <Button className="border border-gray-950 text-gray-950 mt-3 register-btn">
            Daftar Sekarang
          </Button>
        </div>
      </form>
      <button onClick={() => dispatch(toggleTheme())}>Toogle Theme</button>
    </div>
  )
}

export default LoginFormV1
