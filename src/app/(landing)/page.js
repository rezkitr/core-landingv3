import {
  FlashSaleV1,
  FlashSaleV2,
  FlashSaleV3,
  FlashSaleV4,
  FlashSaleV5,
} from '@/components/flashsale'

const Dashboard = () => {
  return (
    <div>
      <div className="relative h-[700px] bg-gray-400 bg-[url('/images/home-banner.png')] bg-cover bg-no-repeat"></div>
      <div className="flash-sale-bg bg-softGray">
        <FlashSaleV5 />
      </div>
      <div className="content h-[500px] bg-softGray">Content</div>
    </div>
  )
}

export default Dashboard
