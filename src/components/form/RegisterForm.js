'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { Button } from '@/components'
import { InputItem, InputPassword } from '@/components/input'

const RegisterForm = () => {
  const router = useRouter()
  return (
    <div className="register-form">
      <div className="mb-12">
        <h1 className="text-3xl font-bold">Daftar Akun</h1>
        <p className="mt-2 text-gray-400">
          Daftar akun dengan mengisi form di bawah.
        </p>
      </div>
      <form>
        <div className="flex flex-col gap-6">
          <InputItem type="text" placeholder="Nama Depan" />
          <InputItem type="text" placeholder="Nama Belakang" />
          <InputItem type="text" placeholder="Nomor WhatsApp" />
          <InputPassword placeholder="Password" />
          <InputPassword placeholder="Konfirmasi Password" />
        </div>
        <div className="mt-8">
          <Button className="submit-btn mb-6">Daftar Sekarang</Button>
          <Link className="text-sm text-gray-400" href="/">
            Sudah punya akun?
          </Link>
          <Button
            className="helper-btn mt-3 border"
            onClick={() => router.push('/auth/login')}
          >
            Masuk
          </Button>
        </div>
      </form>
    </div>
  )
}

export default RegisterForm
