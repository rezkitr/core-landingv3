import { FlashSaleV1 } from '@/components/flashsale'

const Dashboard = () => {
  return (
    <div>
      <div className="relative h-[700px] bg-gray-400 bg-[url('/images/home-banner.png')] bg-cover bg-no-repeat">
        <div className="container absolute inset-x-0 -bottom-48 px-4 2xl:px-32">
          <FlashSaleV1 />
        </div>
      </div>
      <div className="content h-[500px] pt-40">Content</div>
    </div>
  )
}

export default Dashboard
