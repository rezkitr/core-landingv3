'use client'
import { FcFlashOn } from 'react-icons/fc'

import BgLayer from '../BgLayer'

import { SliderWrapper, TimeCountdown } from '@/components/others'
import { ProductCardV1 } from '@/components/productcard'

const FlashSaleV3 = () => {
  const sliderConfig = {
    autoplay: false,
    slidesToShow: 5,
    arrows: false,
  }
  return (
    <div className="container relative -mt-52">
      <div className="flash-sale-box relative overflow-hidden rounded-2xl bg-softGray20 shadow-lg">
        <BgLayer />
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