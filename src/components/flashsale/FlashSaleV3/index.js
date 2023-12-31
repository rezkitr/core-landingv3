'use client'
import { FcFlashOn } from 'react-icons/fc'

import BgLayer from '../BgLayer'

import { SliderWrapper, TimeCountdown } from '@/components/others'
import { ProductCardV1 } from '@/components/productcard'

const FlashSaleV3 = () => {
  const sliderConfig = {
    variableWidth: true,
  }
  return (
    <div className="container relative -mt-52">
      <div className="flash-sale-box relative overflow-hidden rounded-2xl bg-softGray20 shadow-lg">
        <BgLayer />
        <div className="timer relative flex w-fit items-center rounded-br-2xl bg-primaryBlack px-3 py-4 text-xl text-white md:text-3xl lg:text-3xl xl:text-4xl">
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
          </SliderWrapper>
        </div>
      </div>
    </div>
  )
}

export default FlashSaleV3
