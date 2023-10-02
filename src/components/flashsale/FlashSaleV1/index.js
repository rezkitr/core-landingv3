'use client'
import { FcFlashOn } from 'react-icons/fc'

import { SliderWrapper, TimeCountdown } from '@/components/others'
import { ProductCardV1 } from '@/components/productcard'

const FlashSaleV1 = () => {
  const sliderConfig = {
    autoplay: true,
    arrows: false,
    variableWidth: true,
  }
  return (
    <div className="container relative -mt-52">
      <div className="flash-sale-box-v1 overflow-hidden rounded-2xl bg-softGray20 shadow-lg">
        <div className="timer flex w-fit items-center rounded-br-2xl bg-primaryBlack px-3 py-4 text-xl text-white md:text-3xl lg:text-3xl xl:text-4xl">
          <FcFlashOn />
          <h3 className="font-bold">FLASH SALE</h3>
          <div className="ml-6">
            <TimeCountdown />
          </div>
        </div>
        <div className="px-6 py-8 md:px-12 md:py-8">
          <SliderWrapper config={sliderConfig}>
            <ProductCardV1 />
            <ProductCardV1 />
            <ProductCardV1 />
            <ProductCardV1 />
            <ProductCardV1 />
            <ProductCardV1 />
            <ProductCardV1 />
          </SliderWrapper>
        </div>
      </div>
    </div>
  )
}

export default FlashSaleV1
