'use client'
import { FcFlashOn } from 'react-icons/fc'

import { SliderWrapper, TimeCountdown } from '@/components/others'
import { ProductCardV1 } from '@/components/productcard'

import './styles.scss'

const FlashSaleV5 = () => {
  const sliderConfig = {
    autoplay: true,
    slidesToShow: 4,
    arrows: false,
    dots: true,
  }
  return (
    <div className="container relative -mt-48 px-4 2xl:px-32">
      <div className="flash-sale-box flex overflow-hidden rounded-2xl bg-softGray20 shadow-lg">
        <div className="rounded-r-2xl bg-primaryBlack px-8 py-14">
          <div className="flex w-60 flex-col items-center gap-2 rounded-2xl bg-gradient-to-b from-softGray20 py-4 text-center">
            <FcFlashOn className="text-9xl !text-primaryBlack" />
            <h1 className="text-5xl font-semibold text-white">
              FLASH
              <br />
              SALE
            </h1>
            <TimeCountdown />
          </div>
        </div>
        <div className="w-full overflow-hidden px-8 py-12">
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
