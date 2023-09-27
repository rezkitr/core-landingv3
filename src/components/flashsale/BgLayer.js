import Image from 'next/image'

import leftImage from './assets/bottom-left.png'
import rightImage from './assets/top-right.png'

const BgLayer = () => {
  return (
    <>
      <div className="absolute bottom-0 left-0 h-3/5 w-80">
        <Image src={leftImage} alt="" fill className="object-fill" />
      </div>
      <div className="absolute right-0 top-0 h-3/5 w-80">
        <Image src={rightImage} alt="" fill className="object-fill" />
      </div>
    </>
  )
}

export default BgLayer
