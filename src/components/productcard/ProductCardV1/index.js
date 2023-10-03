import Image from 'next/image'

const ProductCardV1 = ({ isPromo = false, className = '' }) => {
  return (
    <div
      className={`product-card relative h-64 w-[140px] max-w-[140px] overflow-hidden rounded-xl bg-primaryBlack md:h-72 md:w-[200px] md:max-w-[200px] ${className}`}
    >
      <div className="relative h-36 md:h-52">
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-white/50"></div>
        <Image
          src="/images/productcard-img.png"
          alt="product-img"
          fill
          className="object-fill"
        />
      </div>
      <div className="absolute inset-x-0 bottom-0 z-20">
        <div className="absolute -top-4 right-0 h-6 w-2/5 rounded-t-lg bg-primaryBlack md:-top-6 md:rounded-t-2xl">
          <div className="absolute inset-x-0 bottom-2 mx-auto h-8 w-8 rounded-md bg-white p-2 outline outline-1 outline-offset-2 outline-white md:bottom-0 md:h-[42px] md:w-[42px]">
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
        <div className="rounded-tl-xl bg-primaryBlack px-4 pb-4 pt-3">
          <p className="line-clamp-2 text-sm font-semibold text-white">
            Weekly Diamond Pass
          </p>
          {isPromo ? (
            <>
              <p className="mt-2 text-xs text-alternativeGray10 line-through">
                Rp 29.500
              </p>
              <div className="h-fit !w-fit !rounded-md bg-red-600 px-3 py-1 text-xs text-white">
                Rp 27.000
              </div>
            </>
          ) : (
            <p className="mt-2 text-xs text-alternativeGray10">Developer</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductCardV1
