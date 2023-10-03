import InfoBox from './InfoBox'

import { SectionTitle, SliderWrapper } from '@/components/others'

import './styles.scss'

const LatestInfo = () => {
  const sliderConfig = {
    centerMode: true,
    variableWidth: true,
    dots: true,
  }
  return (
    <div className="latest-info">
      <SectionTitle title="Informasi Terkini" />
      <div className="mt-8 w-full overflow-hidden">
        <SliderWrapper config={sliderConfig}>
          <InfoBox />
          <InfoBox />
          <InfoBox />
        </SliderWrapper>
      </div>
    </div>
  )
}

export default LatestInfo
