'use client'
import { FcFlashOn } from 'react-icons/fc'

import { SliderWrapper, TimeCountdown } from '@/components/others'
import { ProductCardV1 } from '@/components/productcard'

const FlashSaleV1 = () => {
  const sliderConfig = {
    autoplay: false,
    slidesToShow: 2,
    arrows: false,
  }
  return (
    <div className="container absolute inset-x-0 -bottom-48 px-4 2xl:px-32">
      <div className="flash-sale-box overflow-hidden rounded-2xl bg-softGray20 shadow-lg">
        <div className="timer flex w-fit items-center rounded-br-2xl bg-primaryBlack px-3 py-4 text-lg text-white md:text-xl lg:text-3xl xl:text-4xl">
          <FcFlashOn />
          <h3 className="font-bold">FLASH SALE</h3>
          <div className="ml-6">
            <TimeCountdown />
          </div>
        </div>
        <div className="px-12 py-8">
          <SliderWrapper config={sliderConfig}>
            <ProductCardV1 />
            <ProductCardV1 />
          </SliderWrapper>
        </div>
      </div>
    </div>
  )
}

export default FlashSaleV1