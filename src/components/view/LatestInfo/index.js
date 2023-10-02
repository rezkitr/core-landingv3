import { SectionTitle, SliderWrapper } from '@/components/others'

import './styles.scss'

const LatestInfo = () => {
  const sliderConfig = {
    autoplay: false,
    slidesToShow: 1,
    arrows: false,
    centerMode: true,
    variableWidth: true,
    dots: true,
  }
  return (
    <div className="latest-info">
      <SectionTitle title="Informasi Terkini" />
      <div className="mt-8">
        <SliderWrapper config={sliderConfig}>
          <div className="h-[360px] !w-[1080px] rounded-2xl bg-alternativeGray10" />
          <div className="h-[360px] !w-[1080px] rounded-2xl bg-alternativeGray10" />
          <div className="h-[360px] !w-[1080px] rounded-2xl bg-alternativeGray10" />
        </SliderWrapper>
      </div>
    </div>
  )
}

export default LatestInfo
