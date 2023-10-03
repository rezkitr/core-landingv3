'use client'
import { FcFlashOn } from 'react-icons/fc'

import { SliderWrapper, TimeCountdown } from '@/components/others'
import { ProductCardV1 } from '@/components/productcard'

import './styles.scss'

const FlashSaleV5 = () => {
  const sliderConfig = {
    autoplay: true,
    arrows: false,
    variableWidth: true,
    dots: true,
  }
  return (
    <div className="container relative -mt-48">
      <div className="flash-sale-box-v5 block overflow-hidden rounded-2xl bg-softGray20 shadow-lg md:flex">
        <div className="bg-primaryBlack p-6 md:rounded-r-2xl md:px-8 md:py-14">
          <div className="flex w-full flex-col items-center gap-2 rounded-2xl bg-gradient-to-b from-softGray20 py-4 text-center md:w-56 lg:w-60">
            <FcFlashOn className="text-7xl md:text-8xl lg:text-9xl" />
            <h1 className="hidden text-3xl font-semibold text-white md:inline-block md:text-4xl lg:text-5xl">
              FLASH
              <br />
              SALE
            </h1>
            <h1 className="text-3xl font-semibold text-white md:hidden md:text-5xl">
              FLASH SALE
            </h1>
            <TimeCountdown />
          </div>
        </div>
        <div className="w-full overflow-hidden px-6 pb-12 pt-6 md:px-8 md:py-12">
          <SliderWrapper config={sliderConfig}>
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

export default FlashSaleV5
