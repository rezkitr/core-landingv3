'use client'
import { FcFlashOn } from 'react-icons/fc'

import BgLayer from '../BgLayer'

import { SliderWrapper, TimeCountdown } from '@/components/others'
import { ProductCardV1 } from '@/components/productcard'

const FlashSaleV4 = () => {
  const sliderConfig = {
    variableWidth: true,
  }
  return (
    <div className="container relative -mt-48">
      <div className="flash-sale-box relative overflow-hidden rounded-2xl bg-softGray20 px-6 py-8 shadow-lg md:px-12 md:py-8">
        <BgLayer />
        <div className="timer relative flex w-fit items-center text-xl md:text-3xl xl:text-4xl">
          <FcFlashOn />
          <h3 className="font-bold">FLASH SALE</h3>
          <div className="ml-6">
            <TimeCountdown />
          </div>
        </div>
        <div className="mt-8">
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

export default FlashSaleV4
