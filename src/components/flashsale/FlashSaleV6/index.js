'use client'
import { FcFlashOn } from 'react-icons/fc'

import { SliderWrapper, TimeCountdown } from '@/components/others'
import { ProductCardV1 } from '@/components/productcard'

import './styles.scss'

const FlashSaleV6 = () => {
  const sliderConfig = {
    autoplay: false,
    arrows: false,
    variableWidth: true,
  }
  return (
    <div className="container relative -mt-48">
      <div className="flash-sale-box-v6 flex overflow-hidden rounded-2xl bg-white shadow-lg">
        <div className="flex shrink-0 flex-col gap-3 rounded-r-2xl bg-gradient-to-r from-alternativeGray to-secondaryBlack py-10 pl-6 pr-24 md:pl-8">
          <FcFlashOn className="text-7xl" />
          <h1 className="text-2xl font-semibold text-white md:text-5xl">
            FLASH
            <br />
            SALE
          </h1>
          <TimeCountdown />
        </div>
        <div className="-ml-16 w-full items-center overflow-hidden py-8 pr-6 md:py-8 md:pr-12">
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

export default FlashSaleV6
