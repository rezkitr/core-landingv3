import Image from 'next/image'

import Button from '@/components/Button'

import './styles.scss'

const ProductCardV1 = () => {
  return (
    <div className="product-card relative mx-auto h-72 max-w-[200px] overflow-hidden rounded-xl">
      <div className="relative h-52">
        <Image
          src="/images/productcard-img.png"
          alt="product-img"
          fill
          className="object-fill"
        />
      </div>
      <div className="absolute inset-x-0 bottom-0">
        <div className="logo-bg absolute -top-6 right-0 h-6 w-2/5 rounded-t-2xl bg-white">
          <div className="logo absolute inset-x-0 bottom-0 mx-auto h-[42px] w-[42px] rounded-md bg-alternativeGray p-2 outline outline-1 outline-offset-2 outline-alternativeGray">
            <div className="relative h-full w-full">
              <Image
                src="/icons/logo.png"
                alt="logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
        <div className="info-bg h-24 rounded-tl-xl bg-white px-4 pb-2 pt-3">
          <h5 className="name text-sm font-semibold">Weekly Diamond Pass</h5>
          <p className="price mt-2 text-xs text-alternativeGray10 line-through">
            Rp 29.500
          </p>
          <Button className="price-disc h-fit !w-fit !rounded-md bg-red-600 px-3 py-1 text-xs text-white">
            Rp 27.000
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ProductCardV1
