'use client'
import { FcFlashOn } from 'react-icons/fc'

import { SliderWrapper, TimeCountdown } from '../others'

const FlashSaleV1 = () => {
  return (
    <div className="h-[330px] overflow-hidden rounded-2xl bg-white shadow-lg">
      <div className="flex w-fit items-center rounded-br-2xl bg-primaryBlack px-3 py-4 text-4xl text-white">
        <FcFlashOn />
        <h3 className="font-bold">FLASH SALE</h3>
        <div className="ml-6">
          <TimeCountdown />
        </div>
      </div>
      <div className="px-12 py-8">
        <SliderWrapper>
          <div>Product Card 1</div>
          <div>Product Card 2</div>
          <div>Product Card 3</div>
        </SliderWrapper>
      </div>
    </div>
  )
}

export default FlashSaleV1
