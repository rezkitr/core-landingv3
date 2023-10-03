import {
  FlashSaleV1,
  FlashSaleV2,
  FlashSaleV3,
  FlashSaleV4,
  FlashSaleV5,
  FlashSaleV6,
} from '@/components/flashsale'
import { LatestInfo, ProductList } from '@/components/view'

const Dashboard = () => {
  return (
    <div>
      <div className="relative h-[800px] bg-gray-400 bg-[url('/images/home-banner.png')] bg-cover bg-no-repeat lg:h-[700px]"></div>
      <div className="flash-sale-bg bg-softGray">
        <FlashSaleV1 />
      </div>
      <div className="content bg-softGray pt-20">
        <LatestInfo />
        <ProductList />
      </div>
    </div>
  )
}

export default Dashboard
