import {
  FlashSaleV1,
  FlashSaleV2,
  FlashSaleV3,
  FlashSaleV4,
  FlashSaleV5,
  FlashSaleV6,
} from '@/components/flashsale'
import LatestInfo from '@/components/view/LatestInfo'

const Dashboard = () => {
  return (
    <div>
      <div className="relative h-[700px] bg-gray-400 bg-[url('/images/home-banner.png')] bg-cover bg-no-repeat"></div>
      <div className="flash-sale-bg bg-softGray">
        <FlashSaleV6 />
      </div>
      <div className="content bg-softGray pt-20">
        <LatestInfo />
      </div>
    </div>
  )
}

export default Dashboard
