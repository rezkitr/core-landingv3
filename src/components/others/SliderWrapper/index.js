import Slider from 'react-slick'

import './styles.scss'

const SliderWrapper = ({ children, config = {} }) => {
  const slideConfig = {
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    ...config,
  }
  return <Slider {...slideConfig}>{children}</Slider>
}

export default SliderWrapper
