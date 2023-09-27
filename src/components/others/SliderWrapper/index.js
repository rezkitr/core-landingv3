import Slider from 'react-slick'

import './styles.scss'

const SliderWrapper = ({ children, config = {} }) => {
  const slideConfig = {
    autoplay: config.autoplay,
    dots: config.dots || false,
    infinite: true,
    speed: 500,
    slidesToShow: config.slidesToShow || 1,
    slidesToScroll: 1,
  }
  return <Slider {...slideConfig}>{children}</Slider>
}

export default SliderWrapper
