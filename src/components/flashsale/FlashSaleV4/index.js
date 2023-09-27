'use client'
import { FcFlashOn } from 'react-icons/fc'

import BgLayer from '../BgLayer'

import { SliderWrapper, TimeCountdown } from '@/components/others'
import { ProductCardV1 } from '@/components/productcard'

const FlashSaleV4 = () => {
  const sliderConfig = {
    autoplay: false,
    slidesToShow: 5,
    arrows: false,
  }
  return (
    <div className="container relative -mt-48 px-4 2xl:px-32">
      <div className="flash-sale-box relative overflow-hidden rounded-2xl bg-softGray20 px-12 py-8 shadow-lg">
        <BgLayer />
        <div className="timer flex w-fit items-center text-lg md:text-xl lg:text-3xl xl:text-4xl">
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
