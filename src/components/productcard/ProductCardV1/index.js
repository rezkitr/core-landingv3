import Image from 'next/image'

import Button from '@/components/Button'

const ProductCardV1 = ({ className = '' }) => {
  return (
    <div
      className={`product-card relative mx-auto h-72 w-[200px] max-w-[200px] overflow-hidden rounded-xl bg-primaryBlack ${className}`}
    >
      <div className="relative h-52">
        <Image
          src="/images/productcard-img.png"
          alt="product-img"
          fill
          className="object-fill"
        />
      </div>
      <div className="absolute inset-x-0 bottom-0">
        <div className="absolute -top-6 right-0 h-6 w-2/5 rounded-t-2xl bg-primaryBlack">
          <div className="absolute inset-x-0 bottom-0 mx-auto h-[42px] w-[42px] rounded-md bg-white p-2 outline outline-1 outline-offset-2 outline-white">
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
        <div className="h-24 rounded-tl-xl bg-primaryBlack px-4 pb-2 pt-3">
          <h5 className="text-sm font-semibold text-white">
            Weekly Diamond Pass
          </h5>
          <p className="mt-2 text-xs text-alternativeGray10 line-through">
            Rp 29.500
          </p>
          <Button className="h-fit !w-fit !rounded-md bg-red-600 px-3 py-1 text-xs text-white">
            Rp 27.000
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ProductCardV1
