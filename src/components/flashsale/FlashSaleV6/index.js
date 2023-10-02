import { FcFlashOn } from 'react-icons/fc'

import { SliderWrapper, TimeCountdown } from '@/components/others'
import { ProductCardV1 } from '@/components/productcard'

import './styles.scss'

const FlashSaleV6 = () => {
  const sliderConfig = {
    autoplay: false,
    slidesToShow: 5,
    arrows: false,
  }
  return (
    <div className="container relative -mt-48 px-4 2xl:px-32">
      <div className="flash-sale-box-v6 relative flex overflow-hidden rounded-2xl bg-white shadow-lg">
        <div className="flex shrink-0 flex-col gap-3 rounded-r-2xl bg-gradient-to-r from-alternativeGray to-secondaryBlack py-10 pl-8 pr-24">
          <FcFlashOn className="text-9xl" />
          <h1 className="text-5xl font-semibold text-white">
            FLASH
            <br />
            SALE
          </h1>
          <TimeCountdown size="extra-small" />
        </div>
        <div className="-ml-16 w-full overflow-hidden py-12 pr-8">
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
