import { FlashSaleV1, FlashSaleV2 } from '@/components/flashsale'

const Dashboard = () => {
  return (
    <div>
      <div className="relative h-[700px] bg-gray-400 bg-[url('/images/home-banner.png')] bg-cover bg-no-repeat"></div>
      <div className="flash-sale-bg bg-softGray">
        <FlashSaleV1 />
      </div>
      <div className="content h-[500px] bg-softGray pt-40">Content</div>
    </div>
  )
}

export default Dashboard
